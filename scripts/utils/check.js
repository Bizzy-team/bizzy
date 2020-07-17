require("dotenv").config();
const ora = require("ora");
const chalk = require("chalk");
const { isEqual } = require("lodash");

const collections = require("../data/collections.json");
const models = require("../indexModel");

/**
 * Check if collections and schemas are up to date with.
 * @param {Object} mongoClient - The mongoClient instance return by the connect fn.
 * @param {Object} oraOps - The ora object options.
 */
module.exports = async function CheckCollectionsAndSchemas(mongoClient, oraOps) {
  oraOps.text = chalk`{gray Start checking collections and schemas}`;
  const spinner = ora(oraOps).start();

  // 1. Fetch collections in Bdd.
  const collectionsInBdd = await mongoClient
    .db(process.env.DB_TEST_NAME)
    .listCollections()
    .toArray();
  const bddCollectionsName = collectionsInBdd.map(c => c.name);

  //2. Check if some collections in bdd are missing or does not exist anymore.
  const collectionsMissing = collections.filter(
    c => !bddCollectionsName.includes(c.name)
  );

  if (collectionsMissing.length === 0) {
    //3. Checking if schemas are up to date.
    spinner.text = chalk`{gray All collections are good, checking now if schemas are up to date.}`;
    const Schemas = collectionsInBdd.filter(
      col => !isEqual(models[col.name], col.options)
    );

    if (Schemas.length !== 0) {
      spinner.warn(
        chalk`{yellow Oupss, some schemas are not up to date, we're fixing that..}`
      );

      const collectionsUpdate = Schemas.map(async function(c) {
        return mongoClient.db(process.env.DB_TEST_NAME).command({
          collMod: c.name,
          ...models[c.name]
        });
      });

      const SchemasName = Schemas.map(l => l.name);
      await Promise.all(collectionsUpdate);

      console.log(chalk`
        {cyan Fixed ${collectionsUpdate.length} Schemas.}

        {gray collections name}
        ${SchemasName.join(", ")}
        `);
    }

    spinner.succeed(chalk`{green Collections and schemas are up to date :)}`);
    return;
  }

  //Collections are missing.
  spinner.text = chalk`{gray Some collections are missing we're fixing that.}`;
  const collectionsCreated = collectionsMissing.map(async function(c) {
    mongoClient.db(process.env.DB_TEST_NAME).createCollection(c.name, models[c.name]);

    if (c.indexOn) {
      await mongoClient.db(process.env.DB_TEST_NAME).createIndex(
        c.name,
        c.indexOn,
        c.TTL
          ? {
              expireAfterSeconds: 0
            }
          : {}
      );
    }

    return c.name;
  });

  const l = await Promise.all(collectionsCreated);
  spinner.succeed(`${collectionsMissing.length} collections created :)`);
  console.log(chalk`
    {gray name}
    ${l}
    `);
  return;
};

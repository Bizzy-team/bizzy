/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require("dotenv").config();
const inquirer = require("inquirer");
const ora = require("ora");
const chalk = require("chalk");
const { isEqual } = require("lodash");
const { MongoClient } = require("mongodb");

const collections = require("./data/collections.json");
const models = require("./indexModel");
const insertFakeData = require("./utils/InsertFakeData");

const mongoOps = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

inquirer
  .prompt([
    {
      type: "list",
      name: "mode",
      message: chalk`{cyan In which database you want execute commands ?}`,
      choices: ["dev", "prod"]
    }
  ])
  .then(function(answer) {
    const spinner = ora({
      text: chalk`{gray Start checking collections in ${
        answer.mode === "dev" ? "dev_bizzy" : "bizzy"
      } database}`,
      spinner: {
        interval: 1000,
        frames: ["🙂", "🙃"]
      }
    }).start();

    if (answer.mode === "prod") {
      // TODO: Must authenticate user to be able to execute command into prod database.
    }

    MongoClient.connect(process.env.DB_URL, mongoOps).then(async function(client) {
      let dbName;

      if (answer.mode === "dev") {
        dbName = process.env.DB_TEST_NAME;
      } else {
        dbName = process.env.DB_PROD_NAME;
      }

      // Fetch collections list in bdd.
      const collectionsInBdd = await client
        .db(dbName)
        .listCollections()
        .toArray();
      const extractCollectionName = collectionsInBdd.map(c => c.name);
      const collectionsMissing = collections.filter(
        c => !extractCollectionName.includes(c.name)
      );

      // Collections are up to date no need to add, checking now if schema corresponding.
      if (collectionsMissing.length === 0) {
        spinner.text = chalk`{gray All collections are good, checking now if schemas are up to date.}`;
        const Schemas = collectionsInBdd.filter(
          col => !isEqual(models[col.name], col.options)
        );

        if (Schemas.length !== 0) {
          spinner.warn(
            chalk`{yellow Oupss, some schemas are not up to date, we're fixing that..}`
          );

          const collectionsUpdate = Schemas.map(async function(c) {
            return client.db(dbName).command({
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

        const answer3 = await inquirer.prompt([
          {
            type: "confirm",
            name: "injectData",
            message: chalk`{cyan Would you like to inject some fake data for testing ?}`
          },
          {
            type: "checkbox",
            name: "colToAddData",
            message: chalk`{gray In which collections you'll like to add fake data ?}`,
            choices() {
              return collections.map(c => c.name);
            },
            when(answering) {
              if (!answering.injectData) return false;
              return true;
            }
          }
        ]);

        if (!answer3.injectData) {
          console.log(
            chalk`{green Your sandbox database is ready to be test, have fun :)}`
          );
          process.exit(0);
        }

        return insertFakeData(answer3.colToAddData, client);
      }

      spinner.text = chalk`{gray Some collections are missing we're fixing that.}`;
      const collectionsCreated = collectionsMissing.map(async function(c) {
        await client.db(dbName).createCollection(c.name, models[c.name]);

        if (c.indexOn) {
          await client.db(dbName).createIndex(c.name, c.indexOn, c.TTL ? {
            expireAfterSeconds: 0
          }: {});
        }

        return c.name;
      });

      const l = await Promise.all(collectionsCreated);
      spinner.succeed(`${collectionsMissing.length} collections created :)`);
      console.log(chalk`
      {gray name}
      ${l}
      `);

      // When collections are created if mode is dev asking user is he wants some fake data ?
      if (answer.mode === "dev") {
        const answer2 = await inquirer.prompt([
          {
            type: "confirm",
            name: "injectData",
            message: chalk`{cyan Would you like to inject some fake data for testing ?}`
          },
          {
            type: "checkbox",
            name: "colToAddData",
            message: chalk`{gray In which collections you'll like to add fake data ?}`,
            choices() {
              return collections.map(c => c.name);
            },
            when(shouldInsert) {
              if (!shouldInsert.injectData) return false;
              return true;
            }
          }
        ]);

        if (!answer2.injectData) {
          console.log(
            chalk`{green Your sandbox database is ready to be test, have fun :)}`
          );
          process.exit(0);
        }

        return insertFakeData(answer2.colToAddData, client);
      }

      console.log(chalk`{green Collections and schemas are up to date :)}`);
      return process.exit(0);
    });
  })
  .catch(error => {
    console.error(chalk`
  {bgRed ERROR}
  
  {cyan ${error.message}}`);

    process.exit(1);
  });

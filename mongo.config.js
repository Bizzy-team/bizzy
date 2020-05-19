/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
require("dotenv").config();
const { MongoClient } = require("mongodb");
const chalk = require("chalk");
const ora = require("ora");

const collectionsToCreate = ["users", "passwordforget", "sessions", "test"];

MongoClient.connect(
  process.env.NODE_ENV === "development" ? process.env.DB_URL_TEST : process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(async function(client) {
  // Start ora process
  const spinner = ora({
    text: chalk`{gray Starting crazy things with mongodb}`,
    spinner: {
      interval: 1000,
      frames: ["🙂", "🙃"]
    }
  }).start();

  // Fetch all collections in bdd
  const listCollections = await client
    .db()
    .listCollections()
    .toArray();

  const collectionsInBdd = [];
  listCollections.forEach(c => collectionsInBdd.push(c.name));

  if (collectionsInBdd.includes("test")) {
    await client.db().dropCollection("test");
  }

  if (listCollections.length !== collectionsToCreate.length) {
    spinner.text = chalk`{yellow Some collections are missing we're fixing that}`;

    const newCollectionList = collectionsToCreate.map(async function(col) {
      if (!collectionsInBdd.includes(col)) {
        return client.db().createCollection(col);
      }

      return undefined;
    });

    Promise.all(newCollectionList).then(newCol => {
      const newColParsed = newCol.filter(i => i !== undefined && i);

      spinner.clear();

      console.log(chalk`
      ${newColParsed.length} collections created

      {gray name}
      ${newColParsed[0].collectionName}

      {cyan Your databse sandbox is ready you can now play with it}
      `);

      client.close().then(process.exit());
    });
  } else {
    spinner.succeed(
      chalk`{green dev_bizzy database looking good, nothing to do here bye.}`
    );
    await client.close();
    process.exit(0);
  }
});

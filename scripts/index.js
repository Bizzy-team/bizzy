/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require("dotenv").config();
const inquirer = require("inquirer");
const chalk = require("chalk");
const { MongoClient } = require("mongodb");

const deleteData = require("./utils/delete");
const CheckCollectionsAndSchemas = require("./utils/check");
const collections = require("./data/collections.json");
const injectFakeData = require("./utils/InsertFakeData");

(async function () {
  const oraOps = {
    spinner: {
      interval: 1000,
      frames: ["🙂", "🙃"]
    }
  };

  const mongoOps = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  
  const answer = await inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: chalk`{cyan What do you want a do ?}`,
        choices: [
          {
            name: `Check collections and schemas.`,
            value: "check"
          },
          {
            name: `Delete data - ${new inquirer.Separator("Only affect the development database.")}`,
            value: "delete"
          },
          {
            name: `Deploy environnment in production - ${new inquirer.Separator("An access key is needed.")}`,
            value: "prod"
          }
        ]
      }
    ]);

  if (answer.action !== "prod") {
    const client = await MongoClient.connect(process.env.DB_URL, mongoOps);

    if (answer.action === "delete") {
      await deleteData(client, oraOps);
    }

    if (answer.action === "check") {
      await CheckCollectionsAndSchemas(client, oraOps);
    }

    const r = await inquirer.prompt([
      {
        type: "confirm",
        name: "injectData",
        message: chalk`{cyan Would you like to inject some fake data ?}`
      },
      {
        type: "checkbox",
        name: "collections",
        message: chalk`{gray In which collections you'll like to add fake data ?}`,
        choices() {
          return collections.map(l => l.name)
        },
        when(shouldInsert) {
          if (!shouldInsert.injectData)
            return false;
          return true;
        }
      },
      {
        type: "number",
        name: "entries",
        message: chalk`{gray How many data would you like to insert ?}, ${new inquirer.Separator("Maximum entries is 10")}`,
        validate(number) {
          if (number <= 0) return false;
          else if (number > 10) return false;
          return true;
        },
        when(shouldInsert) {
          if (!shouldInsert.injectData)
            return false;
          return true;
        }
      }
    ]);

    if (!r.injectData) {
      await client.close();
      console.log(
        chalk`{green Your sandbox database is ready to be test, have fun :)}`
      );
      process.exit(0);
    }
    
    if (r.collections.includes("access")) {
      const accessIndex = r.collections.indexOf("access");

      r.collections.splice(accessIndex, 1);
    };

    return injectFakeData(r.collections, client, r.entries);
  }
  
  //TODO: Create the prod process.
  process.exit(0);
})()
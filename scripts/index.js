/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require("dotenv").config();
const inquirer = require("inquirer");
const chalk = require("chalk");
const { MongoClient } = require("mongodb");

const deleteData = require("./utils/delete");
const CheckCollectionsAndSchemas = require("./utils/check");
const Ls = require("./utils/ls");
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
            name: "List collections datas.",
            value: "ls"
          },
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
      },
      {
        type: "checkbox",
        name: "col",
        message: chalk`{cyan Which collections you'll like to see.}`,
        choices () {
          return collections.filter(c => c.name !== "access");
        },
        when (a) {
          if (a.action === "ls") {
            return true
          }

          return false;
        }
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

    if (answer.action === "ls") {
      await Ls(client, oraOps, answer.col);
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
          return collections.filter(l => l.name !== "access")
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
    
    return injectFakeData(r.collections, client, r.entries);
  }
  
  //TODO: Create the prod process.
  process.exit(0);
})()
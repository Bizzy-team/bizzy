require("dotenv").config();
const ora = require("ora");
const chalk = require("chalk");
const inquirer = require("inquirer");

/**
 * Check if collections already have data and delete some of evrything.
 * @param {Object} mongoClient - The mongo client instance return by the connect fn.
 * @param {Object} oraOps - The ora object options.
 */
module.exports = async function deleteData (mongoClient, oraOps) {
    oraOps.text = chalk`{gray Start checking collections with data.}`;
    const spinner = ora(oraOps).start();

    const collectionsInBdd = await mongoClient
        .db(process.env.DB_TEST_NAME)
        .listCollections()
        .toArray();
    const bddCollectionsName = collectionsInBdd.map(c => c.name !== "access" && c.name);
    const p = bddCollectionsName.map(async function (i) {
        if (typeof i === "string") {
            if (await mongoClient.db(process.env.DB_TEST_NAME).collection(i).estimatedDocumentCount() > 0) {
                return i
            }
        }
    });

    const colNotFilter = await Promise.all(p);
    const colWithData = colNotFilter.filter(l => typeof l === "string");

    if (colWithData.length !== 0) {
        spinner.stop();
        const answer = await inquirer.prompt([
            {
                type: "checkbox",
                name: "collections",
                message: chalk`{cyan ${colWithData.length} collections have data in which one you'll like to delete data ?}`,
                choices () {
                    return colWithData
                }
            }
        ]);

        console.log(chalk`{gray Start deleting data in ${answer.collections.join(", ")} collections}`);
        const m = answer.collections.map(async function (col) {
            await mongoClient.db(process.env.DB_TEST_NAME).collection(col).deleteMany({});
        });

        await Promise.all(m);
        console.log(chalk`{green Data deleted :)}`)
        return;
    }

    spinner.succeed(chalk`{green All your collections are empty :)}`);
    return;
}
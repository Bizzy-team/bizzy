require("dotenv").config();
const ora = require("ora");
const chalk = require("chalk");
const Chance = require("chance");

const models = require("../indexModel");

/**
 * Insert fake data in collections.
 * @param {Array} col - An array of collections where data should be added.
 * @param {Object} mclient - MongoClient response to communicate with the API.
 */
module.exports = function (col, mclient) {
    if (!Array.isArray(col)) {
        console.error(chalk`{bgRed Error} {red col parameter must be an Array}`);
        process.exit(0);
    }

    if (!mclient) {
        console.error(chalk`{bgRed ERROR} {red mclient parameter must be entered.}`)
    }

    const spinner = ora({
        text: chalk`{gray Start inserting fake data.}`,
        spinner: {
            interval: 1000,
            frames: ["🙂", "🙃"]
        }
    }).start();
    const chance = new Chance();

    const fakeData = col.map(async function (c) {
        const data = {};
        const modelToUse = models[c];
        //TODO: Loop on modelToUse.properties object to check data and add the good value.
    })
}
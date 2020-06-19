require("dotenv").config();
const chalk = require("chalk");
const ora = require("ora");

/**
 * 
 * @param {*} mongoClient - The mongoClient instance return by the connect fn.
 * @param {*} oraOps - The ora object options.
 * @param {*} collections -
 */
module.exports = async function Ls (mongoClient, oraOps, collections) {
    oraOps.text = chalk`{gray Start finding collections with data.}`;
    const spinner = ora(oraOps).start();

    const d = collections.map(async function (c) {
        const colDocuments = await mongoClient.db(process.env.DB_TEST_NAME).collection(c).estimatedDocumentCount();

        if (colDocuments > 0) {
            return c;
        }
    });

    const l = await Promise.all(d);
    const colWithData = l.filter(p => p !== undefined);

    if (colWithData.length === 0) {
        spinner.succeed(chalk`{green No data to display in this collections.}`);
        return;
    }
};
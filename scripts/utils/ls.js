require("dotenv").config();
const chalk = require("chalk");
const ora = require("ora");
const {table} = require("table");

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

    const m = colWithData.map(async function (a) {
        const i = await mongoClient.db(process.env.DB_TEST_NAME).collection(a).find({}).toArray();

        return {
            data: i,
            col: a
        }
    });

    const v = await Promise.all(m);
    spinner.succeed(chalk`{gray Find ${m.length} collection${v.length !== 0 && 's'} with data.}`);

    v.forEach(function (d) {
        console.log(chalk`{cyan ${d.col} collection.}`);
        let colTitle = Object.keys(d.data[0]);

        const dataToLog = d.data.map(function (data) {
            return Object.values(data)
        });

        dataToLog.unshift(colTitle);

        console.log(
            table(
                dataToLog,
                {
                    getBorderCharacters: "honeywell",
                    columnDefault: {
                        width: 14,
                        wrapWord: true
                    }
                }
            )
        );
        console.log(chalk`{gray ------------------------}`);
    });
};
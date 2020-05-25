require("dotenv").config();
const ora = require("ora");
const chalk = require("chalk");
const Chance = require("chance");
const {ObjectID} = require("mongodb");

const models = require("../indexModel");

/**
 * Insert fake data in collections.
 * @param {Array} col - An array of collections where data should be added.
 * @param {Object} mclient - MongoClient response to communicate with the API.
 * @param {Number} entries - The number of documents you want insert in collections, by default = to 5.
 */
module.exports = function (col, mclient, entries = 5) {
    if (!Array.isArray(col)) {
        console.error(chalk`{bgRed Error} {red col parameter must be an Array}`);
        process.exit(0);
    }

    if (!mclient) {
        console.error(chalk`{bgRed ERROR} {red mclient parameter must be entered.}`)
        process.exit(0);
    }

    if (entries > 10) {
        console.error(chalk`{bgRed ERROR} {red You can't insert more than 10 entries.}`);
        process.exit(0);
    }

    const spinner = ora({
        text: chalk`{gray Start inserting fake data.}`,
        spinner: {
            interval: 1000,
            frames: ["🙂", "🙃"]
        }
    }).start();
    const chance = new Chance();

    const fakeData = col.map(function (c) {
        const data = {
            collection: c,
            fakeData: []
        };

        for (let index = 0; index < entries; index++) {
            const obj = {};
            models[c].validator["$jsonSchema"].required.forEach(function (props) {
                if (props === "userId") {
                    obj[props] = new ObjectID().generate().toString("hex");
                }
        
                if (props === "key") {
                    obj[props] = chance.string({length: 15});
                }

                if (props === "mail") {
                    obj[props] = chance.email()
                }

                if (props === "password") {
                    obj[props] = chance.hash({length: 15})
                }

                if (props === "username") {
                    obj[props] = chance.string({length: 5})
                }
        
                if (props === "expireAt") {
                    if (c === "sessions") {
                        obj[props] = new Date();
                    }
                }
            });

            data.fakeData.push(obj);
        }

        return data
    })

    const newData = fakeData.map(async function (doc) {
        return await mclient.db(process.env.DB_TEST_NAME).collection(doc.collection).insertMany(doc.fakeData);
    })

    Promise.all(newData).then(function () {
        spinner.succeed(chalk`{green Fake data inserted :) well done.}`);
        mclient.close().then(process.exit(0));
    })
}
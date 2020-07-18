require("dotenv").config();
const ora = require("ora");
const chalk = require("chalk");
const Chance = require("chance");
const {ObjectID, ObjectId} = require("mongodb");
const {hashSync} = require("bcrypt");
const {table} = require("table");

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
        process.exit(1);
    }

    if (!mclient) {
        console.error(chalk`{bgRed ERROR} {red mclient parameter must be entered.}`)
        process.exit(1);
    }

    if (entries > 10) {
        console.error(chalk`{bgRed ERROR} {red You can't insert more than 10 entries.}`);
        process.exit(1);
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
                switch (props) {
                    case "name":
                        obj[props] = chance.name();
                        break;
                    case "surname":
                        obj[props] = chance.last();
                        break;
                    case "cards":
                        const cardsNumber = Math.floor(Math.random() * 10);
                        const cardsArray = [];

                        for (let index = 0; index < cardsNumber; index++) {
                            cardsArray.push(new ObjectID().generate().toString("hex"))
                        }
                        obj[props] = [...cardsArray];
                        break;
                    case "city":
                        obj[props] = chance.city();
                        break;
                    case "job":
                        obj[props] = chance.profession({rank: true});
                        break;
                    case "description":
                        obj[props] = chance.paragraph({sentences: 1});
                        break;
                    case "userId":
                        obj[props] = new ObjectID().generate().toString("hex");
                        break;
                    case "key":
                        obj[props] = chance.string({length: 15});
                        break;
                    case "mail":
                        obj[props] = chance.email()
                        break;
                    case "password":
                    case "forgotPassword":
                        const pswd = chance.string({length: 10, numeric: true, symbols: true});
        
                        obj[props] = hashSync(pswd, 10);
                        obj["pswd_not_hashed"] = pswd;
                        break;
                    case "username":
                        obj[props] = chance.string({length: 5, symbols: false});
                        break;
                    case "expireAt":
                        let mn = Math.floor(Math.random() * (10 - 5 + 1) + 5)
                        obj[props] = new Date(Date.now() + 60 * mn * 1000);
                        break;
                    default:
                        break;
                }
            });

            data.fakeData.push(obj);
        }

        return data
    })

    const newData = fakeData.map(async function (doc) {
        const i = await mclient.db(process.env.DB_TEST_NAME).collection(doc.collection).insertMany(doc.fakeData);

        return {
            res: i,
            col: doc.collection
        }
    })

    Promise.all(newData).then(function (v) {
        spinner.succeed(chalk`{green Fake data inserted in ${v.length} collection${v.length !== 0 && 's'}:) well done.}`);

        v.forEach(function (entry) {
            console.log(chalk`{cyan Data inserted in ${entry.col} collection.}`);
            let colTitle = Object.keys(entry.res.ops[0]);

            const dataToLog = entry.res.ops.map((l) => {
                const t = Object.values(l);
                return t;
            });
            dataToLog.unshift(colTitle);

            console.log(table(dataToLog, {
                getBorderCharacters: "honeywell",
                columnDefault: {
                    width: 14,
                    wrapWord: true
                }
            }));
            console.log(chalk`{gray ----------------------}`)
        });

        mclient.close().then(process.exit(0));
    })
}
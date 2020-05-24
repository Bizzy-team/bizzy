process.env.NODE_ENV === "development" && require("dotenv").config(); // eslint-disable-line global-require
const { MongoClient } = require("mongodb");

let db;

module.exports = async function(devMode) {
  if (db) {
    return db;
  }

  // eslint-disable-next-line no-useless-catch
  try {
    db = await MongoClient.connect(devMode ? process.env.DB_URL_TEST : process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return db;
  } catch (error) {
    throw error;
  }
};

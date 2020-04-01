/* eslint-disable global-require */
process.env.NODE_ENV === "development" && require("dotenv").config();
const { MongoClient } = require("mongodb");

module.exports = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

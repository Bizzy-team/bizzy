const { resolve } = require("path");
require("dotenv").config({ path: resolve(process.cwd(), ".env.build") });
const { MongoClient } = require("mongodb");

module.exports = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

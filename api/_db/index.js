process.env.NODE_ENV === "development" && require("dotenv").config(); // eslint-disable-line global-require
const { MongoClient } = require("mongodb");

module.exports = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

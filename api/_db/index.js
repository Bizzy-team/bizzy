const { MongoClient } = require("mongodb");

let client = null;

module.exports = async function(devMode) {
  if (client) {
    return {
      client,
      bdd: client.db(devMode ? process.env.DB_TEST_NAME : process.env.DB_PROD_NAME),
      dbName: devMode ? process.env.DB_TEST_NAME : process.env.DB_PROD_NAME
    };
  }

  // eslint-disable-next-line no-useless-catch
  try {
    client = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return {
      client,
      bdd: client.db(devMode ? process.env.DB_TEST_NAME : process.env.DB_PROD_NAME),
      dbName: devMode ? process.env.DB_TEST_NAME : process.env.DB_PROD_NAME
    };
  } catch (error) {
    throw error;
  }
};

const { hash } = require("bcrypt");
const createSessionAndLog = require("../../_utils/createSessionAndLog");

/**
 * Create a new user
 * @param {Object} body Data send by the request
 * @param {Object} mongoClient - An object with props to manipuate data on mangodb.
 */
module.exports = async (body, mongoClient) => {
  const bizzyUsers = mongoClient.bdd.collection("users");

  if ((await bizzyUsers.findOne({ mail: body.mail })) === null) {
    const userPassword = await hash(body.pswd, 10);
    const userToInsert = {
      nom: body.nom,
      prenom: body.prenom,
      city: "",
      job: "",
      description: "",
      cards: [],
      mail: body.mail,
      password: userPassword
    };

    if (mongoClient.dbName === process.env.DB_TEST_NAME) {
      userToInsert.pswd_not_hashed = body.pswd;
    }

    const newUser = await bizzyUsers.insertOne({ ...userToInsert });

    const d = await createSessionAndLog(mongoClient, newUser);
    return {
      code: 200,
      header: d.header,
      forClient: d.forClient
    };
  }

  return {
    code: 409
  };
};

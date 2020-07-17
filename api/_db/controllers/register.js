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

    const newUser = await bizzyUsers.insertOne({
      mail: body.mail,
      password: userPassword,
      username: body.username
    });

    return createSessionAndLog(mongoClient, newUser);
  }

  return {
    code: 409
  };
};

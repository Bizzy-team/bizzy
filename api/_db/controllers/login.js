const { compare } = require("bcrypt");
const createSessionAndLog = require("../../_utils/createSessionAndLog");

/**
 * Check if an user exist.
 * @param {Object} mongoClient - An object with props to manipuate data on mangodb.
 */
module.exports = async (data, mongoClient) => {
  const bizzyUsers = mongoClient.bdd.collection("users");
  const user = await bizzyUsers.findOne(
    { mail: data.mail },
    { projection: { _id: 1, password: 1, token: 1 } }
  );

  if (user === null) {
    return {
      code: 403
    };
  }

  if (await compare(data.pswd, user.password)) {
    return createSessionAndLog(mongoClient, user);
  }

  return {
    code: 401,
    content: "That email and password combination is incorrect."
  };
};

const { compare } = require("bcrypt");
const {ObjectID} = require("mongodb");
const createSessionAndLog = require("../../_utils/createSessionAndLog");

/**
 * Check if an user exist.
 * @param {Object} data - The data send in the body by the client.
 * @param {Object} req - Request object.
 */
module.exports = async (data, req) => {
  const bizzyUsers = req.mongoClient.bdd.collection("users");
  const user = await bizzyUsers.findOne(
    { mail: data.mail },
    { projection: {password: 1, ip: 1 } }
  );

  if (user === null) {
    return {
      code: 403
    };
  }

  if (await compare(data.pswd, user.password)) {
    if (!user.ip.includes(req.connection.remoteAddress)) {
      await bizzyUsers.findOneAndUpdate(
        {_id: new ObjectID(user._id)},
        {
          $push: {
            ip: req.connection.remoteAddress
          }
        }
      );
      //TODO: send mail to prevent user than a connexion to a specific ip adress has been detected.
    }

    return createSessionAndLog(req.mongoClient, user);
  }

  return {
    code: 401,
    content: "That email and password combination is incorrect."
  };
};

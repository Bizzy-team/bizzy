const { compare } = require("bcrypt");
const { ObjectID } = require("mongodb");
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
    { projection: { password: 1 } }
  );

  if (user === null) {
    return {
      code: 403
    };
  }

  if (await compare(data.pswd, user.password)) {
    const sessionCollection = req.mongoClient.bdd.collection("sessions");
    const userSession = await sessionCollection
      .find({ userId: new ObjectID(user._id) })
      .toArray();

    if (userSession.length > 1) {
      // TODO: Send mail to said than another session is creating.
    }

    const d = await createSessionAndLog(req.mongoClient, user);
    return {
      code: 200,
      header: d.header,
      forClient: d.forClient
    };
  }

  return {
    code: 401,
    content: "That email and password combination is incorrect."
  };
};

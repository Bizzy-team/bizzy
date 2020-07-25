const { hash } = require("bcrypt");
const createSessionAndLog = require("../../_utils/createSessionAndLog");

/**
 * Reset user password
 * @param {Object} req - The nodejs HttpIncoming message object.
 * @param {Object} res - The nodejs HttpResponse message object.
 * @param {String} tokenParams - If tokenParams is present update password without refresh user session.
 * @param {String} password - The password to hash and update.
 */
module.exports = async function resetPasswordController(req, res, tokenParams, password) {
  let userRequest;
  const pswdForgetCol = req.mongoClient.bdd.collection("passwordforget");
  const userCol = req.mongoClient.bdd.collection("users");
  const pswdHash = await hash(password, 10);
  const propsToUpdate = {
    password: pswdHash
  };

  if (req.mongoClient.dbName === process.env.DB_TEST_NAME) {
    propsToUpdate.pswd_not_hashed = password;
  }

  if (tokenParams) {
    userRequest = await pswdForgetCol.findOne(
      { forgotPassword: tokenParams },
      { projection: { _id: 1 } }
    );

    if (!userRequest) {
      return {
        code: 401
      };
    }

    await userCol.findOneAndUpdate(
      { _id: userRequest._id },
      { $set: { ...propsToUpdate } }
    );
    await pswdForgetCol.findOneAndDelete({ forgotPassword: tokenParams });

    return {
      code: 201
    };
  }

  await userCol.findOneAndUpdate(
    { _id: res.locals.session.userId },
    { $set: { ...propsToUpdate } }
  );
  await pswdForgetCol.findOneAndDelete({ forgotPassword: tokenParams });
  await createSessionAndLog(req.mongoClient, res.locals.session, true, false);

  return {
    code: 201
  };
};

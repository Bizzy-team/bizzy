const { compare } = require("bcrypt");
const mongo = require("../index");
/**
 * Check if an user exist.
 * @param {Object} data An object of parsed parameters.
 */
module.exports = async data => {
  const bizzyUsers = (await mongo.connect()).db("bizzy").collection("users");
  const user = await bizzyUsers.findOne({ mail: data.mail });

  if (user === null) {
    return Promise.resolve({
      code: 403,
      data: {
        error: true,
        message: "User unknown."
      }
    });
  }

  if (await compare(data.pswd, user.password)) {
    return Promise.resolve({
      code: 200,
      serverHeader: {
        "Set-Cookie": `sid=${user._id}; Expires=${new Date(Date.now() + 6.04e+8)}; ${
          process.env.NODE_ENV === "development" ? "" : "Secure"}; Path=/; HttpOnly`
      },
      data: {
        token: user.token
      }
    });
  }

  return Promise.resolve({
    code: 401,
    data: {
      error: true,
      message: "That email and password combination is incorrect."
    }
  });
};

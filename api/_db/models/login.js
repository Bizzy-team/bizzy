const { compare } = require("bcrypt");
const { promisify } = require("util");
const { randomFill } = require("crypto");
const mongo = require("../index");

const createToken = promisify(randomFill);

/**
 * Check if an user exist.
 * @param {Object} data An object of parsed parameters.
 */
module.exports = async data => {
  const bizzyUsers = (await mongo.connect()).db("bizzy").collection("users");
  const user = await bizzyUsers.findOne(
    { mail: data.mail },
    { projection: { _id: 1, password: 1 } }
  );

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
    const sessionId = await createToken(Buffer.alloc(8));

    await bizzyUsers.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          session: {
            id: sessionId.toString("hex"),
            lastRequest: new Date()
          }
        }
      }
    );

    return Promise.resolve({
      code: 200,
      serverHeader: {
        "Set-Cookie": `sid=${sessionId.toString("hex")}; Expires=${new Date(
          Date.now() + 6.04e8
        )}; ${process.env.NODE_ENV === "development" ? "" : "Secure"}; Path=/; HttpOnly`
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

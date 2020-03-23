const { randomFill } = require("crypto");
const { promisify } = require("util");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const mongo = require("./index");

const signJwtPromise = promisify(sign);
const createToken = promisify(randomFill);
/**
 * Create a new user
 * @param {Object} body Data send by the request
 */
module.exports = async body => {
  const bizzyUsers = (await mongo.connect()).db("bizzy").collection("users");

  if ((await bizzyUsers.findOne({ mail: body.mail, username: body.username })) === null) {
    const JWTToken = await createToken(Buffer.alloc(16));
    const userPassword = await hash(body.pswd, 10);
    const token = await signJwtPromise(
      `{
                "name": "${body.username}",
                "exp": 345600
            }`,
      JWTToken.toString("hex")
    );

    const newUser = await bizzyUsers.insertOne({
      mail: body.mail,
      password: userPassword,
      username: body.username,
      token,
      verifyJWTToken: JWTToken.toString("hex")
    });

    return Promise.resolve({
      code: 201,
      serverHeader: {
        "Set-Cookie": `sessionId=${newUser.ops[0]._id}; HttpOnly; Domain=${
          process.env.NODE_ENV === "development" ? "" : "bizzy.now.sh; Secure"
        };`
      },
      data: {
        token: newUser.ops[0].token
      }
    });
  }

  return Promise.resolve({
    code: 409,
    error: true,
    message: "User already exist."
  });
};
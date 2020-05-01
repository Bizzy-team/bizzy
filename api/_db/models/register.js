const { randomFill } = require("crypto");
const { promisify } = require("util");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const mongo = require("../index");

const signJwtPromise = promisify(sign);
const createToken = promisify(randomFill);
/**
 * Create a new user
 * @param {Object} body Data send by the request
 */
module.exports = async body => {
  const mongobdd = await mongo();
  const bizzyUsers = mongobdd.db("bizzy").collection("users");

  if ((await bizzyUsers.findOne({ mail: body.mail })) === null) {
    const JWTToken = await createToken(Buffer.alloc(16));
    const sessionId = await createToken(Buffer.alloc(8));
    const userPassword = await hash(body.pswd, 10);
    const token = await signJwtPromise(
      `{
                "name": "${body.username}",
                "exp": ${Math.floor(Date.now() + 60 * 8640 * 1000)}
            }`,
      JWTToken.toString("hex")
    );

    const newUser = await bizzyUsers.insertOne({
      mail: body.mail,
      password: userPassword,
      username: body.username,
      token,
      verifyJWTToken: JWTToken.toString("hex"),
      session: {
        id: sessionId.toString("hex"),
        lastRequest: new Date()
      }
    });

    await mongobdd.close();
    return {
      code: 201,
      serverHeader: {
        "Set-Cookie": `sid=${sessionId.toString("hex")}; Expires=${new Date(
          Date.now() + 6.04e8
        )}; Secure; Path=/; HttpOnly`
      },
      data: {
        token: newUser.ops[0].token
      }
    };
  }

  await mongobdd.close();
  return {
    code: 409
  };
};

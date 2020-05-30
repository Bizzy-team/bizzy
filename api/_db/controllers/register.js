const { randomFill } = require("crypto");
const { promisify } = require("util");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { ObjectID } = require("mongodb");
const mongo = require("../index");

const signJwtPromise = promisify(sign);
const createToken = promisify(randomFill);
/**
 * Create a new user
 * @param {Object} body Data send by the request
 * @param {(string|undefined[])} devMode If dev mode is development devMode will be a string with "dev" as value.
 */
module.exports = async (body, devMode) => {
  const mongobdd = await mongo(devMode);
  const bizzyUsers = mongobdd.bdd.collection("users");

  if ((await bizzyUsers.findOne({ mail: body.mail })) === null) {
    const sessionsCollection = mongobdd.bdd.collection("sessions");
    const JWTToken = await createToken(Buffer.alloc(16));
    const userPassword = await hash(body.pswd, 10);

    const newUser = await bizzyUsers.insertOne({
      mail: body.mail,
      password: userPassword,
      username: body.username
    });

    const newSession = await sessionsCollection.insertOne({
      userId: new ObjectID(newUser.insertedId),
      key: JWTToken.toString("hex"),
      expireAt: devMode
        ? new Date(Date.now() + 60 * 5 * 1000)
        : new Date(Date.now() + 60 * 300 * 1000)
    });

    await mongobdd.client.close();
    return {
      code: 201,
      serverHeader: {
        "Set-Cookie": `tokenRefresh=${await hash(
          JWTToken.toString("hex"),
          10
        )}; Expires=${new Date(Date.now() + 60 * 2880 * 1000)}; ${
          devMode ? "" : "Secure;"
        } Path=/; HttpOnly`
      },
      data: {
        token: await signJwtPromise(
          `{
        "name": "${newSession.insertedId}",
        "exp": ${Math.floor(Date.now() + 60 * 1440 * 1000)}
      }`,
          JWTToken.toString("hex")
        )
      }
    };
  }

  await mongobdd.client.close();
  return {
    code: 409
  };
};

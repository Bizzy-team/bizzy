const { compare } = require("bcrypt");
const { promisify } = require("util");
const { randomFill } = require("crypto");
const { ObjectID } = require("mongodb");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const mongo = require("../index");

const createToken = promisify(randomFill);
const signJwtPromise = promisify(sign);

/**
 * Check if an user exist.
 * @param {Object} data An object of parsed parameters.
 */
module.exports = async (data, devMode) => {
  const mongobdd = await mongo(devMode);
  const bizzyUsers = mongobdd.bdd.collection("users");
  const user = await bizzyUsers.findOne(
    { mail: data.mail },
    { projection: { _id: 1, password: 1, token: 1 } }
  );

  if (user === null) {
    await mongobdd.client.close();
    return {
      code: 403
    };
  }

  if (await compare(data.pswd, user.password)) {
    const sessionsCollection = mongobdd.bdd.collection("sessions");
    const key = await createToken(Buffer.alloc(16));

    const newSession = await sessionsCollection.insertOne({
      userId: new ObjectID(user._id),
      key: key.toString("hex"),
      expireAt: devMode
        ? new Date(Date.now() + 60 * 5 * 1000)
        : new Date(Date.now() + 60 * 300 * 1000)
    });

    await mongobdd.client.close();
    return {
      code: 200,
      serverHeader: {
        "Set-Cookie": `tokenRefresh=${await hash(
          key.toString("hex"),
          10
        )}; Expires=${new Date(Date.now() + 60 * 2880 * 1000)}; ${
          devMode ? "" : "Secure;"
        } Path=/; HttpOnly`
      },
      data: {
        token: await signJwtPromise(
          `{
          "iss": ${newSession.insertedId}
          "exp": ${Math.floor(Date.now() + 60 * 1440 * 1000)}
        }`,
          key.toString("hex")
        )
      }
    };
  }

  await mongobdd.client.close();
  return {
    code: 401,
    content: "That email and password combination is incorrect."
  };
};

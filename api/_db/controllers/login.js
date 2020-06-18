const { compare } = require("bcrypt");
const { promisify } = require("util");
const { randomFill } = require("crypto");
const { ObjectID } = require("mongodb");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { serialize } = require("cookie");

const createToken = promisify(randomFill);
const signJwtPromise = promisify(sign);

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
    const sessionsCollection = mongoClient.bdd.collection("sessions");
    const key = await createToken(Buffer.alloc(16));

    const newSession = await sessionsCollection.insertOne({
      userId: new ObjectID(user._id),
      key: key.toString("hex"),
      expireAt:
        mongoClient.dbName === process.env.DB_TEST_NAME
          ? new Date(Date.now() + 60 * 10 * 1000)
          : new Date(Date.now() + 60 * 300 * 1000)
    });

    const tokenRefresh = await hash(key.toString("hex"), 10);
    return {
      code: 200,
      serverHeader: {
        "Set-Cookie": serialize("token", `"${tokenRefresh}"`, {
          httpOnly: true,
          maxAge: 3600,
          path: "/"
        })
      },
      data: {
        token: await signJwtPromise(
          `{
            "iss": "${newSession.insertedId}",
            "exp": ${
              mongoClient.dbName === process.env.DB_TEST_NAME
                ? Math.floor(Date.now() + 60 * 5 * 1000)
                : Math.floor(Date.now() + 60 * 1440 * 1000)
            }}`,
          key.toString("hex")
        )
      }
    };
  }

  return {
    code: 401,
    content: "That email and password combination is incorrect."
  };
};

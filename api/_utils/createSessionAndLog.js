const { promisify } = require("util");
const { randomFill } = require("crypto");
const { ObjectID } = require("mongodb");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { serialize } = require("cookie");

const createKey = promisify(randomFill);
const jwtPromisify = promisify(sign);

/**
 * Create an session user and return data.
 * @param {Object} mClient - The mongo client instance.
 * @param {Object} userData - The user data to insert in session collection.
 * @param {Boolean} sessionUpdate - If this options is true we have to update a session and not creating one.s
 */
module.exports = async function createSessionAndLog(
  mClient,
  userData,
  sessionUpdate = false
) {
  const sessionCol = mClient.bdd.collection("sessions");
  const sessionKey = await createKey(Buffer.alloc(16));
  let newSession;

  if (sessionUpdate) {
    newSession = await sessionCol.findOneAndUpdate(
      {
        _id: new ObjectID(userData._id)
      },
      {
        $set: {
          expireAt:
            mClient.dbName === process.env.DB_TEST_NAME
              ? new Date(Date.now() + 60 + 60 * 10000)
              : new Date(Date.now() + 60 * 300 * 1000),
          key: sessionKey.toString("hex")
        }
      }
    );
  } else {
    newSession = await sessionCol.insertOne({
      userId: new ObjectID(userData._id),
      key: sessionKey.toString("hex"),
      expireAt:
        mClient.dbName === process.env.DB_TEST_NAME
          ? new Date(Date.now() + 60 + 60 * 10000)
          : new Date(Date.now() + 60 * 300 * 1000)
    });
  }

  const tokenRefresh = await hash(sessionKey.toString("hex"), 10);
  const cookieOps = {
    httpOnly: true,
    maxAge: 3600,
    path: "/"
  };

  if (mClient.dbName !== process.env.DB_TEST_NAME) {
    cookieOps.secure = true;
  }

  const token = await jwtPromisify(
    {
      iss: sessionUpdate ? newSession._id : newSession.insertedId
    },
    sessionKey.toString("hex"),
    {
      expiresIn: mClient.dbName === process.env.DB_TEST_NAME ? "2m" : "5h",
      noTimestamp: true
    }
  );

  return {
    code: 200,
    serverHeader: {
      "Set-Cookie": serialize("token", tokenRefresh, cookieOps)
    },
    data: {
      token
    }
  };
};

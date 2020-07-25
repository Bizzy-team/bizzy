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
 * @param {Object} userId - The user data to insert in session collection.
 * @param {Boolean} sessionUpdate - If this options is true we have to update a session and not creating one.
 * @param {Boolean} updateToken - If true the server should update and return a nex JWT.
 */
module.exports = async function createSessionAndLog(
  mClient,
  userId,
  sessionUpdate = false,
  updateToken = true
) {
  const sessionCol = mClient.bdd.collection("sessions");
  const sessionKey = await createKey(Buffer.alloc(16));
  const sessionExpireAt =
    mClient.dbName === process.env.DB_TEST_NAME
      ? new Date(Date.now() + 60 + 60 * 10000) // Dev mode session expire in 10mn.
      : new Date(Date.now() + 60 + 60 * 300000); // Prod mode session expire in 5h.
  let newSession;

  if (sessionUpdate) {
    const propsToUpdate = {
      expireAt: sessionExpireAt
    };

    if (updateToken) {
      propsToUpdate.key = sessionKey.toString("hex");
    }

    newSession = await sessionCol.findOneAndUpdate(
      {
        _id: new ObjectID(userId._id)
      },
      {
        $set: { ...propsToUpdate }
      }
    );
  } else {
    newSession = await sessionCol.insertOne({
      userId: new ObjectID(userId._id),
      key: sessionKey.toString("hex"),
      expireAt: sessionExpireAt
    });
  }

  if (updateToken) {
    const tokenRefresh = await hash(sessionKey.toString("hex"), 10);
    const cookieOps = {
      httpOnly: true,
      maxAge: 3600,
      path: "/"
    };
    const token = await jwtPromisify(
      {
        iss: sessionUpdate ? newSession.value._id : newSession.insertedId
      },
      sessionKey.toString("hex"),
      {
        expiresIn: mClient.dbName === process.env.DB_TEST_NAME ? "5m" : "1h",
        noTimestamp: true
      }
    );

    if (mClient.dbName !== process.env.DB_TEST_NAME) {
      cookieOps.secure = true;
    }

    return {
      header: {
        "Set-Cookie": serialize("token", tokenRefresh, cookieOps)
      },
      forClient: {
        // Will be added to the response.
        token
      },
      session: newSession.value // Only accessible in API
    };
  }

  return {
    session: newSession.value
  };
};

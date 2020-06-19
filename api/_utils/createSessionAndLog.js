const { promisify } = require("util");
const { randomFill } = require("crypto");
const { ObjectID } = require("mongodb");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {serialize} = require("cookie");

const createKey = promisify(randomFill);
const jwtPromisify = promisify(sign);

/**
 * Create an session user and return data.
 * @param {Object} mClient - The mongo client instance.
 * @param {Object} userData - The user data to insert in session collection.
 */
module.exports = async function createSessionAndLog(mClient, userData) {
    const sessionCol = mClient.bdd.collection("sessions");
    const sessionKey = await createKey(Buffer.alloc(16));

    const newSession = await sessionCol.insertOne({
        userId: new ObjectID(userData._id),
        key: sessionKey.toString("hex"),
        expireAt:
            mClient.dbName !== process.env.DB_TEST_NAME
                ? new Date(Date.now() + 60 * 10 * 1000)
                : new Date(Date.now() + 60 * 300 * 1000)
    });

    const tokenRefresh = await hash(sessionKey.toString("hex"), 10);
    const cookieOps = {
        httpOnly: true,
        maxAge: 3600,
        path: "/"
    }

    if (mClient.dbName !== process.env.DB_TEST_NAME) {
        cookieOps.secure = true;
    }

    const token = await jwtPromisify(`
    {
        "iss": "${newSession.insertedId}",
        "exp": ${
        mClient.dbName === process.env.DB_TEST_NAME
            ? Math.floor(Date.now() + 60 * 5 * 1000)
            : Math.floor(Date.now() + 60 * 1440 * 1000)
        }
    }`, sessionKey.toString("hex"));


    return {
        code: 200,
        serverHeader: {
            "Set-Cookie": serialize("token", tokenRefresh, cookieOps),
        },
        data: {
            token,
        }
    }
};
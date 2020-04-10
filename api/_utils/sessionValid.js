const { verify, sign } = require("jsonwebtoken");
const { randomFill } = require("crypto");
const { promisify } = require("util");
const mongo = require("../_db/index");

const createTokenKey = promisify(randomFill);
const JWTPromise = promisify(sign);

/**
 * Check if a session is valid or not.
 * @param {String} cookie - A string of cookie header.
 * @param {Object} [options] - An object options to modify the bahavior function.
 * @param {Object} [options.fields] - Object of user property from the bdd to return. must have this form for exemple you only want from the user the mail property: `{mail: 1}`, return by default the user id if returnBool is false and fields empty.
 * @param {Boolean} [options.checkToken = false] - Define if the JWT must be checked or not, default to true
 * @param {Boolean} [options.returnBool = false] - Define if the function must return an object ready to be send by the server or juste a boolean, default to false.
 * @param {String} [options.JWT = ""] - The JWT to check if `options.checkToken` is true.
 * @returns If session is valid return object with user info or just a boolean or return error.
 */

module.exports = async (
  cookie,
  options = { checkToken: true, returnBool: false, JWT: "" }
) => {
  if (!cookie || typeof cookie !== "string") {
    if (options && options.returnBool) return false;

    const error = new Error("Error with cookie parameter");
    return {
      code: 500,
      data: {
        error: true,
        message: error.message,
        file: error.stack
      }
    };
  }

  const cookieObject = Object.fromEntries([cookie.split("=")]);

  if (!cookieObject.sid || typeof cookieObject.sid !== "string") {
    if (options && options.returnBool) return false;

    const error = new Error("Cookie objet is not correct");
    return {
      code: 500,
      data: {
        error: true,
        message: error.message,
        file: error.stack
      }
    };
  }

  const mongobdd = await mongo.connect();
  const userCollection = await mongobdd.db("bizzy").collection("users");

  // Check if cookie send in the header are correct.
  const user = await userCollection.findOne(
    { "session.id": cookieObject.sid },
    {
      projection: { _id: 1, session: 1, verifyJWTToken: 1, mail: 1 }
    }
  );

  if (user === null) {
    await mongobdd.close();
    if (options && options.returnBool) return false;

    return {
      code: 401,
      serverHeader: {
        "WWW-Authenticate": "Bearer"
      },
      data: {
        error: true,
        message: "You don't have access"
      }
    };
  }

  // Check that session has not expired. If last request is later than 5 hours delete session.
  if (Math.round(Math.abs(new Date() - user.session.lastRequest) / 36e5) > 5) {
    await userCollection.findOneAndUpdate({ _id: user._id }, { $unset: { session: "" } });

    await mongobdd.close();
    if (options && options.returnBool) return false;

    return {
      code: 401,
      serverHeader: {
        "WWW-Authenticate": "Bearer"
      },
      data: {
        error: true,
        message: "You don't have access here"
      }
    };
  }

  // If options.checkToken add logic for checking if JWT is well associated to this session.
  if (options.checkToken) {
    return verify(options.JWT, user.verifyJWTToken, async function v(err) {
      if (err) {
        // Token is good but expiration date is over so juste reset the token.
        if (err.name === "TokenExpiredError") {
          const newJWTTKey = await createTokenKey(Buffer.alloc(16));
          const newJWT = await JWTPromise(
            `{data: ${user.mail}, exp: ${Math.floor(Date.now() + 60 * 8640 * 1000)}}`,
            newJWTTKey.toString("hex")
          );

          await userCollection.findOneAndUpdate(
            { _id: user._id },
            {
              $set: {
                token: newJWT,
                verifyJWTToken: newJWTTKey.toString("hex")
              }
            }
          );

          const dataToReturn = await userCollection.findOneAndUpdate(
            { _id: user._id },
            {
              $set: { "session.lastRequest": new Date() }
            },
            {
              projection: options && options.fields ? { ...options.fields } : { _id: 1 }
            }
          );

          if (options && options.returnBool) return false;
          return dataToReturn.value;
        }

        // Error token sent is not the same in bdd.
        return {
          code: 401,
          serverHeader: {
            "WWW-Authenticate": "Bearer"
          },
          data: {
            error: true,
            message: "You don't have access here"
          }
        };
      }

      // Token are the same, session is good, update lastRequest and return data.
      const dataToReturn = await userCollection.findOneAndUpdate(
        { _id: user._id },
        {
          $set: { "session.lastRequest": new Date() }
        },
        {
          projection: options && options.fields ? { ...options.fields } : { _id: 1 }
        }
      );

      if (options && options.returnBool) return false;
      return dataToReturn.value;
    });
  }

  // Either everything is good, we can now update the lastRequest property
  const dataToReturn = await userCollection.findOneAndUpdate(
    { _id: user._id },
    {
      $set: { "session.lastRequest": new Date() }
    },
    {
      projection: options && options.fields ? { ...options.fields } : { _id: 1 }
    }
  );

  if (options && options.returnBool) return false;
  return dataToReturn.value;
};

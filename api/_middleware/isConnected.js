const { decode, verify } = require("jsonwebtoken");
const { ObjectID } = require("mongodb");
const { parse } = require("cookie");
const { compare } = require("bcrypt");

const responseServer = require("../_utils/responseServer");
const createSessionAndLog = require("../_utils/createSessionAndLog");

/**
 * Check is an user is connected or not, by checking if token passed in header is correct either checking if had cookie refreshToken and if it is correct.
 */
module.exports = async function(req, res, next) {
  if (res.locals !== undefined && res.locals.tokenParams) {
    // Only used for /resetpassword route
    return next();
  }

  if (typeof req.headers.authorization !== "string" || !req.headers.authorization) {
    return responseServer(res, 400);
  }

  const [b, token] = req.headers.authorization.split(" ");
  if (b !== "Bearer" || !token || token.split(".").length !== 3) {
    return responseServer(res, 400);
  }

  const tokenValue = decode(token);

  if (tokenValue) {
    const tokenAsArray = Object.keys(tokenValue);

    if (tokenAsArray.length !== 2) {
      return responseServer(res, 401, {
        modifyResponse: {
          error: true,
          message: "Token has bad syntax"
        }
      });
    }

    if (tokenAsArray[0] !== "iss" || tokenAsArray[1] !== "exp") {
      return responseServer(res, 401, {
        modifyResponse: {
          error: true,
          message: "Token missing props"
        }
      });
    }

    const sessionsCollection = req.mongoClient.bdd.collection("sessions");
    const userSession = await sessionsCollection.findOne(
      { _id: new ObjectID(tokenValue.iss) },
      {
        projection: { key: 1 }
      }
    );

    if (!userSession) {
      return responseServer(res, 401, {
        modifyResponse: {
          error: true,
          message: "Session not existing."
        }
      });
    }

    return verify(token, userSession.key, async function(err) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          if (await compare(userSession.key, parse(req.headers.cookie).token)) {
            res.locals = await createSessionAndLog(req.mongoClient, userSession, true);
            return next();
          }

          return responseServer(res, 401, {
            modifyResponse: {
              error: true,
              message: "Cookie token is not associated to his session."
            }
          });
        }

        return responseServer(res, 401, {
          modifyResponse: {
            error: true,
            message: "Token is not associated to this session."
          }
        });
      }

      res.locals = await createSessionAndLog(req.mongoClient, userSession, true, false);
      return next();
    });
  }

  return responseServer(res, 401);
};

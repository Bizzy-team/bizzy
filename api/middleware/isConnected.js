const responseServer = require("../_utils/responseServer");
const { decode, verify } = require("jsonwebtoken");
const {ObjectID} = require("mongodb");

/**
 * Check is an user is connected or not, by checking if token passed in header is correct either checking if had cookie refreshToken and if it is correct.
 */
module.exports = async function(req, res, next) {
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
      return responseServer(res, 401);
    }

    if (tokenAsArray[0] !== "iss" || tokenAsArray[1] !== "exp") {
      return responseServer(res, 401);
    }

    const sessionsCollection = req.mongoClient.bdd.collection("sessions");
    const userSession = await sessionsCollection.findOne({ _id: new ObjectID(tokenValue.iss) }, {
      projection: {"key": 1}
    });

    if (!userSession) {
      return responseServer(res, 401);
    }

    return verify(token, userSession.key, function (err) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          //TODO: Check the cookies.
          console.log("TOKEN EXPIRED", req.header.cookie);
          return;
        }

        return responseServer(res, 401);
      };

      next();
    });
  }

  return responseServer(res, 401);
};

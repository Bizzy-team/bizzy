const responseServer = require("../_utils/responseServer");
const { decode } = require("jsonwebtoken");

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
  console.log(tokenValue);

  if (tokenValue) {
    const tokenAsArray = Object.keys(tokenValue.payload);

    if (tokenAsArray.length !== 2) {
      return responseServer(res, 401);
    }

    if (tokenAsArray[0] !== "iss" || tokenAsArray[1] !== "exp") {
      return responseServer(res, 401);
    }

    const sessionsCollection = req.mongoClient.bdd.collection("sessions");
    const userSession = await sessionsCollection.findOne({ _id: tokenValue.iss });

    if (!userSession) {
      if (ops.bool) return false;
      return {
        code: 401
      };
    }

    // try {
    //   const decoded = verify(token, userSession.key);
    //   decoded;
    // } catch (e) {
    //   e;
    // }

    return {
      code: 200
    };
  }
  if (ops.bool) return false;
  return {
    code: 401
  };
};

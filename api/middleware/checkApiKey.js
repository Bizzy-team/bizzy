const mongo = require("../_db/index");
const {decode, verify} = require("jsonwebtoken");
const responseServer = require("../_utils/responseServer");

/**
 * Middleware who check if client has access to the API.
 */
module.exports = async function checkApiKey(req, res, next) {
  if (!req.headers["x-api-key"]) {
    return responseServer(res, 401);
  }

  if (req.headers["x-api-key"].split(".").length !== 3) {
      return responseServer(res, 400);
  }

  const dataPayload = decode(req.headers["x-api-key"]);
  if (!dataPayload.hasOwnProperty("admin") && !dataPayload.hasOwnProperty("user")) {
      return responseServer(res, 401);
  }

  const mongoClient = await mongo(dataPayload.admin ? false : true);
  const k = await mongoClient.bdd.collection("access").findOne({user: dataPayload.user}, {
      projection: {key: 1},
      hint: {user: 1}
  });

  if (!k) {
      return responseServer(res, 401);
  }

  return verify(req.headers["x-api-key"], k.key, function (err) {
      if (err) return responseServer(res, 401);

      req.mongoClient = mongoClient;
      return next();
  });
};

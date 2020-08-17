const { parse } = require("url");
const responserServer = require("../_utils/responseServer");

/**
 * Check if user try to acess to reset his password while he's connected or not, if yes should continue with the next isConnected middleware, either check that 0 session exist for this specific user.
 */
module.exports = async function resetPswdMethod(req, res, next) {
  if (new URLSearchParams(parse(req.url).query).get("token")) {
    const sessionsCol = req.mongoClient.bdd.collection("sessions");

    const u = await sessionsCol
      .aggregate({
        $lookup: {
          from: "passwordforget",
          localField: "userId",
          foreignField: "_id"
        }
      })
      .toArray();

    if (u.length === 0) {
      res.locals = {};
      res.locals.tokenParams = new URLSearchParams(parse(req.url).query).get("token");
      return next();
    }
    return responserServer(res, 400);
  }

  return next();
};

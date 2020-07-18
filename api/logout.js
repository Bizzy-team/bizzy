const { chain } = require("@amaurymartiny/now-middleware");
const { ObjectID } = require("mongodb");

const checkApiKey = require("./_middleware/checkApiKey");
const isConnected = require("./_middleware/isConnected");
const responserServer = require("./_utils/responseServer");

async function Logout(req, res) {
  if (req.method !== "DELETE") {
    return responserServer(res, 405, {
      token: res.locals.forClient ? res.locals.forClient.token : undefined,
      content: "DELETE"
    });
  }

  const sessionsCol = req.mongoClient.bdd.collection("sessions");

  await sessionsCol.findOneAndDelete({ _id: new ObjectID(res.locals.session._id) });
  return responserServer(res, 204);
}

module.exports = chain(checkApiKey, isConnected)(Logout);

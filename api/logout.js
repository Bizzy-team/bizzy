const responserServer = require("./_utils/responseServer");
const sessionValid = require("./_utils/sessionValid");
const mongo = require("./_db/index");

module.exports = function Logout(req, res) {
  if (req.method !== "DELETE") {
    responserServer(res, 405, {
      content: "DELETE"
    });
  }

  return sessionValid(req.headers.cookie, {
    JWT: req.headers.authorization
  }).then(async userIsValid => {
    if (!userIsValid._id)
      responserServer(res, 401, {
        content: userIsValid.content ? userIsValid.content : undefined
      });

    const mongoBdd = await mongo.connect();
    const userCollection = mongoBdd.db("bizzy").collection("users");

    await userCollection.findOneAndUpdate(
      { _id: userIsValid._id },
      { $unset: { session: "" } }
    );
    await mongoBdd.close();

    responserServer(res, 204);
  });
};

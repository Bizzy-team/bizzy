const responserServer = require("./_utils/responseServer");
const sessionValid = require("./_utils/sessionValid");

module.exports = function Logout(req, res) {
  if (req.method !== "DELETE") {
    responserServer(res, 405, {
      content: "DELETE"
    });
  }

  if (!req.headers.cookie || !req.headers.authorization) {
    responserServer(res, 401, {
      content: "Missing cookie or Authorization header"
    });
  }

  return sessionValid(req.headers.cookie, {
    JWT: req.headers.authorization,
    checkToken: true
  }).then(async userIsValid => {
    if (!userIsValid._id)
      responserServer(res, 401, {
        content: userIsValid.content ? userIsValid.content : undefined
      });
    
      //TODO: fix mongo error Topology was closed
    // const mongoBdd = await mongo.connect();
    // const userCollection = mongoBdd.db("bizzy").collection("users");

    // await userCollection.findOneAndUpdate(
    //   { _id: userIsValid._id },
    //   { $unset: { session: "" } }
    // );
    // await mongoBdd.close();

    // responserServer(res, 204);
  });
};

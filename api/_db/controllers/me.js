const { ObjectID } = require("mongodb");

/**
 * Retrieve data on a specific user.
 * @param {*} req - The nodeJs HttpIncomingMessage object.
 * @param {*} res - The nodeJs HttpResponseMessage object.
 */
async function GET(req, res) {
  const usersCol = req.mongoClient.bdd.collection("users");

  const user = await usersCol.findOne({
    _id: new ObjectID(
      res.locals.session
        ? res.locals.session.userId
        : res.locals.dataHidden.session.userId
    )
  });

  if (res.locals.forClient) {
    const userKey = Object.keys(user);

    userKey.forEach(function(k) {
      res.locals.forClient[k] = user[k];
    });
  } else {
    res.locals.forClient = { ...user };
  }
}
// async function POST(req) {}

exports.GET = GET;
// exports.POST = POST;

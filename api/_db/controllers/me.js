const { ObjectID } = require("mongodb");
const {intersection} = require("lodash");

/**
 * Retrieve data on a specific user.
 * @param {Object} req - The nodeJs HttpIncomingMessage object.
 * @param {Object} res - The nodeJs HttpResponseMessage object.
 * @param {Array} params - An array of fields to return in the query.
 */
async function GET(req, res, params) {
  const userFields = ["name", "surname", "city", "job", "description", "mail", "cards"];
  let fieldsToReturn = {};

  userFields.forEach(function (l) {
    fieldsToReturn[l] = 1;
  });
  fieldsToReturn._id = 0;

  if (Array.isArray(params)) {
    if (intersection(params, userFields).length !== 0) {
      fieldsToReturn = {
        _id: 0
      };
      intersection(params, userFields).forEach(i => {
        fieldsToReturn[i] = 1
      })
    }
  }

  const usersCol = req.mongoClient.bdd.collection("users");

  const user = await usersCol.findOne({
    _id: new ObjectID(
      res.locals.session
        ? res.locals.session.userId
        : res.locals.dataHidden.session.userId
    )
  },
  {
    projection: {...fieldsToReturn}
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

async function POST() {
  const l = "h";
  return l;
}

exports.GET = GET;
exports.POST = POST;

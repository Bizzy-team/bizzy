const { ObjectID } = require("mongodb");
const { intersection } = require("lodash");

/**
 * Retrieve data on a specific user.
 * @param {Object} req - The nodeJs HttpIncomingMessage object.
 * @param {Object} res - The nodeJs HttpResponseMessage object.
 * @param {Array} params - An array of fields to return in the query.
 */
async function GET(req, res, params) {
  const userFields = ["name", "surname", "city", "job", "description", "mail", "cards"];
  let fieldsToReturn = {
    _id: 0
  };

  userFields.forEach(function(l) {
    fieldsToReturn[l] = 1;
  });

  if (Array.isArray(params)) {
    if (intersection(params, userFields).length !== 0) {
      fieldsToReturn = {
        _id: 0
      };
      intersection(params, userFields).forEach(i => {
        fieldsToReturn[i] = 1;
      });
    }
  }

  const usersCol = req.mongoClient.bdd.collection("users");

  const user = await usersCol.findOne(
    {
      _id: new ObjectID(res.locals.session.userId)
    },
    {
      projection: { ...fieldsToReturn }
    }
  );

  if (res.locals.forClient) {
    return {
      code: 200,
      header: res.locals.header ? { ...res.locals.header } : undefined,
      client: {
        ...res.locals.forClient,
        ...user
      }
    };
  }
  return {
    code: 200,
    client: { ...user }
  };
}

/**
 * Update data to a specific user
 * @param {Object} req - The nodeJs HttpIncomingMessage object.
 * @param {Object} res - The nodeJs HttpResponseMessage object.
 * @param {Array} httpBody - The Http body request.
 * @param {Aray} fieldsToReturn - The fields updated to return in the response.
 */
async function PUT(req, res, httpBody, fieldsToReturn) {
  const userCol = req.mongoClient.bdd.collection("users");
  const f = {
    _id: 0
  };

  fieldsToReturn.forEach(i => {
    f[i] = 1;
  });

  const userToUpdate = await userCol.findOneAndUpdate(
    {
      _id: new ObjectID(res.locals.session.userId)
    },
    {
      $set: { ...httpBody }
    },
    {
      returnOriginal: false,
      projection: { ...f }
    }
  );

  if (userToUpdate.ok) {
    const dataToReturn = {
      code: 201,
      client: {
        ...userToUpdate.value
      }
    };

    if (res.locals.forClient) {
      dataToReturn.header = res.locals.header;
      dataToReturn.client = {
        ...res.locals.forClient,
        ...userToUpdate.value
      };
    }

    return dataToReturn;
  }
}

exports.GET = GET;
exports.PUT = PUT;

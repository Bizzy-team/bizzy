const mongo = require("../index");

module.exports = async data => {
  const bizzyUsers = (await mongo.connect()).db("bizzy").collection("users");

  if ((await bizzyUsers.findOne({ mail: data.mail })) === null) {
    await mongo.close();
    return Promise.resolve({
      code: 403,
      data: {
        error: true,
        message: "This email is not register."
      }
    });
  }

  await mongo.close();
  return Promise.resolve({
    code: 200,
    data: {
      message: "Mail send"
    }
  });
};

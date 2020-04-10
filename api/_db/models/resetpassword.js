const { verify, sign } = require("jsonwebtoken");
const { promisify } = require("util");
const { randomFill } = require("crypto");
const { hash } = require("bcrypt");
const mongo = require("../index");

const createTokenKey = promisify(randomFill);
const signJwtPromise = promisify(sign);

export async function GET(params) {
  const mongobdd = await mongo.connect();
  const passwordForget = mongobdd.db("bizzy").collection("passwordforget");
  const user = await passwordForget.findOne(
    { forgotPassword: params.get("token") },
    { projection: { _id: 1 } }
  );

  if (user === null) {
    return {
      code: 401,
      data: {
        error: true,
        message: "Token parameter is not valid, try resend a forgot password request."
      }
    };
  }

  const userCollection = mongobdd.db("bizzy").collection("users");
  const tokenUser = await userCollection.findOne(
    { _id: user._id },
    { projection: { token: 1 } }
  );

  return {
    code: 200,
    data: {
      token: tokenUser.token
    }
  };
}

export async function PUT(data) {
  console.log(data);
  const mongobdd = await mongo.connect();
  const passwordForgetCollection = await mongobdd
    .db("bizzy")
    .collection("passwordforget");
  const userCollection = await mongobdd.db("bizzy").collection("users");
  const { newpswd, token, jwtToken, cookie } = data;
  let user;

  if (cookie) {
    // TODO: Check session
    // Return user data.
  } else {
    user = await passwordForgetCollection.findOne(
      { forgotPassword: token },
      { projection: { _id: 1 } }
    );

    if (user === null) {
      await mongobdd.close();
      return {
        code: 401,
        data: {
          error: true,
          message:
            "One parameter in the body is either expired or not correct please try to send a new forgot password request."
        }
      };
    }
  }

  const userData = await userCollection.findOne(
    { _id: user._id },
    {
      projection: { verifyJWTToken: 1, mail: 1 }
    }
  );

  return verify(jwtToken, userData.verifyJWTToken, async function(err, token) {
    const newPassword = await hash(newpswd, 10);

    if (err) {
      if (err.name === "TokenExpiredError") {
        const newJWTTokenKey = await createTokenKey(Buffer.alloc(16));
        const newToken = await signJwtPromise(
          `{
                    data: ${userData.mail},
                    exp: ${Math.floor(Date.now() + 60 * 8640 * 1000)}
                }`,
          newJWTTokenKey.toString("hex")
        );

        await userCollection.findOneAndUpdate(
          { _id: userData._id },
          {
            $set: {
              password: newPassword,
              token: newToken,
              verifyJWTToken: newJWTTokenKey.toString("hex")
            }
          }
        );
        await passwordForgetCollection.findOneAndDelete({ _id: userData._id });

        return {
          code: 200,
          data: {
            message: `Password update for ${userData.mail}.`
          }
        };
      }

      return {
        code: 401,
        data: {
          error: true,
          message: "You don't have access here"
        }
      };
    }

    await userCollection.findOneAndUpdate(
      { _id: userData._id },
      { $set: { password: newPassword } }
    );
    await passwordForgetCollection.findOneAndDelete({ _id: userData._id });

    return {
      code: 200,
      data: {
        message: `Password update for ${userData.mail}.`
      }
    };
  });
}
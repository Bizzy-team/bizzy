const nodemailer = require("nodemailer");
const { promisify } = require("util");
const { randomFill } = require("crypto");

const handleStreamMail = require("../../_utils/handleStream");

const createToken = promisify(randomFill);

module.exports = async (data, mongoClient) => {
  const bizzyUsers = mongoClient.bdd.collection("users");
  const user = await bizzyUsers.findOne({ mail: data.mail });

  if (user === null) {
    return {
      code: 403
    };
  }

  let transporter = {};

  if (mongoClient.dbName === process.env.DB_TEST_NAME) {
    transporter = {
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILMDP
      }
    };
  } else {
    transporter = {};
  }

  const mail = nodemailer.createTransport(transporter);

  return mail
    .verify()
    .catch(() => false)
    .then(async configisGood => {
      if (!configisGood) {
        return {
          code: 502
        };
      }

      const token = await createToken(Buffer.alloc(24));
      const url =
        mongoClient.dbName === process.env.DB_TEST_NAME
          ? `https://localhost:3000/reset_pswd_form?token=${token.toString("hex")}`
          : `https://bizzy.now.sh/reset_pswd_form?token=${token.toString("hex")}`;

      const templateMail = await handleStreamMail("forgot", url);

      if (templateMail.code) {
        return templateMail;
      }

      return mail
        .sendMail({
          from: "bizzy@gmail.com",
          to: data.mail,
          subject: "Vous avez perdu votre mot de passe bizzy ?",
          html: templateMail
        })
        .then(async function m(mailSend) {
          if (mailSend) {
            const passwordForget = await mongoClient.bdd.collection("passwordforget");
            await passwordForget.findOneAndUpdate(
              { _id: user._id },
              {
                $set: {
                  forgotPassword: token.toString("hex"),
                  expireAt:
                    process.env.NODE_ENV === "development"
                      ? new Date(Date.now() + 60 * 10 * 1000)
                      : new Date(Date.now() + 60 * 60 * 1000)
                }
              },
              { upsert: true }
            );

            return {
              code: 200,
              content: `Mail send to ${data.mail}`
            };
          }

          return {
            code: 502
          };
        });
    });
};

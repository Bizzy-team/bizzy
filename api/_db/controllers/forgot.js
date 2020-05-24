const nodemailer = require("nodemailer");
const { promisify } = require("util");
const { randomFill } = require("crypto");
const mongo = require("../index");

const createToken = promisify(randomFill);

module.exports = async (data, devMode) => {
  const mongobdd = await mongo(devMode);
  const bizzyUsers = mongobdd.db("bizzy").collection("users");
  const user = await bizzyUsers.findOne({ mail: data.mail });

  if (user === null) {
    await mongobdd.close();
    return {
      code: 403
    };
  }

  let transporter = {};

  if (devMode) {
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
        await mongobdd.close();
        return {
          code: 502
        };
      }

      const token = await createToken(Buffer.alloc(24));
      let url;

      if (devMode) {
        url = `https://localhost:3000/reset_pswd_form?token=${token.toString("hex")}`;
      } else {
        url = `https://bizzy.now.sh/reset_pswd_form?token=${token.toString("hex")}`;
      }

      return mail
        .sendMail({
          from: "bizzy@gmail.com",
          to: data.mail,
          subject: "Vous avez perdu votre mot de passe bizzy ?",
          // eslint-disable-next-line no-irregular-whitespace
          html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>Password Reset</title><meta name="viewport" content="width=device-width, initial-scale=1"><style type="text/css">/*** Google webfonts. Recommended to include the .woff version for cross-client compatibility.*/@media screen{@font-face{font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');}@font-face{font-family: 'Source Sans Pro';font-style: normal;font-weight: 700;src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');}}/*** Avoid browser level font resizing.* 1. Windows Mobile* 2. iOS / OSX*/body,table,td,a{-ms-text-size-adjust: 100%; /* 1 */-webkit-text-size-adjust: 100%; /* 2 */}/*** Remove extra space added to tables and cells in Outlook.*/table,td{mso-table-rspace: 0pt;mso-table-lspace: 0pt;}/*** Better fluid images in Internet Explorer.*/img{-ms-interpolation-mode: bicubic;}/*** Remove blue links for iOS devices.*/a[x-apple-data-detectors]{font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;color: inherit !important;text-decoration: none !important;}/*** Fix centering issues in Android 4.4.*/div[style*="margin: 16px 0;"]{margin: 0 !important;}body{width: 100% !important;height: 100% !important;padding: 0 !important;margin: 0 !important;}/*** Collapse table borders to avoid space between cells.*/table{border-collapse: collapse !important;}a{color: #1a82e2;}img{height: auto;line-height: 100%;text-decoration: none;border: 0;outline: none;}</style></head><body style="background-color: #e9ecef;"><div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"> A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.</div><table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 20px;"><tr><td align="center" bgcolor="#e9ecef"><!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"><![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" bgcolor="#ffffff" style="margin: 20px; padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;"> <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; text-align: center">Reset Your Password</h1> </td></tr></table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr>​ <tr> <td align="center" bgcolor="#e9ecef"><!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"><![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">​ <tr> <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"> <p style="margin: 0;">Tap the button below to reset your customer account password. If you didn't request a new password, you can safely delete this email.</p></td></tr>​ <tr> <td align="left" bgcolor="#ffffff"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="center" bgcolor="#ffffff" style="padding: 12px;"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="center" bgcolor="#5FBF73" style="border-radius: 6px;"> <a href="${url}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Reset My Password</a> </td></tr></table> </td></tr></table> </td></tr>​ </table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr>​ <tr> <td align="center" bgcolor="#e9ecef" style="padding: 24px;"><!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tr> <td align="center" valign="top" width="600"><![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">​ <tr> <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;"><small>Link available for one hour</small> <p style="margin: 0;">You received this email because we received a request because you forgot your password for your account. If you didn't request this action you can safely delete this email.</p></td></tr>​ </table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr>​ </table> ​</body></html>`
        })
        .then(async function m(mailSend) {
          if (mailSend) {
            const passwordForget = await mongobdd
              .db("bizzy")
              .collection("passwordforget");
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

            await mongobdd.close();
            return {
              code: 200,
              content: `Mail send to ${data.mail}`
            };
          }

          await mongobdd.close();
          return {
            code: 502
          };
        });
    });
};

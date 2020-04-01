const responseHeader = require("../_utils/responseHeader");
const parseBody = require("../_utils/parseBody");
const registerDb = require("../_db/models/register");

module.exports = function register(req, res) {
  if (req.method !== "POST") {
    responseHeader(res, {
      code: 401,
      serverHeader: {
        Allow: "POST"
      }
    });

    return res.end(
      JSON.stringify({
        error: true,
        message: "This route can only be acces with a POST method."
      })
    );
  }

  parseBody(req);

  return req.on("bodyParsed", httpBody => {
    if (httpBody.error) {
      responseHeader(res, {
        code: httpBody.code,
        ...httpBody.serverHeader
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: httpBody.message
        })
      );
    }

    const q = Object.keys(httpBody);

    if (q.length >= 4) {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "You can only have three parameters."
        })
      );
    }

    if (!q.includes("mail") || !q.includes("pswd") || !q.includes("username")) {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "Missing parameters."
        })
      );
    }

    if (
      typeof httpBody.mail !== "string" ||
      typeof httpBody.pswd !== "string" ||
      typeof httpBody.username !== "string"
    ) {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "Properties should be string."
        })
      );
    }

    return registerDb(httpBody).then(userData => {
      if (userData.error) {
        responseHeader(res, {
          code: userData.code
        });

        return res.end(
          JSON.stringify({
            error: true,
            message: userData.message
          })
        );
      }

      responseHeader(res, {
        code: userData.code,
        serverHeader: { ...userData.serverHeader }
      });

      return res.end(JSON.stringify({ ...userData.data }));
    });
  });
};

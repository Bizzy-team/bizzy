const responseHeader = require("./_utils/responseHeader");
const loginDB = require("./_db/models/login");
const parseBody = require("./_utils/parseBody");

module.exports = function Login(req, res) {
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
        message: "This route can only be access with POST method."
      })
    );
  }

  parseBody(req);
  return req.on("bodyParsed", httpBody => {
    if (httpBody.error) {
      responseHeader(res, {
        code: httpBody.code,
        serverHeader: { ...httpBody.serverHeader }
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: httpBody.message
        })
      );
    }

    const q = Object.keys(httpBody);

    if (q.length >= 3) {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "You can only have two parameters."
        })
      );
    }

    if (!q.includes("mail")) {
      responseHeader(res, {
        code: 422
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "Missing mail parameter."
        })
      );
    }

    if (!q.includes("pswd")) {
      responseHeader(res, {
        code: 422
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "Missing pswd parameter."
        })
      );
    }

    return loginDB(httpBody).then(userData => {
      if (userData.data.error) {
        responseHeader(res, {
          code: userData.code,
          serverHeader: { ...userData.serverHeader }
        });

        return res.end(JSON.stringify({ ...userData.data }));
      }

      responseHeader(res, {
        code: userData.code,
        serverHeader: { ...userData.serverHeader }
      });

      return res.end(JSON.stringify({ ...userData.data }));
    });
  });
};

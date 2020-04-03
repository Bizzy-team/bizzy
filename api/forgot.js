const responseHeader = require("./_utils/responseHeader");
const parseBody = require("./_utils/parseBody");
const forgotDb = require("./_db/models/forgot");

module.exports = function Forgot(req, res) {
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
        message: "This route can only be access with a POST method."
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

    if (q.length > 1) {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "You can only have one parameter"
        })
      );
    }

    if (!q.includes("mail")) {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "Missing mail parameter."
        })
      );
    }

    if (typeof httpBody.mail !== "string") {
      responseHeader(res, {
        code: 400
      });

      return res.end(
        JSON.stringify({
          error: true,
          message: "Property should be string."
        })
      );
    }

    return forgotDb(httpBody).then(result => {
      if (result.data.error) {
        responseHeader(res, {
          code: result.code,
          ...result.serverHeader
        });

        return res.end(JSON.stringify({ ...result.data }));
      }

      // TODO: Send mail to httpBody.mail
      return res.end(JSON.stringify({ ...result.data }));
    });
  });
};

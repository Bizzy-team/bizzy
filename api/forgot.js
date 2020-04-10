const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");
const forgotDb = require("./_db/models/forgot");

module.exports = function Forgot(req, res) {
  if (req.method !== "POST") {
    responseServer(res, 405, {
      content: "POST",
      serverHeader: {
        Allow: "POST"
      }
    });
  }
  parseBody(req);

  return req.on("bodyParsed", httpBody => {
    if (httpBody.error) {
      responseServer(res, {
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
      responseServer(res, {
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
      responseServer(res, {
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
      responseServer(res, {
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
      responseServer(res, {
        code: result.code,
        ...result.serverHeader
      });

      return res.end(JSON.stringify({ ...result.data }));
    });
  });
};

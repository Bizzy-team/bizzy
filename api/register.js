const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");
const registerDb = require("./_db/controllers/register");
const parseQuery = require("./_utils/parseQuery");

module.exports = function register(req, res) {
  const query = parseQuery(req.url)

  if (req.method !== "POST") {
    responseServer(res, 405, {
      content: "POST",
      query
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", httpBody => {
    const q = Object.keys(httpBody);

    if (q.length >= 4) {
      responseServer(res, 400, {
        content: "Too many parameters.",
        query
      });
    }

    if (!q.includes("mail") || !q.includes("pswd") || !q.includes("username")) {
      responseServer(res, 422, {
        query
      });
    }

    if (
      typeof httpBody.mail !== "string" ||
      typeof httpBody.pswd !== "string" ||
      typeof httpBody.username !== "string"
    ) {
      responseServer(res, 400, {
        content: "Data must be string.",
        query
      });
    }

    return registerDb(httpBody, query).then(result => {
      responseServer(res, result.code, {
        serverHeader: result.serverHeader ? { ...result.serverHeader } : {},
        content: result.content ? result.content : undefined,
        modifyResponse: result.data ? { ...result.data } : undefined,
        query
      });
    });
  });
};

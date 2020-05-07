const parseQuery = require("./_utils/parseQuery");
const responseServer = require("./_utils/responseServer");
const loginDB = require("./_db/controllers/login");
const parseBody = require("./_utils/parseBody");

module.exports = function Login(req, res) {
  const parameters = parseQuery(req.url);

  if (req.method !== "POST") {
    return responseServer(res, 405, {
      content: "POST",
      query: parameters
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", async httpBody => {
    const q = Object.keys(httpBody);

    if (q.length >= 3) {
      responseServer(res, 400, {
        content: "Too many parameters",
        query: parameters
      });
    }

    if (!q.includes("mail") || !q.includes("pswd")) {
      responseServer(res, 422, {
        query: parameters
      });
    }

    const userData = await loginDB(httpBody, parameters);
    responseServer(res, userData.code, {
      serverHeader: userData.serverHeader ? { ...userData.serverHeader } : {},
      content: userData.content ? userData.content : undefined,
      modifyResponse: userData.data ? { ...userData.data } : undefined,
      query: parameters
    });
  });
};

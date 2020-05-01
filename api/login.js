const responseServer = require("./_utils/responseServer");
const loginDB = require("./_db/models/login");
const parseBody = require("./_utils/parseBody");
const parseQuery = require("./_utils/parseQuery");

module.exports = function Login(req, res) {
  if (req.method !== "POST") {
    return responseServer(res, 405, {
      content: "POST"
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", httpBody => {
    const q = Object.keys(httpBody);

    if (q.length >= 3) {
      responseServer(res, 400, {
        content: "Too many parameters"
      });
    }

    if (!q.includes("mail") || !q.includes("pswd")) {
      responseServer(res, 422);
    }

    return loginDB(httpBody).then(userData => {
      responseServer(res, userData.code, {
        serverHeader: userData.serverHeader ? { ...userData.serverHeader } : {},
        content: userData.content ? userData.content : undefined,
        modifyResponse: userData.data ? { ...userData.data } : undefined,
        query: parseQuery(req.url)
      });
    });
  });
};

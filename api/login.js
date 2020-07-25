const { chain } = require("@amaurymartiny/now-middleware");
const checkApiKey = require("./_middleware/checkApiKey");
const responseServer = require("./_utils/responseServer");
const loginDB = require("./_db/controllers/login");
const parseBody = require("./_utils/parseBody");

function Login(req, res) {
  if (req.method !== "POST") {
    return responseServer(res, 405, {
      content: "POST"
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", async httpBody => {
    const q = Object.keys(httpBody);

    if (q.length >= 3) {
      return responseServer(res, 400, {
        content: "Too many parameters"
      });
    }

    if (!q.includes("mail") || !q.includes("pswd")) {
      return responseServer(res, 422);
    }

    const userData = await loginDB(httpBody, req);
    return responseServer(res, userData.code, {
      serverHeader: userData.header ? { ...userData.header } : {},
      content: userData.content ? userData.content : undefined,
      modifyResponse: userData.forClient ? { ...userData.forClient } : undefined
    });
  });
}

module.exports = chain(checkApiKey)(Login);

const { chain } = require("@amaurymartiny/now-middleware");

const checkApiKey = require("./_middleware/checkApiKey");
const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");
const forgotDb = require("./_db/controllers/forgot");

function Forgot(req, res) {
  if (req.method !== "POST") {
    return responseServer(res, 405, {
      content: "POST"
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", httpBody => {
    const q = Object.keys(httpBody);

    if (q.length > 1) {
      responseServer(res, 400, {
        content: "Too many parameters."
      });
    }

    if (!q.includes("mail")) {
      responseServer(res, 422);
    }

    return forgotDb(httpBody, req.mongoClient).then(result => {
      responseServer(res, result.code, {
        serverHeader: result.serverHeader ? { ...result.serverHeader } : {},
        content: result.content ? result.content : undefined,
        modifyResponse: result.data ? { ...result.data } : undefined
      });
    });
  });
}

module.exports = chain(checkApiKey)(Forgot);

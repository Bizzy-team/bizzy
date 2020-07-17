const { chain } = require("@amaurymartiny/now-middleware");

const checkApiKey = require("./_middleware/checkApiKey");
const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");
const registerDb = require("./_db/controllers/register");

function register(req, res) {
  if (req.method !== "POST") {
    responseServer(res, 405, {
      content: "POST"
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", httpBody => {
    const q = Object.keys(httpBody);

    if (q.length >= 5) {
      responseServer(res, 400, {
        content: "Too many parameters."
      });
    }

    if (
      !q.includes("nom") ||
      !q.includes("prenom") ||
      !q.includes("mail") ||
      !q.includes("pswd")
    ) {
      responseServer(res, 422);
    }

    if (
      typeof httpBody.nom !== "string" ||
      typeof httpBody.prenom !== "string" ||
      typeof httpBody.mail !== "string" ||
      typeof httpBody.pswd !== "string"
    ) {
      responseServer(res, 400, {
        content: "Data must be string."
      });
    }

    return registerDb(httpBody, req.mongoClient).then(result => {
      responseServer(res, result.code, {
        serverHeader: result.header ? { ...result.header } : {},
        modifyResponse: result.forClient ? { ...result.forClient } : undefined
      });
    });
  });
}

module.exports = chain(checkApiKey)(register);

const { chain } = require("@amaurymartiny/now-middleware");
const { parse } = require("url");
const checkApiKey = require("./_middleware/checkApiKey");
const responseServer = require("./_utils/responseServer");
const { GET, PUT } = require("./_db/controllers/resetpassword");
const parseBody = require("./_utils/parseBody");

function ResetPassword(req, res) {
  if (!["GET", "PUT"].includes(req.method)) {
    responseServer(res, 405, {
      content: "POST, PUT"
    });
  }

  if (req.method === "GET") {
    const params = new URLSearchParams(parse(req.url).query);
    const paramsLength = Array.from(params).length;

    if (paramsLength === 0 || !params.get("token")) {
      responseServer(res, 422);
    }

    if (paramsLength > 1) {
      responseServer(res, 400);
    }

    return GET(params, req.mongoClient).then(result => {
      responseServer(res, result.code, {
        serverHeader: result.serverHeader ? { ...result.serverHeader } : {},
        content: result.content ? result.content : undefined,
        modifyResponse: result.data ? { ...result.data } : undefined
      });
    });
  }

  if (req.method === "PUT") {
    if (!req.headers.authorization) {
      responseServer(res, 403, {
        content: "Missing 'Authorization: <token>' header in your request."
      });
    }

    parseBody(req, res);
    return req.on("bodyParsed", function bp(dataParsed) {
      const q = Object.keys(dataParsed);

      if (req.headers.cookie ? q.length > 1 : q.length > 2) {
        responseServer(res, 400, {
          content: "Too many parameters"
        });
      }

      if (
        req.headers.cookie
          ? !q.includes("newpswd")
          : !q.includes("newpswd") || !q.includes("token")
      ) {
        responseServer(res, 422);
      }

      const PUTData = { ...dataParsed };

      PUTData.jwtToken = req.headers.authorization;
      if (req.headers.cookie) PUTData.cookie = req.headers.cookie;

      return PUT(PUTData, req.mongoClient).then(result => {
        responseServer(res, result.code, {
          serverHeader: result.serverHeader ? { ...result.serverHeader } : {},
          content: result.content ? result.content : undefined,
          modifyResponse: result.data ? { ...result.data } : undefined
        });
      });
    });
  }
}

module.exports = chain(checkApiKey)(ResetPassword);

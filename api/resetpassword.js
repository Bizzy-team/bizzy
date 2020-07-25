const { chain } = require("@amaurymartiny/now-middleware");
const { parse } = require("url");
const checkApiKey = require("./_middleware/checkApiKey");
const detectMethod = require("./_middleware/detectMethod");
const isConnected = require("./_middleware/isConnected");
const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");
const resetPasswordController = require("./_db/controllers/resetpassword");

function ResetPassword(req, res) {
  if (req.method !== "PUT") {
    responseServer(res, 405, {
      content: "PUT",
      token: res.locals.forClient.token ? res.locals.forClient.token : undefined
    });
  }

  // This props is ceated in the detectMethod middleware.
  // who check if the user try to access this route with params while he's connected.
  if (res.locals.tokenParams) {
    const params = new URLSearchParams(parse(req.url).query);
    const paramsLength = Array.from(params).length;

    if (paramsLength === 0 || !params.get("token")) {
      return responseServer(res, 422);
    }

    if (paramsLength > 1) {
      return responseServer(res, 400);
    }
  }

  parseBody(req, res);
  return req.on("bodyParsed", async function bp(dataParsed) {
    const q = Object.keys(dataParsed);

    if (q.length > 1) {
      return responseServer(res, 400);
    }

    if (!q.includes("pswd")) {
      return responseServer(res, 422);
    }

    const l = await resetPasswordController(
      req,
      res,
      res.locals.tokenParams,
      dataParsed.pswd
    );
    return responseServer(res, l.code, {
      token: res.locals.forClient ? res.locals.forClient.token : undefined,
      serverHeader: res.locals.header ? res.locals.header : undefined,
      modifyResponse: l.client ? l.client : undefined
    });
  });
}

module.exports = chain(checkApiKey, detectMethod, isConnected)(ResetPassword);

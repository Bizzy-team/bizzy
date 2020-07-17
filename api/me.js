const { chain } = require("@amaurymartiny/now-middleware");
const {parse} = require("url")

const checkApiKey = require("./_middleware/checkApiKey");
const isConnected = require("./_middleware/isConnected");
const responseServer = require("./_utils/responseServer");
const meController = require("./_db/controllers/me");

async function Me(req, res) {
  if (!["POST", "GET"].includes(req.method)) {
    return responseServer(res, 405, {
      content: "POST, GET"
    });
  }

  let params = new URLSearchParams(parse(req.url).search).get("fields");

  if (params) {
    params = params.split(",");
  }

  if (req.method === "GET") {
    await meController.GET(req, res, params);
  }

  if (req.method === "POST") {
    await meController.POST(req);
  }

  return responseServer(res, res.locals.code, {
    serverHeader: res.locals.header ? { ...res.locals.header } : undefined,
    modifyResponse: res.locals.forClient ? { ...res.locals.forClient } : undefined
  });
}

module.exports = chain(checkApiKey, isConnected)(Me);

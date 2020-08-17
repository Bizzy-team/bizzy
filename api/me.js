const { chain } = require("@amaurymartiny/now-middleware");
const { intersection } = require("lodash");
const { parse } = require("url");

const checkApiKey = require("./_middleware/checkApiKey");
const isConnected = require("./_middleware/isConnected");
const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");
const meController = require("./_db/controllers/me");

async function Me(req, res) {
  if (!["PUT", "GET"].includes(req.method)) {
    return responseServer(res, 405, {
      token: res.locals.forClient ? res.locals.forClient.token : undefined,
      content: "PUT, GET"
    });
  }

  if (req.method === "GET") {
    let params = new URLSearchParams(parse(req.url).search).get("fields");

    if (params) {
      params = params.split(",");
    }

    const d = await meController.GET(req, res, params);

    return responseServer(res, d.code, {
      serverHeader: d.header ? { ...d.header } : undefined,
      modifyResponse: d.client ? { ...d.client } : undefined
    });
  }

  if (req.method === "PUT") {
    parseBody(req, res);
    return req.on("bodyParsed", async function(httpBody) {
      const q = Object.keys(httpBody);
      const i = intersection(q, [
        "name",
        "surname",
        "city",
        "job",
        "description",
        "mail"
      ]);

      if (q.length > 6) {
        return responseServer(res, 400, {
          token: res.locals.forClient ? res.locals.forClient.token : undefined
        });
      }

      if (i.length === 0) {
        return responseServer(res, 422, {
          token: res.locals.forClient ? res.locals.forClient.token : undefined
        });
      }

      const d = await meController.PUT(req, res, httpBody, i);

      return responseServer(res, d.code, {
        serverHeader: d.header ? { ...d.header } : undefined,
        modifyResponse: d.client ? { ...d.client } : undefined
      });
    });
  }
}

module.exports = chain(checkApiKey, isConnected)(Me);

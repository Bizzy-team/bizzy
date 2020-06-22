const { chain } = require("@amaurymartiny/now-middleware");
const checkApiKey = require("./middleware/checkApiKey");
const isConnected = require("./middleware/isConnected");
const responseServer = require("./_utils/responseServer");

function Feed(req, res) {
  if (res.locals) {
    return responseServer(res, res.locals.code, {
      serverHeader: res.locals.serverHeader ? { ...res.locals.serverHeader } : {},
      content: res.locals.content ? res.locals.content : undefined,
      modifyResponse: res.locals.data ? { ...res.locals.data } : undefined
    });
  }

  return responseServer(res, 200);
}

module.exports = chain(checkApiKey, isConnected)(Feed);

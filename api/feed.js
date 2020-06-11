const { chain } = require("@amaurymartiny/now-middleware");
const checkApiKey = require("./middleware/checkApiKey");
const isConnected = require("./middleware/isConnected");
const responseServer = require("./_utils/responseServer");

function Feed(req, res) {
  return responseServer(res, 200);
}

module.exports = chain(checkApiKey, isConnected)(Feed);

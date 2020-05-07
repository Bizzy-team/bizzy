const isConnected = require("./_utils/isConnected");
const responseServer = require("./_utils/responseServer");

module.exports = function Feed(req, res) {
    isConnected(req.headers.authorization).then(l => responseServer(res, l.code))
}
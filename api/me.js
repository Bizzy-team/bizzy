const {chain} = require("@amaurymartiny/now-middleware");

const checkApiKey = require("./_middleware/checkApiKey");
const isConnected = require("./_middleware/isConnected");
const responseServer = require("./_utils/responseServer");
const meController = require("./_db/controllers/me");

async function Me (req, res) {
    if (!["POST", "GET"].includes(req.method)) {
        return responseServer(res, 405, {
            content: "POST, GET"
        })
    }

    if (req.method === "GET") {
        await meController.GET(req, res);
    }

    return responseServer(res, res.locals.code, {
        serverHeader: res.locals.header ? {...res.locals.header} : undefined,
        modifyResponse: res.locals.forClient ? {...res.locals.forClient} : undefined
    });
};

module.exports = chain(checkApiKey, isConnected)(Me);
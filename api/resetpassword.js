const responseHeader = require("./_utils/responseHeader");
const {parse} = require("url");

module.exports = function (req, res) {
    if (!["GET", "POST"].includes(req.method)) {
        responseHeader(res, {
            code: 405,
            serverHeader: {
                Allow: "GET, POST"
            },
        });

        return JSON.stringify({
            error: true,
            message: "Only GET and POST methods are allowed on this route."
        });
    }

    if (req.method === "GET") {
        const params = JSON.parse(JSON.stringify(parse(req.url, true).query));

        console.log(params.length);
        responseHeader(res, {
            code: 200
        });

        return JSON.stringify({t: true})
    }
};
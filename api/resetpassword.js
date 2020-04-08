const responseHeader = require("./_utils/responseHeader");
const {parse} = require("url");
const {GET, POST} = require("./_db/models/resetpassword");
const parseBody = require("./_utils/parseBody");

module.exports = function ResetPassword(req, res) {
    if (!["GET", "PUT"].includes(req.method)) {
        responseHeader(res, {
            code: 405,
            serverHeader: {
                Allow: "GET, PUT"
            },
        });

        return res.end(JSON.stringify({
            error: true,
            message: "Only GET and PUT methods are allowed on this route."
        }));
    }

    if (req.method === "GET") {
        const params = new URLSearchParams(parse(req.url).query);
        const paramsLength = Array.from(params).length

        if (paramsLength === 0) {
            responseHeader(res, {
                code: 422
            });

            return res.end(JSON.stringify({
                error: true,
                message: "Missing parameters"
            }));
        }

        if (paramsLength > 1) {
            responseHeader(res, {
                code: 403
            });

            return res.end(JSON.stringify({
                error: true,
                message: "Too many parameters"
            }));
        }

        if (!params.has("token")) {
            responseHeader(res, {
                code: 422
            });

            return res.end(JSON.stringify({
                error: true,
                message: "Missing parameters"
            }));
        }

        return GET(params).then(result => {
            responseHeader(res, {
                code: result.code,
                serverHeader: {...result.serverHeader}
            });

            return res.end(JSON.stringify({...result.data}));
        });
    }

    if (req.method === "PUT") {
        if (!req.headers.authorization) {
            responseHeader(res, {
                code: 403
            });

            return res.end(JSON.stringify({
                error: true,
                message: "Missing 'Authorization: <token>' header in your request."
            }));
        }

        parseBody(req);
        return req.on("bodyParsed", function (dataParsed) {
            if (dataParsed.error) {
                responseHeader(res, {
                    code: dataParsed.code,
                    serverHeader: {...dataParsed.serverHeader}
                })

                return res.end(JSON.stringify({
                    error: true,
                    message: dataParsed.message
                }));
            }

            const q = Object.keys(dataParsed);

            if (q.length > 2) {
                responseHeader(res, {
                    code: 403
                });

                return res.end(JSON.stringify({
                    error: true,
                    message: "Too many parameters"
                }));
            }

            if (!q.includes("newpswd") || !q.includes("token")) {
                responseHeader(res, {
                    code: 422
                });

                return res.end(JSON.stringify({
                    error: true,
                    message: "Missing parameters"
                }));
            }

            dataParsed.jwtToken = req.headers.authorization;
            return POST(dataParsed).then(result => {
                responseHeader(res, {
                    code: result.code,
                    serverHeader: { ...result.serverHeader }
                });

                return res.end(JSON.stringify({ ...result.data }));
            })
        });
    };
};
const responseHeader = require("../_utils/responseHeader");
const loginDB = require("../_db/login");

module.exports = (req, res) => {
    if (req.method !== "POST") {
        responseHeader(res, {
            code: 401,
            serverHeader: {
                Allow: "POST"
            },
        });

        return res.end(JSON.stringify({
            error: true,
            message: "This route can only be access with POST method."
        }));
    }

    let body;
    req.setEncoding("utf-8");
    req
    .on('data', chunk => body = chunk)
    .on("end", () => {
        if (body !== undefined) {
            try {
                const bodyParsed = JSON.parse(dataToCheck.body);
                body = bodyParsed;
                loginDB(body)
                return res.end("gg");
            } catch (e) {
                responseHeader(res, {
                    code: 406
                });

                return res.end(JSON.stringify({
                    error: true,
                    message: "The routes can only receives JSON data."
                }))
            }
        }

        responseHeader(res, {
            code: 422
        });
        return res.end(JSON.stringify({
            error: true,
            message: "Data incorrect or missing"
        }))
    });
}
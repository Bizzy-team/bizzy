const mongo = require("./index");
const {compare} = require("bcrypt");
/**
 * Check if an user exist.
 * @param {Object} data An object of parsed parameters.
 */
module.exports = async data => {
    const bizzyUsers = (await mongo.connect()).db("bizzy").collection("users");
    const user = await bizzyUsers.findOne({mail: data.mail});

    if (user === null) {
        return Promise.resolve({
            code: 403,
            data: {
                error: true,
                message: "User unknown."
            }
        });
    };

    if (await compare(data.pswd, user.password)) {
        return Promise.resolve({
            code: 200,
            serverHeader: {
                "Set-Cookie": `sessionId=${user._id}; HttpOnly; ${process.env.NODE_ENV === "development" ? "" : "Domain=bizzy.now.sh; Secure"};`
            },
            data: {
                token: user.token
            }
        });
    }

    return Promise.resolve({
        code: 401,
        data: {
            error: true,
            message: "That email and password combination is incorrect."
        }
    });
}
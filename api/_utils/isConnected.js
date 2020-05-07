const {decode, verify} = require("jsonwebtoken");
const mongo = require("../_db/index");

/**
 * Check is an user is connected or not, by checking if token passed in header is correct either checking if had cookie refreshToken and if it is correct.
 * @param {String} authorization - The Authorization request header
 * @param {Object} options - An object who modify the function behavior
 * @param {Boolean} [options.bool = false] - Return a boolean true if user is correctly connected or false.
 */
module.exports = async function(authorization, options) {
    const ops = {
        bool: false,
        ...options
    }

    if (typeof authorization !== "string" || !authorization) {
        if (ops.bool) return false
        return {
            code: 400
        }
    }

    const [b, token] = authorization.split(" ")
    if (b !== "Bearer" || !token || token.split(".").length !== 3) {
        if (ops.bool) return false
        return {
            code: 400
        }
    }

    const tokenValue = decode(token, {json: true})

    console.log(typeof tokenValue)
    if (tokenValue) {
        const tokenAsArray = Object.keys(tokenValue.payload);

        console.log(tokenAsArray, tokenValue.iss)
        if (tokenAsArray.length !== 2) {
            if (ops.bool) return false
            return {
                code: 401
            }
        }

        if (tokenAsArray[0] !== "iss" || tokenAsArray[1] !== "exp") {
            if (ops.bool) return false;
            return {
                code: 401
            }
        }

        const mongobdd = await mongo();
        const sessionsCollection = mongobdd.db().collection("sessions")
        const userSession = await sessionsCollection.findOne({_id: tokenValue.iss})
        console.log(userSession, tokenValue)

        if (!userSession) {
            if (ops.bool) return false
            return {
                code: 401
            }
        }
    
        try {
            const decoded = verify(token, userSession.key)
            console.log(decoded)
        } catch (e) {
            console.log(e)
        }
    
        return {
            code: 200
        }
    } else {
        if (ops.bool) return false
        return {
            code: 401
        }
    }
};

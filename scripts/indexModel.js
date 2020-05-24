const sessionModel = require("./models/sessions");
const userModel = require("./models/user");
const passwordForgetModel = require("./models/passwordForget");

module.exports = {
    sessions: sessionModel,
    users: userModel,
    passwordforget: passwordForgetModel
}
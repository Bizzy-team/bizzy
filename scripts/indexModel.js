const sessionModel = require("./models/sessions");
const userModel = require("./models/user");
const passwordForgetModel = require("./models/passwordForget");
const accessModel = require("./models/access");

module.exports = {
    access: accessModel,
    sessions: sessionModel,
    users: userModel,
    passwordforget: passwordForgetModel
}
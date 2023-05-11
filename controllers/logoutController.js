const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Author } = require("../models");

async function logoutUser(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("/home");
  });
}

module.exports = {
  logoutUser,
};

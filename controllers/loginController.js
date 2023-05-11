const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Author } = require("../models");

function viewLogin(req, res) {
  res.render("login", { message: req.flash("error") });
}

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res);
}

module.exports = {
  viewLogin,
  login,
};

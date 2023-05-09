// const session = require("express-session");
// const passport = require("passport");
// const localStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Author } = require("../models");

function viewLogin(req, res) {
  res.render("login");
}

async function loginUser(req, res) {
  const author = await Author.findAll({ where: { email: req.body.email } });
  const pass = req.body.password;
  const savedUser = author[0].password;

  const passCheck = await bcrypt.compare(pass, savedUser);

  if (passCheck) {
    return res.redirect("home");
  } else {
    const errorMessage = "Invalid email or password";
    return res.render("login", { error: errorMessage });
  }
  //   passport.use(
  //     localStrategy((email, password, cb) => {
  //       //details go here
  //     })
  //);
}

module.exports = {
  viewLogin,
  loginUser,
};

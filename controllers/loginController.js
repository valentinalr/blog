const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Author } = require("../models");

function viewLogin(req, res) {
  res.render("login", { message: req.flash("error") });
}
function isLogged(req, res) {
  console.log("entro");
  const isLoggedIn = req.isAuthenticated();
  console.log({isLoggedIn});
  return res.render("home", {
    isLoggedIn,
  });
}

function passportConfig() {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await Author.findOne({ where: { email: email } });

          if (!user) {
            return done(null, false, { message: "Credenciales incorrectas" });
          }
          const checkPassword = await bcrypt.compare(password, user.password);
          if (!checkPassword) {
            return done(null, false, { message: "Credenciales incorrectas" });
          }
          return done(null, user);
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(async function (id, done) {
    try {
      const user = await Author.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/login");
  }
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
  passportConfig,
  login,
  ensureAuthenticated,
  isLogged,
};

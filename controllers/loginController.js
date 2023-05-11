const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Author } = require("../models");

function viewLogin(req, res) {
  res.render("login");
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
  })(req, res);
}

// async function loginUser(req, res) {
//   const author = await Author.findOne({ where: { email: req.body.email } });
//   const pass = req.body.password;
//   const savedUser = author[0].password;

//   const passCheck = await bcrypt.compare(pass, savedUser);

//   if (passCheck) {
//     return res.redirect("home");
//   } else {
//     const errorMessage = "Invalid email or password";
//     return res.render("login", { error: errorMessage });
//   }
//   //   passport.use(
//   //     localStrategy((email, password, cb) => {
//   //       //details go here
//   //     })
//   //);
// }

module.exports = {
  viewLogin,
  passportConfig,
  login,
  ensureAuthenticated,
  isLogged,
};

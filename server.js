const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
<<<<<<< HEAD
const localStrategy = require("passport-local");
=======
const { passportConfig } = require("./controllers/loginController");
>>>>>>> f98fdcb39b7d8956b89c17e517524828b106a869

app.set("view engine", "ejs");

//Middlewares
<<<<<<< HEAD
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
app.use(express.static("public"));
=======
>>>>>>> f98fdcb39b7d8956b89c17e517524828b106a869
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
passportConfig();

app.use(express.static("public"));
app.use(express.json());
app.use(routes);

//Server listening
app.listen(3000, () => {
  console.log("Running at port 3000.");
});

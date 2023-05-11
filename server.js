const flash = require("express-flash");
const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const { passportConfig } = require("./controllers/loginController");

app.set("view engine", "ejs");

//Middlewares
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(flash());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
  })
);

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use(express.static("public"));
app.use(express.json());
app.use(routes);

//Server listening
app.listen(3000, () => {
  console.log("Running at port 3000.");
});

require("dotenv").config();

const flash = require("express-flash");
const express = require("express");
const session = require("express-session");

const makeUserAvailableInViews = require("./middlewares/makeUserAvailableInViews");
const { passport, passportConfig } = require("./passport");
const routes = require("./routes");
const app = express();

app.set("view engine", "ejs");

//Middlewares
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
app.use(makeUserAvailableInViews);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(flash());

app.use(express.json());

app.use(routes);

passportConfig();

app.listen(3000, () => {
  console.log("Running at port 3000.");
});

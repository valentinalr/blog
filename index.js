const express = require("express");
const app = express();
const routes = require("./routes");

app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

//Server listening
app.listen(3000, () => {
  console.log("Running at port 3000.");
});

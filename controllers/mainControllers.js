const sql = require("mysql2/promise");

function findAll(req, res) {
  res.render("home");
}

function findOne(req, res) {
  res.render("notice");
}

function admin(req, res) {
  res.render("admin");
}

module.exports = {
  findAll,
  findOne,
  admin,
};

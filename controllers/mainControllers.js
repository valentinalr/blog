const sql = require("mysql2/promise");

function findAll(req, res) {
  res.render("home");
}

function findOne(req, res) {
  res.render("notice");
}

module.exports = {
  findAll,
  findOne,
};

const bcrypt = require("bcryptjs");
const { Author } = require("../models");

async function viewRegister(req, res) {
  return res.render("register");
}

async function createdAuthor(req, res) {
  const passParaHashear = req.body.password;
  const passHasheada = await bcrypt.hash(passParaHashear, 10);

  const newAuthor = await Author.create({
    id: req.body.id,
    fullName: req.body.fullname,
    email: req.body.email,
    password: passHasheada,
  });

  return res.redirect("home");
}

module.exports = {
  viewRegister,
  createdAuthor,
};

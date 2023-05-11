const { Article } = require("../models");

async function admin(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  const listaDeArticulos = await Article.findAll({
    where: { authorId: req.user.id },
  });
  res.render("admin", {
    listaDeArticulos,
  });
}

module.exports = {
  admin,
};

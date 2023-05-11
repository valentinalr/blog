const { Article, Author } = require("../models");

async function admin(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  const listaDeArticulos = await Article.findAll({
    where: { authorId: req.user.id },
  });
  for (i = 0; i < listaDeArticulos.length; i++) {
    const name = await Author.findByPk(listaDeArticulos[i].authorId);
    listaDeArticulos[i].authorId = name;
  }

  res.render("admin", {
    listaDeArticulos,
  });
}

module.exports = {
  admin,
};

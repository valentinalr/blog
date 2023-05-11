const { Article } = require("../models");

async function admin(req, res) {
  const listaDeArticulos = await Article.findAll({
    order: ["id"],
  });
  res.render("admin", {
    listaDeArticulos,
  });
}

module.exports = {
  admin,
};

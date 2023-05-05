// sequelize.sync({ force: true });
//const { sequelize } = require("sequelize");
//Asosciaciones

const allModels = require("../models/allModels");

//sequelize.sync({ alter: true });

async function api(req, res) {
  const listaDeArticulos = await allModels.Notice.findAll();
  return res.json(listaDeArticulos);
}

async function findAll(req, res) {
  const listaDeArticulos = await allModels.Notice.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.render("home", {
    listaDeArticulos,
  });
}

async function findOne(req, res) {
  const id = req.params.id;
  const article = await allModels.Notice.findByPk(id);
  res.render("notice", { article });
}

async function admin(req, res) {
  const listaDeArticulos = await allModels.Notice.findAll({
    order: ["id"],
  });
  res.render("admin", {
    listaDeArticulos,
  });
}

async function formUpdate(req, res) {
  res.render("editArticle");
}

async function formUpload(req, res) {
  res.render("createArticle");
}

async function create(req, res) {
  const {
    "new-title": title,
    "new-content": content,
    "new-image": image,
    "new-author": author,
  } = req.body;

  await allModels.Notice.create({
    title: title,
    content: content,
    image: image,
    author_name: author,
  });

  return res.redirect("/home");
}

module.exports = {
  api,
  findAll,
  findOne,
  admin,
  formUpdate,
  formUpload,
  create,
};

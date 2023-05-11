const formidable = require("formidable");
const { Article, Comment } = require("../models");

async function apiArticle(req, res) {
  const listaDeArticulos = await Article.findAll();
  return res.json(listaDeArticulos);
}

async function findAllArticle(req, res) {
  const listaDeArticulos = await Article.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.render("home", {
    listaDeArticulos,
  });
}

async function findOneArticle(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id);
  const listaDeComentarios = await Comment.findAll({
    where: {
      articleId: id,
    },
  });
  res.render("notice", { article, listaDeComentarios });
}

async function formUpdateArticle(req, res) {
  const id = req.params.id;
  const listaDeArticulos = await Article.findAll({
    where: { id: id },
  });
  res.render("editArticle", {
    listaDeArticulos,
  });
}

async function formUploadArticle(req, res) {
  res.render("createArticle");
}

// async function storeArticle(req, res) {
//   const {
//     "new-title": title,
//     "new-content": content,
//     "new-image": image,
//     "new-author": author,
//   } = req.body;

//   await Article.create({
//     title: title,
//     content: content,
//     image: image,
//     author_name: author,
//   });

//   return res.redirect("/home");
// }

// Crear noticia con formidable
async function storeArticle(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const {
      "new-title": title,
      "new-content": content,
      "new-author": author,
    } = fields;

    await Article.create({
      title: title,
      content: content,
      image: files["new-image"].newFilename,
      author_name: author,
    });
  });
  return res.redirect("/home");
}

async function storeEdit(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    // return res.json({
    //   err,
    //   fields,
    //   files,
    // });
    const id = req.params.id;
    const {
      "edited-title": title,
      "edited-content": content,
      "edited-author": author,
    } = fields;

    await Article.update(
      {
        title: title,
        content: content,
        image: files.image.newFilename,
        author_name: author,
      },
      {
        where: { id: id },
      }
    );
    return res.redirect(`/article/${id}`);
  });
}

async function destroyArticle(req, res) {
  const id = req.params.id;
  await Article.destroy({
    where: {
      id: id,
    },
  });
  return res.redirect("/home");
}

module.exports = {
  apiArticle,
  findAllArticle,
  findOneArticle,
  formUpdateArticle,
  formUploadArticle,
  storeArticle,
  storeEdit,
  destroyArticle,
};

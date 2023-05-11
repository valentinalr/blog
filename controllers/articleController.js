const formidable = require("formidable");
const { Article, Comment, Author } = require("../models");

async function apiArticle(req, res) {
  const listaDeArticulos = await Article.findAll();
  return res.json(listaDeArticulos);
}

async function index(req, res) {
  const listaDeArticulos = await Article.findAll({
    order: [["createdAt", "DESC"]],
  });

  for (i = 0; i < listaDeArticulos.length; i++) {
    const name = await Author.findByPk(listaDeArticulos[i].authorId);
    listaDeArticulos[i].authorId = name;
  }

  return res.render("home", {
    listaDeArticulos,
  });
}

async function findOneArticle(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id);
  const name = await Author.findByPk(article.authorId);
  article.authorId = name;

  const listaDeComentarios = await Comment.findAll({
    where: {
      articleId: id,
    },
  });
  res.render("notice", { article, listaDeComentarios });
}

async function formUpdateArticle(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  } else {
    const id = req.params.id;
    const listaDeArticulos = await Article.findAll({
      where: { id: id },
    });
    res.render("editArticle", {
      listaDeArticulos,
    });
  }
}

async function formUploadArticle(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  } else {
    return res.render("createArticle");
  }
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
    const { "new-title": title, "new-content": content } = fields;

    await Article.create({
      title: title,
      content: content,
      image: files["new-image"].newFilename,
      authorId: req.user.id,
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
  return res.redirect("/admin");
}

module.exports = {
  apiArticle,
  index,
  findOneArticle,
  formUpdateArticle,
  formUploadArticle,
  storeArticle,
  storeEdit,
  destroyArticle,
};

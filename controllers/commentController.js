const { Comment, Article } = require("../models");

async function review(req, res) {
  const { inputName: name, content: content } = req.body;
  const articleId = req.params.id;

  await Comment.create({
    fullName: name,
    content: content,
    articleId: articleId,
  });
  return res.redirect(`/article/${articleId}`);
}

// async function findComments(req, res) {
//   const id = req.params.id;
//   const listaDeComentarios = await Comment.findAll({
//     where: {
//       articleId: id,
//     },
//   });
//   res.render("notice", {
//     listaDeComentarios,
//   });
// }

module.exports = {
  review,
};

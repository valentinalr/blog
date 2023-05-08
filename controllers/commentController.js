const { Comment, Article } = require("../models");

async function review(req, res) {
  const { inputName: name, content: content } = req.body;
  const articleId = req.params.id;

  const article = await Article.findByPk(articleId);

  await Comment.create({
    fullName: name,
    content: content,
    articleId: articleId,
  });
  return res.redirect(`/article/${articleId}`);
}

async function findOneComment(req, res) {
  const comment = await Comment.findByPk(8);
  res.render("notice", { comment });
}

module.exports = {
  review,
  findOneComment,
};

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_database", "root", "root", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

const Article = require("./Article");
const Author = require("./Author");
const Comment = require("./Comment");

Article.initModel(sequelize);
Author.initModel(sequelize);
Comment.initModel(sequelize);

sequelize.sync({ alter: true });

module.exports = {
  sequelize,
  Article,
  Author,
  Comment,
};

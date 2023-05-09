require("dotenv").config();
const { Sequelize } = require("sequelize");
const articleSeeder = require("../seeders/articleSeeder");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Article = require("./Article");
const Author = require("./Author");
const Comment = require("./Comment");

Article.initModel(sequelize);
Author.initModel(sequelize);
Comment.initModel(sequelize);

Author.hasMany(Article);
Article.belongsTo(Author);

Article.hasMany(Comment);
Comment.belongsTo(Article);

sequelize.sync({ alter: true }).then(async () => {
  await articleSeeder(Article);
});

module.exports = {
  sequelize,
  Article,
  Author,
  Comment,
};

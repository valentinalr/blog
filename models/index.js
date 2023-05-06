require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

const Article = require("./Article");
const Author = require("./Author");
const Comment = require("./Comment");

Article.initModel(sequelize);
Author.initModel(sequelize);
Comment.initModel(sequelize);

// Clave foraneas paso facu, ver para el Lun
// Author.hasMany(Article);
// Article.belongsTo(Author);

sequelize.sync({ alter: true });

module.exports = {
  sequelize,
  Article,
  Author,
  Comment,
};

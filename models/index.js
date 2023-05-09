const { Sequelize } = require("sequelize");
const articleSeeder = require("../seeders/articleSeeder");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
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

sequelize.sync({ force: true }).then(async () => {
  await articleSeeder(Article);
});

//(async function () {
//  await articleSeeder(Article);
//})();

module.exports = {
  sequelize,
  Article,
  Author,
  Comment,
};

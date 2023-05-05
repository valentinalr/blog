const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_database", "root", "root", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

const Notice = require("./notice");
const Authors = require("./authors");
const Comments = require("./comments");

Notice.initModel(sequelize);
Authors.initModel(sequelize);
Comments.initModel(sequelize);

module.exports = {
  sequelize,
  Notice,
  Authors,
  Comments,
};

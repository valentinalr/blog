const sql = require("mysql2/promise");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blog_database", "root", "root", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

class Notice extends Model {}

Notice.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize, modelName: "notice" }
);

// sequelize.sync({ force: true });
sequelize.sync({ alter: true });

function findAll(req, res) {
  res.render("home");
}

function findOne(req, res) {
  res.render("notice");
}

function admin(req, res) {
  res.render("admin");
}

module.exports = {
  findAll,
  findOne,
  admin,
};

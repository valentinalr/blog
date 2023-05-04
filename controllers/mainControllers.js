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
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: "notice",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

// sequelize.sync({ force: true });
sequelize.sync({ alter: true });

async function api(req, res) {
  const listaDeArticulos = await Notice.findAll();
  return res.json(listaDeArticulos);
}

async function findAll(req, res) {
  res.render("home");
}

async function findOne(req, res) {
  res.render("notice");
}

async function admin(req, res) {
  res.render("admin");
}

module.exports = {
  api,
  findAll,
  findOne,
  admin,
};

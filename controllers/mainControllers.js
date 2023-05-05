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
    author_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      get() {
        const date = new Date(this.getDataValue("createdAt"));
        const day = date.toLocaleString("es-ES", { weekday: "long" });
        const dayOfMonth = date.getDate();
        const month = date.toLocaleString("es-ES", { month: "long" });
        const year = date.getFullYear();
        let hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? "PM" : "AM";
        hour %= 12;
        hour = hour ? hour : 12;
        const formattedDate = `${day}, ${dayOfMonth} de ${month} del año ${year}, a las ${hour}:${minute} ${ampm}`;
        return formattedDate;
      },
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

// ========================================================================================= //

class Author extends Model {}

Author.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allownull: false,
    },
  },
  {
    sequelize,
    modelName: "author",
    timestamps: false,
  }
);

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "comment",
    timestamps: false,
  }
);

sequelize.sync({ alter: true });

async function api(req, res) {
  const listaDeArticulos = await Notice.findAll();
  return res.json(listaDeArticulos);
}

async function findAll(req, res) {
  const listaDeArticulos = await Notice.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.render("home", {
    listaDeArticulos,
  });
}

async function findOne(req, res) {
  const id = req.params.id;
  const article = await Notice.findByPk(id);
  res.render("notice", { article });
}

async function admin(req, res) {
  const listaDeArticulos = await Notice.findAll({
    order: ["id"],
  });
  res.render("admin", {
    listaDeArticulos,
  });
}

async function formUpdate(req, res) {
  res.render("editArticle");
}

async function formUpload(req, res) {
  res.render("createArticle");
}

async function create(req, res) {
  const {
    "new-title": title,
    "new-content": content,
    "new-image": image,
    "new-author": author,
  } = req.body;

  await Notice.create({
    title: title,
    content: content,
    image: image,
    author_name: author,
  });

  return res.redirect("/home");
}

module.exports = {
  api,
  findAll,
  findOne,
  admin,
  formUpdate,
  formUpload,
  create,
};

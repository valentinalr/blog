const { Sequelize, Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
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
        modelName: "article",
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      }
    );
    return Article;
  }
}

module.exports = Article;

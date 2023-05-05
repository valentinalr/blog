const { Model, DataTypes } = require("sequelize");

class Comments extends Model {
  static initModel(sequelize) {
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
    return Comments;
  }
}

module.exports = Comments;

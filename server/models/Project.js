const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Project extends Model { };

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(272),
      allowNull: false,
    },
    gitHub: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deploy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    date: {
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
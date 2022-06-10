import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/index.js';

class ProjectSkill extends Model { };

ProjectSkill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "project",
        key: "id",
      },
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skill",
        key: "id"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "projectSkill",
  }
)

export default ProjectSkill;
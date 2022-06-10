import User from './User.js'
import Project from './Project.js'
import Skill from './Skill.js';
import ProjectSkill from './ProjectSkill.js';

User.hasMany(Project, {
  foreignKey: "user_id"
});

Project.belongsTo(User,
  {
    foreignKey: "user_id"
  });

Project.belongsToMany(Skill, {
  as: "assigned_skills",
  through: ProjectSkill,
  unique: false,
  foreignKey: "project_id"
})

Skill.belongsToMany(Project, {
  as: "assigned_projects",
  through: ProjectSkill,
  unique: false,
  foreignKey: "skill_id"
})

export { User, Project, Skill, ProjectSkill };
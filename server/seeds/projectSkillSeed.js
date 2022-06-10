import { ProjectSkill } from '../models/index.js'

const projectSkillData = [
  //!TAMAGACHA
  {
    project_id: 1,
    skill_id: 1
  },
  {
    project_id: 1,
    skill_id: 2
  },
  {
    project_id: 1,
    skill_id: 3
  },
  {
    project_id: 1,
    skill_id: 6
  },
  {
    project_id: 1,
    skill_id: 8
  },
  {
    project_id: 1,
    skill_id: 9
  },
  {
    project_id: 1,
    skill_id: 10
  },
  {
    project_id: 1,
    skill_id: 11
  },
  {
    project_id: 1,
    skill_id: 13
  },
  {
    project_id: 1,
    skill_id: 14
  },
  {
    project_id: 1,
    skill_id: 15
  },
  {
    project_id: 1,
    skill_id: 16
  },
  {
    project_id: 1,
    skill_id: 20
  },
  {
    project_id: 1,
    skill_id: 21
  },
  {
    project_id: 1,
    skill_id: 22
  },
  {
    project_id: 1,
    skill_id: 24
  },
  {
    project_id: 1,
    skill_id: 25
  },
  {
    project_id: 1,
    skill_id: 26
  },
  {
    project_id: 1,
    skill_id: 27
  },
  {
    project_id: 1,
    skill_id: 28
  },
  {
    project_id: 1,
    skill_id: 29
  },
  //! POKEBATTLER
  {
    project_id: 2,
    skill_id: 1
  },
  {
    project_id: 2,
    skill_id: 2
  },
  {
    project_id: 2,
    skill_id: 3
  },
  {
    project_id: 2,
    skill_id: 4
  },
  {
    project_id: 2,
    skill_id: 6
  },
  {
    project_id: 2,
    skill_id: 8
  },
  {
    project_id: 2,
    skill_id: 9
  },
  {
    project_id: 2,
    skill_id: 10
  },
  {
    project_id: 2,
    skill_id: 11
  },
  {
    project_id: 2,
    skill_id: 12
  },
  {
    project_id: 2,
    skill_id: 13
  },
  {
    project_id: 2,
    skill_id: 15
  },
  {
    project_id: 2,
    skill_id: 16
  },
  {
    project_id: 2,
    skill_id: 24
  },
  {
    project_id: 2,
    skill_id: 25
  },
  {
    project_id: 2,
    skill_id: 29
  },
  //! REACT PORTFOLIO
  {
    project_id: 3,
    skill_id: 1
  },
  {
    project_id: 3,
    skill_id: 2
  },
  {
    project_id: 3,
    skill_id: 3
  },
  {
    project_id: 3,
    skill_id: 6
  },
  {
    project_id: 3,
    skill_id: 8
  },
  {
    project_id: 3,
    skill_id: 9
  },
  {
    project_id: 3,
    skill_id: 10
  },
  {
    project_id: 3,
    skill_id: 11
  },
  {
    project_id: 3,
    skill_id: 14
  },
  {
    project_id: 3,
    skill_id: 15
  },
  {
    project_id: 3,
    skill_id: 16
  },
  {
    project_id: 3,
    skill_id: 20
  },
  {
    project_id: 3,
    skill_id: 21
  },
  {
    project_id: 3,
    skill_id: 22
  },
  {
    project_id: 3,
    skill_id: 24
  },
  {
    project_id: 3,
    skill_id: 25
  },
  //! CODE QUIZ
  {
    project_id: 4,
    skill_id: 1
  },
  {
    project_id: 4,
    skill_id: 2
  },
  {
    project_id: 4,
    skill_id: 3
  },
  {
    project_id: 4,
    skill_id: 30
  },
  //! TECH BLOG
  {
    project_id: 5,
    skill_id: 1
  },
  {
    project_id: 5,
    skill_id: 2
  },
  {
    project_id: 5,
    skill_id: 3
  },
  {
    project_id: 5,
    skill_id: 6
  },
  {
    project_id: 5,
    skill_id: 8
  },
  {
    project_id: 5,
    skill_id: 9
  },
  {
    project_id: 5,
    skill_id: 10
  },
  {
    project_id: 5,
    skill_id: 11
  },
  {
    project_id: 5,
    skill_id: 12
  },
  {
    project_id: 5,
    skill_id: 13
  },
  {
    project_id: 5,
    skill_id: 15
  },
  {
    project_id: 5,
    skill_id: 16
  },
  {
    project_id: 5,
    skill_id: 24
  },
  {
    project_id: 5,
    skill_id: 25
  },
  {
    project_id: 5,
    skill_id: 31
  },
  //! AWS Thought
  {
    project_id: 6,
    skill_id: 1
  },
  {
    project_id: 6,
    skill_id: 2
  },
  {
    project_id: 6,
    skill_id: 3
  },
  {
    project_id: 6,
    skill_id: 4
  },
  {
    project_id: 6,
    skill_id: 6
  },
  {
    project_id: 6,
    skill_id: 8
  },
  {
    project_id: 6,
    skill_id: 9
  },
  {
    project_id: 6,
    skill_id: 10
  },
  {
    project_id: 6,
    skill_id: 11
  },
  {
    project_id: 6,
    skill_id: 20
  },
  {
    project_id: 6,
    skill_id: 21
  },
  {
    project_id: 6,
    skill_id: 22
  },
  {
    project_id: 6,
    skill_id: 32
  },
  {
    project_id: 6,
    skill_id: 33
  },
  {
    project_id: 6,
    skill_id: 34
  },
  {
    project_id: 6,
    skill_id: 35
  },
  {
    project_id: 6,
    skill_id: 36
  },
  {
    project_id: 6,
    skill_id: 37
  },
  {
    project_id: 6,
    skill_id: 38
  },
  {
    project_id: 6,
    skill_id: 39
  },
];

const seedProjectSkill = () => ProjectSkill.bulkCreate(projectSkillData);

export default seedProjectSkill
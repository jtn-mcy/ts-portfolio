const { ProjectSkill } = require('../models')

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
  //!Python newsfeed
  {
    project_id: 7,
    skill_id: 40
  },
  {
    project_id: 7,
    skill_id: 41
  },
  {
    project_id: 7,
    skill_id: 42
  },
  {
    project_id: 7,
    skill_id: 43
  },
  //! React phys color
  {
    project_id: 7,
    skill_id: 44
  },
  {
    project_id: 8,
    skill_id: 1
  },
  {
    project_id: 8,
    skill_id: 20
  },
  {
    project_id: 8,
    skill_id: 21
  },
  {
    project_id: 8,
    skill_id: 22
  },
  {
    project_id: 8,
    skill_id: 45
  },
  //! MCY liquipedia bot
  {
    project_id: 9,
    skill_id: 4
  },
  {
    project_id: 9,
    skill_id: 25
  },
  {
    project_id: 9,
    skill_id: 40
  },
  {
    project_id: 9,
    skill_id: 46
  },
  {
    project_id: 9,
    skill_id: 47
  },
  {
    project_id: 9,
    skill_id: 48
  },
  {
    project_id: 9,
    skill_id: 49
  },
  {
    project_id: 9,
    skill_id: 1
  },
  //! ts portfolio
  {
    project_id: 10,
    skill_id: 50
  },
  {
    project_id: 10,
    skill_id: 20
  },
  {
    project_id: 10,
    skill_id: 22
  },
  {
    project_id: 10,
    skill_id: 24
  },
  {
    project_id: 10,
    skill_id: 25
  },
  {
    project_id: 10,
    skill_id: 26
  },
  {
    project_id: 10,
    skill_id: 51
  },
  {
    project_id: 10,
    skill_id: 52
  },
  {
    project_id: 10,
    skill_id: 53
  },
  {
    project_id: 10,
    skill_id: 54
  },
  {
    project_id: 10,
    skill_id: 55
  },
  {
    project_id: 10,
    skill_id: 56
  },
  {
    project_id: 10,
    skill_id: 2
  },
  {
    project_id: 10,
    skill_id: 13,
  },
  {
    project_id: 10,
    skill_id: 10
  },
  {
    project_id: 10,
    skill_id: 11
  },
  {
    project_id: 10,
    skill_id: 16
  },
  {
    project_id: 11,
    skill_id: 50
  },
  {
    project_id: 11,
    skill_id: 53
  },
  {
    project_id: 11,
    skill_id: 55
  },
  {
    project_id: 11,
    skill_id: 57
  },
  {
    project_id: 11,
    skill_id: 21
  },
  {
    project_id: 11,
    skill_id: 22
  }
];

const seedProjectSkill = () => ProjectSkill.bulkCreate(projectSkillData);

module.exports = seedProjectSkill;
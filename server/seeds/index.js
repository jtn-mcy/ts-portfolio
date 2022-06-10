// import sequelize from '../config/index.js';
// import seedUser from './userSeed.js'
// import seedProject from './projectSeed.js'
// import seedSkill from './skillSeed.js'
// import seedProjectSkill from './projectSkillSeed.js'

const sequelize = require('../config');
const seedUser = require('./userSeed');
const seedProject = require('./projectSeed');
const seedSkill = require('./skillSeed');
const seedProjectSkill = require('./projectSkillSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('----------------Users seeded----------------');
  await seedProject();
  console.log('----------------Projects seeded----------------');
  await seedSkill();
  console.log('----------------Skills seeded----------------');
  await seedProjectSkill();
  console.log('----------------Proj+Skill join table seeded----------------');
  process.exit(0);
}

seedAll();
const sequelize = require('../config');
const seedUser = require('./userSeed');
const seedProject = require('./projectSeed');
const seedSkill = require('./skillSeed');
const seedProjectSkill = require('./projectSkillSeed');

const seedAll = async () => {
  try {
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
  } catch (err) {
    console.error(err);
  }
}

seedAll();
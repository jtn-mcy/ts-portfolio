const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  console.log("Connect to Heroku Postgres...");
  sequelize = new Sequelize(process.env.DATABASE_URL+'?sslmode=require');
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432
    }
  );
}

module.exports = sequelize
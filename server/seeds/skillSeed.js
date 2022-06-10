import { Skill } from '../models/index.js'

const skillData = [
  //|1
  {
    name: "JavaScript"
  },
  {
    name: "HTML5"
  },
  {
    name: "CSS"
  },
  {
    name: "Web API"
  },
  {
    name: "jQuery"
  },
  {
    name: "Server Side API"
  },
  {
    name: "Insomnia"
  },
  {
    name: "Fetch"
  },
  {
    name: "JSON"
  },
  //|10
  {
    name: "Node.js"
  },
  {
    name: "Express.js"
  },
  {
    name: "Handlebars.js"
  },
  {
    name: "Heroku"
  },
  {
    name: "JSON Web Tokens"
  },
  {
    name: "MySQL"
  },
  {
    name: "Sequelize ORM"
  },
  {
    name: "MongoDB"
  },
  {
    name: "Mongoose ODM"
  },
  {
    name: "Object-Oriented Programming"
  },
  //|20
  {
    name: "React"
  },
  {
    name: "React Hooks"
  },
  {
    name: "JSX"
  },
  {
    name: "GraphQL"
  },
  {
    name: "bcrypt"
  },
  {
    name: "dotenv"
  },
  {
    name: "node-cron"
  },
  {
    name: "node-fetch"
  },
  {
    name: "sweetalert2"
  },
  {
    name: "howler"
  },
  //|30
  {
    name: "Local Storage"
  },
  {
    name: "Express-sessions"
  },
  {
    name: "Amazon Web Services (AWS)"
  },
  {
    name: "Amazon S3"
  },
  {
    name: "Amazon EC2"
  },
  {
    name: "Amazon DynamoDB"
  },
  {
    name: "aws-sdk"
  },
  {
    name: "multer"
  },
  {
    name: "nginx"
  },
  {
    name: "pm2"
  }
  //|40 below
];

const seedSkill = () => Skill.bulkCreate(skillData);

export default seedSkill
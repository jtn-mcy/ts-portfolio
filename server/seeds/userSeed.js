import 'dotenv/config'
import { User } from '../models/index.js'

const userData = [
  {
    username: "jtn_admin",
    email: "johnnytrucnguyen@gmail.com",
    password: process.env.admin_PW,
    is_admin: true
  },
  {
    username: "jtn",
    email: "kwazie@gmail.com",
    password: "12345678",
    is_admin: false
  }
];

const seedUser = () => User.bulkCreate(userData);

export default seedUser;
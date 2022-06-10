import express from 'express'
import { Project } from '../../models/index.js'
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const skillData = await Project.findAll();
    const skill = skillData.map(skill => skill.get({ plain: true }))
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json(err);
  }
})

export default router
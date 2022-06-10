const router = require('express').Router();
const { Project } = require('../../models/');

router.get('/', async (req, res) => {
  try {
    const skillData = await Project.findAll();
    const skill = skillData.map(skill => skill.get({ plain: true }))
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router
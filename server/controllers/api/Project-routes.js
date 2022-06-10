const router = require('express').Router();
const { Project } = require('../../models/');
//* /api/projects

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll();
    const project = projectData.map(skill => skill.get({ plain: true }))
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router
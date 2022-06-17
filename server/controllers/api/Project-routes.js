const router = require('express').Router();
const { Project, Skill } = require('../../models/');
//* /api/projects

router.get('/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [{ model: Skill, as: 'assigned_skills', through: { attributes: []}}]
    })
    res.status(200).json(projectData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

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
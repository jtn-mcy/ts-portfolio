const router = require('express').Router();
const projectRoutes = require('./Project-routes')

router.use('/projects', projectRoutes);

module.exports = router
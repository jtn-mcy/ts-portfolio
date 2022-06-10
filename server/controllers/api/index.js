import express from 'express'
import projectRoutes from './Project-routes.js'

const router = express.Router();

router.use('/projects', projectRoutes);

export default router
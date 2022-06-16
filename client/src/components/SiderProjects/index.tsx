import { Card } from 'antd'
import React from 'react'
import ProjectCards from './ProjectCardsSider'
import { useGetUserProjects } from '../../api'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const SiderProjects: React.FC = () => {
  const { data: projects } = useGetUserProjects();
  const navigate = useNavigate();
  return (
    <>
      <Card className={styles.Project} onClick={() => navigate('/projects')}>Projects</Card>
      {projects && projects.map(project => <ProjectCards key={project.id} project={project} />)}
    </>
  )
}

export default SiderProjects
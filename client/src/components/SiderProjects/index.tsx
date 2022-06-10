import { Card } from 'antd'
import React from 'react'
import ProjectCards from './ProjectCardsSider'
import { GetUserProjects } from '../../api'

export type Project = {
  id: number
  name: string
  description: string
}

const SiderProjects: React.FC = () => {
  const { data: projects } = GetUserProjects();

  return (
    <>
      <Card>Projects</Card>
      {projects && projects.map(project => <ProjectCards key={project.id} project={project} />)}
    </>
  )
}

export default SiderProjects
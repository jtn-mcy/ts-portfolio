import { Card } from 'antd'
import React from 'react'
import ProjectCards from './ProjectCardsSider'
import { useGetUserProjects } from '../../api'

const SiderProjects: React.FC = () => {
  const { data: projects } = useGetUserProjects();

  return (
    <>
      <Card>Projects</Card>
      {projects && projects.map(project => <ProjectCards key={project.id} project={project} />)}
    </>
  )
}

export default SiderProjects
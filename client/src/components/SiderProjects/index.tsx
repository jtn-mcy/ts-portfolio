import { Card } from 'antd'
import React from 'react'
import ProjectCards from './ProjectCardsSider'

export type Project = {
  id: number
  name: string
  description: string
}

const testProjects: Project[] = [
  {
    id: 1,
    name: 'project 1',
    description: 'this is a project'
  },
  {
    id: 2,
    name: 'project 2',
    description: 'this is another project'
  }
]

const SiderProjects: React.FC = () => {
  //get projects hook here

  
  // pass the projects as a prop into ProjectCards
  return (
    <>
      <Card>Projects</Card>
      {testProjects.map(project => <ProjectCards key={project.id} project={project} />)}
    </>
  )
}

export default SiderProjects
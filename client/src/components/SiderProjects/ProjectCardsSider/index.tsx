import React from 'react'
import { Card } from 'antd'
import { Project } from '..'
import { useNavigate } from 'react-router-dom'

const ProjectCards: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card hoverable={true} onClick={() => navigate(`projects/${project.id}`)}>
      <Card.Meta title={project.name} description={project.description} />
    </Card>
  )
}

export default ProjectCards
import React from 'react'
import { Card } from 'antd'
import { Project } from '../../../api'
import { useNavigate } from 'react-router-dom'

const maxDescriptionLength = 60

const ProjectCards: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();
  const shorterDescription = (string: string) => {
    if (string.length < maxDescriptionLength) return string
    else return string.slice(0, maxDescriptionLength) + '...'
  }
  return (
    <Card hoverable={true} onClick={() => navigate(`projects/${project.id}`)}>
      <Card.Meta title={project.name} description={shorterDescription(project.description)} />
    </Card>
  )
}

export default ProjectCards
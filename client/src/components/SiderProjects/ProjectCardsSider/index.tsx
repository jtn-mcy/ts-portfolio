import React, { useContext } from 'react'
import { Card } from 'antd'
import { Project } from '../../../api'
import { useNavigate } from 'react-router-dom'
import { ProjectContext } from '../../../context/selectedProject'

const maxDescriptionLength = 60

const ProjectCards: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();
  const shorterDescription = (string: string) => {
    if (string.length < maxDescriptionLength) return string
    else return string.slice(0, maxDescriptionLength) + '...'
  }

  const [, setProjectId] = useContext(ProjectContext);

  const handleClick = () => {
    setProjectId(project.id.toString())
    navigate(`/projects/${project.id}`)
  }

  return (
    <Card hoverable={true} onClick={handleClick}>
      <Card.Meta title={project.name} description={shorterDescription(project.description)} />
    </Card>
  )
}

export default ProjectCards
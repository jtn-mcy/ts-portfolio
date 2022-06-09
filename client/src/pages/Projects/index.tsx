import React from 'react'
import { useParams } from 'react-router-dom';


const ProjectPage: React.FC = () => {
  const { projectId } = useParams();

  return (
    <div>Project {projectId}</div>
  )
}

export default ProjectPage
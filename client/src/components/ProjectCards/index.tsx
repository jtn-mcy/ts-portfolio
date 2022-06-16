import React, { useContext } from 'react'
import { Card, Empty, Spin, Row, Col } from 'antd'
import { Project, useGetUserProjects } from '../../api'
import { projectPlaceholder } from '../../assets/images'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { ProjectContext } from '../../context/selectedProject'

const BigProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();
  const [projectId, setProjectId] = useContext(ProjectContext)
  const handleClick = () => {
    setProjectId('');
    setProjectId(project.id.toString())
    projectId && navigate(`/projects/${project.id}`)
  }

  return (
    <Card
      headStyle={{ display: 'flex', justifyContent: "center" }}
      bodyStyle={{ color: "black" }}
      className={styles.BigProjectCard}
      key={project.id}
      title={
        <img alt={project.name} src={project.pictures ? project.pictures[0] : projectPlaceholder} />
      }
      onClick={handleClick}
    >
      {project.description}
    </Card>
  )
}

const BigProjectCards: React.FC = () => {
  const { data: projects, isLoading } = useGetUserProjects();

  return (
    <div style={{ overflowX: 'hidden', padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Spin />
        ) : (
          projects ? (
            projects.map(project => {
              return (
                <Col span={6} >
                  <BigProjectCard project={project} />
                </Col>
              )
            })
          ) : (
            <Empty />
          )
        )}
      </Row>

    </div>
  )
}

export default BigProjectCards
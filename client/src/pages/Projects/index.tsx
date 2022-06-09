import React from 'react'
import { useParams } from 'react-router-dom';
import { Project } from '../../components/SiderProjects';
import { Col, Row } from 'antd';
import styles from './index.module.scss'

const ProjectGrid: React.FC = () => {
  const { projectId } = useParams();

  return (
    <Row className={styles.Row}>
      <Col className={styles.ColumnPadding} span={3} />
      <Col span={18} >
        <div>Project {projectId}</div>
      </Col>
      <Col className={styles.ColumnPadding} span={3} />
    </Row>
  )
}

const ProjectPage: React.FC<{ project?: Project }> = ({ project }) => {
  const { projectId } = useParams();

  return (
    projectId ? (
      <ProjectGrid />
    ) : (
      <div>Projects cards here</div>
    ) 
  )
}

export default ProjectPage
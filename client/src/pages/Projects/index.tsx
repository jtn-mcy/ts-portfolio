import React from 'react'
import { useParams } from 'react-router-dom';
import { Project } from '../../components/SiderProjects';
import { Col, Row, Carousel } from 'antd';
import styles from './index.module.scss'

const ProjectCarousel: React.FC = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className={styles.Carousel}>1</h3>
      </div>
      <div>
        <h3 className={styles.Carousel}>2</h3>
      </div>
      <div>
        <h3 className={styles.Carousel}>3</h3>
      </div>
      <div>
        <h3 className={styles.Carousel}>4</h3>
      </div>
    </Carousel>
  )
}

const ProjectGrid: React.FC = () => {
  const { projectId } = useParams();

  return (
    <Row className={styles.Row}>
      <Col className={styles.ColumnPadding} span={3} />
      <Col span={18} >
        <ProjectCarousel />
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
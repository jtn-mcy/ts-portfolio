import React from 'react'
import { useParams } from 'react-router-dom';
import { Project } from '../../components/SiderProjects';
import { Col, Row, Carousel, Descriptions, Badge } from 'antd';
import styles from './index.module.scss'

const ProjectDescriptions: React.FC = () => {
  return (
    <Descriptions title="Project 1" bordered column={1}>
      <Descriptions.Item label="Project Description">Current project. Collect all five Tamas -- they each have different stories! Feed, play, and take them out. See what they're saying when they're hungry, sad, or happy. Make sure to keep up and check on them to see their happiness level or else they will die.</Descriptions.Item>
      <Descriptions.Item label="Tech used"> JavaScript | HTML5 | CSS | Server Side API | Fetch | JSON | Node.js | Express.js | Heroku | JSON Web Tokens | MySQL | Sequelize ORM | React | React Hooks | JSX | bcrypt | dotenv | node-cron | node-fetch | sweetalert2 | howler |</Descriptions.Item>
      <Descriptions.Item label="Date released">Sept 2021</Descriptions.Item>
      <Descriptions.Item label="Status">
        <Badge status='success' text='Running' />
      </Descriptions.Item>
    </Descriptions>
  )
}

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
  return (
    <div style={{ overflow: 'hidden' }}>
      <Row className={styles.Row} gutter={32} >
      <Col className={styles.ColumnPadding} span={3} />
      <Col span={18} >
        <ProjectCarousel />
          <div>
            <ProjectDescriptions />
          </div>
      </Col>
      <Col className={styles.ColumnPadding} span={3} />
    </Row>
    </div>
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
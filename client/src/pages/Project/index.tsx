import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useGetUserProject } from '../../api'
import { Col, Row, Carousel, Descriptions, Badge, Spin, Empty, Image } from 'antd';
import styles from './index.module.scss'
import { ProjectContext } from '../../context/selectedProject';

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

const ProjectCarousel: React.FC<{ pictures: string[] }> = ({ pictures }) => {
  return (
    <Carousel autoplay>
      {pictures.length ? pictures.map((picture) => (
        <div key={picture}>
          <Image className={styles.Carousel} src={picture} />
        </div>
      )) : (
        <Empty />
      )}
    </Carousel>
  )
}

const ProjectGrid: React.FC<{ id: string }> = ({ id }) => {
  const [projectId] = useContext(ProjectContext)
  const { data: project, isLoading, refetch } = useGetUserProject(projectId);

  useEffect(() => {
    const getproject = async () => await refetch();
    getproject()
  }, [projectId, refetch])

  return (
    isLoading ? <Spin /> :
      project ? (
        <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
          <Row className={styles.Row} gutter={32} >
            <Col className={styles.ColumnPadding} span={3} />
            <Col span={18} >
              <Row justify='center'>
                <ProjectCarousel pictures={project.pictures ?? []} />
              </Row>
              <div>
                <ProjectDescriptions />
              </div>
            </Col>
            <Col className={styles.ColumnPadding} span={3} />
          </Row>
        </div>
      ) : <Empty />
  )
}

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [id, setId] = useState<string>()
  useEffect(() => {
    if (projectId) {
      setId(projectId)
    }
  }, [projectId])
  return (
    id ? (
      <ProjectGrid id={id} />
    ) : (
      <div>Projects cards here</div>
    ) 
  )
}

export default ProjectPage
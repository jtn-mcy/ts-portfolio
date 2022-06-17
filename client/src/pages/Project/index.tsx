import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useGetUserProject, Project } from '../../api'
import { Col, Row, Carousel, Descriptions, Spin, Empty, Image, Typography } from 'antd';
import styles from './index.module.scss'
import { ProjectContext } from '../../context/selectedProject';
import { projectPlaceholder as placeholderCat } from '../../assets/images'
import BigProjectCards from '../../components/BigProjectCards';
import moment from 'moment'

const ProjectDescriptions: React.FC<{ project: Project }> = ({ project }) => {

  return (
    <Descriptions title={<Typography.Title level={2}>{project.name}</Typography.Title>} bordered column={1}>
      <Descriptions.Item label="Project Description">{project.description}</Descriptions.Item>
      <Descriptions.Item label="Tech used">
        {project.assigned_skills?.length && project.assigned_skills.map((skill, i) => {
          return (i + 1) === (project.assigned_skills?.length) ? skill.name : skill.name + ', '
        })}
      </Descriptions.Item>
      {project.date && <Descriptions.Item label="Date released">{`${moment(project.date).format('MMMM YYYY')}`}</Descriptions.Item>}
      {project.gitHub && <Descriptions.Item label="Github"><a className={styles.Link} href={project.gitHub}>Github</a></Descriptions.Item>}
      {project.deploy && <Descriptions.Item label="Deployment"><a className={styles.Link} href={project.deploy}>Deployment</a></Descriptions.Item>}

    </Descriptions>
  )
}

const ProjectCarousel: React.FC<{ pictures: string[] }> = ({ pictures }) => {
  return (
    <div className={styles.CarouselWrapper}>
      <Carousel autoplay>
        {pictures.length ? pictures.map((picture, index) => (
          <Image key={index}  alt='project' src={picture} preview={false} />
      )) : (
            <Image alt='placeholder' src={placeholderCat} preview={false} />
      )}
      </Carousel>
    </div>
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
        <div className={styles.Wrapper}>
          <Row className={styles.Row} gutter={32} >
            <Col className={styles.ColumnPadding} span={3} />
            <Col span={18} >
              <Row justify='center'>
                <ProjectCarousel pictures={project.pictures ?? []} />
              </Row>
              <div>
                <ProjectDescriptions project={project} />
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
    } else {
      setId('')
    }
  }, [projectId])
  return (
    id ? (
      <ProjectGrid id={id} />
    ) : (
        <BigProjectCards />
    ) 
  )
}

export default ProjectPage
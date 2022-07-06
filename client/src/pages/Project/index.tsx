import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useGetUserProject, Project } from '../../api'
import { Col, Row, Carousel, Descriptions, Spin, Empty, Image, Typography, Space } from 'antd';
import styles from './index.module.scss'
import { ProjectContext } from '../../context/selectedProject';
import { projectPlaceholder as placeholderCat } from '../../assets/images'
import BigProjectCards from '../../components/BigProjectCards';
import moment from 'moment'
import { svgs } from '../../assets/images'

const { Link } = Typography

const ProjectDescriptions: React.FC<{ project: Project }> = ({ project }) => {
  const { GitHub, LinkOut } = svgs.socials
  return (
    <Descriptions
      title={
        <Space align='baseline' >
          <Typography.Title
            level={1}
          >
            {project.name}
          </Typography.Title>
          {project.gitHub && <Link href={project.gitHub} target='_blank'><Image src={GitHub} preview={false} style={{ maxWidth: '100px' }} /></Link>}
          {project.deploy && <Link href={project.deploy} target='_blank'><Image src={LinkOut} preview={false} style={{ maxWidth: '100px' }} /></Link>}
        </Space>
      }
      bordered column={1}
    >
      <Descriptions.Item label="Project Description">{project.description}</Descriptions.Item>
      <Descriptions.Item label="Tech used">
        {project.assigned_skills?.length && project.assigned_skills.map((skill, i) => {
          return (i + 1) === (project.assigned_skills?.length) ? skill.name : skill.name + ', '
        })}
      </Descriptions.Item>
      {project.date && <Descriptions.Item label="Date released">{`${moment(project.date).format('MMMM YYYY')}`}</Descriptions.Item>}
    </Descriptions>
  )
}

const ProjectCarousel: React.FC<{ pictures: string[] }> = ({ pictures }) => {
  return (
    <div className={styles.CarouselWrapper}>
      <Carousel autoplay >
        {pictures.length ? pictures.map((picture, index) => (
          <Image
            key={index}
            alt={`project picture #${index}`}
            src={picture}
            preview={false}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.alt = 'Preview pic unavailable'
              currentTarget.src = placeholderCat;
            }}
          />
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
            <Col span={18}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Space direction='vertical' align='center'>
                  <div style={{ maxWidth: '750px' }}>
                <ProjectCarousel pictures={project.pictures ?? []} />
                  </div>
                  <div style={{ maxWidth: '750px' }}>
                    <ProjectDescriptions project={project} />
                  </div>
                </Space>
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
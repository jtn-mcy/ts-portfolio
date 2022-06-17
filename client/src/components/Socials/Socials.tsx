import React from 'react'
import { Typography, Space } from 'antd'
import styles from './index.module.scss'
import { svgs } from '../../assets/images'

const { Text } = Typography

const Socials: React.FC = () => {
  const { LinkedIn, Resume, Medium, GitHub } = svgs.socials
  return (
    <div className={styles.SocialsWrapper}>
      <Text type='warning'>Johnny Portfolio ©2022</Text>
      <div className={styles.Socials}>
        <Space size='large' direction='horizontal'>
          <a href='https://www.linkedin.com/in/johnny-truc-nguyen/' rel='noreferrer' target='_blank'>
            <img alt='linkedin' src={LinkedIn} />
          </a>
          <a href='https://github.com/NguyenJohnnyT' rel='noreferrer' target='_blank'>
            <img alt='github' src={GitHub} />
          </a>
          <a href='https://mechocreamy.medium.com/' rel='noreferrer' target='_blank'>
            <img alt='medium' src={Medium} />
          </a>
          <a href='https://drive.google.com/file/d/1mqpod9Y32h-gWrE7T2nogV96KRDpTGfp/view?usp=sharing' rel='noreferrer' target='_blank'>
            <img alt='linkedin' src={Resume} />
          </a>
        </Space>
      </div>
    </div>
  )
}

export default Socials
import React from 'react'
import styles from './index.module.scss'
import { Timeline as AntTimeline, Typography, Space } from 'antd'

const { Title } = Typography
const { Item } = AntTimeline

const ProfessionalTimeline: React.FC = () => {
  return (
    <Space className={styles.CenterCard} align='center' direction='vertical' style={{ padding: '20px' }}>
      <Title level={3}>Professional 👨‍💻 Timeline</Title>
      <AntTimeline mode='left'>
        <Item label='27 January 2021'>Enroll in MITx: 6.00.1x Introduction to Computer Science and Programming Using Python</Item>
        <Item label='1 April 2021'>MITx: 6.00.1x Certificate of Completion -- Grade 98%</Item>
        <Item label='5 April 2021'>Enroll in MITx: 6.00.2x Introduction to Computational Thinking and Data Science</Item>
        <Item label='26 May 2021'>Complete 6.00.2x Course</Item>
        <Item label='14 June 2021'>Enroll in UC Berkeley Extension Web Development Coding Boot Camp</Item>
        <Item label='9 August 2021'>🎉
          <a className={styles.Link} target='_blank' rel='noreferrer' href='https://pokebattlerproject.herokuapp.com/'>Pokebattler App released </a>(
          <a className={styles.Link} target='_blank' rel='noreferrer' href='https://github.com/NguyenJohnnyT/pokebattler'>GitHub</a>)
        </Item>
        <Item label='7 September 2021'>🎉
          <a className={styles.Link} target='_blank' rel='noreferrer' href='https://jtn-tamagacha.herokuapp.com/'>Tamagacha App released </a>(
          <a className={styles.Link} target='_blank' rel='noreferrer' href='https://github.com/NguyenJohnnyT/tamagacha'>GitHub</a>)
        </Item>
        <Item label='7 September 2021'>🎓 Graduate from Coding Boot Camp -- Grade A+</Item>
        <Item label='November 2021'>👨‍🏫 Start as Teaching Assistant for UC Berkeley Extension Coding Boot Camp</Item>
        <Item label='23 November 2021'>🎉
          Participate in the LiquidHacks 2.0 2021 Hackathon (
          <a className={styles.Link} target='_blank' rel='noreferrer' href='https://github.com/NguyenJohnnyT/MCY-LiquidHacks-Discord-Bot'>GitHub</a> |
          <a className={styles.Link} target='_blank' rel='noreferrer' href='https://devpost.com/software/mcy-liquipedia-bot'> Devpost</a>)
        </Item>
        <Item label='22 January 2022'>👨‍🏫 Start first cohort at UC Berkeley Extension Coding Boot Camp</Item>
        <Item label='07 February 2022'>👨‍💻 Start as a junior UI/UX Engineer at Kernel</Item>
        <Item label='27 May 2022'>👋 Leave Kernel</Item>
      </AntTimeline>
    </Space>
  )
}

      </AntTimeline>
    </Space>
  )
}

const Timeline: React.FC = () => {
  return (
    <Space>
      <ProfessionalTimeline />
    </Space>
  )
}

export default Timeline
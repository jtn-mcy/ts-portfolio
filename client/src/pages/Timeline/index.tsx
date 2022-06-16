import React from 'react'
import { Timeline as AntTimeline, Space } from 'antd'

const { Item } = AntTimeline

const Timeline: React.FC = () => {
  return (
    <Space align='start' style={{ padding: '20px' }}>
      <AntTimeline mode='left'>
        <Item label='27 January 2021'>Enroll in MITx: 6.00.1x Introduction to Computer Science and Programming Using Python</Item>
        <Item label='1 April 2021'>MITx: 6.00.1x Certificate of Completion -- Grade 98%</Item>
        <Item label='5 April 2021 - 26 May 2021'>Enroll in MITx: 6.00.2x Introduction to Computational Thinking and Data Science</Item>
        <Item label='14 June 2021'>Enroll in UC Berkeley Extension Web Development Coding Boot Camp</Item>
        <Item label='02 September 2021'>Graduate from Coding Boot Camp</Item>
        <Item label='November 2021'>Teaching Assistant for UC Berkeley Extension Coding Boot Camp</Item>
        <Item label='07 February 2022'>Start as a junior UI/UX Engineer at Kernel</Item>


      </AntTimeline>
    </Space>
  )
}

export default Timeline
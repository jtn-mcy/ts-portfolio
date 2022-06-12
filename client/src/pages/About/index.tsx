import React from 'react'
import styles from './index.module.scss'
import { Row, Col, Card } from 'antd'

const { Grid } = Card

const gridStyle = { width: '10%', alignItems: "center", border: 'none' }
const arr = [1, 2, 3, 4, 1, 2, 2, 1, 23, 123, 132, 132, 21, 2, 2, 2]

const About: React.FC = () => {
  return (
    <div className={styles.CenterCard}>
      <Row gutter={32} style={{ height: '100%', margin: 0, overflowY: "auto" }}>
        <Col span={8} style={{ backgroundColor: 'red', padding: '8px' }}>
          <Card cover={<img alt='pfp' src='https://imgur.com/53CzRbW.jpg' />}>
            <Card bordered={false}>
              {arr && arr.map((_, index) => <Grid style={gridStyle}>Icon {index}</Grid>)}
            </Card>
          </Card>
        </Col>
        <Col span={16} style={{ backgroundColor: 'green', padding: '16px' }}>
          <h1> Johnny Nguyen</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. A condimentum vitae sapien pellentesque habitant morbi tristique. Ut pharetra sit amet aliquam id. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Ut porttitor leo a diam. Vitae aliquet nec ullamcorper sit amet. Sed enim ut sem viverra aliquet eget sit amet tellus. Pharetra sit amet aliquam id diam maecenas. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Dolor magna eget est lorem ipsum dolor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Nisi vitae suscipit tellus mauris a. Hac habitasse platea dictumst quisque sagittis purus. Vulputate odio ut enim blandit volutpat maecenas volutpat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ut tristique et egestas quis ipsum suspendisse. Nulla porttitor massa id neque aliquam. Gravida arcu ac tortor dignissim convallis aenean et tortor at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. A condimentum vitae sapien pellentesque habitant morbi tristique. Ut pharetra sit amet aliquam id. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Ut porttitor leo a diam. Vitae aliquet nec ullamcorper sit amet. Sed enim ut sem viverra aliquet eget sit amet tellus. Pharetra sit amet aliquam id diam maecenas. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Dolor magna eget est lorem ipsum dolor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Nisi vitae suscipit tellus mauris a. Hac habitasse platea dictumst quisque sagittis purus. Vulputate odio ut enim blandit volutpat maecenas volutpat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ut tristique et egestas quis ipsum suspendisse. Nulla porttitor massa id neque aliquam. Gravida arcu ac tortor dignissim convallis aenean et tortor at.</p>
        </Col>
      </Row>
    </div>
  )
}

export default About
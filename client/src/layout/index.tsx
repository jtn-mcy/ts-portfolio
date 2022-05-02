import React from 'react'
import styles from './index.module.scss'
import { Layout, Menu, Image, Space } from 'antd'
import eevee from '../assets/eeveeFavicon.png'
const { Header, Content, Footer } = Layout;

type LayoutProps = {
  title?: string
  children?: JSX.Element | JSX.Element[]
}

const items = [
  {
    key: 'Home',
    label: 'Home'
  },
  {
    key: 'About',
    label: 'About'
  }
]

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout className='layout'>
      <Header className={styles.header} >
        <Space direction='horizontal' size='large' >
          <Image src={eevee} preview={false} />
          <Menu theme='dark' mode='horizontal' items={items} />
        </Space>
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}> Johnny Portfolio ©2022 - Styled by Ant Design </Footer>
    </Layout>
  )
}

export default LayoutPage
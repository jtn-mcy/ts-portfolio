import React from 'react'
import styles from './index.module.scss'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout;


type LayoutProps = {
  title?: string
  children?: JSX.Element | JSX.Element[]
}

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout className='layout'>
      <Header className={styles.header}>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' items={[{ key: 1, label: 'Nav one' }, { key: 2, label: 'Nav two' }]} />
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}> Johnny Portfolio ©2022 - Styled by Ant Design </Footer>
    </Layout>
  )
}

export default LayoutPage
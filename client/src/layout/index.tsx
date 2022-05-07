import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout, Menu, Image, Space, MenuProps } from 'antd'
import SiderProjects from '../components/SiderProjects'
import eevee from '../assets/eeveeFavicon.png'


const { Header, Content, Footer, Sider } = Layout;

type LayoutProps = {
  title?: string
  children?: JSX.Element | JSX.Element[]
}

const items: MenuProps['items'] = [
  {
    key: 'home',
    label: (
      <Link to='/' >
        Home
      </Link>
    )

  },
  {
    key: 'about',
    label: (
      <Link to='/about'>
        About
      </Link>
    )
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
      <Layout>
        <Sider>
          <Suspense >
            {/* TODO: add a loader for suspense */}
            <SiderProjects />
          </Suspense>
        </Sider>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
      <Footer className={styles.footer}> Johnny Portfolio ©2022 - Styled by Ant Design </Footer>
    </Layout>
  )
}

export default LayoutPage
import React, { Suspense } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout, Menu, Image, MenuProps } from 'antd'
import SiderProjects from '../components/SiderProjects'
import { eeveeFavicon as eevee } from '../assets/images'

const { Header, Content, Sider } = Layout;

type LayoutProps = {
  title?: string
  children?: JSX.Element | JSX.Element[]
}

const items: MenuProps['items'] = [
  {
    key: '',
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
  },
  {
    key: 'projects',
    label: (
      <Link to='/projects'>
        Projects
      </Link>
    )
  }
]

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className={styles.Layout}>
      <Header className={styles.Header} >
        <Image className={styles.Logo} src={eevee} preview={false} onClick={() => navigate('/')} />
        <Menu className={styles.Menu} theme='dark' mode='horizontal' selectedKeys={[location.pathname.split('/')[1]]} items={items} />
      </Header>
      <Layout>
        <Sider className={styles.Sider}>
          <Suspense >
            {/* TODO: add a loader for suspense */}
            <SiderProjects />
          </Suspense>
        </Sider>
        <Content className={styles.Content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
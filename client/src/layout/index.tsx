import React, { Suspense } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout, Menu, Image, MenuProps, Typography, Space } from 'antd'
import SiderProjects from '../components/SiderProjects'
import { eeveeFavicon as eevee } from '../assets/images'
import { svgs } from '../assets/images'

const { Text } = Typography

const { Header, Content, Footer, Sider } = Layout;

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
  const { LinkedIn, Resume, Medium, GitHub } = svgs.socials
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
      <Footer className={styles.Footer}>
        <Text type='warning'>Johnny Portfolio ©2022 - Styled by Ant Design</Text>
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
      </Footer>
    </Layout>
  )
}

export default LayoutPage
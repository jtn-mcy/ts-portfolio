import React from 'react'
import { Breadcrumb } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

type BreadcrumbProps = {
  params: string[]
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ params }) => {
  const navigate = useNavigate();
  return (
    <Breadcrumb className={styles.breadcrumbs}>
      <Breadcrumb.Item className={styles.item} onClick={() => navigate('/')}>Home</Breadcrumb.Item>
      {params && params.map(path => <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}

export default Breadcrumbs
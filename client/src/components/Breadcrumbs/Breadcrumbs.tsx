import React from 'react'
import { Breadcrumb } from 'antd'
import styles from './index.module.scss'

type BreadcrumbProps = {
  params: string[]
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ params }) => {
  return (
    <Breadcrumb className={styles.breadcrumbs}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {params && params.map(path => <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}

export default Breadcrumbs
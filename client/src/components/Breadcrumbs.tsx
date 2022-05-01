import React from 'react'
import { Breadcrumb } from 'antd'

type BreadcrumbProps = {
  params: string[]
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ params }) => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {params && params.map(path => <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}

export default Breadcrumbs
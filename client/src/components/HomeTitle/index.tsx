import React from 'react'
import { Card } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";

const HomeTitle = () => {
  const navigate = useNavigate();

  return (
    <Card hoverable={true} className={styles.HomeTitle} onClick={() => navigate('/about')}>
      <Card.Meta title="Johnny Nguyen" description="Software engineer. Bay Area Native. Nerd." />
    </Card>
  )
}

export default HomeTitle
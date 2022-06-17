import React from 'react'
import { Card } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";
import { itme } from '../../assets/images';

const HomeTitle = () => {
  const navigate = useNavigate();

  return (
    <Card hoverable={true} className={styles.HomeTitle} onClick={() => navigate('/about')}>
      <Card.Meta title="Johnny Nguyen" description="Software engineer. Bay Area Native. Piano dude." />
      <img alt="It's me" src={itme} className={styles.itme}/>
    </Card>
  )
}

export default HomeTitle
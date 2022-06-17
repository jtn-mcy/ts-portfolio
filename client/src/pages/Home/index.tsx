import React, { useState, useEffect } from 'react'
import { GetUnsplashImg } from '../../api'
import { placeholderBG as placeholder } from '../../assets/images'
import HomeTitle from '../../components/HomeTitle'
import styles from './index.module.scss'

const Home: React.FC = () => {
  const [background, setBackground] = useState<string>();
  const { data: images } = GetUnsplashImg();

  const getRandomImage: (images: string[]) => string = images => {
    return images[Math.floor(Math.random() * images.length)]
  }

  useEffect(() => {
    if (images) setBackground(getRandomImage(images))
  }, [images])

  const style = {
    backgroundImage: `url(${background ? background : placeholder})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
  }

  return (
    <div className={styles.HomeLayout} style={style}>
      <HomeTitle />
    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import { GetUnsplashImg } from '../../api'
import placeholder from '../../assets/placeholderBG.png'


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
    height: '100%'
  }

  return (
    <div style={style}></div>
  )
}

export default Home
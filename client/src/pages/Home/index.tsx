import React, { useState, useEffect } from 'react'
import { GetUnsplashImg } from '../../api'



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
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height: '100vh'
  }

  return (
    <div style={style}></div>
  )
}

export default Home
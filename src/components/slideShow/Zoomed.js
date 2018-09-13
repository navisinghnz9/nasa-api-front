import React from 'react'
import { default as Hero } from '../hero/Hero'

const styles = {

}

export default ({image, back}) => {
  return (
    <Hero
    title={image.title}
    subtitle=""
    full
    bg={image.hdurl}
    >
    <div className="content">
      <a className="button" onClick={()=>back()}>Go Back</a>
      <p className="subtitle"></p>
      <p>{image.explanation}</p>
    </div>

    {/*<img src={image.url} />*/}
    </Hero>
  )
}

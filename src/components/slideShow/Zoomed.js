import React from 'react'
import { default as Hero } from '../hero/Hero'

export default ({image, back}) => {
  console.log(image);
  return (
    <Hero
    title="ZOOMED"
    subtitle=""
    full
    >
    <a className="button" onClick={()=>back()}>Go Back</a>
    <img src={image.url} />
    </Hero>
  )
}

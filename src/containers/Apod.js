import React from 'react'

import { default as Hero } from '../components/hero/Hero'

const  Apod = (props) => {
  return (
    <Hero
      title={'Welcome to Nasa. Choose one'}
      subtitle=""
      full
      >
      <p>A photo of the day</p>
    </Hero>
  )
}

export default Apod

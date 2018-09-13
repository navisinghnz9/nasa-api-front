import React from 'react'

import {default as Slide} from './Slide'

export default (props) => {
  //const {date, explanation, media_type, title, url}

  const renderArray = (photoSet) => {
    return photoSet.map((photo,index) => (
    <div key={index} className="column is-one-quarter">
      <Slide photo={photo} width="256"/>
    </div>
    ))
  }
  return (
    <div className="columns is-multiline ">
      {renderArray(props.photoSet)}
    </div>
  )
}

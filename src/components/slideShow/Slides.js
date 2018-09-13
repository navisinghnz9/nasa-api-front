import React from 'react'

import {default as Slide} from './Slide'

export default ({ photoSet, loader, zoomed }) => {
  //const {date, explanation, media_type, title, url}

  const renderArray = (photoSet) => {
    return photoSet.map((photo,index) => (
    <div key={index} className="column is-one-quarter">
      <Slide photo={photo} width="256" handleZoom={(photo)=>zoomed(photo)}/>
    </div>
    ))
  }
  return (
    <div className="columns is-multiline ">
      <div className="container">
        <nav className="level">
          <p className=" has-text-centered">{photoSet.length} Images </p>
          <a className="button is-dark"
            onClick={()=>loader()}>
            Load more
          </a>
        </nav>
      </div>
        {renderArray(photoSet)}
    </div>
  )
}

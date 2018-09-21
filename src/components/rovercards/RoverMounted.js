import React from 'react'
import {default as RoverPhoto } from './RoverPhoto'

export default ({rover, photos = [], children, filterHandler}) => {
  console.log(photos);

  const renderPhotos = (photos) => {
    return photos.map((photo, index) => (
      <div key={index} className="column is-3">
        <RoverPhoto photo={photo} />
      </div>
    ))
  }

  return (
    <section className="container">
      <div className="tile is-ancestor">
        <div className="tile is-3 is-vertical is-parent">
          <div className="tile is-child box is-outlined">
            <p className="subtitle has-text-warning">Manifest</p>
            <p>{rover.manifest}</p><br/>
            <p className="subtitle has-text-warning">Data</p>
            <p>Launch date: {rover.launch_date}</p>
            <p>Landing date: {rover.landing_date}</p>
            <p>Photos to date: {rover.slides.length}</p>
            <ul>Cameras on board: {rover.cameras.map(el=>(
                <li onClick={()=>filterHandler(el)}
                  key={el} style={{listStyle: 'inline'}}>{el}</li>)
            )}</ul>
          </div>
          <div className="tile is-child box">

          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            {children}
            <div className="columns is-multiline">
              {renderPhotos(photos)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

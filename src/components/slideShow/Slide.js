import React from 'react'
import PropTypes from 'prop-types'

export default ({photo, width}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256" style={{height:128, overflow:"hidden"}}>
          <img alt={photo.title} src={photo.url} height={width}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          {photo.explanation.substring(0,120)}...
          <br />
          <time datetime={photo.date}>{photo.date}</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">Save</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Discard</a>
      </footer>
    </div>
  )
}

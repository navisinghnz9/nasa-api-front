import React from 'react'

export default ({photo, width}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256" style={{height:256, overflow:"hidden"}}>
          <img alt={photo.title} src={photo.url} height={width}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          {photo.explanation.substring(0,120)}...
          <br />
          <time dateTime={photo.date}>{photo.date}</time>
        </div>
      </div>
      <footer className="card-footer">
        <a className="card-footer-item">View</a>
        <a className="card-footer-item">Save</a>
      </footer>
    </div>
  )
}

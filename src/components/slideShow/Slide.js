import React from 'react'

export default ({photo, width, handleZoom}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256" >
          <img alt={photo.title} src={photo.url} height={width}
            style={{
              height:256,
              overflow:"hidden",
              objectFit: "cover",
              objectPosition: "center"
            }}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="subtitle is-5 has-text-light">{photo.title}</p>
          <p>{photo.explanation.substring(0,120)}...<br />
          <time dateTime={photo.date}>{photo.date}</time>
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <a onClick={()=>{handleZoom(photo)}}className="card-footer-item">View</a>
        <a className="card-footer-item">Save</a>
      </footer>
    </div>
  )
}

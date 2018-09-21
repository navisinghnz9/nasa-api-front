import React from 'react'
import PropTypes from 'prop-types'
export default (props) => {
  const {camera, id, earth_date, img_src, rover, sol} = props.photo;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by3">
          <img src={img_src} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
          <p className="title is-6">{camera.full_name}</p>
          <p className="subtitle is-6">{earth_date}</p>
      </div>
    </div>
  )
}

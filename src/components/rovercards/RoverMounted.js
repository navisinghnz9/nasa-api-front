import React from 'react'
import PropTypes from 'prop-types'

export default (props) => {
  const {rover} = props;
  console.log(rover);
  return (
    <section className="container">
      <div className="tile is-ancestor">
        <div className="tile is-3 is-vertical is-parent">
          <div className="tile is-child box is-outlined">
            <p className="subtitle has-text-warning">Manifest</p>
            <p>{rover.manifest}</p>
          </div>
          <div className="tile is-child box">
            <p className="subtitle has-text-warning">Data</p>
            <p>Launch date: {rover.launch_date}</p>
            <p>Landing date: {rover.landing_date}</p>
            <p>Photos to date: {rover.slides.length}</p>
            <ul>Cameras on board: {rover.cameras.map(el=>(
                <li style={{listStyle: 'inline'}}>{el}</li>)
            )}</ul>

            <p></p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

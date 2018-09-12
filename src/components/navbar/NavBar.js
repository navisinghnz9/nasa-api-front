import React from 'react';
import { NavLink } from 'react-router-dom'

import logo from '../../static/logo.svg';

export default (props) => {
  return (
    <header className="header">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <NavLink to="./" className="navbar-item">
            <img src={logo} className="App-logo" alt="app-logo" width="50" height="50" />
            {props.title}
          </NavLink>
          <NavLink to="photo-of-the-day" className="navbar-item">
            Nasa Photo of the day
          </NavLink>
          <NavLink to="about" className="navbar-item">
            About
          </NavLink>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">

          <div className="navbar-end">
            <NavLink to="photo-of-the-day" className="navbar-item">
              Nasa Photo of the day
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

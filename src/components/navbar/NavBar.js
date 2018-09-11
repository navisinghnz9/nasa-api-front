import React from 'react';
import logo from '../../static/logo.svg';

export default (props) => {
  return (
    <header className="header">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} className="App-logo" alt="app-logo" width="50" height="50" />
            {props.title}
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">

          <div className="navbar-end">
            <a className="navbar-item">
              Nasa Photo of the day
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

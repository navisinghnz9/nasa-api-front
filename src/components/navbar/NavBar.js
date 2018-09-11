import React from 'react';
import logo from '../../static/logo.svg';

export default (props) => {
  return (
    <header className="header">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="brand">{props.title}</a>
        <a className="apod-widget">Photo of The day</a>
      </nav>
    </header>
  )
}

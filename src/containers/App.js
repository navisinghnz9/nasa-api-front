import React, { Component } from 'react';
import logo from '../static/logo.svg';
import './App.css';

import Explore from './Explore';

class App extends Component {
  constructor(){
    super()
    this.state = {
      mounted: {
        id: null,
        state: null
      },
      explore: true
    }
  }

  onClickHandler(target) {
    this.setState({
      'explore': false,
      'mounted': {
        'id': target,
        'state':'slide-0'
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.mounted.id || 'Welcome to Nasa. Choose one'}
        </p>
        <Explore
          handler={(target)=>this.onClickHandler(target)}
          />

      </div>
    );
  }
}

export default App;

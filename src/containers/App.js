import React, { Component } from 'react';
import logo from '../static/logo.svg';
import './App.css';

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
        {this.props.children}
        <p className="App-intro">
          {this.state.mounted.id || 'Welcome to Nasa. Choose one'}
        </p>
        <div className="container--slideshow">
          <div className="rover-0">
            <a onClick={()=>this.onClickHandler('Rover 0')}>Rover 0</a>
          </div>
          <div className="rover-1">
            <a onClick={()=>this.onClickHandler('Rover 1')}>Rover 1</a>
          </div>
          <div className="rover-2">
            <a onClick={()=>this.onClickHandler('Rover 2')}>Rover 2</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

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
        <div className="container--roverSlideshow">
          <div className="rover curiosity">
            <a onClick={()=>this.onClickHandler('rover-curiosity')}>Curiosity Rover</a>
          </div>
          <div className="rover oportunity">
            <a onClick={()=>this.onClickHandler('rover-oportunity')}>Oportunity Rover</a>
          </div>
          <div className="rover spirit">
            <a onClick={()=>this.onClickHandler('rover-spirit')}>Spirit Rover</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

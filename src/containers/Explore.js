import React, { Component } from 'react';
import { default as NavBar } from '../components/navbar/NavBar'

import './Explore.css';

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
        <NavBar
          title="Look into space"
          />
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

import React, { Component } from 'react';

class Explore extends Component {

  render() {
    return (
      <div className="container--roverSlideshow">
        <div className="rover curiosity">
          <a onClick={()=>this.props.handler('rover-curiosity')}>Curiosity Rover</a>
        </div>
        <div className="rover oportunity">
          <a onClick={()=>this.props.handler('rover-oportunity')}>Oportunity Rover</a>
        </div>
        <div className="rover spirit">
          <a onClick={()=>this.props.handler('rover-spirit')}>Spirit Rover</a>
        </div>
      </div>
    )
  }
}


export default Explore;

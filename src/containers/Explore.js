import React, { Component } from 'react';
import { default as Hero } from '../components/hero/Hero'
import { default as RoverCards } from '../components/rovercards/RoverCards'

import './Explore.css';

// api mocks
const mockArr = (n,s) => {return Array(n).fill(s)}
const rovers = [
  {
    id: 111,
    name: 'Curiosity Rover',
    slug: 'curiosity',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(13100, 'C'),
    sols: 1000
  },
  {
    id: 222,
    name: 'Oportunity Rover',
    slug: 'oportunity',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(7250,'O'),
    sols: 800
  },
  {
    id: 333,
    name: 'Spirit Rover',
    slug: 'spirit',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(4401,'S'),
    sols: 600
  }
];

class App extends Component {
  constructor(){
    super()
    this.state = {
      mounted: {
        mounted: false,
        id: null,
        state: null
      },
      explore: true
    }
  }

  onClickHandler(target) {
    this.setState(state => ({
      'explore': false,
      'mounted': {
        ...state.mounted,
        mounted: true,
        'id': target
      }
    }))
  }
  render() {

    return (
      <div className="App">

        <Hero
          title={this.state.mounted.id || 'Welcome to Nasa. Choose one'}
          subtitle=""
          mounted={this.state.mounted.mounted}>
        </Hero>

        <RoverCards
          rovers={rovers}
          handler={(target)=>this.onClickHandler(target)}/>

      </div>
    );
  }
}

export default App;

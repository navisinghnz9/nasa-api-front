import React, { Component } from 'react';
import { default as Hero } from '../components/hero/Hero'
import { default as RoverCards } from '../components/rovercards/RoverCards'
import { default as RoverMounted } from '../components/rovercards/RoverMounted'

import './Explore.css';
import marsRender from '../static/mars-render-bg.jpg';
import bgRover1 from '../static/rover-1.jpg';
import bgRover2 from '../static/rover-2.jpg';
import bgRover3 from '../static/rover-3.jpg';

// api mocks
const mockArr = (n,s) => {return Array(n).fill(s)}
const rovers = [
  {
    id: 111,
    name: 'Curiosity Rover',
    slug: 'curiosity',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(13100, 'C'),
    sols: 1000,
    bg: bgRover1
  },
  {
    id: 222,
    name: 'Oportunity Rover',
    slug: 'oportunity',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(7250,'O'),
    sols: 800,
    bg: bgRover2

  },
  {
    id: 333,
    name: 'Spirit Rover',
    slug: 'spirit',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(4401,'S'),
    sols: 600,
    bg: bgRover3
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
          title={this.state.mounted.id || 'Welcome to the Red Planet'}
          subtitle="The rocks, soil and sky have a red or pink hue. The distinct red color was observed by stargazers throughout history. It was given its name by the Romans in honor of their god of war. Our civilizations is currently exploring it with three on-site Rovers."
          mounted={this.state.mounted.mounted}
          bg={marsRender}
          full>
          {!this.state.mounted.mounted? null : <RoverMounted />}

        </Hero>

        {!this.state.mounted.mounted? <RoverCards
          rovers={rovers}
          handler={(target)=>this.onClickHandler(target)}
        /> : null }


      </div>
    );
  }
}

export default App;

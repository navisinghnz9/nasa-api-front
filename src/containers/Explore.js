import React, { Component } from 'react';
import html2canvas from 'html2canvas';

import { default as NavBar } from '../components/navbar/NavBar'
import { default as Hero } from '../components/hero/Hero'
import { default as RoverCards } from '../components/rovercards/RoverCards'

import './Explore.css';
import Nasa_Rover from '../static/NASA_Mars_Rover.jpg';
import Nasa_bg from '../static/NASA_background_2.jpg';

// api mocks
const mockArr = (n,s) => {return Array(n).fill(s)}
const rovers = [
  {
    id: 111,
    name: 'Curiosity Rover',
    heroImage: Nasa_Rover,
    slug: 'curiosity',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(13100, 'C'),
    sols: 1000
  },
  {
    id: 222,
    name: 'Oportunity Rover',
    heroImage: Nasa_Rover,
    slug: 'oportunity',
    cameras: ['front','back','center','pano', 'roof'],
    slides: mockArr(7250,'O'),
    sols: 800
  },
  {
    id: 333,
    name: 'Spirit Rover',
    heroImage: Nasa_Rover,
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

  componentDidMount() {
    html2canvas(document.body)
      .then((canvas) =>{
        document.body.appendChild(canvas);
      })
      .then(() => {
        this.download('canvas');
      });
  }

  download(selector){
		var download = document.querySelector(selector);
		var image = document.querySelector("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
			  download.setAttribute("href", image);
			  download.setAttribute("download","archive.png");
        download.click()
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
        <NavBar
          title="Look into space"
          />

        <Hero
          title={'Welcome to Nasa. Choose one'}
          subtitle=""
          mounted={this.state.mounted.mounted}
          bg={Nasa_bg}>
          {!this.state.mounted.mounted || this.state.mounted.id.name}
        </Hero>

        <RoverCards
          rovers={rovers}
          handler={(target)=>this.onClickHandler(target)}
          />
      </div>
    );
  }
}

export default App;

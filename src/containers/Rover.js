import React, {Component} from 'react'
import { default as RoverMounted } from '../components/rovercards/RoverMounted'

import { ROVER } from '../lib/API'

class Rover extends Component {
  constructor(props){
    super(props)
    this.state = {
      fetched: false,
      isLoading: false,
      photoSet: [],
      zoomed: null,
      mounted: props.mounted,
      camera: null,
      sol: 350,
      page: null,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const query = {'sol': this.state.sol || '300'}
    this.getImages(this.state.mounted.slug, query, this.state)
    // console.log(ROVER.endPoint(ROVER.url,'curiosity', ROVER.key, ROVER.parseQuery(ROVER_query)));
  }

  componentDidUpdate(prevProps) {
    if (this.props.mounted !== prevProps.mounted) {
      const query = {sol: this.state.sol || '300'}
      this.getImages(this.props.mounted.slug, query, this.state)
      this.setState(state => ({
        ...this.state,
        mounted: this.props.mounted
      }))
    }
  }

  getImages(rover, query, prevState) {
    console.log('fetching...', rover);
    this.setState({
      ...prevState,
      isLoading: true
    });
    fetch(`${ROVER.endPoint(ROVER.url, rover, ROVER.key, ROVER.parseQuery(query))}`)
      .then(res => res.json())
      .then((data) => this.setState((prevState) => ({
        ...prevState,
        photoSet: [
          ...prevState.photoSet,
          ...data.photos ],
        isLoading: false,
        fetched: true
      })))
      .then(()=> console.log('new photos: ', this.state.photoSet))
  }

  filterImages(string) {
    console.log('filtering by', string);
  }

  render () {
    const { mounted, photoSet } = this.state
    return (
      <section className="container">
      <a className="button is-3">back</a>
        <RoverMounted
          rover={mounted}
          photos={photoSet}
          filterHandler={(filterBy)=>this.filterImages(filterBy)}>
          <p className="title">Mars days: {this.state.sol}</p>
        </RoverMounted>
      </section>
  )}
}

export default Rover;

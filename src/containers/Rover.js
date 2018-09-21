import React, {Component} from 'react'
import { default as RoverMounted } from '../components/rovercards/RoverMounted'

class Rover extends Component {

  onComponentDidMount() {
    window.scrollTo(0, 0);

  }

  render () {
    const { mounted } = this.props
    return (
      <section className="container">
      <a className="button is-3">back</a>
        <RoverMounted
          rover={mounted}>
          <p>Hello API Here </p>
        </RoverMounted>
      </section>
  )}
}

export default Rover;

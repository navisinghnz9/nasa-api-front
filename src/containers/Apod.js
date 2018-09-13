import React, { Component } from 'react'

import { default as Hero } from '../components/hero/Hero'
import { default as Slides } from '../components/slideShow/Slides'
import {parseQuery} from '../lib/API'

const key = 'DEMO_KEY';
const url = 'https://api.nasa.gov/planetary/apod';
const query = {
  'count': 12,
  //'date': '2018-08-21',
   'hd': true,
  // 'start_date': '2018-08-22',
  // 'end_date': '2018-07-31'
}
const endPoint = `${url}?api_key=${key}${parseQuery(query)}`;

class Apod extends Component {
  constructor() {
    super()
    this.state = {
      fetched: false,
      isLoading: false,
      photos: [],
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('apod_store')) {
      console.log('no storage');
      this.setState({ isLoading: true });

      fetch(endPoint)
      .then(response => response.json())
      .then(data => this.setState(
        { photos: data, isLoading: false, fetched: true}
      ));
    }
    else {
      const cache = JSON.parse(localStorage.getItem('apod_store'));
      console.log('Cached state from storage');
      this.setState(cache)
    }
  }
  // store last fetch!
  componentWillUnmount() {
      if (this.state.fetched) {
        localStorage.setItem('apod_store', JSON.stringify(this.state));
        console.log('Storing in localStorage, key: apod_store');
      }
    }


  render () {
    console.log(this.state.photos);

    return (
      <Hero
        subtitle={'Browse mindblowing photos from space in an uninterrupted manner'}
        title="Nasa Photo of the day"
        full
        >
        <Slides
          photoSet={this.state.photos}
          />
      </Hero>
    )
  }
}

export default Apod

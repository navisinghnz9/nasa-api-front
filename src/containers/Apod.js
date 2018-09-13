import React, { Component } from 'react'

import { default as Hero } from '../components/hero/Hero'
import { default as Loading } from '../components/layout/Loading'
import { default as Slides } from '../components/slideShow/Slides'
import { APOD } from '../lib/API'


const query = {
  'count': 12,
  //'date': '2018-08-21',
   'hd': true,
  // 'start_date': '2018-08-22',
  // 'end_date': '2018-07-31'
}
const endPoint = `${APOD.url}?api_key=${APOD.key}${APOD.parseQuery(query)}`;

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

  getImages(endpoint) {
    fetch(endPoint)
    .then(response => response.json())
    .then(data => this.setState({
        photoSet: data.concat(this.state.photoSet),
        isLoading: false,
        fetched: true
      })
    )
  }

  // store last fetch!
  componentWillUnmount() {
      if (this.state.fetched) {
        localStorage.setItem('apod_store', JSON.stringify(this.state));
        console.log('Storing in localStorage, key: apod_store');
      }
    }
  // bust cache
  clearCache() {
    if (localStorage.getItem('apod_store') !== undefined) {
      console.log('busting cache');
      localStorage.removeItem('apod_store');
      this.componentDidMount();
    } else {
      console.log('no cache available to bust');
    }

  }

  render () {
    const { photoSet, isLoading, fetched } = this.state
    if (isLoading) {
      return <Loading />;
    }

    return (
      <Hero
        subtitle={'Browse mindblowing photos from space in an uninterrupted manner'}
        title="Nasa Photo of the day"
        full
        >
        <p>{this.state.photoSet.length} Images
          <a className="button is-dark"
            onClick={()=>this.clearCache()}>
            Load more
          </a>
        </p>
        <Slides
          photoSet={photoSet}
          fetched={fetched}
          />
      </Hero>
    )
  }
}

export default Apod

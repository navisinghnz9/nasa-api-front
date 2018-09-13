import React, { Component } from 'react'

import { default as Hero } from '../components/hero/Hero'
import { default as Loading } from '../components/layout/Loading'
import { default as Slides } from '../components/slideShow/Slides'
import { default as Zoomed } from '../components/slideShow/Zoomed'
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
      photoSet: [],
      zoomed: null
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('apod_store')) {
      this.getImages();
    }
    else {
      const cache = JSON.parse(localStorage.getItem('apod_store'));
      console.log('Cached state from storage');
      this.setState(cache)
    }
  }

  componentWillUnmount() {
    if (this.state.fetched) {
      localStorage.setItem('apod_store', JSON.stringify(this.state));
      console.log('Storing in localStorage, key: apod_store');
    }
  }

  getImages(endpoint) {
    this.setState({ isLoading: true });
    fetch(endPoint)
    .then(response => response.json())
    .then(data => this.setState({
        photoSet: data.concat(this.state.photoSet),
        isLoading: false,
        fetched: true
      })
      )
  }

  clearCache() {
    if (localStorage.getItem('apod_store') !== undefined) {
      localStorage.removeItem('apod_store');
      this.getImages(endPoint);
    }
  }

  zoomImage(image) {
    if (!image) {
      this.setState({
        ...this.state,
        zommed: null
      })
    }
    this.setState({
      ...this.state,
      zoomed: image
    })
  }

  render () {
    const { photoSet, isLoading, fetched, zoomed } = this.state
    if (isLoading) {
      return <Loading />
    };
    if (zoomed) {
      return <Zoomed back={()=>this.zoomImage()} image={zoomed}/>
    }

    return (
      <Hero
        subtitle={'Browse mindblowing photos from space in an uninterrupted manner'}
        title="Nasa Photo of the day"
        full
        >
        <Slides
          photoSet={photoSet}
          fetched={fetched}
          loader={()=>this.clearCache()}
          zoomed={(photo)=>this.zoomImage(photo)}
          />
      </Hero>
    )
  }
}

export default Apod

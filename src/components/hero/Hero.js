import React from 'react';


const style={
  heroBody: {
    backgroundSize:'cover',
  },
  heroSection: {
    transition: 'all .5s'
  }
}
export default (props) => {


  console.log(props.mounted);
  return (
    <section className={`hero is-dark is-bold ${!props.mounted?'is-large':'is-fullheight'}`} style={{...style.heroSection}}>
      <div className="hero-body" style={{...style.heroBody, backgroundImage: `url(${props.bg})`}}>
        <div className="container has-text-centered">
          <h1 className="title">
          {props.title}
          </h1>
          <h2 className="subtitle">
          {props.subtitle ||''}
          </h2>
          {props.children}
        </div>
      </div>
    </section>
  )
}

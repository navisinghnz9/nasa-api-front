import React from 'react';

export default (props) => {
  return (
    <section className="hero is-dark is-bold is-large">
      <div className="hero-body" >
        <div className="container">
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

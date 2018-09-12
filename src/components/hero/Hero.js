import React from 'react';

export default (props) => {

  let classes = ['hero', 'is-bold'];
  classes.push(
    props.full
    ? 'is-fullheight'
    : 'is-large'
  );
  classes.push(
    props.light
    ? 'is-light'
    : 'is-dark'
  );

  return (
    <section className={classes.join(' ')}>
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

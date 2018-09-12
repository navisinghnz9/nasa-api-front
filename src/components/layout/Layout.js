import React from 'react';
import { default as NavBar } from '../navbar/NavBar';

export default ({children}) => {
  return (
    <section className="is-dark">
      <NavBar
        title="Look into space"
        />
      {children}
    </section>
  )
}

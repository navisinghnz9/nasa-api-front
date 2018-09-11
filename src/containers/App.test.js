import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

describe('App Container', () => {
  it('Renders', () => {
    const wrapper = shallow(<App />);
    const printOut = <h1 className="App-title">Welcome to React</h1>;
    expect(wrapper.contains(printOut)).toEqual(true);
  });
  it('Renders children when passed in', () => {
    const wrapper = shallow(<App><div className="block_element--modifier" /></App>);
    expect(wrapper.contains(<div className="block_element--modifier" />)).toEqual(true);
  });
  it('Has an initial state', () =>{
    const wrapper = shallow(<App />);
    expect(wrapper.state('explore')).toEqual(true);
    expect(wrapper.state('mounted')).toEqual({'id':null, 'state':null});
  });
  it('Changes state on user actions', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.rover').length).toEqual(3);

    wrapper.find('.rover.curiosity a').simulate('click');
    expect(wrapper.state('explore')).toEqual(false);
    expect(wrapper.state('mounted')).toEqual({'id':'rover-curiosity', 'state':'slide-0'});
  })
});

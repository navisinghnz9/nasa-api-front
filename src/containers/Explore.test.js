import React from 'react';
import ReactDOM from 'react-dom';
import Explore from './explore';

import { shallow } from 'enzyme';

describe('App Container', () => {
  // it('Renders', () => {
  //   const wrapper = shallow(<Explore />);
  //   const printOut = <h1 class="title">Welcome to Nasa. Choose one</h1>;
  //   expect(wrapper.contains(printOut)).toEqual(true);
  // });
  // it('Renders children when passed in', () => {
  //   const wrapper = shallow(<Explore><div className="block_element--modifier" /></Explore>);
  //   expect(wrapper.contains(<div className="block_element--modifier" />)).toEqual(true);
  // });
  it('Has an initial state', () =>{
    const wrapper = shallow(<Explore />);
    expect(wrapper.state('explore')).toEqual(true);
    expect(wrapper.state('mounted')).toEqual({
      mounted: false,
      id: null,
      state: null
    });
  });
  // it('Changes state on user actions', () => {
  //   const wrapper = shallow(<Explore />);
  //   expect(wrapper.find('.roverSlideshow').length).toEqual(1);
  //
  //   wrapper.find('.rover-curiosity a').simulate('click');
  //   expect(wrapper.state('explore')).toEqual(false);
  //   expect(wrapper.state('mounted')).toEqual({'id':'rover-curiosity', 'state':'slide-0'});
  // })
});

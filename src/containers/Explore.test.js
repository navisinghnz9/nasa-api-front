import React from 'react';
import Explore from './Explore';
import { shallow } from 'enzyme';

describe('Explore Container', () => {
  it('Renders', () => {
    const wrapper = shallow(<Explore />);
    const printOut = <h1 className="App-title">Welcome to React</h1>;
    expect(wrapper.contains(printOut)).toEqual(true);
  });
});

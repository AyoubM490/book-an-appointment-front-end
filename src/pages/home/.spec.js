import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../../Utils';
import HomePage from './HomePage';

const setUp = (props = {}) => {
  const component = shallow(<HomePage {...props} />);
  return component;
};

describe('HomePage Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'homePageComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a login button', () => {
    const wrapper = findByTestAttr(component, 'loginButton');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a signup button', () => {
    const wrapper = findByTestAttr(component, 'signupButton');
    expect(wrapper.length).toBe(1);
  });
});

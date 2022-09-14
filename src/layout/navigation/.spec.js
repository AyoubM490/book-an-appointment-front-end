import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'enzyme';
import findByTestAttr from '../../Utils';
import Navigation from './Sidebar';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Navigation Component', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => jest.fn());
    useNavigate.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render without errors', () => {
    const component = shallow(<Navigation />);
    const wrapper = findByTestAttr(component, 'navigationComponent');
    expect(wrapper.length).toBe(1);
  });

  it("Should call dispatch when 'Sign out' is clicked", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const wrapper = shallow(<Navigation />);
    const button = findByTestAttr(wrapper, 'signOutButton');
    button.simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });

  it("Should call navigate when 'Sign out' is clicked", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const wrapper = shallow(<Navigation />);
    const button = findByTestAttr(wrapper, 'signOutButton');
    button.simulate('click');
    expect(navigate).toHaveBeenCalled();
  });

  it('Should render Navigation Links', () => {
    const wrapper = shallow(<Navigation />);
    const links = findByTestAttr(wrapper, 'navigationLinks');
    expect(links.length).toBe(1);
  });

  it('Should render a Logo', () => {
    const wrapper = shallow(<Navigation />);
    const logo = findByTestAttr(wrapper, 'logo');
    expect(logo.length).toBe(1);
  });

  it('Should render a NavLinks', () => {
    const wrapper = shallow(<Navigation />);
    const navLinks = findByTestAttr(wrapper, 'navLinks');
    expect(navLinks.length).toBe(1);
  });

  it('Should render a Sign Out Button', () => {
    const wrapper = shallow(<Navigation />);
    const button = findByTestAttr(wrapper, 'signOutButton');
    expect(button.length).toBe(1);
  });

  it('Should render social media icons and links', () => {
    const wrapper = shallow(<Navigation />);
    const icons = findByTestAttr(wrapper, 'socialMediaIcons');
    expect(icons.length).toBe(1);
  });

  it('Should render copy right text', () => {
    const wrapper = shallow(<Navigation />);
    const text = findByTestAttr(wrapper, 'copyRightText');
    expect(text.length).toBe(1);
  });
});

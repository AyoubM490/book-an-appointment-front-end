import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../../Utils';
import { useDispatch } from 'react-redux';
import SignInPage from './SignIn';
import { useNavigate } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SignInPage Component', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => jest.fn());
    useNavigate.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render without errors', () => {
    const component = shallow(<SignInPage />);
    const wrapper = findByTestAttr(component, 'signInPageComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should call dispatch when form is submitted', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const wrapper = shallow(<SignInPage />);
    const form = findByTestAttr(wrapper, 'form');
    form.simulate('submit', { preventDefault() {} });
    expect(dispatch).toHaveBeenCalled();
  });

  it('Should call navigate when form is submitted', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const wrapper = shallow(<SignInPage />);
    const form = findByTestAttr(wrapper, 'form');
    form.simulate('submit', { preventDefault() {} });
    expect(navigate).toHaveBeenCalled();
  });

  it('Should render LogIn text', () => {
    const wrapper = shallow(<SignInPage />);
    const text = findByTestAttr(wrapper, 'signInText');
    expect(text.length).toBe(1);
  });

  it('Should render a form with an input and a submit button', () => {
    const wrapper = shallow(<SignInPage />);
    const form = findByTestAttr(wrapper, 'form');
    const input = findByTestAttr(wrapper, 'usernameInput');
    const submitButton = findByTestAttr(wrapper, 'submitButton');
    expect(form.length).toBe(1);
    expect(input.length).toBe(1);
    expect(submitButton.length).toBe(1);
  });
});

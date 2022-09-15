import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigate } from 'react-router-dom';
import thunk from 'redux-thunk';
import AddMotorcycle from './addMotorcycle';
import findByTestAttr from '../../Utils';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('AddMotorcycle Component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore([thunk])({
      motorcycles: [
        {
          id: 1,
          model: 'CBR',
          price: 100,
          duration_months: 1,
          description: 'This is a motorcycle',
          image: '',
        },
      ],
    });

    useSelector.mockImplementation((callback) => callback({
      motorcycles: store.getState().motorcycles,
    }));

    useDispatch.mockImplementation(() => jest.fn());
    useNavigate.mockImplementation(() => jest.fn());

    wrapper = shallow(<AddMotorcycle store={store} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'addMotorcycleComponent');
    expect(component.length).toBe(1);
  });

  it('Should render a form', () => {
    const form = findByTestAttr(wrapper, 'form');
    expect(form.length).toBe(1);
  });

  it('Should render a model label', () => {
    const label = findByTestAttr(wrapper, 'modelLabel');
    expect(label.length).toBe(1);
  });

  it('Should render a model input', () => {
    const input = findByTestAttr(wrapper, 'modelInput');
    expect(input.length).toBe(1);
  });

  it('Should render a price label', () => {
    const label = findByTestAttr(wrapper, 'priceLabel');
    expect(label.length).toBe(1);
  });

  it('Should render a price input', () => {
    const input = findByTestAttr(wrapper, 'priceInput');
    expect(input.length).toBe(1);
  });

  it('Should render a duration label', () => {
    const label = findByTestAttr(wrapper, 'durationLabel');
    expect(label.length).toBe(1);
  });

  it('Should render a duration input', () => {
    const input = findByTestAttr(wrapper, 'durationInput');
    expect(input.length).toBe(1);
  });

  it('Should render a description label', () => {
    const label = findByTestAttr(wrapper, 'descriptionLabel');
    expect(label.length).toBe(1);
  });

  it('Should render a description input', () => {
    const input = findByTestAttr(wrapper, 'descriptionInput');
    expect(input.length).toBe(1);
  });

  it('Should render a image label', () => {
    const label = findByTestAttr(wrapper, 'imageLabel');
    expect(label.length).toBe(1);
  });

  it('Should render a image input', () => {
    const input = findByTestAttr(wrapper, 'imageInput');
    expect(input.length).toBe(1);
  });

  it('Should render a submit button', () => {
    const button = findByTestAttr(wrapper, 'submitButton');
    expect(button.length).toBe(1);
  });
});

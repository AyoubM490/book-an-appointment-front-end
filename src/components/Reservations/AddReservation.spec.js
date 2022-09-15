import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import findByTestAttr, { checkProps } from '../../Utils';
import AddReservation from './AddReservation';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: null,
  }),
  useNavigate: jest.fn(),
}));

describe('AddReservation Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        userId: 1,
      };
      const propsErr = checkProps(AddReservation, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    let useEffect;
    let store;

    const mockUseEffect = () => {
      useEffect.mockImplementationOnce((f) => f());
    };

    beforeEach(() => {
      store = configureStore([thunk])({
        motorcycles: [
          {
            id: 1,
            model: 'CBR',
          },
        ],
      });
      useEffect = jest.spyOn(React, 'useEffect');
      mockUseEffect();
      mockUseEffect();

      useSelector.mockImplementation((callback) => callback({
        motorcycles: store.getState().motorcycles,
      }));

      useDispatch.mockImplementation(() => jest.fn());
      useNavigate.mockImplementation(() => jest.fn());

      wrapper = shallow(<AddReservation userId={1} store={store} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Should render Add Reservation Component', () => {
      const component = findByTestAttr(wrapper, 'addReservationComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve Component', () => {
      const component = findByTestAttr(wrapper, 'reserveComponent');
      expect(component.length).toBe(1);
    });

    it("Should render a title 'Reserve Motorcycle'", () => {
      const component = findByTestAttr(wrapper, 'reserveTitle');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve paragraph', () => {
      const component = findByTestAttr(wrapper, 'reserveParagraph');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve form', () => {
      const component = findByTestAttr(wrapper, 'reserveForm');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve select', () => {
      const component = findByTestAttr(wrapper, 'reserveSelect');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve city', () => {
      const component = findByTestAttr(wrapper, 'reserveCity');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve date', () => {
      const component = findByTestAttr(wrapper, 'reserveDate');
      expect(component.length).toBe(1);
    });

    it('Should render a reserve button', () => {
      const component = findByTestAttr(wrapper, 'reserveButton');
      expect(component.length).toBe(1);
    });
  });
});

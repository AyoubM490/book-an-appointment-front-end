import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../../Utils';
import configureStore from 'redux-mock-store';
import MyReservationsPage from './MyReservationsPage';
import thunk from 'redux-thunk';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const setUp = (props = {}) => {
  const component = shallow(<MyReservationsPage userId={props.userId} />);
  return component;
};

describe('MyReservationsPage Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        userId: 1,
      };
      const propsErr = checkProps(MyReservationsPage, expectedProps);
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
        reservations: [
          {
            id: 1,
            motorcycleId: 1,
            date: '2021-01-01',
            city: 'Bogota',
          },
        ],
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

      jest.mock('react-redux', () => ({
        useSelector: jest.fn(),
        useDispatch: jest.fn(),
      }));

      useSelector.mockImplementation((callback) => {
        return callback({
          reservations: store.getState().reservations,
          motorcycles: store.getState().motorcycles,
        });
      });

      wrapper = shallow(<MyReservationsPage userId={1} store={store} />);
    });

    describe('Should render without errors', () => {
      it('Should render without errors', () => {
        const component = findByTestAttr(
          wrapper,
          'myReservationsPageComponent'
        );
        expect(component.length).toBe(1);
      });

      it("Should render a 'My Reservations' title", () => {
        const title = findByTestAttr(wrapper, 'myReservationsTitle');
        expect(title.length).toBe(1);
      });

      it('Should render a table', () => {
        const table = findByTestAttr(wrapper, 'table');
        expect(table.length).toBe(1);
      });

      it('Should render a table header', () => {
        const tableHeader = findByTestAttr(wrapper, 'tableHeader');
        expect(tableHeader.length).toBe(1);
      });

      it('Should render a table body', () => {
        const tableBody = findByTestAttr(wrapper, 'tableBody');
        expect(tableBody.length).toBe(1);
      });

      it('Should render a list of reservations', () => {
        const list = findByTestAttr(wrapper, 'reservationsList');
        expect(list.length).toBe(1);
      });
    });
  });
});

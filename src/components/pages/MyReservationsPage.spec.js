import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import findByTestAttr, { checkProps } from '../../Utils';
import MyReservationsPage from './MyReservationsPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

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
            motorcycle_id: 1,
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

      useSelector.mockImplementation((callback) => callback({
        reservations: store.getState().reservations,
        motorcycles: store.getState().motorcycles,
      }));

      useDispatch.mockImplementation(() => jest.fn());

      wrapper = shallow(<MyReservationsPage userId={1} />);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'myReservationsPage');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'title');
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

    it('Should render a table row', () => {
      const tableRow = findByTestAttr(wrapper, 'tableRow');
      expect(tableRow.length).toBe(1);
    });

    it('Should render a reservation', () => {
      const reservation = findByTestAttr(wrapper, 'reservation');
      expect(reservation.length).toBe(1);
    });
  });
});

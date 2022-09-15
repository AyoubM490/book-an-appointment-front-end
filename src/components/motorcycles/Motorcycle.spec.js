import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import findByTestAttr, { checkProps } from '../../Utils';
import Motorcycle from './Motorcycle';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Motorcycle Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        motor: {
          id: 1,
          model: 'CBR',
          price: 100,
          duration_months: 1,
        },
      };
      const propsErr = checkProps(Motorcycle, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => jest.fn());
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Should render without errors', () => {
      const component = shallow(
        <Motorcycle
          motor={{ id: 1, model: 'CBR', price: 100, duration_months: 1 }}
        />
      );
      const wrapper = findByTestAttr(component, 'motorcycleComponent');
      expect(wrapper.length).toBe(1);
    });

    it("Should render a table data with the motorcycle's model", () => {
      const component = shallow(
        <Motorcycle
          motor={{ id: 1, model: 'CBR', price: 100, duration_months: 1 }}
        />
      );
      const wrapper = findByTestAttr(component, 'motorcycleModel');
      expect(wrapper.length).toBe(1);
    });

    it("Should render a table data with the motorcycle's price", () => {
      const component = shallow(
        <Motorcycle
          motor={{ id: 1, model: 'CBR', price: 100, duration_months: 1 }}
        />
      );
      const wrapper = findByTestAttr(component, 'motorcyclePrice');
      expect(wrapper.length).toBe(1);
    });

    it("Should render a table data with the motorcycle's duration", () => {
      const component = shallow(
        <Motorcycle
          motor={{ id: 1, model: 'CBR', price: 100, duration_months: 1 }}
        />
      );
      const wrapper = findByTestAttr(component, 'motorcycleDuration');
      expect(wrapper.length).toBe(1);
    });

    it("Should render a table data with the motorcycle's button", () => {
      const component = shallow(
        <Motorcycle
          motor={{ id: 1, model: 'CBR', price: 100, duration_months: 1 }}
        />
      );
      const wrapper = findByTestAttr(component, 'motorcycleButton');
      expect(wrapper.length).toBe(1);
    });

    it('Should render a delete button', () => {
      const component = shallow(
        <Motorcycle
          motor={{ id: 1, model: 'CBR', price: 100, duration_months: 1 }}
        />
      );
      const wrapper = findByTestAttr(component, 'deleteButton');
      expect(wrapper.length).toBe(1);
    });
  });
});

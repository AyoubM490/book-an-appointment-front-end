import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../../Utils';
import Reservation from './Reservation';

const setUp = (props = {}) => {
  const component = shallow(<Reservation {...props} />);
  return component;
};

describe('Reservation Component', () => {
  let component;
  beforeEach(() => {
    const props = {
      reservation: {
        id: 1,
        date: '2021-01-01',
        city: 'Test City',
        motorcycle_id: 1,
      },
      motorcycles: [
        {
          id: 1,
          model: 'Test Model',
        },
      ],
    };
    component = setUp(props);
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'reservationComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a table row', () => {
    const wrapper = findByTestAttr(component, 'reservationRow');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a table data with motorcycle model', () => {
    const wrapper = findByTestAttr(component, 'reservationMotorcycle');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a table data with reservation date', () => {
    const wrapper = findByTestAttr(component, 'reservationDate');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a table data with reservation city', () => {
    const wrapper = findByTestAttr(component, 'reservationCity');
    expect(wrapper.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        reservation: {
          id: 1,
          date: '2021-01-01',
          city: 'Test City',
          motorcycle_id: 1,
        },
        motorcycles: [
          {
            id: 1,
            model: 'Test Model',
          },
        ],
      };
      const propsErr = checkProps(Reservation, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});

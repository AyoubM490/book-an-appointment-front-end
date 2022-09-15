import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import findByTestAttr, { checkProps } from '../../Utils';
import DeleteMotorcycle from './deleteMotorcycle';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('DeleteMotorcycle Component', () => {
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
          price: 100,
          duration_months: 1,
        },
      ],
    });
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    useSelector.mockImplementation((callback) =>
      callback({
        motorcycles: store.getState().motorcycles,
      })
    );

    useDispatch.mockImplementation(() => jest.fn());

    wrapper = shallow(<DeleteMotorcycle store={store} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'deleteMotorcycleComponent');
    expect(component.length).toBe(1);
  });

  it('Should render a title', () => {
    const title = findByTestAttr(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it("Should render a table with the motorcycle's data", () => {
    const table = findByTestAttr(wrapper, 'table');
    expect(table.length).toBe(1);
  });

  it("Should render a table header with the motorcycle's data", () => {
    const tableHeader = findByTestAttr(wrapper, 'tableHeader');
    expect(tableHeader.length).toBe(1);
  });

  it("Should render a table row with the motorcycle's data", () => {
    const tableRow = findByTestAttr(wrapper, 'tableRow');
    expect(tableRow.length).toBe(1);
  });

  it("Should render a table cell with the motorcycle's data", () => {
    const tableCell = findByTestAttr(wrapper, 'tableCell');
    expect(tableCell.length).toBe(4);
  });

  it('Should render a table body', () => {
    const tableBody = findByTestAttr(wrapper, 'tableBody');
    expect(tableBody.length).toBe(1);
  });

  it('Should render there is no data to show when there are no motorcycles', () => {
    store = configureStore([thunk])({
      motorcycles: [],
    });
    wrapper = shallow(<DeleteMotorcycle store={store} />);
    const noData = findByTestAttr(wrapper, 'noData');
    expect(noData.length).toBe(1);
    const title = findByTestAttr(wrapper, 'noDataTitle');
    expect(title.length).toBe(1);
  });
});

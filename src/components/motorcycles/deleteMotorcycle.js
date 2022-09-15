import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import Motorcycle from './Motorcycle';

const DeleteMotorcycle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motorcyclesState = useSelector((state) => state.motorcycles);
  const motorcycles = Array.isArray(motorcyclesState)
    && motorcyclesState.map((motor) => (
      <Motorcycle key={motor.id} motor={motor} />
    ));

  return (
    <div className="form" data-test="deleteMotorcycleComponent">
      {motorcycles.length > 0 ? (
        <>
          <h3 data-test="title">Delete Motorcycle</h3>
          <table className="table" data-test="table">
            <thead data-test="tableHeader">
              <tr data-test="tableRow">
                <th data-test="tableCell" scope="col">
                  Model
                </th>
                <th data-test="tableCell" scope="col">
                  Price
                </th>
                <th data-test="tableCell" scope="col">
                  Duration
                </th>
                <th data-test="tableCell" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody data-test="tableBody">{motorcycles}</tbody>
          </table>
        </>
      ) : (
        <div
          className="dflex flex-column justify-content-center border mx-auto info"
          data-test="noData"
        >
          <FontAwesomeIcon icon={faCircleInfo} className="text-info h3" />
          <h2 className="w-100 text-center" data-test="noDataTitle">
            There is no motorcycle
            <FontAwesomeIcon icon={faMotorcycle} />
            {' '}
            available
          </h2>
        </div>
      )}
    </div>
  );
};
export default DeleteMotorcycle;

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
  const motorcycles = Array.isArray(motorcyclesState) && motorcyclesState.map((motor) => (
    <Motorcycle key={motor.id} motor={motor} />
  ));

  return (
    <div className="form">
      {motorcycles.length > 0 ? (
        <>
          <h3>Delete Motorcycle</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Duration</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{motorcycles}</tbody>
          </table>
        </>
      ) : (
        <div className="dflex flex-column justify-content-center border mx-auto info">
          <FontAwesomeIcon icon={faCircleInfo} className="text-info h3" />
          <h2 className="w-100 text-center">
            There is no motorcycle
            <FontAwesomeIcon icon={faMotorcycle} />
            {' '}
            avilable
          </h2>
        </div>
      )}

    </div>
  );
};
export default DeleteMotorcycle;

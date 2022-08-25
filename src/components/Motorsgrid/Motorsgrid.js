import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import Motor from './Motor';

const Motorsgrid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motors = useSelector((state) => state.motorcycles);
  return (
    <div className="container d-flex justify-content-center w-100" style={{ minHeight: '100vh' }}>
    <div className="row w-100 g-0">
    { motors.length > 0
      ? motors.map((motor) => (
        <Motor key={motor.id} motor={motor} />
      )) : (
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
      </div>
  )
}
export default Motorsgrid;

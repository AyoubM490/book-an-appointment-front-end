// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteMotorcycle, fetchMotorcycles } from '../../redux/motorcycles/motorcycles';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMotorcycle, fetchMotorcycles } from '../../redux/motorcycles/motorcycles';

const DeleteMotorcycle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motorcycle = useSelector((state) => state.motorcycle);
  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteMotorcycle(id));
  }
  const motorcycles = motorcycle.map((motor) => (
    <div key={motor.id}>
      <h3>{motor.model}</h3>
      <img src={motor.image} alt="motor-model" />
      <p>
        Duration:
        {motor.duration_months}
        {' '}
        Weeks
        {' '}
        - Price: $
        {motor.price}
      </p>
      <button type="submit" className="btn btn-danger" onClick={(e) => handleDelete(e, motor.id)}>Delete</button>
    </div>
  ));

  return (
    <div className="form">
      <h3>Delete Motorcycle</h3>
      {motorcycles}
    </div>
  );
};
export default DeleteMotorcycle;

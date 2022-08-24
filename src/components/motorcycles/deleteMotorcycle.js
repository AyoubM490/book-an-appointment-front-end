import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMotorcycle,
  fetchMotorcycles,
} from '../../redux/motorcycles/motorcycles';
import Motorcycle from './Motorcycle';

const DeleteMotorcycle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motorcyclesState = useSelector((state) => state.motorcycles);
  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteMotorcycle(id));
  }
  const motorcycles = motorcyclesState.map((motor) => (
    <Motorcycle
      key={motor.id}
      motor={motor}
      handleDelete={() => handleDelete}
    />
  ));

  return (
    <div className="form">
      <h3>Delete Motorcycle</h3>
      {motorcycles}
    </div>
  );
};
export default DeleteMotorcycle;

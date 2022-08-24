import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import Motorcycle from './Motorcycle';

const DeleteMotorcycle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motorcyclesState = useSelector((state) => state.motorcycles);
  const motorcycles = motorcyclesState.map((motor) => (
    <Motorcycle key={motor.id} motor={motor} />
  ));

  return (
    <div className="form">
      <h3>Delete Motorcycle</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Duration</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{motorcycles}</tbody>
      </table>
    </div>
  );
};
export default DeleteMotorcycle;

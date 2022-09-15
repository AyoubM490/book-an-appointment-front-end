import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMotorcycle } from '../../redux/motorcycles/motorcycles';

export default function Motorcycle({ motor }) {
  const dispatch = useDispatch();

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteMotorcycle(id));
  }
  return (
    <tr key={motor.id} data-test="motorcycleComponent">
      <td data-test="motorcycleModel">{motor.model}</td>
      <td data-test="motorcyclePrice">{motor.price}</td>
      <td data-test="motorcycleDuration">{motor.duration_months}</td>
      <td data-test="motorcycleButton">
        <button
          type="submit"
          className="btn btn-danger"
          data-test="deleteButton"
          onClick={(e) => handleDelete(e, motor.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

Motorcycle.propTypes = {
  motor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration_months: PropTypes.number.isRequired,
  }).isRequired,
};

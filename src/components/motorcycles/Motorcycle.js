import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMotorcycle } from '../../redux/motorcycles/motorcycles';

export default function Motorcycle({ motor }) {
  const dispatch = useDispatch();

  function handleDelete(e, id) {
    e.preventDefault();
   window.confirm('Are you sure you want to delete this motorcycle?') && dispatch(deleteMotorcycle(id));
  }
  return (
    <tr key={motor.id}>
      <td>{motor.model}</td>
      <td>{motor.price}</td>
      <td>{motor.duration_months}</td>
      <td>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={(e) => handleDelete(e, motor.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

Motorcycle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  motor: PropTypes.object,
};

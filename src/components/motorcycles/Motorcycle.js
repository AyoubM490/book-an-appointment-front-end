import React from 'react';
import PropTypes from 'prop-types';

export default function Motorcycle({ motor, handleDelete }) {
  return (
    <div key={motor.id}>
      <h3>{motor.model}</h3>
      <img src={motor.image} alt="motor-model" />
      <p>
        Duration:
        {motor.duration_months}
        {' '}
        Weeks - Price: $
        {motor.price}
      </p>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={(e) => handleDelete(e, motor.id)}
      >
        Delete
      </button>
    </div>
  );
}

Motorcycle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  motor: PropTypes.object,
  // eslint-disable-next-line react/require-default-props
  handleDelete: PropTypes.func,
};

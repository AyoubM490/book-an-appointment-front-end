import React from 'react';
import PropTypes from 'prop-types';

const Reservation = (props) => {
  const { reservation, motorcycles } = props;
  const motorcycle = motorcycles.length > 0
    && motorcycles.find((motor) => motor.id === reservation.motorcycle_id);

  return (
    <tr>
      <td>{motorcycle.model}</td>
      <td>{reservation.date}</td>
      <td>{reservation.city}</td>
    </tr>
  );
};

Reservation.propTypes = {
  reservation: PropTypes.arrayOf.isRequired,
  motorcycles: PropTypes.arrayOf.isRequired,
};

export default Reservation;

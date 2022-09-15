import React from 'react';
import PropTypes from 'prop-types';

const Reservation = (props) => {
  const { reservation, motorcycles } = props;
  const motorcycle =
    motorcycles.length > 0 &&
    motorcycles.find((motor) => motor.id === reservation.motorcycle_id);

  return (
    <div data-test="reservationComponent">
      <tr data-test="reservationRow">
        <td data-test="reservationMotorcycle">{motorcycle.model}</td>
        <td data-test="reservationDate">{reservation.date}</td>
        <td data-test="reservationCity">{reservation.city}</td>
      </tr>
    </div>
  );
};

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    city: PropTypes.string,
    motorcycle_id: PropTypes.number,
  }).isRequired,
  motorcycles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      model: PropTypes.string,
    })
  ).isRequired,
};

export default Reservation;

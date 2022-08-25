import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleMotorcycle } from '../../redux/motorcycles/motorcycles';

const Reservation = (props) => {
  const motorcycle = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  const { reservation } = props;

  useEffect(() => {
    dispatch(fetchSingleMotorcycle(reservation.motorcycle_id));
  }, [reservation]);

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
};

export default Reservation;

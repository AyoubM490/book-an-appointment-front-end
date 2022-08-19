import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservations';
import Reservation from './Reservation';

const MyReservationsList = ({ userId }) => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [userId]);

  return (
    <div className="p-3 w-100">
      <h3>My Reservations</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Model</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="table-body">
          { reservations.map((reservation) => (
            <Reservation key={reservation.id} reservation={reservation} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

MyReservationsList.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyReservationsList;

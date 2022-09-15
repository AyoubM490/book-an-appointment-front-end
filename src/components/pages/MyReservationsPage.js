import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reservations';
import Reservation from '../Reservations/Reservation';

const MyReservationsPage = ({ userId }) => {
  const reservations = useSelector((state) => state.reservations);
  const motorcycles = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [userId]);

  return (
    <div className="p-3 w-100" data-test="myReservationsPage">
      <h3 data-test="title">My Reservations</h3>
      <table className="table table-striped" data-test="table">
        <thead data-test="tableHeader">
          <tr data-test="tableRow">
            <th>Model</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="table-body" data-test="tableBody">
          {reservations.map((reservation) => (
            <Reservation
              key={reservation.id}
              reservation={reservation}
              motorcycles={motorcycles}
              data-test="reservation"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

MyReservationsPage.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyReservationsPage;

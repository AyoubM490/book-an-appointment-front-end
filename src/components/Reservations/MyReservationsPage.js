import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reservations';
import Reservation from './Reservation';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';

const MyReservationsPage = ({ userId }) => {
  const reservations = useSelector((state) => state.reservations);
  const motorcycles = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, [dispatch]);

  return (
    <div className="p-3 w-100">
      { reservations.length > 0
        ? (
          <>
            <h3 className="text-center">My Reservations</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Date</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody className="table-body">
                { reservations.length > 0 && reservations.map((reservation) => (
                  <Reservation
                    key={reservation.id}
                    reservation={reservation}
                    motorcycles={motorcycles}
                  />
                ))}
              </tbody>
            </table>
          </>
        )
        : <h2>No Reservations</h2>}
    </div>
  );
};

MyReservationsPage.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyReservationsPage;

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
    <div className="p-3 w-100" data-test="myReservationsPageComponent">
      {reservations.length > 0 ? (
        <>
          <h3 className="text-center" data-test="myReservationsTitle">
            My Reservations
          </h3>
          <table className="table table-striped" data-test="table">
            <thead data-test="tableHeader">
              <tr>
                <th>Model</th>
                <th>Date</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody className="table-body" data-test="tableBody">
              {reservations.length > 0 &&
                reservations.map((reservation) => (
                  <Reservation
                    key={reservation.id}
                    reservation={reservation}
                    motorcycles={motorcycles}
                    data-test="reservationsList"
                  />
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <h2>No Reservations</h2>
      )}
    </div>
  );
};

MyReservationsPage.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyReservationsPage;

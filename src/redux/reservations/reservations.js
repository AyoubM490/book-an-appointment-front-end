import Axios from 'axios';

const BASE_URL = '';

const FETCH_RESERVATIONS = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_RESERVATIONS';
const CREATE_RESERVATION = 'BOOK-APPOINTMENT/MOTORCYCLES/CREATE_RESERVATION';
const CANCEL_RESERVATION = 'BOOK-APPOINTMENT/MOTORCYCLES/CANCEL_RESERVATION';

const fetchReservations = (payload) => ({
  type: FETCH_RESERVATIONS,
  payload,
});

const createReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

const cancelReservation = () => ({
  type: CANCEL_RESERVATION,
});

const reservationsState = [];

export const fetchReservationsApi = (accessToken) => async (dispatch) => {
  const returnValue = await Axios.get(`${BASE_URL}/motorcycles`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { motorcycles } = returnValue.data.data;

  const returnValue2 = await Axios.get(`${BASE_URL}/reservations`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const appointments = [];
  const { reservations } = returnValue2.data.data;
  for (let i = 0; i < reservations.length; i += 1) {
    const data = {};
    data.city = reservations[i].city;
    data.date = reservations[i].date;
    data.id = reservations[i].id;
    for (let j = 0; j < motorcycles.length; j += 1) {
      if (reservations[i].motorcycle_id === motorcycles[j].id) {
        data.motorcycle = motorcycles[j];
      }
    }
    appointments.push(data);
  }
  dispatch(fetchReservations(appointments));
};

export const createReservationApi = (accessToken, data) => async (dispatch) => {
  const { city, date, motorcycle } = data;
  const newReservation = { motorcycle_id: motorcycle.id, city, date };
  await Axios.post(`${BASE_URL}/reservations`, newReservation, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(createReservation(data));
};

export const cancelReservationApi = (accessToken, id) => async (dispatch) => {
  await Axios.delete(`${BASE_URL}/reservations/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(cancelReservation(id));
};

const reducer = (state = reservationsState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    case CREATE_RESERVATION:
      return [...state, action.payload];
    case CANCEL_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

import API from '../api';

export const FETCH_RESERVATIONS = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_RESERVATIONS';
export const CREATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/CREATE_RESERVATION';
export const DELETE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/DELETE_RESERVATION';
export const FETCH_SINGLE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_SINGLE_RESERVATION';
export const UPDATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/UPDATE_RESERVATION';

export const fetchReservations = (userId) => (dispatch) => {
  API.fetchReservations(userId, (response) => {
    dispatch({
      type: FETCH_RESERVATIONS,
      payload: response.data,
    });
  });
};

export const createReservation = (reservation, userId, motorId) => (dispatch) => {
  API.addReservation(reservation, userId, motorId, (response) => {
    dispatch({
      type: CREATE_RESERVATION,
      payload: response.data,
    });
  });
};

export const deleteReservation = (id) => (dispatch) => {
  API.deleteReservation(id, () => {
    dispatch({
      type: DELETE_RESERVATION,
      payload: id,
    });
  });
};

export const fetchSingleReservation = (id) => (dispatch) => {
  API.fetchSingleReservation(id, (response) => {
    dispatch({
      type: FETCH_SINGLE_RESERVATION,
      payload: response.data,
    });
  });
};

export const updateReservation = (id, reservation) => (dispatch) => {
  API.updateReservation(id, reservation, () => {
    dispatch({
      type: UPDATE_RESERVATION,
      payload: reservation,
      id,
    });
  });
};

const initialState = [];

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    case CREATE_RESERVATION:
      return [...state, action.payload];
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    case FETCH_SINGLE_RESERVATION:
      return action.payload;
    case UPDATE_RESERVATION:
      return state.map((reservation) => (reservation.id === action.id
        ? {
          ...action.payload,
        }
        : reservation));
    default:
      return state;
  }
};

export default reservationsReducer;

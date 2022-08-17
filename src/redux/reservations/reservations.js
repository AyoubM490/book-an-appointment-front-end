import API from '../api';

export const FETCH_RESERVATIONS = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_RESERVATIONS';
export const CREATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/CREATE_RESERVATION';
export const DELETE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/DELETE_RESERVATION';
export const FETCH_SINGLE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_SINGLE_RESERVATION';
export const UPDATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/UPDATE_RESERVATION';

export const fetchReservations = () => (dispatch) => {
  API.fetchReservations((response) => {
    dispatch({
      type: FETCH_RESERVATIONS,
      payload: response.data,
    });
  });
};

export const createReservation = () => (dispatch) => {
  API.addReservation((response) => {
    dispatch({
      type: CREATE_RESERVATION,
      payload: response.data,
    });
  });
};

export const deleteReservation = () => (dispatch) => {
  API.deleteReservation((response) => {
    dispatch({
      type: DELETE_RESERVATION,
      payload: response.data,
    });
  });
};

export const fetchSingleReservation = () => (dispatch) => {
  API.fetchSingleReservation((response) => {
    dispatch({
      type: FETCH_SINGLE_RESERVATION,
      payload: response.data,
    });
  });
};

export const updateReservation = () => (dispatch) => {
  API.updateReservation((response) => {
    dispatch({
      type: UPDATE_RESERVATION,
      payload: response.data,
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
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;

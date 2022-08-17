export const FETCH_RESERVATIONS = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_RESERVATIONS';
export const CREATE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/CREATE_RESERVATION';
export const DELETE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/DELETE_RESERVATION';
export const FETCH_SINGLE_RESERVATION = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_SINGLE_RESERVATION';
export const UPDATE_MOTOR = 'BOOK-APPOINTMENT/RESERVATIONS/UPDATE_MOTOR';

export const fetchReservations = (payload) => ({
  type: FETCH_RESERVATIONS,
  payload,
});

export const createReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const fetchSingleReservation = (payload) => ({
  type: FETCH_SINGLE_RESERVATION,
  payload,
});

export const updateReservation = (payload) => ({
  type: UPDATE_MOTOR,
  payload,
});

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
    case UPDATE_MOTOR:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;

import API from '../api';

export const FETCH_MOTORCYCLES = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_MOTORCYCLES';
export const CREATE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/CREATE_MOTORCYCLE';
export const DELETE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/DELETE_MOTORCYCLE';
export const FETCH_SINGLE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_SINGLE_MOTORCYCLE';
export const UPDATE_MOTOR = 'BOOK-APPOINTMENT/MOTORCYCLES/UPDATE_MOTOR';

export const fetchMotorcycles = () => (dispatch) => {
  API.fetchMotors((response) => {
    dispatch({
      type: FETCH_MOTORCYCLES,
      payload: response.data,
    });
  });
};

export const createMotorcycle = (motorcycle, userId) => (dispatch) => {
  API.addMotor(motorcycle, userId, (response) => {
    dispatch({
      type: CREATE_MOTORCYCLE,
      payload: response.data,
    });
  });
};

export const deleteMotorcycle = (id) => (dispatch) => {
  API.deleteMotor(id, () => {
    dispatch({
      type: DELETE_MOTORCYCLE,
      payload: id,
    });
  });
};

export const fetchSingleMotorcycle = (id) => (dispatch) => {
  API.fetchSingleMotor(id, (response) => {
    dispatch({
      type: FETCH_SINGLE_MOTORCYCLE,
      payload: response.data,
    });
  });
};

export const updateMotorcycle = (id) => (dispatch) => {
  API.updateMotor(id, () => {
    dispatch({
      type: UPDATE_MOTOR,
      payload: id,
    });
  });
};

const initialState = [];

const motorcyclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORCYCLES:
      return action.payload;
    case CREATE_MOTORCYCLE:
      return [...state, action.payload];
    case DELETE_MOTORCYCLE:
      return state.filter((motorcycle) => motorcycle.id !== action.payload);
    case FETCH_SINGLE_MOTORCYCLE:
      return action.payload;
    case UPDATE_MOTOR:
      return action.payload;
    default:
      return state;
  }
};

export default motorcyclesReducer;

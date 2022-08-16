import Axios from 'axios';

const BASE_URL = '';

const FETCH_MOTORCYCLES = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_MOTORCYCLES';
const CREATE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/CREATE_MOTORCYCLE';
const DELETE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/DELETE_MOTORCYCLE';

const fetchMotorcycles = (payload) => ({
  type: 'FETCH_MOTORCYCLE',
  payload,
});

const createMotorcycle = (payload) => ({
  type: 'CREATE_MOTORCYCLE',
  payload,
});

const deleteMotorcycle = (payload) => ({
  type: 'DELETE_MOTORCYCLE',
  payload,
});

const motorcyclesState = [];

export const fetchMotorcyclesApi = (accessToken) => async (dispatch) => {
  const returnValue = await Axios.get(`${BASE_URL}/motorcycles`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { motorcycles } = returnValue.data.data;
  dispatch(fetchMotorcycles(motorcycles));
};

export const createMotorcycleApi = (accessToken, data) => async (dispatch) => {
  await Axios.post(`${BASE_URL}/motorcycles/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(createMotorcycle(data));
};

export const deleteMotorcycleApi = (accessToken, id) => async (dispatch) => {
  await Axios.delete(`${BASE_URL}/motorcycles/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(deleteMotorcycle(id));
};

const reducer = (state = motorcyclesState, action) => {
  switch (action.type) {
    case FETCH_MOTORCYCLES:
      return action.payload;
    case CREATE_MOTORCYCLE:
      return [...state, action.payload];
    case DELETE_MOTORCYCLE:
      return state.filter((motorcycle) => motorcycle.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

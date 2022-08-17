import Axios from 'axios';
import {
  fetchMotorcycles,
  createMotorcycle,
  deleteMotorcycle,
  fetchSingleMotorcycle,
} from './motorcycles';

const BASE_URL = '';

export const fetchMotorcyclesApi = (accessToken) => async (dispatch) => {
  const returnValue = await Axios.get(`${BASE_URL}/motocycles`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { motorcycles } = returnValue.data.data;
  dispatch(fetchMotorcycles(motorcycles));
};

export const createMotorcycleApi = (accessToken, data) => async (dispatch) => {
  await Axios.post(`${BASE_URL}/motocycles/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(createMotorcycle(data));
};

export const deleteMotorcycleApi = (accessToken, id) => async (dispatch) => {
  await Axios.delete(`${BASE_URL}/motocycles/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(deleteMotorcycle(id));
};

export const fetchSingleMotorcycleApi = (accessToken, id) => async (dispatch) => {
  await Axios.get(`${BASE_URL}/motocycles/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  dispatch(fetchSingleMotorcycle(id));
};

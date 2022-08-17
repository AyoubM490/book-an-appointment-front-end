import {
  fetchMotorcycles,
  createMotorcycle,
  deleteMotorcycle,
  fetchSingleMotorcycle,
  updateMotorcycle,
} from './motorcycles';

const baseURL = 'http://localhost:3000/api';

export const fetchMotors = async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/motocycles`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(fetchMotorcycles(data));
};

export const fetchSingleMotor = async (id, dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/motocycles/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(fetchSingleMotorcycle(data));
};

export const addMotor = (motor) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/motocycles`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(motor),
  });
  const data = await response.json();
  dispatch(createMotorcycle(data));
};

export const updateMotor = (motor, id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/motocycles/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(motor),
  });
  const data = await response.json();
  dispatch(updateMotorcycle(data));
};

export const deleteMotor = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${baseURL}/motocycles/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteMotorcycle(id));
};
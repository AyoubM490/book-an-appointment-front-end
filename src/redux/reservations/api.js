import {
  fetchReservations,
  createReservation,
  deleteReservation,
  fetchSingleReservation,
  updateReservation,
} from './reservations';

const baseURL = 'http://localhost:3000/api';

export const fetchMotors = async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/motocycles`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(fetchReservations(data));
};

export const fetchSingleMotor = async (id, dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/motocycles/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(fetchSingleReservation(data));
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
  dispatch(createReservation(data));
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
  dispatch(updateReservation(data));
};

export const deleteMotor = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${baseURL}/motocycles/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteReservation(id));
};

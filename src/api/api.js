import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: `${localStorage.getItem('token')}`,
  },
});

export const baseApi = axios.create({
  baseURL: `${baseURL}`,
});

export const signup = async (user) => {
  const response = await baseApi.post('/users/signup', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem('token', authToken);

  return { authToken, currentUser };
};

export const login = async (user) => {
  const response = await baseApi.post('/users/login', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  localStorage.setItem('token', authToken);
  return { authToken, currentUser };
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  await baseApi.delete('/users/logout', {
    headers: {
      Authorization: `${token}`,
    },
  });
};

import axios from "axios";

const baseURL = 'http://localhost:3000/api';

const API = () => {
  login: (user, success) => {
    axios.post(`${baseURL}/users/sign_in`,
      {
        user,
      })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },

  register; (user, success) => {
    axios.post(`${baseURL}/users`,
      {
        user,
      })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  }
}

export default API;
import axios from 'axios';

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

  register: (user, success) => {
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
  },
  fetchMotors: (success) => {
    axios.get(`${baseURL}/motocycles`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchSingleMotor: (id, success) => {
    axios.get(`${baseURL}/motocycles/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  addMotor: (motor, success) => {
    axios.post(`${baseURL}/motocycles`, {
      motors: motor,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  updateMotor: (id, motor, success) => {
    axios.post(`${baseURL}/motocycles/${id}`, {
      motors: motor,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  deleteMotor: (id, success) => {
    axios.delete(`${baseURL}/motocycles/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchSingleReservation: (id, userId, success) => {
    axios.get(`${baseURL}/reservations/${id}?user_id=${userId}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  addReservation: (userId, reservation, success) => {
    axios.post(`${baseURL}/reservations?user_id=${userId}`, {
      reservations: reservation,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  updateReservation: (id, userId, reservation, success) => {
    axios.patch(`${baseURL}/reservations/${id}?user_id=${userId}`, {
      reservations: reservation,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  deleteReservation: (id, userId, success) => {
    axios.delete(`${baseURL}/reservations/${id}?user_id=${userId}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  fetchSingleReservation: (id, userId, success) => {
    axios.get(`${baseURL}/reservations/${id}?user_id=${userId}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  addReservation: (userId, reservation, success) => {
    axios.post(`${baseURL}/reservations?user_id=${userId}`, {
      reservations: reservation,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  updateReservation: (id, userId, reservation, success) => {
    axios.patch(`${baseURL}/reservations/${id}?user_id=${userId}`, {
      reservations: reservation,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
  deleteReservation: (id, userId, success) => {
    axios.delete(`${baseURL}/reservations/${id}?user_id=${userId}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  };
};

export default API;

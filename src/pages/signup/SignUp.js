import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/index';

const SignUpPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: username,
    };

    dispatch(signup(user));
    navigate('/home');
  };

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div
        className="container mt-5 ml-1 col-sm-4"
        data-test="signUpPageComponent"
      >
        <form onSubmit={handleSubmit} className="form m-2" data-test="form">
          <h3 className="text-center" data-test="signUpText">
            SignUp
          </h3>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="User name"
              onChange={handleOnChange}
              value={username}
              data-test="usernameInput"
            />
          </div>
          <button
            className="btn btn-success"
            type="submit"
            data-test="submitButton"
          >
            signup
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;

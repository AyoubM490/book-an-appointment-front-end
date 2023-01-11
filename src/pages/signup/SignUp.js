import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/index';

const SignUpPage = () => {
  const token = useSelector((state) => state.auth.token);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: username,
    };

    dispatch(signup(user));
    if (token === null) {
      setMessage('User already exists, Login to continue');
    } else {
      navigate('/home');
    }
  };

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div className="container mt-5 ml-1 col-sm-6">
        <p className="text-danger p-3">{message}</p>
        <form onSubmit={handleSubmit} className="form m-2">
          <h3 className="text-center">
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
            />
          </div>
          <button className="btn btn-success" type="submit">Signup</button>
          {message !== '' ? (
            <Link to="/signin" className="btn btn-success mt-3">
              Login
            </Link>
          ) : ''}
        </form>
      </div>
    </>
  );
};

export default SignUpPage;

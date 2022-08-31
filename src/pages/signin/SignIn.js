import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/index';

const SignInPage = () => {
  const token = useSelector((state) => state.auth.token);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: username,
    };
    dispatch(login(user));
    if (token === null) {
      setMessage('User is not registered, Register user to continue');
    } else {
      navigate('/home');
    }
  };

  return (
    <>
      <div className="container mt-5 ml-1 col-sm-6">
        <p className="text-danger p-3">{message}</p>
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <h3 className="text-center">
            LogIn
          </h3>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="User name"
              onChange={handleChange}
              value={username}
            />
          </div>
          <button type="submit" className="btn btn-success">
            LogIn
          </button>
          {message !== '' ? (
            <Link to="/signup" className="btn btn-success mt-3">
              Register
            </Link>
          ) : ''}
        </form>
      </div>
    </>
  );
};

export default SignInPage;

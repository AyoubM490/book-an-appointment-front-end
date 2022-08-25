import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/index';

const SignInPage = () => {
  const [username, setUsername] = useState('');
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
    navigate('/home');
  };

  return (
    <>
      <div className="container mt-5 ml-1 col-sm-4">
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
        </form>
      </div>
    </>
  );
};

export default SignInPage;

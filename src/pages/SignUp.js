import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUpPage = () => (
  <>
    <div className="container col-sm-4 ">
      <FontAwesomeIcon icon="fa-regular fa-xmark" />
      <form className="form m-2">
        <h3 className="text-center">
          SignUp
        </h3>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="User name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            name="password2"
            placeholder="Confirm password"
          />
        </div>
        <Link to="/sidebar" className="btn btn-success">
          Sign up
        </Link>
      </form>
    </div>
  </>
);

export default SignUpPage;

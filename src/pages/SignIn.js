import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => (
  <>
    <div className="container d-flex justify-content-center align-items-center m-5">
      <form className="form">
        <h3 className="text-center">
          LogIn
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
        <Link to="/sidebar" className="btn btn-success">
          LogIn
        </Link>
      </form>
    </div>
  </>
);

export default SignInPage;

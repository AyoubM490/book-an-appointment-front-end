import React from 'react';

const SignInPage = () => (
  <>
    <div className="container d-flex justify-content-center align-items-center m-5">
      <form className="form">
        <h3>
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
        <button className="btn btn-success" type="submit">
          LogIn
        </button>
      </form>
    </div>
  </>
);

export default SignInPage;

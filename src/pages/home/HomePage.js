import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => (
  <>
    <div className="home-img" data-test="homePageComponent">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1 className="log-text">BOOK YOUR POWER MOTORCYCLE EASILY</h1>
        <Link to="/signin">
          <button
            type="button"
            className="btn btn-success px-5 mb-2"
            data-test="loginButton"
          >
            LOGIN
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="btn btn-outline-success px-5 my-2"
            data-test="signupButton"
          >
            SIGNUP
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default HomePage;

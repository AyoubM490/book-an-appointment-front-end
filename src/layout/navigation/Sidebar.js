import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import { logout } from '../../redux/auth';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <nav className="sidenav" data-test="navigationComponent">
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: '50%' }}
        data-test="navigationLinks"
      >
        <div data-test="logo">
          <Link to="/">
            <h1 className="text-center text-dark">
              <i>Power Motors</i>
            </h1>
          </Link>
        </div>
        <div className="d-flex flex-column center-align" data-test="navLinks">
          <NavLink
            to="/home"
            exact
            activeClassName="active"
            className="nav-link p-2"
          >
            MOTORCYCLES
          </NavLink>
          <NavLink
            to="/reserve/add"
            activeClassName="active"
            className="nav-link p-2"
          >
            RESERVE
          </NavLink>
          <NavLink
            to="/reservations"
            activeClassName="active"
            className="nav-link p-2"
          >
            MY RESERVATIONS
          </NavLink>
          <NavLink
            to="add-motorcycle"
            activeClassName="active"
            className="nav-link p-2"
          >
            ADD MOTORCYCLE
          </NavLink>
          <NavLink
            to="delete-motorcycle"
            activeClassName="active"
            className="nav-link p-2"
          >
            DELETE MOTORCYCLE
          </NavLink>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-secondary w-50 d-flex align-self-center justify-content-center"
        onClick={handleClick}
        data-test="signOutButton"
      >
        Sign out
      </button>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        data-test="socialMediaIcons"
      >
        <p className="social-wraper">
          <a
            href="https://www.twitter.com"
            className="twitter social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faTwitter} fontSize="23px" />
          </a>
          <a
            href="https://www.facebook.com"
            className="facebook social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faFacebook} fontSize="23px" />
          </a>
          <a
            href="https://www.google.com"
            className="googleplus social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faGooglePlus} fontSize="23px" />
          </a>
          <a
            href="https://www.youtube.com"
            className="youtube social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faYoutube} fontSize="23px" />
          </a>

          <a
            href="http://www.instagram.com"
            className="instagram social text-black-50 px-1"
          >
            <FontAwesomeIcon icon={faInstagram} fontSize="23px" />
          </a>
        </p>
        <div data-test="copyRightText"> &copy; 2022 Power Motors Inc.</div>
      </div>
    </nav>
  );
};

export default Navigation;

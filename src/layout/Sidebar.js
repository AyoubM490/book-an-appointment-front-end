import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="sidenav">
      <div className="d-flex flex-column justify-content-between" style={{ height: '50%' }}>
        <div>
          <Link to="/">
            <h1 className="text-center text-dark"><i>Power Motors</i></h1>
          </Link>
        </div>
        <div className="ml-2 d-flex flex-column align-items-center">
          <NavLink to="#" exact activeClassName="active" className="nav-link ">MOTORSCYCLES</NavLink>
          <NavLink to="#" activeClassName="active" className="nav-link">MY RESERVATIONS</NavLink>
          <NavLink to="#" activeClassName="active" className="nav-link">ADD MOTORCYCLE</NavLink>
          <NavLink to="#" activeClassName="active" className="nav-link">RESERVATIONS</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

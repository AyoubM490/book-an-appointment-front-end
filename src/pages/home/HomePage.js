import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (

  <>
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 ">
      <div className="col ">
        <Link to="/signin"><button type="button" className="btn btn-success m-2">LOGIN</button></Link>
      </div>
      <div className="col ">
        <Link to="/signup"><button type="button" className="btn btn-success m-2">SIGNUP</button></Link>
      </div>
    </div>
  </>
);

export default HomePage;

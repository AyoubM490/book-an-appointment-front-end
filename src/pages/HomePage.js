import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HomePage = () => (

  <>
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="col ">
        <Link to="/signin"><Button type="button" className="btn info m-2">LOGIN</Button></Link>
      </div>
      <div className="col ">
        <Link to="/signup"><Button type="button" className="btn info m-2">SIGNUP</Button></Link>
      </div>
    </div>
  </>
);

export default HomePage;

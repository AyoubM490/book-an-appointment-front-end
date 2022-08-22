import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Motor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
const Motor = (motor) => {
  console.log('This is details page f each motors: ', motor.motor);
  return (
    <div className="motor-card">
      <Card style={{ width: '18rem', border: 'none' }}>
        <div className="motor-image-wrap">
          <Card.Img variant="top" src={motor.motor.image} className="motor-image" />
        </div>
        <Card.Body>
          <Card.Title>{motor.motor.model}</Card.Title>
          <Card.Text>
            {motor.motor.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">  <FontAwesomeIcon icon={faGooglePlus} fontSize="23px" className='social-m' /></Card.Link>
          <Card.Link href="#">  <FontAwesomeIcon icon={faFacebook} fontSize="23px" className='social-m' /></Card.Link>
          <Card.Link href="#">  <FontAwesomeIcon icon={faTwitter} fontSize="23px" className='social-m' /></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Motor;

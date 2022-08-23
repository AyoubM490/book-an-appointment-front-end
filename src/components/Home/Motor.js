import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
        <Link to={`/motorcycle/${motor.motor.id}`}>
          <div className="motor-image-wrap">
            <Card.Img variant="top" style={{ width: '330px', height: '200px' }} src={motor.motor.image} className="motor-image" />
          </div>
          <Card.Body>
            <Card.Title>{motor.motor.model.toUpperCase()}</Card.Title>
            <Card.Text>
              {motor.motor.description}
            </Card.Text>
          </Card.Body>
        </Link>
        <Card.Body>
          <Card.Link href="#">
            {' '}
            <FontAwesomeIcon icon={faGooglePlus} fontSize="23px" className="social-m" />
          </Card.Link>
          <Card.Link href="#">
            {' '}
            <FontAwesomeIcon icon={faFacebook} fontSize="23px" className="social-m" />
          </Card.Link>
          <Card.Link href="#">
            {' '}
            <FontAwesomeIcon icon={faTwitter} fontSize="23px" className="social-m" />
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Motor;

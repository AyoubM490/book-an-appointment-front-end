import React from 'react'
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Motor.css';
const Motor = (motor) => {
    console.log("This is details page f each motors: ",motor.motor);
  return (
    <div className='motor-card'>
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
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}
export default Motor;

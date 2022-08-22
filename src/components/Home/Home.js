import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import './Home.css';
import Motor from './Motor';
import responsive from '../../config/responsive';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motors = useSelector((state) => state.motorcycle);
  console.log('Data from the API: ', motors);

  return (
    <div className="">
      <h2 className="text-center"> LATEST MODELS</h2>
      <p className="text-center">Please select power models</p>
      <div className="show-motor w-100">
        <Carousel
          autoPlay
          className="w-75"
          keyBoardControl
          itemClass="mr-10"
          responsive={responsive([3, 2, 1])}
        >
          {motors.map((motor) =>( 
            <Link to={`/motorcycle/${motor.id}`}>
          <Motor key={motor.id} motor={motor} />
          </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;

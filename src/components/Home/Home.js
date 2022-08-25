import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import Motor from './Motor';
import responsive from '../../config/responsive';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motors = useSelector((state) => state.motorcycles);

  return (
    <div className="text-center w-75">
      <h2 className="text-center m-4">POWER MOTORS LATEST MODELS</h2>
      <p className="text-center header-text2 m-2">Please select a power models</p>
      <div className="show-motor">
        <Carousel
          autoPlay
          className="w-75"
          keyBoardControl
          itemClass="mr-10"
          responsive={responsive([3, 2, 1])}
        >
          { motors.length > 0
            ? motors.map((motor) => (
              <Motor key={motor.id} motor={motor} />
            )) : (
              <div className="dflex flex-column justify-content-center border mx-auto info">
                <FontAwesomeIcon icon={faCircleInfo} className="text-info h3" />
                <h2 className="w-100 text-center">
                  There is no motorcycle
                  <FontAwesomeIcon icon={faMotorcycle} />
                  {' '}
                  avilable
                </h2>
              </div>
            )}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;

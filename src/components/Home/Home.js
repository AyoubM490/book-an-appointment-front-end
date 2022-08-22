import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import './Home.css';
import Motor from './Motor';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMotorcycles());
    } , []);
    const motors = useSelector((state) => state.motorcycle);
    console.log("Data from the API: ",motors);
  return (
    <div className=''>
       <h2 className='text-center'> LATEST MODELS</h2>
       <p className='text-center'>Please select power models</p>
         <div className='d-flex justify-content-center'>
                {motors.map((motor) => {
                    return <Motor key={motor.id} motor={motor} />
                } )}
            </div>
        </div>
  )
}
export default Home;

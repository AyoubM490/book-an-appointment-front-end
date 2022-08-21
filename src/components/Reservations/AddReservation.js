import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import './AddReservation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { createReservation } from '../../redux/reservations/reservations';
const AddReservation = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true)
  const close = () => {
    setIsOpen(false) 
    console.log(isOpen)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation());
  }
  if (isOpen) {
  return (
    <div className="add-reservation-main-wrap w-100 h-100 mh-100">
    <div className='add-reservation h-100'>
    <FontAwesomeIcon icon={faXmark} className="text-light mx-5 h1 cursor" onClick={()=> {close()}} />
      <div className='reserve'>
      <h2 className='text-center text-light'>Reserve Motorcycle</h2>
      <p className='w-50 text-center text-light mx-auto pb-4'>Power Motorcycle was founded in 2022 to challenge the perception of what an American motorcycle could be. 
        Anything that compromises the ride, aesthetics, stance or function is treated as an opportunity to innovate 
        and improve the design.Power motors owners seek more than just a machine. 
        They are passionate individuals in search of a completely immersive riding experience. 
        Every Power Motorcycle is built from an obsession for innovative design, engineering excellence and 
        dedication to the rider.</p>
        <form className='d-flex justify-content-center w-50 mx-auto' onSubmit={handleSubmit}>
        <input type={'text'} className='form-control w-25' placeholder='City ' required />
        <button className='reserve-btn rounded-pill' type='button'>Reserve</button>
        </form>
        </div>
    </div>
    </div>
  )
  } else {
    return null
  }
}
export default AddReservation;

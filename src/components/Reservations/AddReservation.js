import React from 'react'
import './AddReservation.css'
const AddReservation = () => {
  return (
    <div className="add-reservation-main-wrap w-100 h-100 mh-100">
    <div className='add-reservation h-100'>
      <h2 className='text-center  text-light'>Reserve Motorcycle</h2>
      <p className='w-25 text-center text-light mt-5'>Power Motorcycle was founded in 2022 to challenge the perception of what an American motorcycle could be. 
        Anything that compromises the ride, aesthetics, stance or function is treated as an opportunity to innovate 
        and improve the design.Power motors owners seek more than just a machine. 
        They are passionate individuals in search of a completely immersive riding experience. 
        Every Power Motorcycle is built from an obsession for innovative design, engineering excellence and 
        dedication to the rider.</p>
        <input type={'text'} className='form-control w-25' placeholder='City ' />
        <button className='button' type='button'>Reserve</button>
     
    </div>
    </div>
  )
}
export default AddReservation;

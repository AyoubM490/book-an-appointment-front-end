import React from 'react'

const Motor = (motor) => {
  const {
    motor: {
      id, description, model, image,price
    },
  } = motor;
  return (
    <div className='col-lg-4 col-sm-3'>
   <div className='border'>
   <p>{model}</p>
    <img src={image} alt={model} className='img-fluid' />
    <div className='grid-motor-info'>
    
    <p>{description}</p>
    <p>{price}</p>
    </div>

   </div>
  
      </div>
  )
}
export default Motor;

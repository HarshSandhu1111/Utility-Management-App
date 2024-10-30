import React from 'react'
import './Bookings.css';
import { useLocation } from 'react-router-dom';
const Bookings = () => {
    const location = useLocation();
    const data= location.state;

    
  return (
    <div>
       
        <div className='Booking-main-div'>
            <h3>Add your Booking from anywhere</h3>
            <hr></hr>

           
            <div className='Booking-main-div-p1'>
            <h4>Select date</h4>
            <input type='date'  placeholder='start time'></input>
            
            </div>
            
            

            <div className='checkbutton'><btn>Check Availablitity</btn></div>
            <div className='Add-button'><btn>Add Booking</btn></div>
            

            
        </div>



    </div>
  )
}

export default Bookings
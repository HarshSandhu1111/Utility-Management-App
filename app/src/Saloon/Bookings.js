import React, { useState } from 'react'
import './Bookings.css';
import { useLocation ,useNavigate} from 'react-router-dom';

const Bookings = () => {

    const location = useLocation();
    const data= location.state;
    const navigate = useNavigate();
    const[date,setdate]=useState("");

    const navigatetoCheck = () =>{
      navigate('/check_available',{state:data});
    }
    const navigatetoBook = () =>{
      navigate('/bookingstatus',{state:data});
      console.log(data);
      
    }
  return (
    <div>
       
        <div className='Booking-main-div'>
            <h3>Add your Booking from anywhere</h3>
            <hr></hr>

           
            <div className='Booking-main-div-p1'>
            <h4>Select date</h4>
            <input type='date'  placeholder='start time'></input>
            
            </div>
            
            

            <div onClick={navigatetoBook} className='Add-button'><btn >Add Booking</btn></div>
            

            
        </div>



    </div>
  )
}

export default Bookings
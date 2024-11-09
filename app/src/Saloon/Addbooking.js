import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Addbooking.css'; // Add CSS file for spinner styling

const Addbooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const providerId = location.state;
  const notify = (res) => { toast(res); };
  const effectRan = useRef(false);
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (effectRan.current) return;

    // Start with a 2-second loading delay
    const startBookingProcess = setTimeout(() => {
      setLoading(false); // Hide spinner after 2 seconds

      const checkAvailability = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/check_available/${providerId}`);
          const isAvailable = response.data.isAvailable;

          console.log("Availability response:", isAvailable);

          if (isAvailable) {
            notify("Booking Done");
          } else {
            setErrorMessage("Sorry, booking failed. The provider is busy today. Try again tomorrow.");
            notify("Booking Failed");
          }
        } catch (error) {
          console.error("Error checking availability:", error);
          setErrorMessage("An error occurred while checking availability.");
        }
      };

      checkAvailability();

      // Automatically navigate back after 4 seconds
      setTimeout(() => {
        navigate(-1);
      }, 4000);

      effectRan.current = true;
    }, 2000);

    // Clean up timer on unmount
    return () => clearTimeout(startBookingProcess);
  }, [navigate]);

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      
      <div>
        {loading ? (
          <div className="spinner"></div> // Display spinner for 2 seconds
        ) : (
          <div>
            {errorMessage ? (
              <h2>{errorMessage}</h2>
            ) : (
              <h1>Thank you for Booking! The provider will contact you soon.</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Addbooking;

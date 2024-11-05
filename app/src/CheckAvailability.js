import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const CheckAvailability = () => {
  const location = useLocation();
  const providerId = location.state; 

  console.log("Booking for provider with id:", providerId);

  const [availability, setAvailability] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const checkProviderAvailability = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/check_available/${providerId}`);
        setAvailability(response.data); 
      } catch (error) {
        console.error("Error checking availability:", error);
        setError("Unable to fetch provider availability");
      }
    };

    checkProviderAvailability();
  }, [providerId]);

  if (error) return <div>{error}</div>;
  if (!availability) return <div>Checking availability...</div>;

  return (
    <div>
      <h3>Provider Availability</h3>
      
      <p>Is Available Today: {availability.isAvailable ? "Yes" : "No"}</p>
      <p>First Name: {availability.providerDetails.firstName}</p>
      <p>Last Name: {availability.providerDetails.lastName}</p>
      <p>Address: {availability.providerDetails.address}</p>
      
    </div>
  );
};

export default CheckAvailability;

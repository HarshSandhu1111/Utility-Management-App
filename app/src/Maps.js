import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Maps.css';

const containerStyle = {
  width: '30%',
  height: '300px',
};

function MyMapComponent() {
  const [lat, setLat] = useState(null);  // State for latitude
  const [lng, setLng] = useState(null);  // State for longitude

  useEffect(() => {
    // Fetch geolocation with high accuracy
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (error) => {
        console.error("Error fetching geolocation:", error);
        // Fallback to default location if error occurs
        setLat(40.73061);  // Example: New York City
        setLng(-73.935242);
      },
      {
        enableHighAccuracy:true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }, []);

  // Handle case when geolocation is still loading
  if (lat === null || lng === null) {
    return <div>Loading...</div>;
  }

  const center = { lat, lng };  // Center based on updated lat and lng

  return (
    <div className='Mapsdiv'>
      <h2>Your Location</h2>
      <LoadScript googleMapsApiKey="AIzaSyDOog3GNoPixvDUaBJtBEyz8X5U6B32SwY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}  // Use the updated center
          zoom={16}
          onClick={(ev) => {
            console.log("latitude = ", ev.latLng.lat());
            console.log("longitude = ", ev.latLng.lng());
          }}
        >
          {/* Marker showing the current location */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(MyMapComponent);

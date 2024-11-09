import React from 'react';
import './LocationPermission.css';
import { NavLink } from 'react-router-dom';

const LocationPermission = () => {
  return (
    <div className="containerL">
      <div className="card">
        <div className="icon-container">
          <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location Icon" />
        </div>
        <h2>Allow your location</h2>
        <p>We will need your location to give you a better experience.</p>
        <NavLink to={"/Maps"}>Grant permission </NavLink>
        <button className="deny-button">Not now</button>
      </div>
    </div>
  );
};

export default LocationPermission;

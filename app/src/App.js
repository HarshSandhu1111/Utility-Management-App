
import './App.css';
import Nav from './Nav';
import Body from './Body';
import Login from './Navbar/Login.js';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Location from './Navbar/Location.js';
import Allservices from './Allservices';
import LocationPermission from './Navbar/LocationPermission.js';
import Saloon from './Saloon.js';
import Maps from './Navbar/Maps.js';
import Signup from './Navbar/Signup.js';
import Bookings from './Saloon/Bookings';
import Addbooking from './Saloon/Addbooking';



function App() {
  return (
     <BrowserRouter>
  <Nav></Nav>
      <Routes>
      <Route exact path='/home' element={<div>
        <Body></Body>
      </div>} />  
      <Route exact path='/' element={<div>
        <Body></Body>
      </div>} />
  <Route exact path='/login' element={<Login/>} />
  <Route path='/location' element={<Location/>} />
  <Route path='/allservices' element={<Allservices/>} />
  <Route path='/locationpermission' element={<LocationPermission/>} />
  <Route path='/saloon' element={<Saloon/>} />
  <Route path='/Maps' element={<Maps  />
} />
<Route path='/signup' element={<Signup  />
} />

<Route path='/bookings' element={<Bookings  />
} />



<Route path='/BookingStatus' element={<Addbooking  />
} />


      </Routes>
      </BrowserRouter>
  )
}

export default App;

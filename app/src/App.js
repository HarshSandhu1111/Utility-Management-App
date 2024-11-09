
import './App.css';
import Nav from './Nav';
import Body from './Body';
import Login from './Login';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Location from './Location';
import Allservices from './Allservices';
import LocationPermission from './LocationPermission';
import Saloon from './Saloon';
import Maps from './Maps';
import Signup from './Signup';
import Bookings from './Bookings';
import Addbooking from './Addbooking';



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

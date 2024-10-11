import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
 
    const [email,setEmail] = useState();
    const [password,setpass] = useState();
    
    const navigate = useNavigate();
    const handlesubmits = (e) => {
      e.preventDefault();
      
    
      axios.post('http://localhost:5000/login',  { email, password })
      .then((result) => {
        console.log(result)
        if (result.data === "Status Working") {
          alert('Login Successful')
          navigate('/home');
        } 
        else if(result.data ==="Incorrect passoword"){
          alert("Incorrect passoword");
        }
        
        else {
          alert('Login Failed');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error logging in');
      });
    };
    
     
  return (
    <div className="login-container">
      <form onSubmit={handlesubmits}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="login-btn">Login</button>
        </div>

        <div className="signup-redirect">
          <p>Don't have an account?</p>
          
          {/* <button><NavLink to="/signup" className='signup-btn'  > Signup</NavLink></button> */}
          <a href='/signup' className='signup-btn'> Signup</a>
        </div>
      </form>
    </div>
  );
}
  


export default Login;

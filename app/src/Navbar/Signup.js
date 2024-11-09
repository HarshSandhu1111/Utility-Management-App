import React, { useState } from "react";
import './Signup.css'; // Assuming you have the CSS file in the same directory
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Signup() {
  // Define state for name, email, and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/signup', { name, email, password })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  
    // Simple validation example
    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    // Mock sign-up logic (you can replace this with actual API call)
    alert(`Sign up successful! Name: ${name}, Email: ${email}`);
    navigate('/login');
  }

  return (
    
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="premium-btn">Register </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="Login">
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="forgot-password">
         
          </div>
          <button className="login-btn">LOGIN</button>
        </form>
        <div className="social-login">
          <p>Or Sign Up Using</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-google"></i></a>
          </div>
        </div>
        <div className="signup-link">
          <p>Or Sign Up Using</p>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;



import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleClientLogin = () => {
    navigate('/event-details');
  }
  
  return (
    <div className='outer-div'>

      <div className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type='checkbox' />Remember me</label>
            <a href="#">Forgot Password ?</a>
          </div>
          <div className="login-options">
            <button className="login-option-button" onClick={handleClientLogin}>Login as Client</button>
            <button className="login-option-button"onClick={handleClientLogin}>Login as Eventer</button>
          </div>
          <div className="register-link">
            <p>Don't have an account?<a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;



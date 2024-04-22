import React, { useState } from 'react';
import './login.css';
import { assets } from '../../assets/assets';

export default function ({setShowLogin}) {

  const[currentState, setCurrentState] = useState("Login")

  return (
    <div className='login'>
        <form action="" className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-inputs">
             <input type="text" placeholder='Your Name' required />
             <input type="email" placeholder='Your E-mail' required />
             <input type="password" placeholder='Enter Your Password' required />
          </div>
          <button onClick={() => setShowLogin(false)}>{currentState === "Sign up" ? "Create Account" : "Login"}</button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currentState === "Login"
           ? <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p>
           : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
          }
        </form>
    </div>
  )
}

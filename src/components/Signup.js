import React, { useState } from 'react';
import { auth } from '../firebase/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import "./Styles/Signup.css"


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className='signup-title'>Sign Up for Fitness App</h2>
      <form onSubmit={handleSignup} className='signup-form'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='signup-input'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='signup-input'
        />
        <button type="submit" className='signup-button'>Sign Up</button>
      </form>
      <button onClick={() => navigate("/Login")} className='navigate-login'>Already have an account Login</button>
    </div>
  );
}

export default Signup;

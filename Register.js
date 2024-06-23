import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Auth.css';

const Register = () => {
  const { register } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password === confirmPassword) {
      register(email, password);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="auth-page">
      <h1>Register</h1>
      <div className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;

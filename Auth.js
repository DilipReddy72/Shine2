import React, { useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
// other imports

import './Auth.css';

const Auth = () => {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simplified login logic
    setUser({ email });
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;

// src/pages/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-80 border p-6 rounded">
        <h2 className="text-2xl font-bold mb-2">Welcome Back 👋</h2>
        <p className="text-gray-500 mb-4">Login to continue</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import '../styles/SignIn.css'; // optional CSS

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('http://skillbuddy-z4vt.onrender.com/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, role: 'instructor' })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');

    localStorage.setItem('token', data.token);
    setMessage(`✅ Welcome ${data.name}`);
    setFormData({ email: '', password: '' });

    // ✅ Only redirect AFTER successful login
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  } catch (err) {
    setMessage(`❌ ${err.message}`);
  }
};


  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {message && <p className="signin-message">{message}</p>}

      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

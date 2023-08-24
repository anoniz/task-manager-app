import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/LoginForm.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle login logic
   
    axios.post('http://localhost:5000/users/login',formData).then(resp => {
        console.log(resp.data);
        localStorage.setItem('authToken',resp.data.token);
        alert(resp.data.token)
    }).catch(err => {
        console.log(err);
    })
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Login</h2>
      <input
        className="form-input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        className="form-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <button className="form-button" type="submit">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;

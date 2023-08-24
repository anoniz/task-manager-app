import React, { useState } from 'react';
import '../../styles/SignupForm.css'
import axios from 'axios'

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
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
    // Here, you can call the API to post the form data
    // Example: fetch('API_ENDPOINT_URL', { method: 'POST', body: JSON.stringify(formData) })

    axios.post('http://localhost:5000/users',formData).then(resp => {
        console.log(resp.data);
    }).catch(err => {
        console.log(err);
    })
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="name"
        required
      />
      <br />
      <input
        className="form-input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <br />
      <input
        className="form-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <br />
      <button className="form-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;

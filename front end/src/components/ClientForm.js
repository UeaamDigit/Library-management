import React, { useState } from "react";
import "./clientCss.css";

function ClientForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend)
    console.log("Form submitted with data:", formData);
    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="client-form-container">
      <h2>Client Form</h2>
      <form onSubmit={handleSubmit} className="client-form">
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ClientForm;

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import './Contact.css'; // Import the custom CSS for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS sends the email via the service (Service ID, Template ID, User ID)
    emailjs
      .sendForm('service_3vs7ola', 'template_h2s6es6', e.target, 'rvgieZlJ_pdV7Y0ya')
      .then(
        (result) => {
          console.log(result.text); // Handle success
          alert('Message sent successfully!');
        },
        (error) => {
          console.error(error.text); // Handle error
          alert('Message sending failed.');
        }
      );
  };

  return (
    <div className="contact-container">
    <div className="contact-container-main">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
}

export default Contact;

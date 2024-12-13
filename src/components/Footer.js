// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo1 from './assests/logos/logo1.png';
import nagarro from './assests/logos/Nagarro-Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="worked">Worked with:</div>
      <div className="logos">
        <img src={logo1} alt="Rakuten Logo" className="logo" />
        <img src={nagarro} alt="Nagarro Logo" className="logo" />
      </div>
    </footer>
  );
}

export default Footer;

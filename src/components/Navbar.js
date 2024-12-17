import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const location = useLocation(); // Get the current location (path)
  const [showToast, setShowToast] = useState(false); // State to show toast message
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu toggle
  const contactRef = useRef(null); // Reference to the contact form section

  // Function to handle the Gmail icon click
  const handleGmailClick = () => {
    if (location.pathname === '/contact') {
      // If already on the Contact page, scroll to the contact section
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: 'smooth', // Smooth scrolling
      });
    } else {
      // Otherwise, redirect to the Contact page
      window.location.href = '/contact'; // Redirect to Contact page
    }
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="back">
      <nav className="navbar">
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact Me
            </Link>
          </li>
          <li>
            <a href="/Vishal_Malviya_Resume.pdf" download="Vishal_Malviya_Resume.pdf" className={location.pathname === '/resume' ? 'active' : ''}>
              Resume
            </a>
          </li>
        </ul>

        {/* LinkedIn and Gmail icons */}
        <div className="icons">
          <div className="linkedin-icon">
            <a href="https://www.linkedin.com/in/vishal-malviya" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="white" />
            </a>
          </div>

          {/* Gmail Icon - Handling Click */}
          <div className="gmail-icon" onClick={handleGmailClick}>
            <FaEnvelope size={30} color="white" />
          </div>
        </div>
      </nav>

      {/* Toast message for email copied */}
      {showToast && (
        <div className="toast">
          You are already on the Contact page!
        </div>
      )}
    </div>
  );
}

export default Navbar;

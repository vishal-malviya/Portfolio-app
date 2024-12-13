// src/MainContent.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './MainContent.css';


function MainContent() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the contact page
  const goToContactPage = () => {
    navigate('/contact'); // Redirect to the contact page
  };

  return (
    <main className="intro-section">
      <div className="content">
        <h1>Vishal Malviya</h1>
        <p>
          Hello! I’m Vishal Malviya, a passionate and skilled web developer
          specializing in building dynamic and robust web applications. With a
          strong foundation in modern web technologies and a keen eye for detail,
          I craft solutions that are not only functional but also user-friendly.
        </p>
        {/* Button that redirects to the contact page */}
        <button className="view-project-link:hover" onClick={goToContactPage}>Let's get started > </button>
      </div>
      <div className="photo"></div> {/* Circular photo */}
     </main>


  );
}

export default MainContent;

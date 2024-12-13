// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
        {/* Button that scrolls to the "projects" section */}
        <button onClick={() => scrollToSection('projects')}>Let's get started > </button>
      </div>
      <div className="photo"></div> {/* Circular photo */}
      </main>

  );
}


export default Home;

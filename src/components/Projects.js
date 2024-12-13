import React from 'react';
import './Projects.css';
import lufthansaImage from './assests/images/lufthansa.png'; // Path to Lufthansa image
import rakutenImage from './assests/images/rakuten.png'; // Path to Rakuten image

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects Details</h1>

      {/* First Project (Lufthansa) */}
      <div className="project">
        <div className="project-description">
          <h2 className="project-title">Lufthansa Airline Pricing and Alert Cockpit Automation</h2>
          <p className="project-summary">
            As a Backend Developer, I automated Lufthansa's pricing system and alert management by leveraging <strong>Java Spring Boot</strong> for backend services and <strong>MySQL</strong> for efficient database management.
          </p>
          <ul className="key-features">
            <li>1. Created <strong>RESTful APIs</strong> to manage dynamic pricing and alerts.</li>
            <li>2. Automated <strong>pricing adjustments</strong> and real-time <strong>alert notifications</strong>.</li>
            <li>3. Optimized <strong>database schemas</strong> for better performance and scalability.</li>
            <li>4. Integrated <strong>market data APIs</strong> for dynamic price updates.</li>
            <li>5. Enhanced team efficiency by eliminating manual processes and reducing errors.</li>
          </ul>
          <a
            href="https://project-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="view-project-link"
          >
            View Project
          </a>
        </div>
        <img
          src={lufthansaImage}
          alt="Lufthansa Project"
          className="project-image"
        />
      </div>

      {/* Second Project (Rakuten Mobile) - Reverse content order using grid */}
      <div className="project project-reverse">
        <img
          src={rakutenImage}
          alt="Rakuten Mobile Project"
          className="project-image"
        />
        <div className="project-description">
          <h2 className="project-title">Site Management System for Rakuten Mobile (5G Network Establishment)</h2>
          <p className="project-summary">
            The <strong>Site Management System</strong> is a web-based platform developed for Rakuten Mobile to manage the establishment of their <strong>5G network infrastructure</strong>. It facilitates procurement, inventory management, payment processing, and certification tracking for materials required in network construction.
          </p>
          <ul className="key-features">
            <li>1. Managed real-time <strong>inventory tracking</strong> for construction materials.</li>
            <li>2. Created and tracked <strong>Purchase Orders (POs)</strong> for product procurement.</li>
            <li>3. Implemented a <strong>payment module</strong> for smooth vendor transactions.</li>
            <li>4. Ensured compliance through <strong>acceptance management</strong> and <strong>certification tracking</strong>.</li>
          </ul>
          <a
            href="https://project-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="view-project-link"
          >
            View Project
          </a>
        </div>
      </div>

    </div>
  );
}

export default Projects;

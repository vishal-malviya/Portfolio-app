// src/components/Skills.js
import React from 'react';
import './Skills.css';
import javaLogo from './assests/logos/javaLogo.png';
import jsLogo from './assests/logos/spring.svg';
import awsLogo from './assests/logos/aws.svg';
import gitLogo from './assests/logos/git.svg';
import mysqlLogo from './assests/logos/mysqlLogo.png';
import jira from './assests/logos/jira.png';

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <img src={javaLogo} alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src={jsLogo} alt="Spring Boot" />
          <p>Spring Boot</p>
        </div>

        <div className="skill-item">
          <img src={mysqlLogo} alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
                          <img src={gitLogo} alt="Git" />
                          <p>Git</p>
                        </div>

        <div className="skill-item">
                  <img src={awsLogo} alt="AWS" />
                  <p>AWS Cloud</p>
                </div>
        <div className="skill-item">
                  <img src={jira} alt="Jira" />
                  <p>Jira</p>
                </div>

      </div>
    </div>
  );
}

export default Skills;

import React from 'react';
import './Certifications.css';
import cert1 from './assests/images/cert1.png';
import cert2 from './assests/images/cert2.png';
import cert3 from './assests/images/cert3.png';
import cert4 from './assests/images/cert4.png';

function Certifications() {
  const certifications = [
    {
      title: 'Java: Data Structures',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/4b726c06b7314f1904101aa160a19645193379588cd074801e61d220472f3bed',
      image: cert1, // Replace with actual certificate image URL
    },
    {
      title: 'Java: Lambdas and Streams',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/c5ba0bb33066ab626217939836012f6700ad16954b5aa041cedbb578f58d6a55',
      image: cert2, // Replace with actual certificate image URL
    },
    {
      title: 'Java (Basic) Certificate',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/407a791081a3',
      image: cert3, // Replace with actual certificate image URL
    },
    {
      title: 'Developing Your Emotional Intelligence',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/415a82bc98f61c7bdf8a3c77b53e55793acc2110a6a952064c31b89af814fe3a',
      image: cert4, // Replace with actual certificate image URL
    },
  ];

  return (
    <div className="certifications-container">
      <h1 className="certification-h1">My Certifications</h1>
      <div className="certification-slider">
        <div className="certification-display">
          {certifications.map((cert, index) => {
            return (
              <div
                key={index}
                className="certification-card"
              >
                {/* Certificate Image */}
                <img src={cert.image} alt={cert.title} className="certification-image" />
                <h3>{cert.title}</h3>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-link">
                  View Certificate
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Certifications;

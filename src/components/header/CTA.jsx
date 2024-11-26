import React from 'react';
import CV from '../../assets/YogeetaBodadeResume.pdf';

const CTA = () => {
  const handleDownload = () => {
    console.log("CV download initiated"); // Use any tracking method if needed
  };

  return (
    <div className="cta">
      <a 
        href={CV} 
        download="Yogeeta_Bodade_CV.pdf" 
        className="btn" 
        onClick={handleDownload} 
        aria-label="Download Yogeeta Bodade's CV"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" aria-label="Contact Yogeeta">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;

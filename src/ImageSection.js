import React from 'react';
import './ImageSection.css';
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';


const ImageSection = () => {
  return (
    <div className="image-section">
      {/* <img src={imageAni} alt="your-image-description" className="full-image" /> */}
      <ParticlesBackground className="full-image" />
    </div>
  );
};

export default ImageSection;

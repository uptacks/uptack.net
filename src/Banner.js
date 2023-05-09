import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <footer className="social-media-banner">
      <a href="https://twitter.com/_uptack" target="_blank" rel="noopener noreferrer" className="social-link">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/uptacks" target="_blank" rel="noopener noreferrer" className="social-link">
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
};

export default Banner;

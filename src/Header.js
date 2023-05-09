import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';
import headerLogo from './img/pfp.jpeg';



const Header = () => {


  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
<header
  className="header"
  style={{
    backgroundColor: `rgba(70, 130, 180, ${Math.min(scrollPosition / 300, 1)})`,
  }}>
      <img src={headerLogo} alt="you" className="header-logo" />
      <h1 className="header-title">UPTACK</h1>
      <nav className="header-nav">
        <a href="your-link-1" className="header-link">Link 1</a>
        <a href="your-link-2" className="header-link">Link 2</a>
        <a href="your-link-3" className="header-link">Link 3</a>
      </nav>
    </header>
  );
};

export default Header;

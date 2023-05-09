import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';
import headerLogo from '../../img/pfp.jpeg';
import { Link } from 'react-router-dom';



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
      <Link to="/" className="header-link">Home</Link>
      <Link to="/writing" className="header-link">Writing</Link>
      <Link to="/research" className="header-link">Research</Link>
      </nav>
    </header>
  );
};

export default Header;

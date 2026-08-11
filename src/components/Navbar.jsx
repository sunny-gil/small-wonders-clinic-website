import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container navbar-container">

        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="Small Wonders Logo" className="navbar-logo-img" />
        </Link>

        {/* Hamburger — mobile only */}
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span style={{ transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
          <span style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
        </button>

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/child-clinic" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Child Clinic</NavLink></li>
            <li><NavLink to="/dental-studio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Dental Studio</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Experience</NavLink></li>
            <li><NavLink to="/happy-parents" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Reviews</NavLink></li>
            <li className="nav-btn">
              <Link to="/contact" className="btn-nav-cta" onClick={closeMenu}>
                Book a Visit
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

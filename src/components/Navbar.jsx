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
    <>
      {/* ─── TOP HEADER BAR ─── */}
      <div className="header-top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              📞 <a href="tel:+919876543210">+91 98765 43210</a>
            </span>
            <span className="top-bar-item" style={{ display: 'inline-flex' }}>
              📍 <a
                href="https://www.google.com/maps/search/?api=1&query=Small+Wonders+Child+Clinic+and+Dental+Studio,+Jaripatka,+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Jaripatka, Nagpur
              </a>
            </span>
            <span className="top-bar-item">
              ✉️ <a href="mailto:contact@smallwonders.com">contact@smallwonders.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* ─── MAIN STICKY MENU BAR ─── */}
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
            <span style={{ transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none', backgroundColor: 'var(--text-dark)' }}></span>
            <span style={{ opacity: isOpen ? 0 : 1, backgroundColor: 'var(--text-dark)' }}></span>
            <span style={{ transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none', backgroundColor: 'var(--text-dark)' }}></span>
          </button>

          {/* Navigation Links */}
          <nav>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>About Us</NavLink></li>
              <li><NavLink to="/child-clinic" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Child Clinic</NavLink></li>
              <li><NavLink to="/dental-studio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Dental Studio</NavLink></li>
              <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>The Experience</NavLink></li>
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
    </>
  );
}

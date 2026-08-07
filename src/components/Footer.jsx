import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <LogoIcon size={36} />
              <div>
                <h3 className="footer-logo-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, margin: 0 }}>Small Wonders</h3>
                <span className="footer-logo-subtitle" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--cream-base)' }}>Child Clinic & Dental Studio</span>
              </div>
            </div>
            <p className="footer-desc">
              A gentle, friendly space dedicated to providing the highest quality pediatric healthcare and children's dentistry. We believe in fear-free, playful, and expert care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Dr. Barkha</Link></li>
              <li><Link to="/child-clinic" className="footer-link">Child Clinic Services</Link></li>
              <li><Link to="/dental-studio" className="footer-link">Dental Studio Services</Link></li>
              <li><Link to="/experience" className="footer-link">The Experience</Link></li>
              <li><Link to="/happy-parents" className="footer-link">Testimonials</Link></li>
              <li><Link to="/contact" className="footer-link">Book an Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-info">
            <h4 className="footer-links-title">Clinic Hours & Contact</h4>
            <div className="footer-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <strong>Mon - Sat:</strong> 10:30 AM – 11:00 PM<br />
                <strong>Sunday:</strong> 05:30 PM – 08:30 PM
              </div>
            </div>
            <div className="footer-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                Shop No 1, Choudhary Chowk, L, Opposite Union Bank, Jaripatka, Nagpur-440014, Maharashtra
              </div>
            </div>
            <div className="footer-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <a href="tel:+919876543210" style={{ color: 'var(--white)' }}>+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Small Wonders Child Clinic & Dental Studio. All rights reserved.</p>
          <p>Designed with Care | Nagpur, India</p>
        </div>
      </div>
    </footer>
  );
}

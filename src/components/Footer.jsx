import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ─── WAVY TOP TRANSITION ─── */}
      <div className="footer-wavy-divider">
        <svg viewBox="0 0 1440 42" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,15 C240,45 480,45 720,15 C960,-15 1200,-15 1440,15 L1440,42 L0,42 Z"></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img src="/assets/logo.png" alt="Small Wonders Logo" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              We are dedicated to providing a friendly, stress-free dental and healthcare experience for children. Our team combines advanced techniques with a playful, caring approach that makes kids feel safe and happy.
            </p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.97 3.64 9.1 8.44 9.85v-6.96h-2.53v-2.89h2.53v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.96c4.8-.75 8.44-4.88 8.44-9.85 0-5.5-4.5-10-10-10z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Popular Services */}
          <div>
            <h4 className="footer-links-title">Popular Services</h4>
            <ul className="footer-links">
              <li><Link to="/dental-studio" className="footer-link">First Dental Visit</Link></li>
              <li><Link to="/dental-studio" className="footer-link">Gentle Cleanings</Link></li>
              <li><Link to="/dental-studio" className="footer-link">Fluoride Protection</Link></li>
              <li><Link to="/child-clinic" className="footer-link">Milestone Tracking</Link></li>
              <li><Link to="/child-clinic" className="footer-link">Immunization Care</Link></li>
              <li><Link to="/dental-studio" className="footer-link">Painless Restorations</Link></li>
            </ul>
          </div>

          {/* Column 3: More Pages */}
          <div>
            <h4 className="footer-links-title">More Pages</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home Page</Link></li>
              <li><Link to="/about" className="footer-link">About Dr. Barkha</Link></li>
              <li><Link to="/child-clinic" className="footer-link">Child Clinic</Link></li>
              <li><Link to="/dental-studio" className="footer-link">Dental Studio</Link></li>
              <li><Link to="/experience" className="footer-link">The Experience</Link></li>
              <li><Link to="/happy-parents" className="footer-link">Parent Reviews</Link></li>
              <li><Link to="/contact" className="footer-link">Book Visit</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="footer-info">
            <h4 className="footer-links-title">Contacts</h4>
            <div className="footer-info-content">
              <div className="footer-info-item">
                <span className="footer-info-icon">📍</span>
                <div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Small+Wonders+Child+Clinic+and+Dental+Studio,+Jaripatka,+Nagpur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'normal' }}
                  >
                    Shop No 1, Choudhary Chowk, L,<br />
                    Opposite Union Bank, Jaripatka,<br />
                    Nagpur-440014, Maharashtra
                  </a>
                </div>
              </div>
              <div className="footer-info-item">
                <span className="footer-info-icon">📞</span>
                <div>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
              <div className="footer-info-item">
                <span className="footer-info-icon">🕒</span>
                <div>
                  Mon - Sat: 10:30 AM – 11:00 PM<br />
                  Sunday: 05:30 PM – 08:30 PM
                </div>
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

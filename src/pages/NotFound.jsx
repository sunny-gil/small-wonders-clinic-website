import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: "Page Not Found | Small Wonders Nagpur",
    description: "The page you are looking for does not exist on Small Wonders. Let's get you back to safety."
  });

  return (
    <div className="not-found-page animate-fade-in-up" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '75vh',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: 'var(--cream-base)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Orbs */}
      <div className="hero-orb" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)', top: '10%', left: '10%' }}></div>
      <div className="hero-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(29, 122, 140, 0.08) 0%, transparent 70%)', bottom: '10%', right: '10%' }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', width: '100%' }}>
        <div style={{ fontSize: '6.5rem', marginBottom: '24px', display: 'inline-block', animation: 'floatBounce 2s ease-in-out infinite' }}>
          🧸
        </div>
        
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '16px', color: 'var(--teal-primary)' }}>
          Lost in the Playroom!
        </h1>
        
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-medium)',
          lineHeight: 1.7,
          marginBottom: '36px'
        }}>
          Oops! The page you are looking for has hidden behind the teddy bears, slid down the toy slide, or simply doesn't exist. Let's guide you back to the safety of our clinic homepage.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', padding: '15px 32px' }}>
            Go back to Playroom (Home) →
          </Link>
          <Link to="/contact" className="btn btn-secondary" style={{ display: 'inline-flex', padding: '15px 32px' }}>
            Book a Visit
          </Link>
        </div>
      </div>
    </div>
  );
}

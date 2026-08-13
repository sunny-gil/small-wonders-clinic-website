import React from 'react';
import ReviewsCarousel from '../components/ReviewsCarousel';
import useSEO from '../hooks/useSEO';

const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"; // Replace with actual link

function Stars({ count = 5 }) {
  return (
    <div className="review-stars" style={{ display: 'inline-flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#f59e0b' : '#e5e7eb', fontSize: '1.25rem' }}>★</span>
      ))}
    </div>
  );
}

export default function HappyParents() {
  useSEO({
    title: "Happy Parents Reviews | Small Wonders Nagpur",
    description: "Read verified testimonials from real families in Nagpur about their children's experiences with Dr. Barkha at Small Wonders Child Clinic & Dental Studio.",
    keywords: "pediatrician reviews nagpur, child dentist reviews, small wonders patient feedback, best kid doctor review"
  });

  return (
    <div className="happy-parents-page" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ─── 1. SUBPAGE HERO SECTION ─── */}
      <section className="subpage-hero-section">
        {/* Background illustration photo */}
        <div className="subpage-hero-bg">
          <img
            src="/assets/reviews_hero_indian.webp"
            alt="Small Wonders kids clinic play waiting area"
            className="subpage-hero-bg-img"
          />
          <div className="subpage-hero-bg-overlay"></div>
        </div>

        {/* Curved teal blob with content */}
        <div className="subpage-hero-blob animate-blob-reveal">
          <div className="subpage-hero-blob-inner">
            {/* Tag */}
            <div className="subpage-hero-tag animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>⭐ PATIENT TESTIMONIALS</span>
            </div>

            {/* Title */}
            <h1 className="subpage-hero-title animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
              Happy Parents
            </h1>

            {/* Description */}
            <p className="subpage-hero-desc animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
              Real stories from real families. We measure success by the smiles we create and the trust we earn every day at Small Wonders Nagpur.
            </p>
          </div>
        </div>
      </section>

      {/* Google rating summary */}
      <section className="section" style={{ padding: '60px 0 20px', backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="google-rating-badge animate-fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 28px', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(87,184,148,0.1)', boxShadow: 'var(--shadow-md)' }}>
            <svg width="24" height="24" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div className="google-rating-score" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.15rem', color: 'var(--text-dark)' }}>
                4.9 <Stars count={5} />
              </div>
              <div className="google-rating-label" style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Google Reviews · 100+ Happy Nagpur Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-sliding Carousel section */}
      <section className="reviews-carousel-section" style={{ backgroundColor: 'var(--color-pink-light)', padding: '90px 0', position: 'relative' }}>
        {/* Top Wave */}
        <div className="wavy-divider wavy-divider-top">
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C240,40 480,40 720,0 C960,-40 1200,-40 1440,0 L1440,74 L0,74 Z" fill="var(--color-pink-light)"></path>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ReviewsCarousel interval={4500} />
        </div>

        {/* Bottom Wave */}
        <div className="wavy-divider wavy-divider-bottom">
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--white)"></path>
          </svg>
        </div>
      </section>

      {/* Google CTA section */}
      <section className="reviews-google-cta" style={{ backgroundColor: 'var(--text-dark)', padding: '100px 0', textAlign: 'center', position: 'relative', color: 'var(--white)' }}>
        <div className="container">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⭐</div>
          <h2 style={{ color: 'var(--white)', fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '12px' }}>
            Had a great experience with Dr. Barkha?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Your feedback helps other Nagpur parents find a safe, fear-free clinic for their child. It only takes a minute!
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ 
              backgroundColor: 'var(--color-green)', 
              boxShadow: '0 4px 12px rgba(87,184,148,0.25)', 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" style={{ fill: 'white' }}>
              <path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Review Us on Google
          </a>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '16px' }}>
            Opens Google Reviews in a new tab
          </p>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import ReviewsCarousel from '../components/ReviewsCarousel';
import useSEO from '../hooks/useSEO';

const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"; // Replace with actual link

function Stars({ count = 5 }) {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star-filled' : 'star-empty'}>★</span>
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

      {/* ── Page Header ── */}
      <section className="reviews-hero">
        <div className="reviews-hero-orb reviews-orb-1"></div>
        <div className="reviews-hero-orb reviews-orb-2"></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Testimonials</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '16px' }}>
            Love from Nagpur's Families 💛
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Real stories from real parents. We measure success by the smiles we create and the trust we earn.
          </p>

          {/* Google rating summary */}
          <div className="google-rating-badge">
            <svg width="22" height="22" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <div className="google-rating-score">4.9 <Stars count={5} /></div>
              <div className="google-rating-label">Google Rating · 100+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTO-SLIDING CAROUSEL ── */}
      <section className="reviews-carousel-section">
        <div className="container">
          <ReviewsCarousel compact={false} interval={4000} />
        </div>
      </section>




      {/* ── GOOGLE CTA SECTION ── */}
      <section className="reviews-google-cta">
        <div className="reviews-google-cta-orb"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="google-cta-icon">⭐</div>
          <h2 style={{ color: 'var(--white)', marginBottom: '12px', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Had a great experience?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Your review helps other anxious parents find a safe, fear-free place for their child. It only takes 1 minute!
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-google-review"
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Review Us on Google
          </a>
          <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '0.82rem', marginTop: '16px' }}>
            Opens Google Reviews in a new tab
          </p>
        </div>
      </section>

    </div>
  );
}

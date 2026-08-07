import React, { useState, useEffect, useRef, useCallback } from 'react';

export const TESTIMONIALS = [
  {
    quote: "My 4-year-old son Aarav was terrified of doctors after a bad fever treatment last year. When we came to Small Wonders, Dr. Barkha spent the first 20 minutes playing toys with him. Aarav didn't even notice when she checked his teeth! Truly amazing.",
    parentName: "Meenal Deshmukh",
    childName: "Aarav",
    childAge: "4 years",
    rating: 5,
    location: "Dharampeth, Nagpur",
    type: "Child Clinic"
  },
  {
    quote: "Dentists always scared me as a child, and I didn't want the same for my daughter. The 'Magic Chair' ride and the ceiling cartoon screen made her checkup so easy. She loved choosing her toy from the cabinet at the end!",
    parentName: "Rohan Agrawal",
    childName: "Sneha",
    childAge: "6 years",
    rating: 5,
    location: "Ramdaspeth, Nagpur",
    type: "Dental Studio"
  },
  {
    quote: "Very professional vaccine care. They used a cooling spray that numbed the area, and my baby didn't cry at all. Dr. Barkha also took time to explain the growth milestone charts in detail. Highly recommended!",
    parentName: "Dr. Pallavi Sharma",
    childName: "Kavya",
    childAge: "9 months",
    rating: 5,
    location: "Sadat, Nagpur",
    type: "Child Clinic"
  },
  {
    quote: "The best dental clinic for kids in Nagpur. Standard dental clinics look scary, but this place feels like a play zone. My son actually asks me when we are going back to visit Dr. Barkha again!",
    parentName: "Amit Verma",
    childName: "Kabir",
    childAge: "5 years",
    rating: 5,
    location: "Pratap Nagar, Nagpur",
    type: "Dental Studio"
  },
  {
    quote: "Excellent guidance on nutrition for picky eaters. Dr. Barkha gave us a simple menu chart and tips to encourage eating without forced meals. Our family's mealtime has become so much more peaceful.",
    parentName: "Neha Kulkarni",
    childName: "Riya",
    childAge: "3 years",
    rating: 5,
    location: "Civic Lines, Nagpur",
    type: "Child Clinic"
  },
  {
    quote: "We got our daughter's cavity filling done here. No painful injections, no fear. The clinic utilizes the latest gentle dental tools and the behavior guidance makes all the difference.",
    parentName: "Sanjay Joshi",
    childName: "Ananya",
    childAge: "7 years",
    rating: 5,
    location: "Manish Nagar, Nagpur",
    type: "Dental Studio"
  }
];

function Stars({ count = 5 }) {
  return (
    <div className="rc-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#f59e0b' : '#e2e8f0', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  );
}

function Avatar({ name, type }) {
  const isDental = type === 'Dental Studio';
  return (
    <div className="rc-avatar" style={{
      background: isDental ? 'hsl(14,75%,95%)' : 'hsl(187,50%,95%)',
      color: isDental ? 'var(--coral-primary)' : 'var(--teal-primary)'
    }}>
      {name[0]}
    </div>
  );
}

function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640)  return 2;
  return 1;
}

/**
 * Clean responsive multi-card sliding carousel.
 * Each slide is exactly (100 / visible)% wide — NO gap math needed.
 * translateX = current * (100 / visible) %
 */
export default function ReviewsCarousel({ interval = 4500 }) {
  const [visible, setVisible] = useState(getVisibleCount);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const total = TESTIMONIALS.length;
  const maxIndex = Math.max(0, total - visible);

  // Sync visible count on resize
  useEffect(() => {
    const handle = () => {
      const v = getVisibleCount();
      setVisible(v);
      setCurrent(c => Math.min(c, Math.max(0, total - v)));
    };
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, [total]);

  const next = useCallback(() => setCurrent(c => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = useCallback(() => setCurrent(c => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);
  const goTo = useCallback((i) => setCurrent(Math.max(0, Math.min(i, maxIndex))), [maxIndex]);

  // Auto-slide
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(next, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, next, interval]);

  // Each slide is exactly 1/visible of the track width (using padding for visual gap)
  const pct = 100 / visible;

  return (
    <div
      className="rc-root"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Prev arrow */}
      {maxIndex > 0 && (
        <button className="rc-arrow rc-prev" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      )}

      {/* Clipping window */}
      <div className="rc-window">
        <div
          className="rc-track"
          style={{ transform: `translateX(-${current * pct}%)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rc-slide"
              style={{ flex: `0 0 ${pct}%` }}
            >
              {/* Inner card with padding for gap */}
              <div className="rc-card">
                {/* Service type pill */}
                <div className="rc-type-pill" data-type={t.type === 'Dental Studio' ? 'dental' : 'child'}>
                  <span>{t.type === 'Dental Studio' ? '🦷' : '👶'}</span>
                  {t.type}
                </div>

                {/* Stars */}
                <Stars count={t.rating} />

                {/* Quote */}
                <p className="rc-quote">"{t.quote}"</p>

                {/* Author */}
                <div className="rc-author">
                  <Avatar name={t.parentName} type={t.type} />
                  <div>
                    <div className="rc-name">{t.parentName}</div>
                    <div className="rc-meta">{t.childName} ({t.childAge}) · {t.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next arrow */}
      {maxIndex > 0 && (
        <button className="rc-arrow rc-next" onClick={next} aria-label="Next">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      )}

      {/* Dot indicators */}
      <div className="rc-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`rc-dot${i === current ? ' rc-dot-active' : ''}`}
            onClick={() => { setIsPaused(true); goTo(i); }}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

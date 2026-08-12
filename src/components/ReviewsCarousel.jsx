import React, { useState, useEffect, useRef, useCallback } from 'react';

import { TESTIMONIALS } from '../data/testimonials';

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
  if (window.innerWidth >= 640) return 2;
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
            <polyline points="15 18 9 12 15 6" />
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
              {/* Inner card wrapper */}
              <div className="rc-testimonial-wrapper">
                {/* Speech Bubble Card content */}
                <div className="rc-bubble">
                  {/* Service type pill */}
                  <div className="rc-type-pill" data-type={t.type === 'Dental Studio' ? 'dental' : 'child'} style={{ marginBottom: '12px' }}>
                    <span>{t.type === 'Dental Studio' ? '🦷' : '👶'}</span>
                    {t.type}
                  </div>

                  {/* Stars */}
                  <Stars count={t.rating} />

                  {/* Quote */}
                  <p className="rc-quote" style={{ marginTop: '12px', fontStyle: 'italic', fontSize: '0.98rem', lineHeight: '1.6' }}>"{t.quote}"</p>
                </div>

                {/* Author Info (placed outside speech bubble) */}
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
            <polyline points="9 18 15 12 9 6" />
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

import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsCarousel from '../components/ReviewsCarousel';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: "Small Wonders | Child Clinic & Dental Studio Nagpur",
    description: "Welcome to Small Wonders Child Clinic & Dental Studio in Nagpur, led by Dr. Barkha. We offer gentle, fear-free pediatric healthcare and kids' dentistry.",
    keywords: "pediatrician nagpur, child dentist nagpur, child clinic jaripatka, kids dental studio, dr barkha nagpur"
  });

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: 'Child Clinic',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'Child Clinic', message: '' });
    }, 4000);
  };

  return (
    <div className="home-page" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ─── HERO SECTION ─── */}
      <section className="section hero-section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 100px', backgroundColor: 'var(--teal-light)' }}>

        {/* Animated gradient orbs */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        <div className="container hero-grid">

          {/* ── Left: Text content ── */}
          <div className="hero-content">

            {/* Premium badge pill */}
            <div className="hero-badge animate-slide-in-left">
              <span className="hero-badge-dot"></span>
              <span>Nagpur's Most Trusted Child Care</span>
            </div>

            <h1 className="hero-title animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              Where Every Child
              <br />
              <span className="hero-title-highlight">Smiles Brighter.</span>
            </h1>

            <p className="hero-subtitle animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              Premium pediatric care &amp; dental studio by <strong>Dr. Barkha</strong>. 
              A warm, fear-free environment designed from the ground up — just for little ones.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-row animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="btn btn-hero-primary">
                Book a Free Consultation
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/experience" className="btn btn-hero-ghost">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                See the Experience
              </Link>
            </div>

            {/* Trust stats row */}
            <div className="hero-stats animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="hero-stat">
                <span className="hero-stat-number">10k+</span>
                <span className="hero-stat-label">Happy Visits</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Fear-Free</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">2-in-1</span>
                <span className="hero-stat-label">Clinic &amp; Dental</span>
              </div>
            </div>
          </div>

          {/* ── Right: Illustration with floating cards ── */}
          <div className="hero-visual animate-slide-in-right">

            {/* Decorative ring */}
            <div className="hero-img-ring"></div>

            <img
              src="/assets/homepage_mockup.png"
              alt="Small Wonders — Dr. Barkha with a happy child patient"
              className="hero-img"
            />

            {/* Floating card: rating */}
            <div className="hero-float-card hero-float-rating">
              <div className="float-card-icon">⭐</div>
              <div>
                <div className="float-card-value">4.9 / 5</div>
                <div className="float-card-label">Parent Rating</div>
              </div>
            </div>

            {/* Floating card: visits */}
            <div className="hero-float-card hero-float-visits">
              <div className="float-card-icon">🧒</div>
              <div>
                <div className="float-card-value">10,000+</div>
                <div className="float-card-label">Smiling Kids</div>
              </div>
            </div>

            {/* Floating card: award */}
            <div className="hero-float-card hero-float-award">
              <div className="float-card-icon">🏆</div>
              <div>
                <div className="float-card-value">Best Clinic</div>
                <div className="float-card-label">Nagpur 2024</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── HERO FEATURE CARDS ROW (Reference: Theme Badge Cards) ─── */}
      <section className="feature-cards-section" style={{ position: 'relative', zIndex: 11 }}>
        <div className="container">
          <div className="feature-badges-row">
            <div className="feature-badge-card">
              <div className="feature-badge-icon">👶</div>
              <h3>Specialized Care</h3>
              <p>Pediatric healthcare focused on developmental milestones, wellness checks, and healthy child growth.</p>
            </div>
            <div className="feature-badge-card">
              <div className="feature-badge-icon">🦷</div>
              <h3>Kids Dentistry</h3>
              <p>A friendly dental studio designed to remove dental fear and cultivate smiling checkups.</p>
            </div>
            <div className="feature-badge-card">
              <div className="feature-badge-icon">📈</div>
              <h3>Milestone Tracking</h3>
              <p>Thorough physical and developmental tracking charts mapped by expert specialists.</p>
            </div>
            <div className="feature-badge-card">
              <div className="feature-badge-icon">📞</div>
              <h3>Emergency Guide</h3>
              <p>Round-the-clock contact guidelines and priority schedules for active support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section className="section services-snapshot" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(29,122,140,0.06)', borderBottom: '1px solid rgba(29,122,140,0.06)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Specialized Care for Growing Smiles</h2>
            <p className="section-desc">Separate, dedicated services for child healthcare and kids' dentistry — structured for maximum comfort.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '32px', marginTop: '40px' }}>

            <div className="card service-card">
              <div className="service-icon-box service-icon-teal">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 style={{ marginBottom: '12px' }}>Child Clinic</h3>
              <p style={{ marginBottom: '24px', flexGrow: 1 }}>
                Pediatric care focused on physical development, growth metrics, and health checkups in a warm, reassuring environment.
              </p>
              <Link to="/child-clinic" className="btn btn-secondary" style={{ width: 'fit-content' }}>Learn More</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon-box service-icon-coral">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c1.5 0 3 .5 4.5 1.5C20 6 21 9 19.5 12c-1 2-2.5 3-4 4L12 22l-3.5-6C7 14.5 5 12 5 9.5 5 6 7.5 2 12 2z"></path>
                </svg>
              </div>
              <h3 style={{ marginBottom: '12px' }}>Dental Studio</h3>
              <p style={{ marginBottom: '24px', flexGrow: 1 }}>
                Children's dentistry tailored to dental comfort, cavity prevention, and positive habits that build permanent confidence.
              </p>
              <Link to="/dental-studio" className="btn btn-secondary" style={{ width: 'fit-content' }}>Learn More</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon-box service-icon-gold">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 style={{ marginBottom: '12px' }}>The First Visit Experience</h3>
              <p style={{ marginBottom: '24px', flexGrow: 1 }}>
                A visual walkthrough designed to remove fear and anxiety before your child even arrives at the clinic.
              </p>
              <Link to="/experience" className="btn btn-secondary" style={{ width: 'fit-content' }}>Explore Journey</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY SECTION ─── */}
      <section className="section trust-philosophy" style={{ padding: '90px 0', backgroundColor: 'var(--cream-base)' }}>
        <div className="container two-col-grid">

          <div className="philosophy-img-wrap">
            <img
              src="/assets/experience_illustration.png"
              alt="Fear-free checkup at Small Wonders"
              className="philosophy-img"
              loading="lazy"
            />
            <div className="philosophy-img-badge">
              <span>🌟</span>
              <span>Fear-Free Promise</span>
            </div>
          </div>

          <div className="text-left-responsive">
            <span className="section-tag">Our Philosophy</span>
            <h2 style={{ marginBottom: '20px' }}>Designed for comfort,<br />built on trust</h2>
            <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>
              A bad clinic experience can shape a child's view of medical care for years. That's why we designed Small Wonders from the ground up:
            </p>
            <ul className="philosophy-list" style={{ marginBottom: '24px' }}>
              <li>
                <span className="check-icon">✓</span>
                <div><strong>Playful Reception Area</strong> — Books, toys, and cartoons to put children at ease instantly.</div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div><strong>Gentle Checkup Styles</strong> — We explain every step like a game. No surprises, ever.</div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div><strong>Rewards Corner</strong> — Every child leaves with a toy or bravery sticker to celebrate!</div>
              </li>
            </ul>

            <div className="progress-bars-container">
              <div className="progress-bar-item">
                <div className="progress-bar-label-row">
                  <span>Fear-Free Pediatric Experience</span>
                  <span>98%</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="progress-bar-item">
                <div className="progress-bar-label-row">
                  <span>Growth & Development Tracking Accuracy</span>
                  <span>95%</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill progress-bar-fill-coral" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="progress-bar-item">
                <div className="progress-bar-label-row">
                  <span>Parent Recommendation & Trust Rate</span>
                  <span>100%</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '8px' }}>
              Meet Dr. Barkha
            </Link>
          </div>

        </div>
      </section>

      {/* ─── MEET DR. BARKHA SECTION (Single Doctor Layout) ─── */}
      <section className="section specialists-section" style={{ backgroundColor: 'var(--coral-light)', borderTop: '1px solid rgba(29,122,140,0.06)', borderBottom: '1px solid rgba(29,122,140,0.06)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Lead Specialist</span>
            <h2 className="section-title">Meet Dr. Barkha</h2>
            <p className="section-desc">Nagpur's trusted pediatrician and child dental care expert, dedicated to fear-free pediatric clinic visits.</p>
          </div>

          <div className="single-doctor-layout">
            {/* Left: Image with custom frames */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--cream-dark)',
                borderRadius: 'var(--radius-md)',
                zIndex: 1
              }}></div>
              <div style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '4px solid var(--white)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <img 
                  src="/assets/doctor_barkha.png" 
                  alt="Dr. Barkha" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" }} 
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                right: '-12px',
                backgroundColor: 'var(--coral-primary)',
                color: 'var(--white)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                zIndex: 3,
                boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
              }}>
                ⭐ Lead Pediatrician &amp; Dentist
              </div>
            </div>

            {/* Right: Bio Details */}
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--teal-primary)' }}>Dr. Barkha</h3>
              <div style={{ 
                color: 'var(--coral-primary)', 
                fontWeight: '700', 
                fontSize: '0.95rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                marginBottom: '20px' 
              }}>
                M.D.S. in Pediatric Dentistry &amp; Child Health Expert
              </div>
              <p style={{ marginBottom: '16px', fontSize: '1.05rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>
                With over a decade of dedicated pediatric care, Dr. Barkha has built Small Wonders with a vision to make doctor visits fear-free and positive for every child. She believes that early dental and medical experiences shape a child's health habits for a lifetime.
              </p>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>
                She specializes in child psychology and behavioral guidance, adapting her checkup style like a playful game. No needles or clinical sounds are ever a scary surprise.
              </p>

              <div className="doctor-specialties-mini-grid">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🧸</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>Gentle Care Style</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🦷</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>Dental Expert (MDS)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.25rem' }}>📈</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>Milestone Charts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🛡️</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>100% Safety Focus</span>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                Read Full Biography →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS SECTION ─── */}
      <section className="section home-reviews-section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">What Parents Say</span>
            <h2 className="section-title">Real Stories, Real Smiles 💛</h2>
            <p className="section-desc">Join thousands of Nagpur families who trust Small Wonders for their child's health and happiness.</p>
          </div>

          {/* Google rating inline */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
            <div className="google-rating-badge">
              <svg width="20" height="20" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div>
                <div className="google-rating-score" style={{ fontSize: '1.2rem' }}>4.9 ⭐⭐⭐⭐⭐</div>
                <div className="google-rating-label">Google Rating · 100+ Happy Parents</div>
              </div>
            </div>
          </div>

          <ReviewsCarousel compact={true} interval={5000} />

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/happy-parents" className="btn btn-secondary">
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SCHEDULE A VISIT SECTION (Reference: Booking/Contact Form) ─── */}
      <section className="booking-section">
        <div className="container booking-container">
          {/* Left Column: Info & Details */}
          <div className="booking-info">
            <span className="section-tag" style={{ marginBottom: '16px' }}>Get In Touch</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Schedule a visit for your little one</h2>
            <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.7 }}>
              Have questions or want to request a preferred slot? Fill out our quick form and our pediatric support team will contact you to confirm details.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '1.5rem', width: '50px', height: '50px', borderRadius: '50%', background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} className="booking-icon-pill">📞</div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--teal-primary)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>CALL CLINIC</div>
                  <a href="tel:+919876543210" style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-dark)' }}>+91 98765 43210</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '1.5rem', width: '50px', height: '50px', borderRadius: '50%', background: 'var(--coral-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} className="booking-icon-pill">📍</div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--coral-primary)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>CLINIC LOCATION</div>
                  <div style={{ fontWeight: '700', fontSize: '1.02rem', color: 'var(--text-dark)' }}>
                    Shop No 1, Choudhary Chowk, L, Opposite Union Bank, Jaripatka, Nagpur-440014, Maharashtra
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '1.5rem', width: '50px', height: '50px', borderRadius: '50%', background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} className="booking-icon-pill">✉️</div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--teal-primary)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>SUPPORT EMAIL</div>
                  <a href="mailto:contact@smallwonders.com" style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-dark)' }}>contact@smallwonders.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="booking-form-wrapper">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '20px' }}>🎉</span>
                <h3 style={{ color: 'var(--teal-primary)', marginBottom: '12px' }}>Request Received!</h3>
                <p style={{ color: 'var(--text-medium)', lineHeight: 1.6 }}>Thank you, parents. Our team will contact you shortly to schedule and confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="booking-form-grid">
                  <div className="booking-field-group">
                    <label htmlFor="booking-name">Parent's Name</label>
                    <input
                      type="text"
                      id="booking-name"
                      className="booking-input"
                      placeholder="e.g., Sneha Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="booking-field-group">
                    <label htmlFor="booking-phone">Contact Number</label>
                    <input
                      type="tel"
                      id="booking-phone"
                      className="booking-input"
                      placeholder="e.g., +91 98765 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="booking-field-group">
                    <label htmlFor="booking-email">Email Address</label>
                    <input
                      type="email"
                      id="booking-email"
                      className="booking-input"
                      placeholder="e.g., parent@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="booking-field-group">
                    <label htmlFor="booking-service">Service Interested</label>
                    <select
                      id="booking-service"
                      className="booking-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Child Clinic">👶 Child Clinic (Pediatric)</option>
                      <option value="Dental Studio">🦷 Dental Studio (Kids Dentistry)</option>
                      <option value="General Checkup">📈 Milestone & Growth Tracking</option>
                    </select>
                  </div>
                  <div className="booking-field-group booking-field-group-full">
                    <label htmlFor="booking-message">Your Message / Slot Preference</label>
                    <textarea
                      id="booking-message"
                      className="booking-textarea"
                      placeholder="Tell us about your child's age, issues or slot preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <div className="booking-field-group booking-field-group-full">
                    <button type="submit" className="btn btn-primary booking-submit-btn">
                      Request Appointment
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

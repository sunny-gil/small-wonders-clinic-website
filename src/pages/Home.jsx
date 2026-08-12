import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsCarousel from '../components/ReviewsCarousel';
import useSEO from '../hooks/useSEO';

// Floating background decorative SVGs
function FloatingDecorations() {
  return (
    <div className="floating-symbols-container">
      {/* Cloud 1 */}
      <svg className="floating-symbol animate-float" style={{ top: '10%', left: '8%', width: '40px', height: '40px', opacity: 0.25 }} viewBox="0 0 24 24" fill="var(--color-pink)">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
      {/* Cloud 2 */}
      <svg className="floating-symbol animate-float-delayed" style={{ top: '35%', right: '8%', width: '50px', height: '50px', opacity: 0.2 }} viewBox="0 0 24 24" fill="var(--color-blue)">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
      {/* Star 1 */}
      <svg className="floating-symbol animate-float" style={{ top: '55%', left: '5%', width: '24px', height: '24px', opacity: 0.3, fill: 'var(--color-yellow)' }} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
      {/* Star 2 */}
      <svg className="floating-symbol animate-float-delayed" style={{ top: '75%', right: '12%', width: '32px', height: '32px', opacity: 0.35, fill: 'var(--color-pink)' }} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
      {/* Smile/Tooth */}
      <svg className="floating-symbol animate-float" style={{ top: '25%', left: '45%', width: '28px', height: '28px', opacity: 0.25, fill: 'var(--color-green)' }} viewBox="0 0 24 24">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-3-9c.83 0 1.5-.67 1.5-1.5S9.83 8 9 8s-1.5.67-1.5 1.5S6.67 11 7.5 11zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8s-1.5.67-1.5 1.5S15.67 11 16.5 11zm-9 4c1.07 2.36 3.44 4 6.2 4s5.13-1.64 6.2-4H7.5z"/>
      </svg>
      {/* Sparkle */}
      <svg className="floating-symbol animate-float-delayed" style={{ top: '80%', left: '35%', width: '24px', height: '24px', opacity: 0.3, fill: 'var(--color-blue)' }} viewBox="0 0 24 24">
        <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm1 10h-2V7h2v5zm0 4h-2v-2h2v2z"/>
      </svg>
    </div>
  );
}

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
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Parent name is required';
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.name.trim())) {
      newErrors.name = 'Name should only contain letters and spaces (2-50 characters)';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please specify preferred date or notes';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: 'Child Clinic', message: '' });
        setErrors({});
      }, 4000);
    }
  };

  return (
    <div className="home-page" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* ─── 1. HERO SECTION — Happy Smiles Reference ─── */}
        <section className="hero-section-v2">
          {/* Full-width background photo */}
          <div className="hero-v2-bg">
            <img
              src="/assets/hero_child_wide.png"
              alt="Happy smiling child at Small Wonders clinic"
              className="hero-v2-bg-img"
            />
            <div className="hero-v2-bg-overlay"></div>
          </div>

          {/* Curved teal blob with content */}
          <div className="hero-v2-blob animate-blob-reveal">
            <div className="hero-v2-blob-inner">
              {/* Tag */}
              <div className="hero-v2-tag animate-hero-fade-up" style={{ animationDelay: '0.3s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-yellow)" style={{ flexShrink: 0 }}>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span>FAMILY-CENTERED CHILD CARE</span>
              </div>

              {/* Heading */}
              <h1 className="hero-v2-title animate-hero-fade-up" style={{ animationDelay: '0.5s' }}>
                Bright Smiles Begin<br />
                with <span className="hero-v2-title-accent">Gentle Care</span>
              </h1>

              {/* CTA Row */}
              <div className="hero-v2-cta-row animate-hero-fade-up" style={{ animationDelay: '0.7s' }}>
                <Link to="/contact" className="hero-v2-btn-primary">
                  BOOK A VISIT
                </Link>
                <a href="tel:+919876543210" className="hero-v2-phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>

          {/* Floating patient count card */}
          <div className="hero-v2-float-card animate-hero-float-up" style={{ animationDelay: '1s' }}>
            <div className="hero-v2-float-number">
              <span className="hero-v2-float-big">10,000+</span>
            </div>
            <div className="hero-v2-float-text">
              <span className="hero-v2-float-highlight">We're Honored to Care for So Many</span>
              <span className="hero-v2-float-sub">Smiling Patients – <Link to="/happy-parents" className="hero-v2-float-link">Be One of Them</Link></span>
            </div>
            <div className="hero-v2-float-avatars">
              <div className="hero-v2-avatar" style={{ backgroundColor: 'var(--color-pink-light)', color: 'var(--color-pink)' }}>👶</div>
              <div className="hero-v2-avatar" style={{ backgroundColor: 'var(--color-blue-light)', color: 'var(--color-blue)' }}>👧</div>
              <div className="hero-v2-avatar" style={{ backgroundColor: 'var(--color-green-light)', color: 'var(--color-green)' }}>👦</div>
              <div className="hero-v2-avatar hero-v2-avatar-smiley" style={{ backgroundColor: 'var(--color-yellow)', color: 'white' }}>😊</div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="hero-v2-deco hero-v2-deco-star animate-hero-spin" style={{ top: '15%', right: '8%' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-yellow)"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <div className="hero-v2-deco hero-v2-deco-plus animate-hero-float" style={{ top: '25%', right: '18%', animationDelay: '-2s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pink)" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <div className="hero-v2-deco animate-hero-float" style={{ bottom: '30%', right: '5%', animationDelay: '-4s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-green)" opacity="0.5"><circle cx="12" cy="12" r="10"/></svg>
          </div>
        </section>

      {/* ─── 2. STATS ROW SECTION ─── */}
      <section className="stats-cards-section" style={{ backgroundColor: 'var(--color-green-light)', padding: '50px 0 90px', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            
            {/* Stat Box 1 */}
            <div className="card feature-badge-card animate-fade-in-up" style={{ backgroundColor: 'var(--white)', padding: '30px', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(87,184,148,0.08)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px', color: 'var(--color-green)' }}>👶</div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>10k+</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: '4px 0 8px' }}>Happy Patients</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-medium)' }}>Striving to provide a positive, stress-free health experience for kids.</p>
            </div>

            {/* Stat Box 2 */}
            <div className="card feature-badge-card animate-fade-in-up" style={{ backgroundColor: 'var(--white)', padding: '30px', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,153,172,0.08)', animationDelay: '0.1s' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-pink-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px', color: 'var(--color-pink)' }}>🏅</div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>10+</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: '4px 0 8px' }}>Years of Experience</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-medium)' }}>Expert medical expertise with specialized pediatric qualifications.</p>
            </div>

            {/* Stat Box 3 */}
            <div className="card feature-badge-card animate-fade-in-up" style={{ backgroundColor: 'var(--white)', padding: '30px', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(100,181,246,0.08)', animationDelay: '0.2s' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-blue-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px', color: 'var(--color-blue)' }}>💛</div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>100%</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: '4px 0 8px' }}>Parent Satisfaction</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-medium)' }}>Trusted by thousands of Nagpur families for child healthcare guidance.</p>
            </div>

            {/* Stat Box 4 */}
            <div className="card feature-badge-card animate-fade-in-up" style={{ backgroundColor: 'var(--white)', padding: '30px', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,183,3,0.08)', animationDelay: '0.3s' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-yellow-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px', color: 'var(--color-yellow)' }}>🦷</div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>15k+</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: '4px 0 8px' }}>Healthy Smiles</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-medium)' }}>Painless dental care shaping bright smiles and good habits early.</p>
            </div>

          </div>
        </div>
        
        {/* Wave bottom to white section */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--white)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 3. ABOUT OUR CLINIC SECTION ─── */}
      <section className="section about-clinic-section" style={{ backgroundColor: 'var(--white)', padding: '100px 0', position: 'relative' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Image Asset Replicated from Happy Smiles */}
          <div style={{ position: 'relative', width: '100%' }} className="animate-fade-in-up">
            <img
              src="/assets/about_indian_child.png"
              alt="Caring Approach to Kids Dentistry at Small Wonders"
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
            />
            {/* Playful pill badge */}
            <div className="philosophy-img-badge animate-pulse-subtle" style={{ backgroundColor: 'var(--color-pink)', color: 'var(--white)', position: 'absolute', bottom: '15px', right: '15px' }}>
              💕 Compassionate Clinic
            </div>
          </div>

          {/* Right Column: About details */}
          <div className="text-left-responsive animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>About Our Clinic</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '20px', fontSize: '2.4rem' }}>
              A Caring Approach to Children’s Dental & Medical Health
            </h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Welcome to <strong>Small Wonders Child Clinic and Dental Studio</strong> in Nagpur. Led by Dr. Barkha, we provide premium pediatric care and advanced children's dentistry under one roof. Our warm, playful, and fear-free studio is designed specifically to make children feel safe, happy, and comfortable during their visits.
            </p>
            
            <ul className="philosophy-list" style={{ marginBottom: '32px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', color: 'var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem' }}>✓</span>
                <div><strong>A Playful Environment</strong> — Slides, games, and cartoon streaming to remove dental anxiety.</div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-pink-light)', color: 'var(--color-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem' }}>✓</span>
                <div><strong>Gentle Procedures</strong> — We explain checkups as a game, avoiding needles/clinical noises.</div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-yellow-light)', color: 'var(--color-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem' }}>✓</span>
                <div><strong>Positive Rewards</strong> — Bravery certification and toy cabinet gifts to reward milestones.</div>
              </li>
            </ul>

            <Link to="/about" className="btn btn-primary" style={{ backgroundColor: 'var(--color-green)', padding: '14px 36px' }}>
              About Our Clinic
            </Link>
          </div>

        </div>
        
        {/* Wave bottom */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 L60,26.7C120,21,240,11,360,16C480,21,600,43,720,48C840,53,960,43,1080,32C1200,21,1320,11,1380,5.3L1440,0V74H1380C1320,74,1200,74,1080,74C960,74,840,74,720,74C600,74,480,74,360,74C240,74,120,74,60,74H0Z" fill="var(--color-pink-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 4. OUR SERVICES SNAP SECTION ─── */}
      <section className="section services-snapshot-section" style={{ backgroundColor: 'var(--color-pink-light)', padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div className="section-title-wrapper animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>Our Services</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>Gentle Care for Young Smiles</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>Explore child healthcare and dentistry services designed specifically for growing smiles.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
            
            {/* Service 1: Child Clinic */}
            <div className="card service-card animate-fade-in-up" style={{ backgroundColor: 'var(--color-blue-light)', border: '1.5px solid rgba(100,181,246,0.1)', padding: '40px 30px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--color-blue)', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>👶</div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '12px' }}>Child Clinic</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', marginBottom: '24px', flexGrow: 1 }}>
                General pediatrician consultations, milestone tracking, and routine healthcare checks in a comforting layout.
              </p>
              <Link to="/child-clinic" className="btn btn-secondary" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--color-blue)', color: 'var(--color-blue)', fontSize: '0.88rem', padding: '10px 24px' }}>
                Learn More
              </Link>
            </div>

            {/* Service 2: Dental Studio */}
            <div className="card service-card animate-fade-in-up" style={{ backgroundColor: 'var(--color-green-light)', border: '1.5px solid rgba(87,184,148,0.1)', padding: '40px 30px', borderRadius: 'var(--radius-md)', animationDelay: '0.1s' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--color-green)', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>🦷</div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '12px' }}>Dental Studio</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', marginBottom: '24px', flexGrow: 1 }}>
                Painless baby teeth restorations, cavity guards, fluorides, and habit guidance systems by pediatric dental specialists.
              </p>
              <Link to="/dental-studio" className="btn btn-secondary" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--color-green)', color: 'var(--color-green)', fontSize: '0.88rem', padding: '10px 24px' }}>
                Learn More
              </Link>
            </div>

            {/* Service 3: Milestones */}
            <div className="card service-card animate-fade-in-up" style={{ backgroundColor: 'var(--color-yellow-light)', border: '1.5px solid rgba(255,183,3,0.1)', padding: '40px 30px', borderRadius: 'var(--radius-md)', animationDelay: '0.2s' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--color-yellow)', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>📈</div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '12px' }}>Growth Tracking</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', marginBottom: '24px', flexGrow: 1 }}>
                Physical expansion mapping, vaccination logging tables, and infant nutrition charts mapped with expert doctor guidelines.
              </p>
              <Link to="/child-clinic" className="btn btn-secondary" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--color-yellow)', color: 'var(--color-yellow)', fontSize: '0.88rem', padding: '10px 24px' }}>
                Learn More
              </Link>
            </div>

            {/* Service 4: The Experience */}
            <div className="card service-card animate-fade-in-up" style={{ backgroundColor: '#F3F4FB', border: '1.5px solid rgba(117,137,240,0.1)', padding: '40px 30px', borderRadius: 'var(--radius-md)', animationDelay: '0.3s' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: '#7589F0', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>🚀</div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '12px' }}>The First Visit</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', marginBottom: '24px', flexGrow: 1 }}>
                A custom journey layout containing play welcomes, chair counting games, and final reward cabinet certification to eliminate fears.
              </p>
              <Link to="/experience" className="btn btn-secondary" style={{ backgroundColor: 'var(--white)', borderColor: '#7589F0', color: '#7589F0', fontSize: '0.88rem', padding: '10px 24px' }}>
                Explore Journey
              </Link>
            </div>

          </div>
        </div>

        {/* Wave bottom to white */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--white)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 5. WHY FAMILIES TRUST US SECTION ─── */}
      <section className="section trust-section" style={{ backgroundColor: 'var(--white)', padding: '100px 0', position: 'relative' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Column: text, check bullets, progress bars */}
          <div className="text-left-responsive animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-green)' }}>Why Families Trust Us</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontSize: '2.4rem', marginBottom: '20px' }}>
              Gentle, Experienced, and Family-Centered
            </h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '24px', lineHeight: '1.7' }}>
              Our mission is to provide professional pediatric care and children's dentistry in a calm, welcoming environment where kids can build healthy life-long habits.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>✓</span> Gentle, compassionate guidance style.
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>✓</span> Clear, supportive communication with parents.
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>✓</span> State-of-the-art kid-friendly dental utilities.
              </li>
            </ul>

            {/* Progress indicators matching reference theme styling */}
            <div className="progress-bars-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="progress-bar-item">
                <div className="progress-bar-label-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-dark)' }}>
                  <span>Fear-Free Pediatric Experience</span>
                  <span>98%</span>
                </div>
                <div className="progress-bar-track" style={{ height: '8px', backgroundColor: 'var(--color-green-light)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div className="progress-bar-fill" style={{ height: '100%', width: '98%', backgroundColor: 'var(--color-green)', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div className="progress-bar-item">
                <div className="progress-bar-label-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-dark)' }}>
                  <span>Growth &amp; Development Monitoring Accuracy</span>
                  <span>95%</span>
                </div>
                <div className="progress-bar-track" style={{ height: '8px', backgroundColor: 'var(--color-blue-light)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div className="progress-bar-fill" style={{ height: '100%', width: '95%', backgroundColor: 'var(--color-blue)', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div className="progress-bar-item">
                <div className="progress-bar-label-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-dark)' }}>
                  <span>Parent Recommendation &amp; Trust Rate</span>
                  <span>100%</span>
                </div>
                <div className="progress-bar-track" style={{ height: '8px', backgroundColor: 'var(--color-pink-light)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div className="progress-bar-fill" style={{ height: '100%', width: '100%', backgroundColor: 'var(--color-pink)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Replicated Illustration */}
          <div style={{ position: 'relative', width: '100%' }} className="animate-fade-in-up">
            <img
              src="/assets/doctor_child_connection.png"
              alt="Dr. Barkha interacting warmly with a child at Small Wonders"
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
            />
          </div>

        </div>

        {/* Wave bottom */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 L60,26.7C120,21,240,11,360,16C480,21,600,43,720,48C840,53,960,43,1080,32C1200,21,1320,11,1380,5.3L1440,0V74H1380C1320,74,1200,74,1080,74C960,74,840,74,720,74C600,74,480,74,360,74C240,74,120,74,60,74H0Z" fill="var(--color-green-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 6. MEET LEAD SPECIALIST (DR. BARKHA) ─── */}
      <section className="section specialists-section" style={{ backgroundColor: 'var(--color-green-light)', padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div className="section-title-wrapper animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-green)' }}>Our Specialist</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>Meet Our Pediatric Lead</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>Nagpur's trusted pediatrician and dental care expert, dedicated to fear-free kids visits.</p>
          </div>

          <div className="single-doctor-layout" style={{ marginTop: '50px' }}>
            {/* Left Photo with outline border frames */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }} className="animate-fade-in-up">
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-pink-light)',
                borderRadius: 'var(--radius-lg)',
                zIndex: 1,
                border: '1.5px solid rgba(255,153,172,0.15)'
              }}></div>
              <div style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '4px solid var(--white)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <img 
                  src="/assets/doctor_barkha.webp" 
                  alt="Dr. Barkha" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" }} 
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                right: '-12px',
                backgroundColor: 'var(--color-green)',
                color: 'var(--white)',
                padding: '8px 20px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                zIndex: 3,
                boxShadow: '0 4px 12px rgba(87,184,148,0.25)'
              }}>
                ⭐ Lead Pediatric Dentist
              </div>
            </div>

            {/* Right Biography details */}
            <div style={{ textAlign: 'left' }} className="animate-fade-in-up">
              <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: 'var(--text-dark)' }}>Dr. Barkha</h3>
              <div style={{ 
                color: 'var(--color-pink)', 
                fontWeight: '700', 
                fontSize: '0.95rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)'
              }}>
                M.D.S. in Pediatric Dentistry &amp; Child Healthcare Lead
              </div>
              <p style={{ marginBottom: '16px', fontSize: '1.05rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>
                With over a decade of active pediatric practice, Dr. Barkha founded Small Wonders to solve a major problem: clinic anxiety in children. She believes that early dental and clinical interactions shape health habits for a lifetime, so every checkup is adapted like a playful game.
              </p>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>
                She specializes in child psychology and behavioral guidance. Her dental checkups feature the 'Magic Chair' Diagnostic ride, cartoon streaming on ceilings, and rewards cabinet milestones.
              </p>

              <div className="doctor-specialties-mini-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.3rem' }}>🧸</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-dark)' }}>Gentle Behavior Style</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.3rem' }}>🦷</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-dark)' }}>M.D.S. Dental Specialist</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.3rem' }}>📈</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-dark)' }}>Growth Milestone Charts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.3rem' }}>🛡️</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-dark)' }}>100% Pain-Free Focus</span>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary" style={{ backgroundColor: 'var(--color-pink)', boxShadow: '0 4px 12px rgba(255,153,172,0.2)' }}>
                Read Biography →
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom to white */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--white)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 7. BEFORE & AFTER GALLERY SECTION ─── */}
      <section className="section gallery-section" style={{ backgroundColor: 'var(--white)', padding: '100px 0', position: 'relative' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Column: text */}
          <div className="text-left-responsive animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>See the Difference</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontSize: '2.4rem', marginBottom: '20px' }}>
              Transforming Smiles, Building Confidence
            </h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '24px', lineHeight: '1.7' }}>
              Every child's smile tells a story — of growth, care, and newfound happiness. Our before-and-after gallery highlights the lasting, beautiful results of our personalized pediatric checkups and restorative dental studio therapies.
            </p>
            <blockquote style={{ borderLeft: '4px solid var(--color-pink)', paddingLeft: '20px', margin: '20px 0', fontStyle: 'italic', color: 'var(--text-dark)' }}>
              "A confident smile can change how a child sees the world — and how the world sees them. Our goal is to make every little patient proud to share their smile."
            </blockquote>
          </div>

          {/* Right Column: Replicated Before/After comparison box */}
          <div style={{ position: 'relative', width: '100%' }} className="animate-fade-in-up">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              
              {/* Before Card */}
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(87,184,148,0.1)', boxShadow: 'var(--shadow-md)' }}>
                <img
                  src="/assets/75-before.webp"
                  alt="Before pediatric restoration"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ backgroundColor: 'var(--color-pink-light)', color: 'var(--color-pink)', fontWeight: 800, padding: '12px', textAlign: 'center', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Before Treatment
                </div>
              </div>

              {/* After Card */}
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(87,184,148,0.1)', boxShadow: 'var(--shadow-md)' }}>
                <img
                  src="/assets/75-after.webp"
                  alt="After pediatric restoration"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ backgroundColor: 'var(--color-green-light)', color: 'var(--color-green)', fontWeight: 800, padding: '12px', textAlign: 'center', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  After Treatment
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Wave bottom */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 L60,26.7C120,21,240,11,360,16C480,21,600,43,720,48C840,53,960,43,1080,32C1200,21,1320,11,1380,5.3L1440,0V74H1380C1320,74,1200,74,1080,74C960,74,840,74,720,74C600,74,480,74,360,74C240,74,120,74,60,74H0Z" fill="var(--color-blue-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS SECTION ─── */}
      <section className="section home-reviews-section animate-fade-in-up" style={{ backgroundColor: 'var(--color-blue-light)', padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag" style={{ color: 'var(--color-blue)' }}>Testimonials</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>What Families Say About Us</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>Join thousands of Nagpur families who trust Dr. Barkha for child-friendly dental care.</p>
          </div>

          <ReviewsCarousel interval={5000} />
          
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/happy-parents" className="btn btn-secondary" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--color-blue)', color: 'var(--color-blue)' }}>
              View All Reviews
            </Link>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--color-yellow-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 9. BOOKING FORM SECTION ─── */}
      <section className="booking-section" style={{ backgroundColor: 'var(--color-yellow-light)', padding: '100px 0 140px', position: 'relative' }}>
        <div className="container booking-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: contact information */}
          <div className="booking-info animate-fade-in-up" style={{ textAlign: 'left' }}>
            <span className="section-tag" style={{ color: 'var(--color-pink)', marginBottom: '16px' }}>Get In Touch</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontSize: '2.4rem', marginBottom: '20px' }}>
              Schedule a visit for your child
            </h2>
            <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>
              Have questions or want to request a preferred consultation date? Fill out our form, or reach out directly on Call or WhatsApp.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--color-green)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>CALL CLINIC</div>
                  <a href="tel:+919876543210" style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-dark)' }}>+91 98765 43210</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-pink-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>📍</div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--color-pink)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>LOCATION</div>
                  <div style={{ fontWeight: '700', fontSize: '1.02rem', color: 'var(--text-dark)' }}>Shop 1, Choudhary Chowk, Jaripatka, Nagpur</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✉️</div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--color-blue)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>EMAIL</div>
                  <a href="mailto:contact@smallwonders.com" style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-dark)' }}>contact@smallwonders.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form styled as soft rounded panel */}
          <div className="booking-form-wrapper animate-fade-in-up" style={{ backgroundColor: 'var(--white)', border: '1.5px solid rgba(87,184,148,0.08)', borderRadius: 'var(--radius-md)', padding: '40px', boxShadow: 'var(--shadow-lg)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '20px' }}>🎉</span>
                <h3 style={{ color: 'var(--color-green)', fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '12px' }}>Request Received!</h3>
                <p style={{ color: 'var(--text-medium)', lineHeight: 1.6 }}>Thank you, parents. Our team will contact you shortly to confirm your child's appointment slot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                  
                  <div>
                    <label htmlFor="booking-name" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px', color: 'var(--text-dark)' }}>Parent's Name *</label>
                    <input
                      type="text"
                      id="booking-name"
                      className="booking-input"
                      placeholder="e.g. Sneha Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        const alphaVal = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                        setFormData({ ...formData, name: alphaVal });
                      }}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: errors.name ? '2px solid red' : '1px solid rgba(87,184,148,0.15)', outline: 'none' }}
                    />
                    {errors.name && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="booking-phone" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px', color: 'var(--text-dark)' }}>Contact Number *</label>
                    <input
                      type="tel"
                      id="booking-phone"
                      className="booking-input"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        const numericVal = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({ ...formData, phone: numericVal });
                      }}
                      maxLength={10}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: errors.phone ? '2px solid red' : '1px solid rgba(87,184,148,0.15)', outline: 'none' }}
                    />
                    {errors.phone && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                  </div>

                  <div>
                    <label htmlFor="booking-service" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px', color: 'var(--text-dark)' }}>Service Interested *</label>
                    <select
                      id="booking-service"
                      className="booking-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(87,184,148,0.15)', outline: 'none', backgroundColor: 'var(--white)' }}
                    >
                      <option value="Child Clinic">👶 Child Clinic (Pediatric)</option>
                      <option value="Dental Studio">🦷 Dental Studio (Kids Dentistry)</option>
                      <option value="General Checkup">📈 Growth &amp; Milestone Tracking</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-message" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px', color: 'var(--text-dark)' }}>Note / Preferred Date *</label>
                    <textarea
                      id="booking-message"
                      className="booking-textarea"
                      placeholder="Describe any symptoms, child's age or preferred booking dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', height: '80px', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: errors.message ? '2px solid red' : '1px solid rgba(87,184,148,0.15)', outline: 'none', resize: 'none' }}
                    />
                    {errors.message && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: 'var(--color-green)', padding: '14px', borderRadius: 'var(--radius-full)', fontWeight: 800 }}>
                    Request Appointment
                  </button>

                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

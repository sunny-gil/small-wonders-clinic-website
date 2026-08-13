import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: "About Us | Small Wonders Child Clinic & Dental Studio",
    description: "Discover Nagpur's premier kids health clinic and pediatric dental studio. Learn about Dr. Barkha (MDS) and our friendly, fear-free child care philosophy at Small Wonders.",
    keywords: "about pediatric dentist nagpur, child clinic jaripatka, kids dental clinic nagpur, dr barkha dentist, pediatrician jaripatka"
  });

  return (
    <div className="about-page" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* ─── 1. SUBPAGE HERO SECTION — Happy Smiles curved theme ─── */}
      <section className="about-hero-section">
        {/* Background illustration photo */}
        <div className="about-hero-bg">
          <img
            src="/assets/about_hero_indian.webp"
            alt="Small Wonders child-friendly clinic environment"
            className="about-hero-bg-img"
          />
          <div className="about-hero-bg-overlay"></div>
        </div>

        {/* Curved teal blob with content */}
        <div className="about-hero-blob animate-blob-reveal">
          <div className="about-hero-blob-inner">
            {/* Tag */}
            <div className="about-hero-tag animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>📍 NAGPUR'S PREMIER CLINIC</span>
            </div>

            {/* Title */}
            <h1 className="about-hero-title animate-hero-fade-up" style={{ animationDelay: '0.4s', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)' }}>
              Small Wonders Child Clinic<br/>&amp; Dental Studio
            </h1>

            {/* Description */}
            <p className="about-hero-desc animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
              Nagpur's most trusted child clinic and kids dental studio, conceptualized specifically to provide a warm, playful, and fear-free healthcare experience for your little ones.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. HOSPITAL OVERVIEW SECTION — About the Facility ─── */}
      <section className="section hospital-overview-section" style={{ backgroundColor: 'var(--white)', padding: '100px 0', position: 'relative' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Text description of clinic */}
          <div className="text-left-responsive animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-green)' }}>Our Studio & Facility</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '20px', fontSize: '2.4rem' }}>
              A Complete Child Clinic &amp; Dental Studio Under One Roof
            </h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '20px', fontSize: '1.02rem', lineHeight: '1.7' }}>
              At <strong>Small Wonders Child Clinic and Dental Studio</strong> in Jaripatka, Nagpur, we have completely redesigned child medical and dental visits from scratch. We believe clinical checks do not have to be scary or intimidating.
            </p>
            <p style={{ color: 'var(--text-medium)', marginBottom: '24px', fontSize: '1.02rem', lineHeight: '1.7' }}>
              Our clinic combines expert pediatric medicine with state-of-the-art children's dental facilities. The entire infrastructure is child-sized, brightly colored, and loaded with toys and play zones. We use special techniques like nitrous oxide conscious sedation, custom miniature dental chairs, and cartoon projection screens on the ceilings to ensure procedures are 100% gentle and stress-free.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ padding: '16px', background: 'var(--color-green-light)', borderRadius: '12px', borderLeft: '4px solid var(--color-green)' }}>
                <strong style={{ display: 'block', color: 'var(--text-dark)', marginBottom: '4px' }}>🌈 Play &amp; Slide Area</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-medium)' }}>A welcoming play zone to ease any pre-visit jitters.</span>
              </div>
              <div style={{ padding: '16px', background: 'var(--color-pink-light)', borderRadius: '12px', borderLeft: '4px solid var(--color-pink)' }}>
                <strong style={{ display: 'block', color: 'var(--text-dark)', marginBottom: '4px' }}>🛡️ Pain-Free Care</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-medium)' }}>Advanced tools and conscious sedation for kids.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful facility picture */}
          <div style={{ position: 'relative', width: '100%' }} className="animate-fade-in-up">
            <img
              src="/assets/experience_illustration.webp"
              alt="Experienced Pediatric Specialists at Small Wonders"
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
            />
            <div className="philosophy-img-badge animate-pulse-subtle" style={{ backgroundColor: 'var(--color-green)', color: 'var(--white)', position: 'absolute', bottom: '15px', right: '15px' }}>
              🏥 State-of-the-Art Nagpur Studio
            </div>
          </div>

        </div>
        
        {/* Wave transition bottom */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--color-pink-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 3. MEET DR. BARKHA (FOUNDER) ─── */}
      <section className="section specialist-bio-section" style={{ backgroundColor: 'var(--color-pink-light)', padding: '100px 0', position: 'relative' }}>
        <div className="container bio-grid" style={{ alignItems: 'center' }}>
          
          {/* Dr. Barkha Photo/Card */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }} className="animate-fade-in-up">
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--white)',
              top: '12px',
              left: '12px',
              zIndex: 1,
              border: '1.5px solid rgba(255, 153, 172, 0.15)'
            }}></div>
            <div className="card" style={{ position: 'relative', zIndex: 2, padding: '32px 24px', textAlign: 'center', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(87, 184, 148, 0.08)' }}>
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: 'var(--color-green-light)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid var(--color-green)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img 
                  src="/assets/doctor_barkha.webp" 
                  alt="Dr. Barkha" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" }} 
                />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>Dr. Barkha</h3>
              <p style={{ color: 'var(--color-pink)', fontWeight: 700, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                Founder &amp; Pediatric Lead
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-medium)', borderTop: '1px solid rgba(87, 184, 148, 0.15)', paddingTop: '16px' }}>
                <div><strong>M.D.S.</strong> in Pediatric Dentistry</div>
                <div><strong>10+ Years</strong> of Child Healthcare</div>
                <div>Ex-Senior Resident in Pediatric Dental Care</div>
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="text-left-responsive animate-fade-in-up" style={{ width: '100%', animationDelay: '0.2s' }}>
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>About the Founder</span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '20px' }}>Dr. Barkha's Philosophy of Gentle Care</h2>
            <p style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-dark)', fontStyle: 'italic', lineHeight: '1.6' }}>
              "Every child who enters our clinic is a unique bundle of joy, curiosity, and sometimes, a little fear. My goal isn't just to treat teeth or growth charts; it is to build a life-long friendship of trust."
            </p>
            <p style={{ marginBottom: '16px', color: 'var(--text-medium)', lineHeight: 1.7 }}>
              Dr. Barkha has dedicated over a decade to specialized child dentistry and general pediatric healthcare. Recognizing that standard clinical settings often cause anxiety in young minds, she established **Small Wonders Child Clinic &amp; Dental Studio** in Nagpur. It was conceptualised from the ground up to transform doctor visits into fun, positive adventures.
            </p>
            <p style={{ marginBottom: '24px', color: 'var(--text-medium)', lineHeight: 1.7 }}>
              Through specialized training in child psychology, Dr. Barkha adapts her consultation style to match each child's pace. We tell stories, count teeth like stars, and make sure no procedure is ever a scary surprise.
            </p>
            
            <div style={{ borderLeft: '4px solid var(--color-pink)', padding: '20px', margin: '24px 0', backgroundColor: 'var(--white)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', textAlign: 'left', boxShadow: 'var(--shadow-sm)' }}>
              <em style={{ color: 'var(--text-dark)', fontSize: '1rem', display: 'block' }}>
                "We don't just fix smiles; we make sure children keep smiling throughout their journey with us."
              </em>
              <strong style={{ display: 'block', marginTop: '8px', fontSize: '0.9rem', color: 'var(--color-pink)' }}>— Dr. Barkha</strong>
            </div>

            <div className="flex-row-responsive">
              <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-green)', boxShadow: '0 8px 20px rgba(87,184,148,0.25)' }}>Book a Visit</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 4. QUALIFICATIONS & TRUST SIGNALS ─── */}
      <section className="section credentials-section" style={{ backgroundColor: 'var(--color-green-light)', padding: '110px 0 90px', position: 'relative' }}>
        {/* Top Wave */}
        <div className="wavy-divider wavy-divider-top">
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C240,40 480,40 720,0 C960,-40 1200,-40 1440,0 L1440,74 L0,74 Z" fill="var(--color-green-light)"></path>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrapper animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-green)' }}>Our Credentials</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>Qualifications &amp; Trust Signals</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>Your child is in expert hands. Here is a snapshot of our clinical &amp; academic foundation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div className="card animate-fade-in-up" style={{ textAlign: 'left', padding: '32px 28px', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(87,184,148,0.05)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🎓</div>
              <h4 style={{ marginBottom: '10px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>Advanced MDS Degree</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>Master of Dental Surgery (MDS) in Pediatric &amp; Preventive Dentistry, focusing entirely on babies and child oral healthcare.</p>
            </div>
            <div className="card animate-fade-in-up" style={{ textAlign: 'left', padding: '32px 28px', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(87,184,148,0.05)', animationDelay: '0.1s' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🧸</div>
              <h4 style={{ marginBottom: '10px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>Child Psychology Focus</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>Specialized training in child behavioral management to help children deal with clinical fears and needle phobia smoothly.</p>
            </div>
            <div className="card animate-fade-in-up" style={{ textAlign: 'left', padding: '32px 28px', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(87,184,148,0.05)', animationDelay: '0.2s' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🏥</div>
              <h4 style={{ marginBottom: '10px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>State-Of-The-Art Studio</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>Equipped with custom children-sized dental chairs, ceiling cartoon displays, nitrous oxide conscious sedation, and toys cabinet.</p>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="wavy-divider wavy-divider-bottom">
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--white)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 5. CALL TO ACTION SECTION ─── */}
      <section className="section cta-intro-section" style={{ padding: '100px 0', backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="animate-fade-in-up" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', marginBottom: '16px', fontSize: '2.4rem' }}>Want to meet Dr. Barkha in person?</h2>
          <p className="animate-fade-in-up" style={{ margin: '0 auto 32px', color: 'var(--text-medium)', fontSize: '1.05rem', lineHeight: '1.7', animationDelay: '0.1s' }}>
            Schedule an introductory visit to let your child get familiar with our studio, slide area, and staff with no clinical checkup pressure.
          </p>
          <div className="flex-row-responsive animate-fade-in-up" style={{ justifyContent: 'center', animationDelay: '0.2s' }}>
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-pink)', padding: '14px 36px', boxShadow: '0 8px 20px rgba(255,153,172,0.25)' }}>
              Schedule a Friendly Meetup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function DentalStudio() {
  useSEO({
    title: "Kids Dental Studio | Pediatric Dentistry Nagpur",
    description: "Discover children's dentistry tailored to dental comfort at Small Wonders Nagpur. Gentle cavities checkups, fluoride therapies, and habit counseling with Dr. Barkha (MDS).",
    keywords: "pediatric dentist jaripatka, painless cavity filling kids, tooth alignment child, children tooth decay nagpur"
  });

  const dentalServices = [
    {
      title: "First Dental Checkup",
      desc: "An easy, non-clinical inspection where kids ride the dentist chair, count their teeth, and learn simple brushing tips.",
      icon: "🦷",
      color: "var(--color-green-light)"
    },
    {
      title: "Fluoride Protection Therapy",
      desc: "A quick, tasty gel brush-on that strengthens tooth enamel and acts as an invisible shield against decay.",
      icon: "🛡️",
      color: "var(--color-pink-light)"
    },
    {
      title: "Pit & Fissure Sealants",
      desc: "A thin protective coating filled into deep tooth grooves to prevent food from getting stuck and forming cavities.",
      icon: "✨",
      color: "var(--color-blue-light)"
    },
    {
      title: "Gentle Tooth Restorations",
      desc: "Painless fillings using colorful and biocompatible composite materials, applied with kid-focused comfort methods.",
      icon: "🩹",
      color: "var(--color-yellow-light)"
    },
    {
      title: "Space Maintainers",
      desc: "Custom metallic or acrylic bands that keep spaces open when baby teeth fall out early, ensuring straight permanent teeth.",
      icon: "📐",
      color: "var(--color-green-light)"
    },
    {
      title: "Habit Breaking Appliances",
      desc: "Comfortable braces/guards that gently help children stop thumbsucking or tongue thrusting to prevent bite issues.",
      icon: "👍",
      color: "var(--color-pink-light)"
    }
  ];

  return (
    <div className="dental-studio-page" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* ─── 1. SUBPAGE HERO SECTION ─── */}
      <section className="subpage-hero-section">
        {/* Background illustration photo */}
        <div className="subpage-hero-bg">
          <img
            src="/assets/dental_clinic_hero.png"
            alt="Pediatric dental studio with cartoon theme"
            className="subpage-hero-bg-img"
          />
          <div className="subpage-hero-bg-overlay"></div>
        </div>

        {/* Curved teal blob with content */}
        <div className="subpage-hero-blob animate-blob-reveal">
          <div className="subpage-hero-blob-inner">
            {/* Tag */}
            <div className="subpage-hero-tag animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>🦷 CHILDREN'S DENTISTRY</span>
            </div>

            {/* Title */}
            <h1 className="subpage-hero-title animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
              Sparkling, Cavity-Free Smiles
            </h1>

            {/* Description */}
            <p className="subpage-hero-desc animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
              We transform pediatric dentistry into a positive adventure! From painless tooth counting to fluoride therapies and gentle cavity checkups, we keep Nagpur's children smiling.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. DENTAL SPECIALTIES GRID ─── */}
      <section className="section specialties-section" style={{ backgroundColor: 'var(--white)', padding: '100px 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrapper animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>Preventive &amp; Restorative</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>Our Dental Treatments</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>Painless, fun, and preventive dentistry designed specifically for baby teeth.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '32px', marginTop: '40px' }}>
            {dentalServices.map((service, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ display: 'flex', gap: '20px', textAlign: 'left', alignItems: 'flex-start', backgroundColor: 'var(--white)', padding: '32px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(87,184,148,0.08)', transition: 'all 0.3s ease' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: service.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  {service.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.55 }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave divider to pink light background */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--color-pink-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 3. BRUSHING GUIDELINES SECTION ─── */}
      <section className="section guidelines-section" style={{ backgroundColor: 'var(--color-pink-light)', padding: '100px 0 90px', position: 'relative' }}>
        <div className="container">
          <div className="two-col-grid animate-fade-in-up" style={{
            backgroundColor: 'var(--text-dark)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            textAlign: 'left',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div>
              <h2 style={{ color: 'var(--white)', marginBottom: '16px', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>Dr. Barkha's Brushing Rule of "2-2"</h2>
              <p style={{ color: 'var(--white)', opacity: 0.85, marginBottom: '24px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Help your children remember the golden standard for oral hygiene. Ask them to brush:
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: 'var(--radius-md)', flex: 1, minWidth: '120px' }}>
                  <h4 style={{ color: 'var(--color-yellow)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>2</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--white)', opacity: 0.9 }}>Times a day (Morning &amp; Before Bed)</p>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: 'var(--radius-md)', flex: 1, minWidth: '120px' }}>
                  <h4 style={{ color: 'var(--color-yellow)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>2</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--white)', opacity: 0.9 }}>Minutes of gentle brushing each time</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', width: '100%' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '12px', fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>Avoid Bedtime Sugars</h3>
              <p style={{ color: 'var(--white)', opacity: 0.85, fontSize: '0.92rem', lineHeight: 1.6 }}>
                Leaving a bottle of milk, juice, or sweetened formula in your child's mouth while they sleep is a major cause of early childhood caries ("nursing bottle syndrome"). Try to switch to water or clean their gums/teeth with a damp cloth before they fall asleep.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

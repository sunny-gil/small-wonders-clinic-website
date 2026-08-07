import React from 'react';
import { Link } from 'react-router-dom';
import BlobDecoration from '../components/BlobDecoration';
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
      icon: "🦷"
    },
    {
      title: "Fluoride Protection Therapy",
      desc: "A quick, tasty gel brush-on that strengthens tooth enamel and acts as an invisible shield against decay.",
      icon: "🛡️"
    },
    {
      title: "Pit & Fissure Sealants",
      desc: "A thin protective coating filled into deep tooth grooves to prevent food from getting stuck and forming cavities.",
      icon: "✨"
    },
    {
      title: "Gentle Tooth Restorations",
      desc: "Painless fillings using colorful and biocompatible composite materials, applied with kid-focused comfort methods.",
      icon: "🩹"
    },
    {
      title: "Space Maintainers",
      desc: "Custom metallic or acrylic bands that keep spaces open when baby teeth fall out early, ensuring straight permanent teeth.",
      icon: "📐"
    },
    {
      title: "Habit Breaking Appliances",
      desc: "Comfortable braces/guards that gently help children stop thumbsucking or tongue thrusting to prevent bite issues.",
      icon: "👍"
    }
  ];

  return (
    <div className="dental-studio-page animate-fade-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
      <BlobDecoration />

      {/* Hero Section */}
      <section className="section" style={{ padding: '80px 0 40px' }}>
        <div className="container hero-grid">
          
          <div className="text-left-responsive" style={{ width: '100%' }}>
            <span className="section-tag">Children's Dentistry</span>
            <h1 style={{ marginBottom: '20px' }}>Sparkling, Cavity-Free Smiles</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginBottom: '32px' }}>
              We transform pediatric dentistry into a positive adventure! From painless tooth counting to fluoride therapies and gentle cavity checkups, we keep Nagpur's children smiling.
            </p>
            <div className="flex-row-responsive">
              <Link to="/contact" className="btn btn-primary">
                Book a Dental Visit
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img 
              src="/assets/dental_illustration.png" 
              alt="Friendly dental care at Small Wonders" 
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '320px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '6px solid var(--white)'
              }}
            />
          </div>

        </div>
      </section>

      {/* Dental Specialties Grid */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(29,122,140,0.05)', borderBottom: '1px solid rgba(29,122,140,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Preventive & Restorative</span>
            <h2>Our Dental Treatments</h2>
            <p className="section-desc">Painless, fun, and preventive dentistry designed specifically for baby teeth.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '32px', marginTop: '40px' }}>
            {dentalServices.map((service, index) => (
              <div key={index} className="card" style={{ display: 'flex', gap: '20px', textAlign: 'left', alignItems: 'flex-start' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--coral-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  {service.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--teal-primary)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brushing Guidelines or Tips Section */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="two-col-grid" style={{
            backgroundColor: 'var(--teal-primary)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            textAlign: 'left'
          }}>
            <div>
              <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Dr. Barkha's Brushing Rule of "2-2"</h2>
              <p style={{ color: 'var(--cream-base)', marginBottom: '24px' }}>
                Help your children remember the golden standard for oral hygiene. Ask them to brush:
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: 'var(--radius-md)', flex: 1, minWidth: '120px' }}>
                  <h4 style={{ color: 'var(--coral-primary)', fontSize: '2.5rem', fontWeight: 800 }}>2</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--white)' }}>Times a day (Morning & Before Bed)</p>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: 'var(--radius-md)', flex: 1, minWidth: '120px' }}>
                  <h4 style={{ color: 'var(--coral-primary)', fontSize: '2.5rem', fontWeight: 800 }}>2</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--white)' }}>Minutes of gentle brushing each time</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', width: '100%' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '12px' }}>Avoid Milk at Bedtime</h3>
              <p style={{ color: 'var(--cream-base)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Leaving a bottle of milk or juice in your child's mouth while they sleep is a major cause of early childhood caries ("nursing bottle syndrome"). Try to switch to water or clean their gums/teeth with a damp cloth before they fall asleep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import BlobDecoration from '../components/BlobDecoration';
import useSEO from '../hooks/useSEO';

export default function ChildClinic() {
  useSEO({
    title: "Child Clinic Services | Pediatric Care Nagpur",
    description: "Gentle child healthcare at Small Wonders Nagpur. We offer physical milestone monitoring, baby immunization trackers, nutritional guidance, and pediatric checkups.",
    keywords: "baby vaccines nagpur, baby growth tracker, immunization chart nagpur, child general doctor jaripatka"
  });
  const servicesList = [
    {
      title: "Newborn Care & Consultation",
      desc: "Comprehensive guidance for new parents on infant nutrition, breastfeeding support, sleep routines, and early sensory development checks.",
      icon: "👶"
    },
    {
      title: "Growth & Milestone Tracking",
      desc: "Regular tracking of physical growth (height, weight) and cognitive milestones, helping diagnose developmental gaps early.",
      icon: "📈"
    },
    {
      title: "Immunization & Vaccination",
      desc: "Pain-minimizing vaccination techniques following standard pediatric protocols to protect your child from critical illness.",
      icon: "💉"
    },
    {
      title: "Common Pediatric Illness Care",
      desc: "Diagnosis and comforting treatments for typical childhood issues like seasonal fevers, asthma, allergies, stomach bugs, and skin rashes.",
      icon: "🤒"
    },
    {
      title: "Nutritional Counselling",
      desc: "Customized diet plans designed for picky eaters to prevent nutritional deficiencies and ensure healthy weight progression.",
      icon: "🍎"
    },
    {
      title: "Adolescent Guidance",
      desc: "Physical and psychological health advice tailored specifically for pre-teens and teenagers navigating hormone changes.",
      icon: "🧑‍🤝‍🧑"
    }
  ];

  return (
    <div className="child-clinic-page animate-fade-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
      <BlobDecoration />

      {/* Hero Section */}
      <section className="section" style={{ padding: '80px 0 40px' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          <div className="text-left-responsive">
            <span className="section-tag">Pediatric Care</span>
            <h1 style={{ marginBottom: '20px' }}>Gentle Child Healthcare</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginBottom: '32px' }}>
              We monitor physical milestones, guide nutritional needs, and provide quick relief from childhood illnesses. Our consultations are relaxed, engaging, and never rushed.
            </p>
            <div className="flex-row-responsive">
              <Link to="/contact" className="btn btn-primary">
                Book a Clinic Visit
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img 
              src="/assets/pediatric_illustration.png" 
              alt="Friendly pediatric care at Small Wonders" 
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

      {/* Detailed Services Grid */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(29,122,140,0.05)', borderBottom: '1px solid rgba(29,122,140,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Our Specialties</span>
            <h2>Pediatric Services We Offer</h2>
            <p className="section-desc">Reassuring, gentle healthcare from infancy through adolescence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '32px', marginTop: '40px' }}>
            {servicesList.map((service, index) => (
              <div key={index} className="card" style={{ display: 'flex', gap: '20px', textAlign: 'left', alignItems: 'flex-start' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--teal-light)',
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

      {/* Parents Reassurance Section */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container two-col-grid">
          
          <div className="text-left-responsive" style={{ width: '100%' }}>
            <span className="section-tag">Reassurance</span>
            <h2 style={{ marginBottom: '20px' }}>Common Questions Parents Ask Us</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              <div>
                <h4 style={{ color: 'var(--teal-primary)', marginBottom: '6px' }}>How do you handle kids who are terrified of shots?</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  We use special skin cooling sprays, vibration distractors, and playful storytelling. Most children don't even realize they've received a vaccine until it's already done!
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--teal-primary)', marginBottom: '6px' }}>Can we consult about diet and picky eating?</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Yes. Picky eating is highly common. Dr. Barkha guides parents on creative food plating, nutrition replacement, and gentle habit setting without creating power struggles at the dining table.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--teal-primary)', marginBottom: '6px' }}>What should I bring for my baby's first checkup?</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Please bring your child's immunization card/records and their favorite comfort toy. We will handle the rest!
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              borderLeft: '8px solid var(--teal-primary)',
              textAlign: 'left',
              width: '100%',
              maxWidth: '450px'
            }}>
              <h3 style={{ marginBottom: '16px' }}>Immunization Tracking</h3>
              <p style={{ marginBottom: '20px', fontSize: '0.95rem' }}>
                We provide a comprehensive digital immunization tracker card for all registered babies so you never miss a critical vaccine date.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Register for Vaccine Tracking
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

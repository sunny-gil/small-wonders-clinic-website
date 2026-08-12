import React from 'react';
import { Link } from 'react-router-dom';
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
      icon: "👶",
      color: "var(--color-blue-light)"
    },
    {
      title: "Growth & Milestone Tracking",
      desc: "Regular tracking of physical growth (height, weight) and cognitive milestones, helping diagnose developmental gaps early.",
      icon: "📈",
      color: "var(--color-green-light)"
    },
    {
      title: "Immunization & Vaccination",
      desc: "Pain-minimizing vaccination techniques following standard pediatric protocols to protect your child from critical illness.",
      icon: "💉",
      color: "var(--color-pink-light)"
    },
    {
      title: "Common Pediatric Illness Care",
      desc: "Diagnosis and comforting treatments for typical childhood issues like seasonal fevers, asthma, allergies, stomach bugs, and skin rashes.",
      icon: "🤒",
      color: "var(--color-yellow-light)"
    },
    {
      title: "Nutritional Counselling",
      desc: "Customized diet plans designed for picky eaters to prevent nutritional deficiencies and ensure healthy weight progression.",
      icon: "🍎",
      color: "var(--color-blue-light)"
    },
    {
      title: "Adolescent Guidance",
      desc: "Physical and psychological health advice tailored specifically for pre-teens and teenagers navigating hormone changes.",
      icon: "🧑‍🤝‍🧑",
      color: "var(--color-green-light)"
    }
  ];

  return (
    <div className="child-clinic-page" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* ─── 1. SUBPAGE HERO SECTION — Premium matching theme ─── */}
      <section className="subpage-hero-section">
        {/* Background illustration photo */}
        <div className="subpage-hero-bg">
          <img
            src="/assets/doctor_child_connection.png"
            alt="Pediatrician checking smiling child warmly"
            className="subpage-hero-bg-img"
          />
          <div className="subpage-hero-bg-overlay"></div>
        </div>

        {/* Curved teal blob with content */}
        <div className="subpage-hero-blob animate-blob-reveal">
          <div className="subpage-hero-blob-inner">
            {/* Tag */}
            <div className="subpage-hero-tag animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>👶 PEDIATRIC CARE</span>
            </div>

            {/* Title */}
            <h1 className="subpage-hero-title animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
              Gentle Child Healthcare
            </h1>

            {/* Description */}
            <p className="subpage-hero-desc animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
              We monitor physical milestones, guide nutritional needs, and provide quick relief from childhood illnesses. Our consultations are relaxed, engaging, and never rushed.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. DETAILED SERVICES SNAP SECTION ─── */}
      <section className="section specialties-section" style={{ backgroundColor: 'var(--white)', padding: '100px 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrapper animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-blue)' }}>Our Specialties</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>Pediatric Services We Offer</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>Reassuring, gentle healthcare from infancy through adolescence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '32px', marginTop: '40px' }}>
            {servicesList.map((service, index) => (
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

        {/* Bottom Wave divider to light green */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--color-green-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 3. FAQ & REASSURANCE SECTION ─── */}
      <section className="section reassurance-section" style={{ backgroundColor: 'var(--color-green-light)', padding: '100px 0 90px', position: 'relative' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          <div className="text-left-responsive animate-fade-in-up" style={{ width: '100%' }}>
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>Reassurance</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontSize: '2.4rem', marginBottom: '20px' }}>Common Questions Parents Ask Us</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              <div>
                <h4 style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '6px' }}>How do you handle kids who are terrified of shots?</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.55 }}>
                  We use special skin cooling sprays, vibration distractors, and playful storytelling. Most children don't even realize they've received a vaccine until it's already done!
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '6px' }}>Can we consult about diet and picky eating?</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.55 }}>
                  Yes. Picky eating is highly common. Dr. Barkha guides parents on creative food plating, nutrition replacement, and gentle habit setting without creating power struggles at the dining table.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '6px' }}>What should I bring for my baby's first checkup?</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.55 }}>
                  Please bring your child's immunization card/records and their favorite comfort toy. We will handle the rest!
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }} className="animate-fade-in-up">
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              borderLeft: '8px solid var(--color-blue)',
              textAlign: 'left',
              width: '100%',
              maxWidth: '450px'
            }}>
              <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontSize: '1.5rem' }}>Immunization Tracking</h3>
              <p style={{ marginBottom: '24px', fontSize: '0.95rem', color: 'var(--text-medium)', lineHeight: 1.65 }}>
                We provide a comprehensive digital immunization tracker card for all registered babies so you never miss a critical vaccine date.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', backgroundColor: 'var(--color-blue)', boxShadow: '0 8px 20px rgba(100,181,246,0.25)', padding: '14px 24px', textAlign: 'center' }}>
                Register for Vaccine Tracking
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

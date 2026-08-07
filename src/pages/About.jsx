import React from 'react';
import { Link } from 'react-router-dom';
import BlobDecoration from '../components/BlobDecoration';
import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: "About Dr. Barkha | Pediatrician & Dentist Nagpur",
    description: "Learn more about Dr. Barkha, founder of Small Wonders Child Clinic & Dental Studio in Nagpur. Discover her qualifications (MDS) and fear-free child care philosophy.",
    keywords: "dr barkha biography, pediatric dentist nagpur, prevent dentistry nagpur, child specialist doctor nagpur"
  });
  return (
    <div className="about-page animate-fade-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
      <BlobDecoration />

      {/* Main Biography Section */}
      <section className="section" style={{ padding: '80px 0 60px' }}>
        <div className="container bio-grid">
          
          {/* Dr. Barkha Photo/Card */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--coral-light)',
              top: '12px',
              left: '12px',
              zIndex: -1
            }}></div>
            <div className="card" style={{ padding: '24px', textAlign: 'center', backgroundColor: 'var(--white)' }}>
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: 'var(--teal-light)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid var(--teal-primary)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img 
                  src="/assets/doctor_barkha.png" 
                  alt="Dr. Barkha" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" }} 
                />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--teal-primary)', marginBottom: '4px' }}>Dr. Barkha</h3>
              <p style={{ color: 'var(--coral-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Pediatrician & Dental Expert
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-medium)', borderTop: '1px solid rgba(29,122,140,0.1)', paddingTop: '16px' }}>
                <div><strong>M.D.S.</strong> in Pediatric Dentistry</div>
                <div><strong>10+ Years</strong> of Smiling Kids</div>
                <div>Ex-Senior Resident in Child Dental Care</div>
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="text-left-responsive" style={{ width: '100%' }}>
            <span className="section-tag">About the Founder</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Dr. Barkha's Philosophy of Gentle Care</h2>
            <p style={{ marginBottom: '16px', fontSize: '1.1rem' }}>
              "Every child who enters our clinic is a unique bundle of joy, curiosity, and sometimes, a little fear. My goal isn't just to treat teeth or growth charts; it is to build a life-long friendship of trust."
            </p>
            <p style={{ marginBottom: '16px', color: 'var(--text-medium)' }}>
              Dr. Barkha has dedicated over a decade to specialized pediatric dental care and general child well-being. Recognizing that standard clinical environments often induce anxiety in children, she founded **Small Wonders Child Clinic & Dental Studio** in Nagpur. It was created with a vision to make doctor visits something that children actually look forward to.
            </p>
            <p style={{ marginBottom: '24px', color: 'var(--text-medium)' }}>
              With specialized training in child psychology and behavioral guidance, Dr. Barkha uses gentle, non-threatening communication styles. She explains clinical processes using friendly terminology, ensuring that no procedure is ever a scary surprise.
            </p>
            
            <div style={{ borderLeft: '4px solid var(--coral-primary)', paddingLeft: '20px', margin: '24px 0', backgroundColor: 'var(--coral-light)', padding: '16px 20px', borderRadius: '0 var(--radius-md) var(--radius-md) 0', textAlign: 'left' }}>
              <em style={{ color: 'var(--text-dark)', fontSize: '1rem', display: 'block' }}>
                "We don't just fix smiles; we make sure children keep smiling throughout their journey with us."
              </em>
              <strong style={{ display: 'block', marginTop: '8px', fontSize: '0.9rem', color: 'var(--coral-primary)' }}>— Dr. Barkha</strong>
            </div>

            <div className="flex-row-responsive">
              <Link to="/contact" className="btn btn-primary">Book a Visit</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Qualifications & Milestones */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(29,122,140,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Our Credentials</span>
            <h2>Qualifications & Trust Signals</h2>
            <p className="section-desc">You are placing your child in expert hands. Here is a snapshot of our academic & clinical foundation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div className="card" style={{ textAlign: 'left', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎓</div>
              <h4 style={{ marginBottom: '8px', color: 'var(--teal-primary)' }}>Advanced MDS Degree</h4>
              <p style={{ fontSize: '0.95rem' }}>Specialized Master of Dental Surgery in Pediatric & Preventive Dentistry, focusing entirely on child oral health.</p>
            </div>
            <div className="card" style={{ textAlign: 'left', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🧸</div>
              <h4 style={{ marginBottom: '8px', color: 'var(--teal-primary)' }}>Child Psychology Training</h4>
              <p style={{ fontSize: '0.95rem' }}>Equipped with modern techniques to manage dental anxiety, needle phobia, and sensory sensitivities in children.</p>
            </div>
            <div className="card" style={{ textAlign: 'left', padding: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏥</div>
              <h4 style={{ marginBottom: '8px', color: 'var(--teal-primary)' }}>State-Of-The-Art Studio</h4>
              <p style={{ fontSize: '0.95rem' }}>Equipped with specialized child-sized equipment, nitrous oxide conscious sedation (for painless care), and safety features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Want to meet Dr. Barkha in person?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px', color: 'var(--text-medium)' }}>
            Schedule an introductory visit to let your child get familiar with our studio and staff with no pressure or immediate checkup requirements.
          </p>
          <div className="flex-row-responsive" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">
              Schedule a Friendly Meetup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

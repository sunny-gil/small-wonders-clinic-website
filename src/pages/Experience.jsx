import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlobDecoration from '../components/BlobDecoration';
import useSEO from '../hooks/useSEO';

export default function Experience() {
  useSEO({
    title: "The Experience | Child-Friendly Clinic Nagpur",
    description: "Take a visual walkthrough of your child's first checkup experience at Small Wonders. See how our play area and gentle checkup methods eliminate medical and dental fear.",
    keywords: "fear free baby checkup, child clinic tour, kids doctor visit game, happy pediatrician checkup"
  });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. The Playful Welcome",
      subtitle: "Reception & Play Corner",
      desc: "When you first step in, it feels like a playroom! We have cartoon channels, custom toys, children's books, and slides. No clinical smell, no sterile desks—just fun spaces for kids to explore and relax before they meet our staff.",
      emoji: "🧸",
      tip: "We recommend arriving 10 minutes early so your child has time to play and settle down."
    },
    {
      title: "2. Cozy Chat with Dr. Barkha",
      subtitle: "Comfortable Conversation",
      desc: "There are no medical tools on display. Dr. Barkha sits next to your child in a comfy sofa area, chatting about their favorite cartoons, school, and hobbies. We build a human connection first, making sure the child feels safe and heard.",
      emoji: "👋",
      tip: "Dr. Barkha has specialized training in child psychology to handle shy or highly anxious children."
    },
    {
      title: "3. Riding the 'Magic Chair'",
      subtitle: "Gentle Diagnostic Ride",
      desc: "We invite your child to ride the dentist chair—which we call the 'Rocket Ship' or 'Magic Chair'. They can watch their favorite cartoons on a screen mounted on the ceiling while we do a quick, painless tooth count using a gentle mirrors system.",
      emoji: "🚀",
      tip: "No clinical procedures are performed on the first day unless it is an emergency, protecting their first memory."
    },
    {
      title: "4. The Bravery Reward Corner",
      subtitle: "Stickers, Toys & Balloons",
      desc: "Every visit ends in celebration! Your child visits our custom Reward Cabinet where they can choose a balloon, toy, or a colorful Bravery Certificate. This creates a positive loop, leaving them excited for their next visit.",
      emoji: "🏆",
      tip: "Your child leaves our clinic with a happy memory, changing how they view clinical healthcare forever!"
    }
  ];

  return (
    <div className="experience-page animate-fade-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
      <BlobDecoration />

      {/* Page Header */}
      <section className="section" style={{ padding: '80px 0 40px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">First Visit Walkthrough</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>The Small Wonders Experience</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginBottom: '32px' }}>
            We've redesigned a child's medical visit from scratch. See what happens when you bring your child to our Jaripatka studio for the first time.
          </p>
        </div>
      </section>

      {/* Interactive Timeline Stepper */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(29,122,140,0.05)', borderBottom: '1px solid rgba(29,122,140,0.05)' }}>
        <div className="container">
          
          {/* Stepper Navigation Headers */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '800px',
            margin: '0 auto 48px',
            position: 'relative',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{
              position: 'absolute',
              top: '25px',
              left: '50px',
              right: '50px',
              height: '4px',
              backgroundColor: 'var(--cream-dark)',
              zIndex: 1,
              display: 'block'
            }}>
              <div style={{
                height: '100%',
                backgroundColor: 'var(--teal-primary)',
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                transition: 'width var(--transition-normal)'
              }}></div>
            </div>

            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 2,
                  flex: '1',
                  minWidth: '120px'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: activeStep === idx ? 'var(--teal-primary)' : 'var(--white)',
                  color: activeStep === idx ? 'var(--white)' : 'var(--teal-muted)',
                  border: activeStep === idx ? '3px solid var(--teal-primary)' : '3px solid var(--cream-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-normal)'
                }}>
                  {step.emoji}
                </div>
                <span style={{
                  marginTop: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: activeStep === idx ? 'var(--teal-primary)' : 'var(--text-medium)'
                }}>
                  {step.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Stepper Content Box */}
          <div className="card experience-card-grid" style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left',
            backgroundColor: 'var(--cream-base)',
            borderLeft: '8px solid var(--coral-primary)'
          }}>
            <div style={{ fontSize: '4rem', textAlign: 'center' }}>
              {steps[activeStep].emoji}
            </div>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--teal-primary)', marginBottom: '8px' }}>
                {steps[activeStep].title}
              </h3>
              <h4 style={{ color: 'var(--coral-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>
                {steps[activeStep].subtitle}
              </h4>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: 1.6 }}>
                {steps[activeStep].desc}
              </p>
              <div style={{
                backgroundColor: 'var(--white)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--teal-primary)',
                fontSize: '0.9rem',
                color: 'var(--text-medium)',
                textAlign: 'left'
              }}>
                <strong>Parent Tip:</strong> {steps[activeStep].tip}
              </div>
            </div>
          </div>

          {/* Previous/Next Navigation Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }} className="flex-row-responsive">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="btn btn-secondary"
              style={{ opacity: activeStep === 0 ? 0.5 : 1, cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="btn btn-primary"
              style={{ opacity: activeStep === steps.length - 1 ? 0.5 : 1, cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer' }}
            >
              Next Step
            </button>
          </div>

        </div>
      </section>

      {/* Visual Support Callout */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container two-col-grid">
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img 
              src="/assets/experience_illustration.png" 
              alt="First visit playroom concept" 
              loading="lazy"
              style={{ width: '100%', maxWidth: '380px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>
          <div className="text-left-responsive" style={{ width: '100%' }}>
            <span className="section-tag">Fear-Free Pledge</span>
            <h2 style={{ marginBottom: '20px' }}>Our Promise to Your Family</h2>
            <p style={{ marginBottom: '16px', color: 'var(--text-medium)' }}>
              We promise to never hold a child down, never lie about procedures (no \"it won't hurt\" when we are injecting), and never force a treatment. If a child is too distressed, we postpone the checkup and spend the day building comfort instead.
            </p>
            <p style={{ marginBottom: '24px', color: 'var(--text-medium)' }}>
              This policy has helped thousands of families turn clinic phobias into comfortable, confident checkup routines.
            </p>
            <div className="flex-row-responsive">
              <Link to="/contact" className="btn btn-primary">
                Book a Tour Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function Experience() {
  useSEO({
    title: "The Experience | Child-Friendly Clinic Nagpur",
    description: "Take a visual walkthrough of your child's first visit at Small Wonders Nagpur. See how our play area, cozy doctor chats, and gentle dental checkups eliminate clinical fear.",
    keywords: "fear free baby checkup, child clinic Nagpur, kids doctor visit game, happy pediatrician checkup, child dental studio Nagpur"
  });

  const steps = [
    {
      title: "1. The Playful Welcome",
      subtitle: "Reception & Play Corner",
      desc: "When you first step into Small Wonders, it feels like a playroom! We have cartoon channels, custom toys, children's books, and slides. No clinical smell, no sterile desks—just fun spaces for kids to explore and relax before they meet our staff.",
      tip: "We recommend arriving 10 minutes early so your child has time to play and settle down naturally.",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
      alt: "Clean and child-friendly play and reception waiting area at Small Wonders",
      color: "var(--color-green)",
      bgColor: "var(--color-green-light)"
    },
    {
      title: "2. Cozy Chat with the Doctor",
      subtitle: "Comfortable Connection First",
      desc: "There are no scary medical tools on display. Dr. Barkha sits next to your child in a comfortable, friendly sofa area, chatting about their favorite cartoons, school, and hobbies. We build a human connection first, making sure the child feels safe and heard.",
      tip: "Dr. Barkha has specialized training in child psychology to handle shy or highly anxious children.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
      alt: "Dr. Barkha interacting warmly and building trust with a child",
      color: "var(--color-blue)",
      bgColor: "var(--color-blue-light)"
    },
    {
      title: "3. Riding the 'Magic Chair'",
      subtitle: "Gentle Diagnostic Checkup",
      desc: "We invite your child to ride the dentist chair—which we call the 'Rocket Ship' or 'Magic Chair'. They can watch their favorite cartoons on a screen mounted on the ceiling while we do a quick, painless tooth count using a gentle mirror system.",
      tip: "No clinical procedures are performed on the first day unless it is an emergency, protecting their first memory.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      alt: "Child smiling in a colorful dental chair during a friendly checkup",
      color: "var(--color-yellow)",
      bgColor: "var(--color-yellow-light)"
    },
    {
      title: "4. The Bravery Reward Corner",
      subtitle: "Stickers, Toys & Balloons",
      desc: "Every visit ends in celebration! Your child visits our custom Reward Cabinet where they can choose a balloon, toy, or a colorful Bravery Certificate. This creates a positive loop, leaving them excited for their next visit.",
      tip: "Your child leaves our clinic with a happy memory, changing how they view clinical healthcare forever!",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
      alt: "Happy child smiling happily after receiving their bravery reward",
      color: "var(--color-pink)",
      bgColor: "var(--color-pink-light)"
    }
  ];

  return (
    <div className="experience-page" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* ─── 1. SUBPAGE HERO SECTION ─── */}
      <section className="subpage-hero-section">
        {/* Background illustration photo */}
        <div className="subpage-hero-bg">
          <img
            src="/assets/experience_hero_indian.webp"
            alt="Small Wonders child-friendly clinic play area"
            className="subpage-hero-bg-img"
          />
          <div className="subpage-hero-bg-overlay"></div>
        </div>

        {/* Curved teal blob with content */}
        <div className="subpage-hero-blob animate-blob-reveal">
          <div className="subpage-hero-blob-inner">
            {/* Tag */}
            <div className="subpage-hero-tag animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>🎈 REDESIGNED VISITS</span>
            </div>

            {/* Title */}
            <h1 className="subpage-hero-title animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
              The Experience
            </h1>

            {/* Description */}
            <p className="subpage-hero-desc animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
              We have redesigned a child's medical and dental visit from scratch. See the step-by-step journey that turns clinical fears into happy adventures.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. JOURNEY STEPS TIMELINE ─── */}
      <section className="section journey-timeline-section" style={{ backgroundColor: 'var(--cream-base)', padding: '100px 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          
          <div className="section-title-wrapper animate-fade-in-up">
            <span className="section-tag" style={{ color: 'var(--color-green)' }}>Our Process</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>The First Visit Journey</h2>
            <p className="section-desc" style={{ color: 'var(--text-medium)' }}>How we make your child's first medical &amp; dental checkup comfortable and stress-free.</p>
          </div>

          {/* Vertical connection line on desktop */}
          <div className="timeline-journey-wrapper" style={{ position: 'relative', marginTop: '60px' }}>
            
            {/* Central path line */}
            <div className="timeline-journey-line" style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '50px',
              width: '4px',
              background: 'linear-gradient(to bottom, var(--color-green), var(--color-blue), var(--color-yellow), var(--color-pink))',
              borderRadius: '2px',
              display: 'block'
            }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="timeline-journey-item animate-fade-in-up" 
                  style={{ 
                    display: 'flex', 
                    gap: '40px', 
                    position: 'relative', 
                    alignItems: 'stretch'
                  }}
                >
                  {/* Step pin badge on the line */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: step.color,
                    border: '4px solid var(--white)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    zIndex: 5,
                    flexShrink: 0,
                    marginLeft: '36px',
                    marginTop: '28px'
                  }}>
                    {idx + 1}
                  </div>

                  {/* Card Content Box */}
                  <div className="card" style={{
                    flexGrow: 1,
                    backgroundColor: 'var(--white)',
                    borderRadius: '24px',
                    padding: '36px',
                    border: `1.5px solid rgba(87,184,148,0.08)`,
                    borderLeft: `8px solid ${step.color}`,
                    boxShadow: 'var(--shadow-md)',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '30px',
                    alignItems: 'center'
                  }}>
                    {/* Left text column */}
                    <div style={{ textAlign: 'left' }}>
                      <span style={{ 
                        color: step.color, 
                        fontWeight: '800', 
                        fontSize: '0.78rem', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '8px',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {step.subtitle}
                      </span>
                      <h3 style={{ 
                        fontSize: '1.6rem', 
                        color: 'var(--text-dark)', 
                        fontFamily: 'var(--font-heading)', 
                        marginBottom: '16px',
                        lineHeight: '1.2'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{ 
                        fontSize: '0.98rem', 
                        color: 'var(--text-medium)', 
                        lineHeight: '1.65', 
                        marginBottom: '20px' 
                      }}>
                        {step.desc}
                      </p>
                      
                      {/* Parent Tip inside card */}
                      <div style={{ 
                        backgroundColor: step.bgColor, 
                        padding: '14px 18px', 
                        borderRadius: '12px', 
                        fontSize: '0.88rem', 
                        color: 'var(--text-dark)', 
                        borderLeft: `3px solid ${step.color}`
                      }}>
                        <strong>💡 Parent Tip:</strong> {step.tip}
                      </div>
                    </div>

                    {/* Right image column */}
                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '180px', borderRadius: '16px', overflow: 'hidden', border: '3px solid var(--white)', boxShadow: 'var(--shadow-sm)' }}>
                      <img 
                        src={step.image} 
                        alt={step.alt} 
                        style={{ 
                          position: 'absolute',
                          top: 0, left: 0, width: '100%', height: '100%',
                          objectFit: 'cover' 
                        }} 
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Wave to green light */}
        <div className="wavy-divider wavy-divider-bottom" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C240,96,480,96,720,32C960,-32,1200,-32,1440,32V74H1200C960,74,720,74,480,74C240,74,0,74,0,74Z" fill="var(--color-green-light)"></path>
          </svg>
        </div>
      </section>

      {/* ─── 3. REASSURANCE & PLEDGE SECTION ─── */}
      <section className="section pledge-section" style={{ backgroundColor: 'var(--color-green-light)', padding: '100px 0 90px', position: 'relative' }}>
        <div className="container two-col-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Image support */}
          <div style={{ position: 'relative', width: '100%' }} className="animate-fade-in-up">
            <img 
              src="/assets/pledge_indian.webp" 
              alt="Small Wonders kids medical and dental pledge" 
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>

          {/* Right Column: Reassurance Text */}
          <div className="text-left-responsive animate-fade-in-up" style={{ width: '100%', animationDelay: '0.2s' }}>
            <span className="section-tag" style={{ color: 'var(--color-pink)' }}>Fear-Free Pledge</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontSize: '2.4rem', marginBottom: '20px' }}>Our Promise to Nagpur Families</h2>
            <p style={{ marginBottom: '16px', color: 'var(--text-medium)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              We promise to never hold a child down, never lie about procedures, and never force a treatment. If a child is too distressed, we postpone the checkup and spend the day building comfort in the playroom instead.
            </p>
            <p style={{ marginBottom: '32px', color: 'var(--text-medium)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              This policy has helped thousands of parents turn hospital and dental phobias into comfortable, confident checkup routines for their kids.
            </p>
            <div className="flex-row-responsive">
              <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-pink)', padding: '14px 36px', boxShadow: '0 8px 20px rgba(255,153,172,0.25)' }}>
                Book a Tour Appointment
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

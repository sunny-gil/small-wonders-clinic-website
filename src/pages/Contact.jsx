import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';

export default function Contact() {
  useSEO({
    title: "Book an Appointment | Small Wonders Nagpur",
    description: "Schedule a visit for your child at Small Wonders Nagpur. Contact details for pediatrician Dr. Barkha, phone numbers, WhatsApp link, address, and online booking form.",
    keywords: "book child doctor slot, pediatric clinic contact number, jaripatka clinic location, children dentist whatsapp"
  });
  // Get today's date in local YYYY-MM-DD format
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };
  const todayStr = getTodayDateString();

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    service: 'General Consultation',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    if (name === 'phone') {
      val = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'parentName' || name === 'childName') {
      val = value.replace(/[^a-zA-Z\s]/g, '');
    }
    setFormData({
      ...formData,
      [name]: val
    });
    // Clear error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Parent Name Validation (Letters & spaces only)
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.parentName.trim())) {
      newErrors.parentName = 'Parent name should only contain letters and spaces (2-50 characters)';
    }

    // Indian Phone Number Validation (10 digits starting with 6-9)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
    }

    // Child Name Validation (Letters & spaces only)
    if (!formData.childName.trim()) {
      newErrors.childName = 'Child name is required';
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.childName.trim())) {
      newErrors.childName = 'Child name should only contain letters and spaces (2-50 characters)';
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = 'Child age is required';
    } else if (isNaN(formData.childAge) || Number(formData.childAge) < 0 || Number(formData.childAge) > 18) {
      newErrors.childAge = 'Please enter a valid child age (0 - 18)';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    } else if (formData.preferredDate < todayStr) {
      newErrors.preferredDate = 'Preferred date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      phone: '',
      childName: '',
      childAge: '',
      service: 'General Consultation',
      preferredDate: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page animate-fade-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* ─── 1. SUBPAGE HERO SECTION ─── */}
      <section className="subpage-hero-section">
        {/* Background illustration photo */}
        <div className="subpage-hero-bg">
          <img
            src="/assets/booking_hero_indian.webp"
            alt="Small Wonders kids clinic waiting area"
            className="subpage-hero-bg-img"
          />
          <div className="subpage-hero-bg-overlay"></div>
        </div>

        {/* Curved teal blob with content */}
        <div className="subpage-hero-blob animate-blob-reveal">
          <div className="subpage-hero-blob-inner">
            {/* Tag */}
            <div className="subpage-hero-tag animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>📅 EASY BOOKING</span>
            </div>

            {/* Title */}
            <h1 className="subpage-hero-title animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
              Book a Visit
            </h1>

            {/* Description */}
            <p className="subpage-hero-desc animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
              Fill out the form below or contact us directly on Call or WhatsApp to schedule a stress-free appointment for your child at Nagpur.
            </p>
          </div>
        </div>
      </section>

      {/* Map, Contact Details & Form Section */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(29,122,140,0.05)' }}>
        <div className="container contact-grid">
          
          {/* Clinic Information & Map */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
            
            {/* Quick Contact Info */}
            <div className="card" style={{ padding: '28px', backgroundColor: 'var(--cream-base)' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--teal-primary)' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
                <div>
                  <strong>📍 Address:</strong><br />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Small+Wonders+Child+Clinic+and+Dental+Studio,+Jaripatka,+Nagpur"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--color-pink)'}
                    onMouseOut={(e) => e.target.style.color = 'inherit'}
                  >
                    Shop No 1, Choudhary Chowk, L, Opposite Union Bank,<br />
                    Jaripatka, Nagpur-440014, Maharashtra
                  </a>
                </div>
                <div>
                  <strong>📞 Call Us:</strong><br />
                  <a href="tel:+919876543210" style={{ color: 'var(--teal-primary)', fontWeight: 'bold' }}>+91 98765 43210</a>
                </div>
                <div>
                  <strong>💬 WhatsApp:</strong><br />
                  <a href="https://wa.me/919876543210" style={{ color: '#25D366', fontWeight: 'bold' }}>+91 98765 43210</a>
                </div>
                <div>
                  <strong>🕒 Working Hours:</strong><br />
                  Monday – Saturday: 10:30 AM – 11:00 PM<br />
                  Sunday: 05:30 PM – 08:30 PM
                </div>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="card" style={{ padding: '8px', height: '360px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <iframe
                title="Jaripatka Studio Map"
                src="https://maps.google.com/maps?q=Small%20Wonders%20Child%20Clinic%20and%20Dental%20Studio,%20Jaripatka,%20Nagpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 'var(--radius-sm)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Small+Wonders+Child+Clinic+and+Dental+Studio,+Jaripatka,+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '8px 16px', display: 'inline-flex', width: 'fit-content' }}
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Appointment Form */}
          <div className="card" style={{ padding: '40px', textAlign: 'left', minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ marginBottom: '8px', color: 'var(--teal-primary)' }}>Request an Appointment</h3>
                
                {/* Parent Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="parentName" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Parent's Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.parentName ? '2px solid red' : '1px solid var(--cream-dark)',
                      backgroundColor: 'var(--cream-base)',
                      fontSize: '0.95rem',
                      width: '100%'
                    }}
                    placeholder="Enter your full name"
                  />
                  {errors.parentName && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.parentName}</span>}
                </div>

                {/* Phone Number */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="phone" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '2px solid red' : '1px solid var(--cream-dark)',
                      backgroundColor: 'var(--cream-base)',
                      fontSize: '0.95rem',
                      width: '100%'
                    }}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.phone}</span>}
                </div>

                {/* Child Name & Age Row */}
                <div className="child-age-row-responsive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="childName" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Child's Name *</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.childName ? '2px solid red' : '1px solid var(--cream-dark)',
                        backgroundColor: 'var(--cream-base)',
                        fontSize: '0.95rem',
                        width: '100%'
                      }}
                      placeholder="Child's name"
                    />
                    {errors.childName && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.childName}</span>}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="childAge" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Child's Age *</label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.childAge ? '2px solid red' : '1px solid var(--cream-dark)',
                        backgroundColor: 'var(--cream-base)',
                        fontSize: '0.95rem',
                        width: '100%'
                      }}
                      placeholder="Age"
                    />
                    {errors.childAge && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.childAge}</span>}
                  </div>
                </div>

                {/* Preferred Service & Preferred Date */}
                <div className="service-date-row-responsive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="service" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Service Need *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--cream-dark)',
                        backgroundColor: 'var(--cream-base)',
                        fontSize: '0.95rem',
                        width: '100%'
                      }}
                    >
                      <option value="General Consultation">General Consultation</option>
                      <option value="Vaccination / Immunization">Vaccination / Immunization</option>
                      <option value="Dental Checkup">First Dental Checkup</option>
                      <option value="Cavity Treatment">Cavity Restoration</option>
                      <option value="Milestone Discussion">Milestone Discussion</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="preferredDate" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={todayStr}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.preferredDate ? '2px solid red' : '1px solid var(--cream-dark)',
                        backgroundColor: 'var(--cream-base)',
                        fontSize: '0.95rem',
                        width: '100%'
                      }}
                    />
                    {errors.preferredDate && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.preferredDate}</span>}
                  </div>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Additional Note (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--cream-dark)',
                      backgroundColor: 'var(--cream-base)',
                      fontSize: '0.95rem',
                      resize: 'none',
                      width: '100%'
                    }}
                    placeholder="Describe any symptoms or preferences (e.g. child is very anxious)"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', padding: '14px' }}>
                  Submit Booking Request
                </button>
              </form>
            ) : (
              // Success confirmation screen
              <div style={{ textAlign: 'center', padding: '40px 20px' }} className="animate-fade-in-up">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--teal-light)',
                  color: 'var(--teal-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  margin: '0 auto 24px'
                }}>
                  🎉
                </div>
                <h3 style={{ color: 'var(--teal-primary)', fontSize: '1.8rem', marginBottom: '12px' }}>Request Received!</h3>
                <p style={{ color: 'var(--text-medium)', marginBottom: '24px', lineHeight: 1.5 }}>
                  Thank you, <strong>{formData.parentName}</strong>! We have registered a booking request for <strong>{formData.childName}</strong> on <strong>{formData.preferredDate}</strong>.
                </p>
                <div style={{
                  backgroundColor: 'var(--cream-base)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  marginBottom: '32px',
                  borderLeft: '4px solid var(--coral-primary)'
                }}>
                  <strong>What happens next?</strong><br />
                  Our coordinator will call you back on <strong>{formData.phone}</strong> within 2 hours to confirm your final slot and time.
                </div>
                <button onClick={handleReset} className="btn btn-secondary">
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

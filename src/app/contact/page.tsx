'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import WaveDivider from '@/components/WaveDivider';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="r-hero" style={{ background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)', padding: '38.4px 0 51.2px', position: 'relative' }}>
        <div className="r-container" style={{ maxWidth: '1080px', width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif', fontSize: '65px', fontWeight: 900, lineHeight: '71.5px', color: '#000000', letterSpacing: '1.3px', textTransform: 'uppercase' }}>GET IN TOUCH</h1>
          </motion.div>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: '51.2px 0', backgroundColor: '#ffffff' }}>
        <div className="r-container" style={{ maxWidth: '1080px', width: '80%', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p style={{ fontSize: '16px', fontWeight: 500, lineHeight: '28.8px', color: '#121212', marginBottom: '40px', maxWidth: '800px' }}>
              Ready to transform your business with cutting-edge technology? Get in touch with us today. Our expert team is dedicated to helping you achieve your goals and succeed in the dynamic world of finance, payments, and fintech. Let&apos;s innovate together!
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Name label */}
                <div>
                  <label style={{ fontSize: '16px', fontWeight: 700, color: '#121212', display: 'block', marginBottom: '10px' }}>
                    Name <span style={{ color: '#e02b20' }}>*</span>
                  </label>
                  <div className="r-form-row" style={{ display: 'flex', gap: '20px' }}>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      style={{
                        flex: '1 1 45%',
                        minWidth: '200px',
                        padding: '14px 18px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#333',
                        border: '1px solid #e5e5e5',
                        borderRadius: '4px',
                        fontFamily: 'inherit',
                        outline: 'none',
                        backgroundColor: '#fff',
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      style={{
                        flex: '1 1 45%',
                        minWidth: '200px',
                        padding: '14px 18px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#333',
                        border: '1px solid #e5e5e5',
                        borderRadius: '4px',
                        fontFamily: 'inherit',
                        outline: 'none',
                        backgroundColor: '#fff',
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontSize: '16px', fontWeight: 700, color: '#121212', display: 'block', marginBottom: '10px' }}>
                    Email <span style={{ color: '#e02b20' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Here"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#333',
                      border: '1px solid #e5e5e5',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#fff',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label style={{ fontSize: '16px', fontWeight: 700, color: '#121212', display: 'block', marginBottom: '10px' }}>
                    Subject <span style={{ color: '#e02b20' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#333',
                      border: '1px solid #e5e5e5',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#fff',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '16px', fontWeight: 700, color: '#121212', display: 'block', marginBottom: '10px' }}>
                    Message <span style={{ color: '#e02b20' }}>*</span>
                  </label>
                  <textarea
                    placeholder="Type Your Message Here"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#333',
                      border: '1px solid #e5e5e5',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      backgroundColor: '#fff',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    style={{
                      fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#ffffff',
                      backgroundColor: '#242424',
                      padding: '16px 40px',
                      borderRadius: '14px',
                      border: 'none',
                      letterSpacing: '1px',
                      cursor: 'pointer',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

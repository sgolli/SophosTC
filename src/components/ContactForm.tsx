'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              flex: '1 1 45%',
              minWidth: '200px',
              padding: '12px 18px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#666',
              border: '1px solid #e5e5e5',
              borderRadius: '4px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              flex: '1 1 45%',
              minWidth: '200px',
              padding: '12px 18px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#666',
              border: '1px solid #e5e5e5',
              borderRadius: '4px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          style={{
            padding: '12px 18px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#666',
            border: '1px solid #e5e5e5',
            borderRadius: '4px',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
        />
        <textarea
          placeholder="Message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{
            padding: '12px 18px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#666',
            border: '1px solid #e5e5e5',
            borderRadius: '4px',
            fontFamily: 'inherit',
            outline: 'none',
            resize: 'vertical',
            transition: 'border-color 0.3s',
          }}
        />
        <div>
          <button type="submit" className="et-button">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

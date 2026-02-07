'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-md bg-accent px-6 py-4 text-base font-semibold text-white hover:bg-accent/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-center text-green-600 font-medium">
          Thank you for your message! We'll get back to you soon.
        </p>
      )}
    </motion.form>
  );
}

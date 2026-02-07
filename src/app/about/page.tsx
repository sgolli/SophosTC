'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '94px' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Passionate about harnessing the power of technology to revolutionize finance, payments, and fintech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sophos Technology Consultancy is a leading UAE-based software development company that specializes in delivering cutting-edge solutions for the finance, payments, and fintech industries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Sophos Technology Consultancy, we are passionate about harnessing the power of technology to revolutionize the finance, payments, and fintech industries. With our team of skilled developers, industry experts, and strategic thinkers, we deliver cutting-edge software solutions that drive efficiency, innovation, and growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our client-centric approach ensures that we understand your unique challenges and objectives, allowing us to craft tailored solutions that exceed your expectations. As your trusted technology partner, we are committed to helping you navigate the digital landscape, seize new opportunities, and achieve long-term success in the ever-evolving world of finance and technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/hero.png"
                  alt="About SophosTC"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To provide tailored, innovative solutions that empower businesses to thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, continuously exploring emerging trends and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Client-Centric</h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with you to understand and exceed your expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from code quality to client communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of skilled developers, industry experts, and strategic thinkers brings deep knowledge across finance, payments, and fintech domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Core Banking Systems',
              'Payment Processing',
              'Blockchain & DeFi',
              'Mobile Banking',
              'API Development',
              'Cloud Architecture',
              'Security & Compliance',
              'AI & Machine Learning',
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-6 text-center border-2 border-transparent hover:border-accent transition-colors"
              >
                <p className="font-semibold text-primary">{expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Build the Future Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Let us help you leverage the power of innovation to achieve your goals and thrive in the digital age.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

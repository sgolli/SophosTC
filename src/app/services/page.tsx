'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import type { Metadata } from 'next';

export default function ServicesPage() {
  const services = [
    {
      title: 'Software Development for Financial Institutions',
      description:
        "Leverage our expertise to develop robust, scalable, and secure software solutions tailored to your financial institution's unique needs. From core banking systems to customer-facing applications, we deliver cutting-edge technology that streamlines operations, enhances efficiency, and improves customer satisfaction. Our solutions include core banking systems modernization, mobile and web applications, API development and integration, compliance and security implementations, and data analytics platforms.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Payment Gateway Integration & Optimization',
      description:
        'Seamlessly integrate payment gateways into your existing infrastructure or build custom payment solutions from scratch. Our team ensures smooth, secure, and reliable payment processing, while optimizing transaction flows and minimizing costs, enabling you to focus on growing your business. We support major payment providers including PayPal, Stripe, Authorize.net, and custom payment solutions. Our services include gateway integration, PCI DSS compliance, fraud detection implementation, transaction optimization, and multi-currency support.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Fintech Consulting and Innovation',
      description:
        'Stay at the forefront of the fintech revolution with our strategic consulting services. We provide in-depth market insights, identify emerging trends, and develop innovative strategies to help you seize new opportunities, disrupt traditional markets, and establish a competitive edge in the fintech space. Our consulting services cover digital transformation strategy, blockchain and cryptocurrency solutions, robo-advisory platforms, AI-powered portfolio management, regulatory compliance consulting, and market entry strategies.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Empowering finance through technology, innovation, and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          {/* Additional Service Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Industry Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team brings deep knowledge of finance, payments, and fintech industries, ensuring solutions that meet regulatory requirements and industry best practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Scalable Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build systems that grow with your business, from startups to enterprise-level organizations, ensuring long-term value and flexibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Security First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Security and compliance are at the core of everything we build. We implement industry-standard security measures and ensure regulatory compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Innovation-Driven</h3>
                <p className="text-gray-600 leading-relaxed">
                  We stay ahead of emerging technologies and trends, bringing innovative solutions that give you a competitive advantage in the market.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className="bg-primary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Let's discuss how our services can help you achieve your goals and drive sustainable growth.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

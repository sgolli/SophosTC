'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';

export default function HomePage() {
  const services = [
    {
      title: 'Software Development for Financial Institutions',
      description:
        "Leverage our expertise to develop robust, scalable, and secure software solutions tailored to your financial institution's unique needs. From core banking systems to customer-facing applications, we deliver cutting-edge technology that streamlines operations, enhances efficiency, and improves customer satisfaction.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Payment Gateway Integration & Optimization',
      description:
        'Seamlessly integrate payment gateways into your existing infrastructure or build custom payment solutions from scratch. Our team ensures smooth, secure, and reliable payment processing, while optimizing transaction flows and minimizing costs, enabling you to focus on growing your business.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Fintech Consulting and Innovation',
      description:
        'Stay at the forefront of the fintech revolution with our strategic consulting services. We provide in-depth market insights, identify emerging trends, and develop innovative strategies to help you seize new opportunities, disrupt traditional markets, and establish a competitive edge in the fintech space.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering finance through technology, innovation, and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Sophos Technology Consultancy, we are passionate about harnessing the power of technology to revolutionize the finance, payments, and fintech industries. With our team of skilled developers, industry experts, and strategic thinkers, we deliver cutting-edge software solutions that drive efficiency, innovation, and growth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our client-centric approach ensures that we understand your unique challenges and objectives, allowing us to craft tailored solutions that exceed your expectations. As your trusted technology partner, we are committed to helping you navigate the digital landscape, seize new opportunities, and achieve long-term success in the ever-evolving world of finance and technology.
              </p>
              <Link
                href="/about"
                className="inline-block text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary to-secondary rounded-lg p-12 text-white"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deep industry expertise in finance and fintech</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tailored solutions for your unique needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Client-centric approach</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Projects</h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              We've had the privilege of working on groundbreaking projects that showcase our expertise. From developing secure and scalable banking solutions to integrating seamless payment gateways, our portfolio demonstrates our commitment to delivering cutting-edge technology that drives success for our clients. Explore our featured projects to see how we've helped businesses like yours transform their operations, enhance customer experiences, and stay ahead in the rapidly evolving digital landscape.
            </p>
            <Link
              href="/projects"
              className="inline-block rounded-md bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
            >
              View Our Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Solutions driving your success
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Sophos Technology Consultancy empowers finance, payments, and fintech businesses with innovative software development, strategic consulting, and cloud expertise. Let our team help you navigate the digital landscape and achieve your goals. Contact us today to start your transformation!
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

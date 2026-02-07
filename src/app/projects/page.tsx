'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Custom Lending Platform for FasterLoans',
      description:
        'Developed a comprehensive lending platform for a fintech startup that automated loan processing workflows. Implemented machine learning algorithms for credit underwriting, enabling faster approval times and reduced operational costs. The platform handles thousands of loan applications per month with seamless integration to credit bureaus and payment processors.',
    },
    {
      title: 'Payment Gateway Integration for PayRight',
      description:
        'Integrated multiple payment gateways including PayPal, Stripe, and Authorize.net into a unified payment processing system. Implemented advanced fraud detection mechanisms and optimized transaction flows to reduce processing costs by 30%. The solution supports multi-currency transactions and provides real-time payment analytics.',
    },
    {
      title: 'Fintech Consulting for InvestorEdge',
      description:
        'Provided strategic consulting for digital transformation of a traditional investment firm. Developed roadmap for implementing robo-advisory services, blockchain-based asset management, and AI-powered portfolio optimization. Helped the client identify new market opportunities and establish a competitive position in the digital wealth management space.',
    },
    {
      title: 'Core Banking System Upgrade for BankPro',
      description:
        'Modernized legacy core banking infrastructure with a cloud-native, API-driven platform. Implemented microservices architecture enabling faster feature deployment and improved system reliability. The new system supports real-time transaction processing, mobile banking, and third-party integrations while maintaining regulatory compliance and data security.',
    },
    {
      title: 'Mobile Banking App for SecureBank',
      description:
        'Built a feature-rich mobile banking application with biometric authentication, real-time notifications, and seamless account management. Implemented advanced security features including device fingerprinting, transaction anomaly detection, and secure messaging. The app achieved 4.8+ star ratings and increased customer engagement by 65%.',
    },
    {
      title: 'Cloud Migration for PaymentPro',
      description:
        'Led the migration of payment processing infrastructure to AWS cloud, implementing cloud-native architecture with auto-scaling, high availability, and disaster recovery capabilities. Reduced infrastructure costs by 40% while improving system performance and reliability. Implemented DevOps practices for continuous deployment and monitoring.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ paddingTop: '94px' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Showcasing our expertise through groundbreaking projects that transform businesses and drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className=" bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Our Portfolio</h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We've had the privilege of working on groundbreaking projects that showcase our expertise. From developing secure and scalable banking solutions to integrating seamless payment gateways, our portfolio demonstrates our commitment to delivering cutting-edge technology that drives success for our clients. Explore our featured projects to see how we've helped businesses like yours transform their operations, enhance customer experiences, and stay ahead in the rapidly evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className=" bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Partnership Section */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className=" bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-lg p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Approach to Success
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Every project begins with understanding your unique challenges and objectives. We partner closely with our clients throughout the development lifecycle, ensuring transparency, collaboration, and alignment with your business goals. Our proven methodology combines agile development, industry best practices, and continuous innovation to deliver exceptional results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-gray-200">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">99%</div>
                <div className="text-gray-200">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '51px', paddingBottom: '51px' }} className=" bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Accelerate Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to start your transformation journey? Let's discuss how we can help you achieve your goals with innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

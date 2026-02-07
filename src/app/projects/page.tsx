import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Sophos Technology Consultancy LLC',
  description: 'Explore our portfolio of fintech, banking, and payment solutions.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Custom Lending Platform for FasterLoans',
      description:
        'Developed a comprehensive lending platform for a fintech startup, featuring automated loan processing and ML algorithms for underwriting decisions. The platform streamlines the entire lending lifecycle from application to disbursement.',
      tags: ['Fintech', 'Machine Learning', 'Automation'],
    },
    {
      title: 'Payment Gateway Integration for PayRight',
      description:
        'Integrated multiple payment gateways including PayPal, Stripe, and Authorize.net into a unified payment infrastructure. Implemented advanced fraud detection systems to protect transactions and minimize chargebacks.',
      tags: ['Payments', 'Integration', 'Security'],
    },
    {
      title: 'Fintech Consulting for InvestorEdge',
      description:
        'Provided strategic digital transformation consulting, including implementation of robo-advisory services, blockchain integration, and AI-powered portfolio management tools.',
      tags: ['Consulting', 'Blockchain', 'AI'],
    },
    {
      title: 'Core Banking System Upgrade for BankPro',
      description:
        'Modernized legacy core banking infrastructure to an API-driven, modular platform. Improved system reliability, reduced processing times, and enabled seamless third-party integrations.',
      tags: ['Banking', 'Modernization', 'API'],
    },
    {
      title: 'Mobile Banking App for SecureBank',
      description:
        'Designed and developed a feature-rich mobile banking application with biometric authentication, real-time notifications, and an intuitive user interface for both iOS and Android platforms.',
      tags: ['Mobile', 'Banking', 'Biometrics'],
    },
    {
      title: 'Cloud Migration for PaymentPro',
      description:
        'Successfully migrated on-premise payment processing infrastructure to AWS, implementing cloud-native architecture for improved scalability, reliability, and cost efficiency.',
      tags: ['Cloud', 'AWS', 'Migration'],
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section
        style={{
          backgroundColor: '#25e89d',
          padding: '76.8px 0',
        }}
      >
        <div className="et-container" style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
              fontSize: '65px',
              fontWeight: 900,
              lineHeight: '71.5px',
              color: '#000000',
              letterSpacing: '1.3px',
            }}
          >
            Our Projects
          </h1>
          <p className="tagline" style={{ marginTop: '20px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            We&apos;ve had the privilege of working on groundbreaking projects that showcase our expertise in finance, payments, and fintech.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-white">
        <div className="et-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent">
        <div className="et-container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Accelerate your business</h2>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '23.8px',
              color: '#121212',
              maxWidth: '600px',
              margin: '0 auto 30px',
            }}
          >
            Ready to transform your operations with cutting-edge technology? Let&apos;s discuss your next project.
          </p>
          <a href="/contact" className="et-button">
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}

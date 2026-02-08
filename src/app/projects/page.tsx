import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of fintech, banking, and payment solutions.',
};

const buttonStyle = {
  fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
  fontSize: '16px',
  fontWeight: 500 as const,
  color: '#ffffff',
  backgroundColor: '#242424',
  padding: '15px 45px 15px 35px',
  borderRadius: '14px',
  border: 'none',
  letterSpacing: '1px',
  display: 'inline-block' as const,
  textDecoration: 'none',
};

const containerStyle = {
  maxWidth: '1080px',
  width: '80%' as const,
  margin: '0 auto',
};

const pStyle = {
  fontSize: '16px',
  fontWeight: 500 as const,
  lineHeight: '28.8px',
  color: '#121212',
  marginBottom: '15px',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Custom Lending Platform for FasterLoans',
      paragraphs: [
        'Sophos Technology Consultancy developed a custom lending platform for FasterLoans, a rapidly growing fintech startup. Our team designed and implemented a scalable, secure, and user-friendly platform that automated the loan application, underwriting, and disbursement processes.',
        'By leveraging advanced data analytics and machine learning algorithms, we helped FasterLoans streamline their operations, reduce processing times, and improve loan approval rates, enabling them to serve more customers and drive business growth.',
      ],
    },
    {
      title: 'Payment Gateway Integration for PayRight',
      paragraphs: [
        'PayRight, a leading online payment processing company, approached Sophos Technology Consultancy to integrate multiple payment gateways into their existing e-commerce platform. Our experts seamlessly integrated and optimized gateways such as PayPal, Stripe, and Authorize.net, ensuring secure and reliable payment processing.',
        'We also implemented advanced fraud detection and prevention measures, helping PayRight minimize chargebacks and protect their merchants from fraudulent transactions.',
      ],
    },
    {
      title: 'Fintech Consulting for InvestorEdge',
      paragraphs: [
        "InvestorEdge, a traditional investment firm, sought Sophos Technology Consultancy's expertise in fintech consulting to navigate the digital transformation of the investment landscape. Our team conducted a comprehensive assessment of InvestorEdge's existing technology infrastructure and provided strategic recommendations for adopting cutting-edge fintech solutions.",
        'We helped them identify and implement robo-advisory tools, blockchain-based settlement systems, and AI-powered portfolio management algorithms, enabling InvestorEdge to stay competitive and offer innovative investment products to their clients.',
      ],
    },
    {
      title: 'Core Banking System Upgrade for BankPro',
      paragraphs: [
        "BankPro, a mid-sized regional bank, engaged Sophos Technology Consultancy to modernize their core banking system. Our team developed and implemented a flexible, modular, and API-driven core banking platform that integrated seamlessly with BankPro's existing systems.",
        "The new platform streamlined their banking operations, improved efficiency, and enabled faster product innovation. We also provided comprehensive training and support to ensure a smooth transition and help BankPro's staff leverage the full potential of the new system.",
      ],
    },
    {
      title: 'Mobile Banking App for SecureBank',
      paragraphs: [
        'SecureBank partnered with Sophos Technology Consultancy to develop a feature-rich and secure mobile banking app for their retail customers. Our mobile app development team designed and built an intuitive, user-friendly app that allowed customers to manage their accounts, transfer funds, pay bills, and apply for loans directly from their smartphones.',
        "We integrated advanced security features such as biometric authentication and data encryption to ensure the safety of customers' sensitive financial information.",
      ],
    },
    {
      title: 'Cloud Migration for PaymentPro',
      paragraphs: [
        'PaymentPro, a global payment processing company, chose Sophos Technology Consultancy to migrate their on-premise infrastructure to the cloud. Our cloud experts developed a comprehensive migration strategy, ensuring a smooth transition to Amazon Web Services (AWS).',
        "We redesigned PaymentPro's architecture to leverage cloud-native services such as AWS Lambda, Amazon S3, and Amazon RDS, resulting in improved scalability, resilience, and cost-efficiency. Post-migration, we provided ongoing optimization and support to help PaymentPro maximize the benefits of their cloud environment.",
      ],
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
          padding: '43px 0 58px 0',
          position: 'relative',
        }}
      >
        <div className="r-container" style={{ ...containerStyle, textAlign: 'center' as const }}>
          <h2
            style={{
              fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
              fontSize: '45px',
              fontWeight: 700,
              color: '#121212',
              textTransform: 'uppercase' as const,
              letterSpacing: '1px',
            }}
          >
            Projects
          </h2>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      {/* Our Portfolio section */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>Our Portfolio</h2>
          <p style={pStyle}>
            Through our collaborative approach and deep understanding of the unique needs of businesses in these sectors, we have built a reputation as a trusted technology partner. Our portfolio highlights the breadth and depth of our capabilities, featuring projects that range from small-scale prototypes to enterprise-level implementations.
          </p>
          <p style={pStyle}>
            As you explore our portfolio, you will see how we have helped our clients streamline their operations, enhance customer experiences, and drive innovation in the rapidly evolving world of financial technology. Each project represents a testament to our technical expertise, industry knowledge, and unwavering commitment to our clients&apos; success.
          </p>
        </div>
      </section>

      {/* Projects grid - 2 columns */}
      <section style={{ padding: '0 0 54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 30px' }}>
            {projects.map((project, i) => (
              <div key={i}>
                <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '15px' }}>{project.title}</h2>
                {project.paragraphs.map((p, j) => (
                  <p key={j} style={pStyle}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerate your business - green section */}
      <section style={{ backgroundColor: '#25e89d', padding: '150px 0 150px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>Accelerate your business</h2>
          <p style={pStyle}>We specialize in delivering cutting-edge software solutions and expert guidance.</p>
          <p style={pStyle}>Take the first step towards your digital transformation</p>
          <p style={{ ...pStyle, marginBottom: '25px' }}>Contact us now to discuss your project.</p>
          <Link href="/contact" style={buttonStyle}>
            Contact Us &nbsp;&gt;
          </Link>
        </div>
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>
    </>
  );
}

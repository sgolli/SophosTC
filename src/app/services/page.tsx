import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Software development, payment gateway integration, and fintech consulting services.',
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

export default function ServicesPage() {
  const serviceCards = [
    { title: 'Software Development', desc: 'We develop custom software solutions tailored to your unique needs in the finance, payments, and fintech industries. Our expert team creates robust, scalable, and secure applications that streamline your operations and enhance customer experiences.', bg: '#2be8a1' },
    { title: 'Payment Gateway Integration', desc: 'Our specialists seamlessly integrate and optimize payment gateways, ensuring secure, reliable, and cost-effective payment processing. We help you provide a smooth, hassle-free payment experience for your customers.', bg: '#6a6767' },
    { title: 'Fintech Consulting', desc: 'Stay ahead in the fintech revolution with our strategic consulting services. We provide in-depth market insights, identify emerging trends, and develop innovative strategies to help you seize opportunities and gain a competitive edge.', bg: '#272a49' },
    { title: 'Core Banking Systems', desc: 'We develop and implement cutting-edge core banking systems that centralize your operations, improve efficiency, and ensure seamless service delivery. Our solutions are designed to meet the specific needs of your financial institution.', bg: '#272a49' },
    { title: 'Mobile App Development', desc: 'Engage your customers and stay connected with custom mobile applications. We create intuitive, feature-rich apps that provide secure access to financial services, enhance user experiences, and foster loyalty.', bg: '#2be8a1' },
    { title: 'Cloud Migration and Optimization', desc: 'Our team helps you leverage the power of cloud computing to reduce costs, increase flexibility, and scale your financial services. We ensure a smooth migration process and optimize your cloud infrastructure for peak performance.', bg: '#6a6767' },
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
            Services
          </h2>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      {/* What We Do section */}
      <section style={{ padding: '0 0 54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px', marginTop: '54px' }}>What We Do</h2>
          <p style={pStyle}>
            At Sophos, we offer a comprehensive suite of services designed to empower businesses in the finance, payments, and fintech sectors. Our expert team delivers cutting-edge software development solutions, seamless payment gateway integration, and strategic fintech consulting to help you stay ahead in the digital landscape.
          </p>
          <p style={pStyle}>
            Our software development services cover a wide range of solutions, from core banking systems to customer-facing applications, ensuring that your technology infrastructure is robust, scalable, and secure. We also specialize in integrating and optimizing payment gateways, enabling smooth, secure, and reliable payment processing while minimizing costs.
          </p>
          <p style={pStyle}>
            In addition to our development services, we provide fintech consulting and innovation guidance. Our industry experts stay at the forefront of the fintech revolution, providing valuable insights, identifying emerging trends, and developing strategies to help you seize new opportunities and establish a competitive edge.
          </p>
          <p style={pStyle}>
            Whether you&apos;re looking to streamline your operations, enhance customer experiences, or drive growth through innovation, Sophos has the expertise and solutions to help you achieve your goals. Partner with us to leverage the power of technology and unlock your business&apos;s full potential in the dynamic world of finance and technology.
          </p>
        </div>
      </section>

      {/* Service cards grid */}
      <section style={{ padding: '0 0 54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {serviceCards.map((card, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: card.bg,
                  borderRadius: '15px',
                  padding: '30px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
                    fontSize: '21px',
                    fontWeight: 700,
                    lineHeight: '1.4em',
                    color: '#ffffff',
                    marginBottom: '15px',
                  }}
                >
                  {card.title}
                </h4>
                <div style={{ width: '60px', height: '3px', backgroundColor: 'rgba(255,255,255,0.4)', marginBottom: '15px' }} />
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '28.8px',
                    color: '#ffffff',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects section - green bg */}
      <section style={{ backgroundColor: '#25e89d', padding: '150px 0 150px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>Projects</h2>
          <p style={pStyle}>
            We&apos;ve had the privilege of working on groundbreaking projects that showcase our expertise. From developing secure and scalable banking solutions to integrating seamless payment gateways, our portfolio demonstrates our commitment to delivering cutting-edge technology that drives success for our clients.
          </p>
          <p style={{ ...pStyle, marginBottom: '25px' }}>
            Explore our featured projects to see how we&apos;ve helped businesses like yours transform their operations, enhance customer experiences, and stay ahead in the rapidly evolving digital landscape.
          </p>
          <Link href="/projects" style={buttonStyle}>
            Learn More &nbsp;&gt;
          </Link>
        </div>
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>
    </>
  );
}

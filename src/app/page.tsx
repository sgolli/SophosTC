import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';

export default function HomePage() {
  const services = [
    {
      title: 'Software Development for Financial Institutions',
      description:
        "Leverage our expertise to develop robust, scalable, and secure software solutions tailored to your financial institution's unique needs. From core banking systems to customer-facing applications, we deliver cutting-edge technology that streamlines operations, enhances efficiency, and improves customer satisfaction.",
      icon: (
        <svg width="48" height="48" fill="none" stroke="#25e89d" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Payment Gateway Integration & Optimization',
      description:
        'Seamlessly integrate payment gateways into your existing infrastructure or build custom payment solutions from scratch. Our team ensures smooth, secure, and reliable payment processing, while optimizing transaction flows and minimizing costs, enabling you to focus on growing your business.',
      icon: (
        <svg width="48" height="48" fill="none" stroke="#25e89d" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Fintech Consulting and Innovation',
      description:
        'Stay at the forefront of the fintech revolution with our strategic consulting services. We provide in-depth market insights, identify emerging trends, and develop innovative strategies to help you seize new opportunities, disrupt traditional markets, and establish a competitive edge in the fintech space.',
      icon: (
        <svg width="48" height="48" fill="none" stroke="#25e89d" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Services Section - gray bg */}
      <section className="section-gray">
        <div className="et-container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2>Services</h2>
            <p className="tagline" style={{ marginTop: '15px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              Empowering finance through technology, innovation, and expertise.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
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

      {/* About Section - white */}
      <section style={{ padding: '4% 0' }}>
        <div className="et-container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2>About Us</h2>
          </div>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '23.8px',
              color: '#666666',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            At Sophos Technology Consultancy, we are passionate about harnessing the power of technology to revolutionize the finance, payments, and fintech industries. With our team of skilled developers, industry experts, and strategic thinkers, we deliver cutting-edge software solutions that drive efficiency, innovation, and growth. Our client-centric approach ensures that we understand your unique challenges and objectives, allowing us to craft tailored solutions that exceed your expectations. As your trusted technology partner, we are committed to helping you navigate the digital landscape, seize new opportunities, and achieve long-term success in the ever-evolving world of finance and technology.
          </p>
        </div>
      </section>

      {/* Projects Section - white */}
      <section className="section-white">
        <div className="et-container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2>Projects</h2>
          </div>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '23.8px',
              color: '#666666',
              maxWidth: '800px',
              margin: '0 auto 30px',
              textAlign: 'center',
            }}
          >
            We&apos;ve had the privilege of working on groundbreaking projects that showcase our expertise. From developing secure and scalable banking solutions to integrating seamless payment gateways, our portfolio demonstrates our commitment to delivering cutting-edge technology that drives success for our clients. Explore our featured projects to see how we&apos;ve helped businesses like yours transform their operations, enhance customer experiences, and stay ahead in the rapidly evolving digital landscape.
          </p>
        </div>
      </section>

      {/* CTA Section - accent green */}
      <section className="section-accent">
        <div className="et-container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Solutions driving your success</h2>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '23.8px',
              color: '#121212',
              maxWidth: '800px',
              margin: '0 auto 30px',
            }}
          >
            Sophos Technology Consultancy empowers finance, payments, and fintech businesses with innovative software development, strategic consulting, and cloud expertise. Let our team help you navigate the digital landscape and achieve your goals. Contact us today to start your transformation!
          </p>
          <Link href="/contact" className="et-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Blog Teaser - white */}
      <section style={{ padding: '4% 0' }}>
        <div className="et-container" style={{ textAlign: 'center' }}>
          <h2>Our Blog</h2>
          <p
            className="tagline"
            style={{ marginTop: '15px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Stay updated with the latest insights in fintech, payments, and software development.
          </p>
          <div style={{ marginTop: '30px' }}>
            <Link href="/blog" className="et-button">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

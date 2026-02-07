import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';

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
  width: '80%',
  margin: '0 auto',
};

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
      <section style={{ backgroundColor: '#f2f2f2', padding: '51.2px 0' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2>Services</h2>
            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, Helvetica, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: '#121212',
                lineHeight: '28.8px',
                marginTop: '15px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Empowering finance through technology, innovation, and expertise.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
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
                bgColor={['#2be8a1', '#6a6767', '#272a49'][index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - white, 2 columns with image */}
      <section style={{ padding: '4% 0' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
            {/* Left - Text */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <h2 style={{ marginBottom: '20px' }}>About Us</h2>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '23.8px',
                  color: '#666666',
                  marginBottom: '15px',
                }}
              >
                At Sophos Technology Consultancy, we are passionate about harnessing the power of technology to revolutionize the finance, payments, and fintech industries. With our team of skilled developers, industry experts, and strategic thinkers, we deliver cutting-edge software solutions that drive efficiency, innovation, and growth.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '23.8px',
                  color: '#666666',
                  marginBottom: '25px',
                }}
              >
                Our client-centric approach ensures that we understand your unique challenges and objectives, allowing us to craft tailored solutions that exceed your expectations. As your trusted technology partner, we are committed to helping you navigate the digital landscape, seize new opportunities, and achieve long-term success in the ever-evolving world of finance and technology.
              </p>
              <Link href="/about" style={buttonStyle}>
                Learn More →
              </Link>
            </div>
            {/* Right - Image */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <Image
                src="/images/about.png"
                alt="About Sophos Technology Consultancy"
                width={1080}
                height={1080}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - green bg with diagonal top */}
      <section style={{ backgroundColor: '#25e89d', padding: '80px 0 51.2px 0', position: 'relative', clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
            {/* Left - Image */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <Image
                src="/images/projects.png"
                alt="Our Projects"
                width={1080}
                height={1080}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            {/* Right - Text */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <h2 style={{ marginBottom: '20px' }}>Projects</h2>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '23.8px',
                  color: '#666666',
                  marginBottom: '15px',
                }}
              >
                We&apos;ve had the privilege of working on groundbreaking projects that showcase our expertise. From developing secure and scalable banking solutions to integrating seamless payment gateways, our portfolio demonstrates our commitment to delivering cutting-edge technology that drives success for our clients.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '23.8px',
                  color: '#666666',
                  marginBottom: '25px',
                }}
              >
                Explore our featured projects to see how we&apos;ve helped businesses like yours transform their operations, enhance customer experiences, and stay ahead in the rapidly evolving digital landscape.
              </p>
              <Link href="/projects" style={buttonStyle}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - white, 2 columns with image */}
      <section style={{ padding: '4% 0' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
            {/* Left - Text */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <h2 style={{ marginBottom: '20px' }}>Solutions driving your success</h2>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '23.8px',
                  color: '#666666',
                  marginBottom: '15px',
                }}
              >
                Sophos Technology Consultancy empowers finance, payments, and fintech businesses with innovative software development, strategic consulting, and cloud expertise. Let our team help you navigate the digital landscape and achieve your goals.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '23.8px',
                  color: '#666666',
                  marginBottom: '25px',
                }}
              >
                Contact us today to start your transformation!
              </p>
              <Link href="/contact" style={buttonStyle}>
                Contact Us →
              </Link>
            </div>
            {/* Right - Image */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <Image
                src="/images/solutions.png"
                alt="Solutions"
                width={1080}
                height={1080}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - green bg */}
      <section style={{ backgroundColor: '#25e89d', padding: '51.2px 0' }}>
        <div style={{ ...containerStyle, textAlign: 'center' as const }}>
          <h2 style={{ marginBottom: '20px' }}>Our Blog</h2>
          <div style={{ marginBottom: '30px' }}>
            <Link href="/blog" style={buttonStyle}>
              View All →
            </Link>
          </div>
          {/* Blog post previews */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'left' as const, marginTop: '30px' }}>
            {[
              { title: 'Unlocking Business Potential Through Cutting-Edge Software Development', date: 'Mar 20, 2024', excerpt: "In today's fast-paced digital world, businesses in the finance, payments, and fintech industries..." },
              { title: 'Streamlining Payments: The Power of Seamless Payment Gateway Integration', date: 'Mar 7, 2024', excerpt: 'In the world of e-commerce and online transactions, a seamless payment experience is crucial for...' },
              { title: 'Unlocking the Power: Strategies for Cloud Migration and Optimization', date: 'Feb 21, 2024', excerpt: "In today's fast-paced, data-driven business environment, cloud computing has emerged as a..." },
            ].map((post, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '0px', overflow: 'hidden' }}>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, lineHeight: '1.4em', color: '#121212', marginBottom: '10px' }}>
                    {post.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#999', marginBottom: '10px' }}>
                    by sophostc | {post.date} |
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: '23.8px', color: '#666666' }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

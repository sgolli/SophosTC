import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import WaveDivider from '@/components/WaveDivider';

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
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Payment Gateway Integration & Optimization',
      description:
        'Seamlessly integrate payment gateways into your existing infrastructure or build custom payment solutions from scratch. Our team ensures smooth, secure, and reliable payment processing, while optimizing transaction flows and minimizing costs, enabling you to focus on growing your business.',
      icon: (
        <svg width="48" height="48" fill="none" stroke="#25e89d" viewBox="0 0 24 24" strokeWidth={1.5}>
          <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
        </svg>
      ),
    },
    {
      title: 'Fintech Consulting and Innovation',
      description:
        'Stay at the forefront of the fintech revolution with our strategic consulting services. We provide in-depth market insights, identify emerging trends, and develop innovative strategies to help you seize new opportunities, disrupt traditional markets, and establish a competitive edge in the fintech space.',
      icon: (
        <svg width="48" height="48" fill="none" stroke="#25e89d" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V2m0 4a4 4 0 100 8 4 4 0 000-8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m-4.5-3.5L5 15m11.5-2.5L19 15" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.5L6 5m9.5 2.5L18 5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20v-3a3 3 0 016 0v3" />
        </svg>
      ),
    },
  ];

  const blogPosts = [
    {
      title: 'Unlocking Business Potential Through Cutting-Edge Software Development',
      date: 'Jan 15, 2026',
      excerpt: "In today's fast-paced digital world, businesses in the finance, payments, and fintech industries...",
      image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/6.png?resize=400%2C250&ssl=1',
      url: 'https://sophostc.com/2024/03/unlocking-business-potential-through-cutting-edge-software-development/',
    },
    {
      title: 'Streamlining Payments: The Power of Seamless Payment Gateway Integration',
      date: 'Jan 5, 2026',
      excerpt: 'In the world of e-commerce and online transactions, a seamless payment experience is crucial for...',
      image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/5.png?resize=400%2C250&ssl=1',
      url: 'https://sophostc.com/2024/03/streamlining-payments/',
    },
    {
      title: 'Unlocking the Power: Strategies for Cloud Migration and Optimization',
      date: 'Dec 20, 2025',
      excerpt: "In today's fast-paced, data-driven business environment, cloud computing has emerged as a...",
      image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/1.png?resize=400%2C250&ssl=1',
      url: 'https://sophostc.com/2024/02/the-importance-of-lorem-ipsum/',
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Services Section - gray bg */}
      <section className="r-section" style={{ backgroundColor: '#f2f2f2', padding: '48px 0' }}>
        <div className="r-container" style={containerStyle}>
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
            className="r-grid-3"
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
        <div className="r-container" style={containerStyle}>
          <div className="r-flex-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
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
                Learn More &nbsp;&gt;
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

      {/* Projects Section - white */}
      <section className="r-section" style={{ padding: '48px 0' }}>
        <div className="r-container" style={containerStyle}>
          <div className="r-flex-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
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
                Learn More &nbsp;&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - green bg with diagonal top */}
      <section style={{ backgroundColor: '#25e89d', padding: '180px 0 120px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />
        <div className="r-container" style={containerStyle}>
          <div className="r-flex-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
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
                Contact Us &nbsp;&gt;
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
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>

      {/* Blog Section - green bg with dark cards */}
      <section style={{ backgroundColor: '#25e89d', padding: '160px 0 140px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />
        <div className="r-container" style={containerStyle}>
          {/* Header row: title left, button right */}
          <div className="r-blog-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' as const, gap: '15px' }}>
            <h2 style={{ margin: 0 }}>Our Blog</h2>
            <Link href="/blog" style={buttonStyle}>
              View All &nbsp;&gt;
            </Link>
          </div>
          {/* Blog cards */}
          <div className="r-blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'left' as const }}>
            {blogPosts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#242424', borderRadius: '15px', overflow: 'hidden' }}>
                {/* Thumbnail */}
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '20px' }}>
                  <p style={{
                    fontFamily: 'var(--font-roboto-mono), Roboto Mono, monospace',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#25e89d',
                    textTransform: 'uppercase' as const,
                    marginBottom: '10px',
                    letterSpacing: '1px',
                  }}>
                    by sophostc | {post.date} |
                  </p>
                  <h2 style={{ fontSize: '20px', fontWeight: 500, lineHeight: '1.4em', color: '#ffffff', marginBottom: '10px' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28.8px', color: '#cccccc', marginBottom: '15px' }}>
                    {post.excerpt}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#000000',
                      backgroundColor: '#ffffff',
                      borderRadius: '15px',
                      padding: '10px 15px',
                      textDecoration: 'none',
                      textTransform: 'uppercase' as const,
                      display: 'inline-block',
                    }}
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>
    </>
  );
}

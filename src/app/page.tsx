import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import WaveDivider from '@/components/WaveDivider';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts } from '@/data/blogPosts';

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

  const homeBlogPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Services Section - gray bg */}
      <section className="r-section" style={{ backgroundColor: '#f2f2f2', padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <ScrollReveal>
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
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
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
          </ScrollReveal>
        </div>
      </section>

      {/* About Section - white, text only */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <ScrollReveal>
          <h2 style={{ marginBottom: '20px' }}>About Us</h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '28.8px',
              color: '#121212',
              marginBottom: '15px',
            }}
          >
            At Sophos Technology Consultancy, we are passionate about harnessing the power of technology to revolutionize the finance, payments, and fintech industries. With our team of skilled developers, industry experts, and strategic thinkers, we deliver cutting-edge software solutions that drive efficiency, innovation, and growth.
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '28.8px',
              color: '#121212',
              marginBottom: '25px',
            }}
          >
            Our client-centric approach ensures that we understand your unique challenges and objectives, allowing us to craft tailored solutions that exceed your expectations. As your trusted technology partner, we are committed to helping you navigate the digital landscape, seize new opportunities, and achieve long-term success in the ever-evolving world of finance and technology.
          </p>
          <Link href="/about" style={buttonStyle}>
            Learn More &nbsp;&gt;
          </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section - green bg */}
      <section style={{ backgroundColor: '#25e89d', padding: '150px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />
        <div className="r-container" style={containerStyle}>
          <ScrollReveal>
          <div className="r-flex-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' as const }}>
            <div style={{ flex: '1 1 45%', minWidth: '280px' }}>
              <img src="/images/projects.png" alt="Projects" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
              <h2 style={{ marginBottom: '20px' }}>Projects</h2>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '28.8px',
                  color: '#121212',
                  marginBottom: '15px',
                }}
              >
                We&apos;ve had the privilege of working on groundbreaking projects that showcase our expertise. From developing secure and scalable banking solutions to integrating seamless payment gateways, our portfolio demonstrates our commitment to delivering cutting-edge technology that drives success for our clients.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '28.8px',
                  color: '#121212',
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
          </ScrollReveal>
        </div>
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>

      {/* Solutions Section - white */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <ScrollReveal>
          <h2 style={{ marginBottom: '20px' }}>Solutions driving your success</h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '28.8px',
              color: '#121212',
              marginBottom: '15px',
            }}
          >
            Sophos Technology Consultancy empowers finance, payments, and fintech businesses with innovative software development, strategic consulting, and cloud expertise. Let our team help you navigate the digital landscape and achieve your goals.
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '28.8px',
              color: '#121212',
              marginBottom: '25px',
            }}
          >
            Contact us today to start your transformation!
          </p>
          <Link href="/contact" style={buttonStyle}>
            Contact Us &nbsp;&gt;
          </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Section - green bg */}
      <section style={{ backgroundColor: '#25e89d', padding: '150px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />

        <div className="r-container" style={containerStyle}>
          {/* Header row: title left, button right */}
          <ScrollReveal>
          <div className="r-blog-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' as const, gap: '15px' }}>
            <h2 style={{ margin: 0 }}>Our Blog</h2>
            <Link href="/blog" style={buttonStyle}>
              View All &nbsp;&gt;
            </Link>
          </div>
          {/* Blog cards */}
          <div className="r-blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'left' as const }}>
            {homeBlogPosts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#242424', borderRadius: '15px', overflow: 'hidden' }}>
                {/* Thumbnail */}
                <Link href={`/blog/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                  />
                </Link>
                <div style={{ padding: '20px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 500, lineHeight: '1.4em', color: '#ffffff', marginBottom: '10px' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#ffffff', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#25e89d',
                    marginBottom: '10px',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '1px',
                    fontFamily: '"Roboto Mono", monospace',
                  }}>
                    by sophostc | {post.date} |
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28.8px', color: '#ffffff', marginBottom: '15px' }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#000000',
                      backgroundColor: '#ffffff',
                      borderRadius: '15px',
                      padding: '10px 15px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '1px',
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Older Entries link */}
          <div style={{ marginTop: '30px' }}>
            <Link href="/blog" style={{ color: '#2ea3f2', fontSize: '16px', textDecoration: 'none' }}>
              &laquo; Older Entries
            </Link>
          </div>
          </ScrollReveal>
        </div>
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>
    </>
  );
}

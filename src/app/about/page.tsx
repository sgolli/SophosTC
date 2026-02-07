import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sophos Technology Consultancy LLC',
  description: 'Learn about Sophos Technology Consultancy, a UAE-based software development company specializing in finance, payments, and fintech.',
};

export default function AboutPage() {
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
            About Us
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section-white">
        <div className="et-container">
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '23.8px',
              color: '#666666',
              marginBottom: '25px',
            }}
          >
            Sophos Technology Consultancy is a leading UAE-based software development company that specializes in delivering cutting-edge solutions for the finance, payments, and fintech industries.
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
        </div>
      </section>

      {/* Values / Expertise */}
      <section className="section-gray">
        <div className="et-container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Expertise</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              { title: 'Deep Industry Knowledge', desc: 'Years of experience in finance, payments, and fintech give us unparalleled insight into your challenges and opportunities.' },
              { title: 'Client-Centric Approach', desc: 'We listen, understand, and deliver solutions tailored to your specific needs and objectives.' },
              { title: 'Innovation-Driven', desc: 'We leverage the latest technologies and methodologies to deliver forward-thinking solutions that keep you ahead of the curve.' },
              { title: 'Proven Track Record', desc: 'Our portfolio of successful projects demonstrates our ability to deliver results consistently.' },
              { title: 'Scalable Solutions', desc: 'We build systems designed to grow with your business, ensuring long-term value and reliability.' },
              { title: 'Security First', desc: 'Every solution we develop prioritizes security and compliance, protecting your business and your customers.' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#121212',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: '23.8px', color: '#666666' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent">
        <div className="et-container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Let&apos;s work together</h2>
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
            Let us help you leverage the power of innovation to achieve your goals and thrive in the digital age.
          </p>
          <a href="/contact" className="et-button">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

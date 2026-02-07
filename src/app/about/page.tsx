import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sophos Technology Consultancy, a UAE-based software development company specializing in finance, payments, and fintech.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        style={{
          background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
          padding: '38.4px 0 51.2px',
        }}
      >
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto",textAlign:"center"}}>
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
      <section style={{padding:"51.2px 0",backgroundColor:"#ffffff"}}>
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto"}}>
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
      <section style={{padding:"51.2px 0",backgroundColor:"#f2f2f2"}}>
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto"}}>
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
      <section style={{padding:"51.2px 0",backgroundColor:"#25e89d"}}>
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto",textAlign:"center"}}>
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
          <a href="/contact" style={{fontFamily:"var(--font-roboto),Roboto,sans-serif",fontSize:"16px",fontWeight:500,color:"#fff",backgroundColor:"#242424",padding:"15px 45px 15px 35px",borderRadius:"14px",border:"none",letterSpacing:"1px",display:"inline-block",textDecoration:"none"}}>
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sophos Technology Consultancy, a UAE-based software development company specializing in finance, payments, and fintech.',
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

export default function AboutPage() {
  const blogPosts = [
    { title: 'Unlocking Business Potential Through Cutting-Edge Software Development', date: 'Mar 20, 2024', excerpt: "In today's fast-paced digital world, businesses in the finance, payments, and fintech industries...", image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/6.png?resize=400%2C250&ssl=1', url: 'https://sophostc.com/2024/03/unlocking-business-potential-through-cutting-edge-software-development/' },
    { title: 'Streamlining Payments: The Power of Seamless Payment Gateway Integration', date: 'Mar 7, 2024', excerpt: 'In the world of e-commerce and online transactions, a seamless payment experience is crucial for...', image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/5.png?resize=400%2C250&ssl=1', url: 'https://sophostc.com/2024/03/streamlining-payments/' },
    { title: 'Unlocking the Power: Strategies for Cloud Migration and Optimization', date: 'Feb 21, 2024', excerpt: "In today's fast-paced, data-driven business environment, cloud computing has emerged as a...", image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/1.png?resize=400%2C250&ssl=1', url: 'https://sophostc.com/2024/02/the-importance-of-lorem-ipsum/' },
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
            Who Are We
          </h2>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      {/* About Us section */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>About Us</h2>
          <p style={pStyle}>
            Sophos Technology Consultancy is a leading UAE-based software development company that specializes in delivering cutting-edge solutions for the finance, payments, and fintech industries. With a team of skilled developers, industry experts, and strategic thinkers, we are dedicated to helping businesses harness the power of technology to drive efficiency, innovation, and growth.
          </p>
          <p style={pStyle}>
            Our mission is to provide our clients with tailored, innovative solutions that address their unique challenges and objectives. We combine deep industry knowledge with technical expertise to create robust, scalable, and secure applications that streamline operations, enhance customer experiences, and unlock new opportunities.
          </p>
          <p style={pStyle}>
            At Sophos, we stay at the forefront of the rapidly evolving digital landscape, constantly exploring emerging trends and technologies to help our clients stay ahead of the curve. Our client-centric approach ensures that we deliver solutions that exceed expectations and drive long-term success.
          </p>
          <p style={pStyle}>
            With a proven track record of delivering successful projects for businesses in the finance, payments, and fintech sectors, Sophos is your trusted partner for navigating the complex world of financial technology.
          </p>
          <p style={pStyle}>
            Let us help you leverage the power of innovation to achieve your goals and thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Unlock your potential - green section */}
      <section style={{ backgroundColor: '#25e89d', padding: '150px 0 150px 0', position: 'relative' }}>
        <WaveDivider position="top" shape="zigzag" fill="#ffffff" height={100} />
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>Unlock your potential</h2>
          <p style={pStyle}>
            Our innovative solutions and strategic guidance empower businesses to stay ahead of the curve. Don&apos;t miss out on the opportunity to transform your operations &ndash; contact us today to start your journey.
          </p>
          <Link href="/contact" style={buttonStyle}>
            Contact Us &nbsp;&gt;
          </Link>
        </div>
        <WaveDivider position="bottom" shape="diagonal" fill="#ffffff" height={100} />
      </section>

      {/* Our Journey section */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>Our Journey</h2>
          <p style={pStyle}>
            Since our founding, Sophos Technology Consultancy has been dedicated to revolutionizing the finance, payments, and fintech industries through innovative technology solutions. With a team of experienced professionals, we have consistently pushed boundaries and delivered cutting-edge applications that help businesses unlock their full potential.
          </p>
          <p style={{ ...pStyle, marginBottom: '25px' }}>
            As we have grown, so too has our commitment to our clients&apos; success. We have built lasting partnerships by understanding their unique challenges and delivering solutions that exceed expectations. Looking ahead, we remain passionate about empowering businesses through technology and driving innovation in the ever-evolving digital landscape.
          </p>
          <Link href="/contact" style={buttonStyle}>
            Learn More &nbsp;&gt;
          </Link>
        </div>
      </section>

      {/* Our Blog section */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' as const, gap: '15px' }}>
            <h2 style={{ margin: 0 }}>Our Blog</h2>
            <Link href="/blog" style={buttonStyle}>
              View All &nbsp;&gt;
            </Link>
          </div>
          <div className="r-blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {blogPosts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#242424', borderRadius: '15px', overflow: 'hidden' }}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                </a>
                <div style={{ padding: '20px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 500, lineHeight: '1.4em', color: '#ffffff', marginBottom: '10px' }}>
                    <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>{post.title}</a>
                  </h2>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#25e89d', marginBottom: '10px', textTransform: 'uppercase' as const, letterSpacing: '1px', fontFamily: '"Roboto Mono", monospace' }}>
                    by <a href="https://sophostc.com/author/sophostc/" target="_blank" rel="noopener noreferrer" style={{ color: '#25e89d', textDecoration: 'none' }}>sophostc</a> | {post.date} |
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28.8px', color: '#ffffff', marginBottom: '15px' }}>{post.excerpt}</p>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', fontWeight: 700, color: '#000000', backgroundColor: '#ffffff', borderRadius: '15px', padding: '10px 15px', textDecoration: 'none', display: 'inline-block', textTransform: 'uppercase' as const, letterSpacing: '1px', fontFamily: '"Roboto Mono", monospace' }}>read more</a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '30px' }}>
            <a href="https://sophostc.com/about-us/page/2/?et_blog" style={{ color: '#2ea3f2', fontSize: '16px', textDecoration: 'none' }}>&laquo; Older Entries</a>
          </div>
        </div>
      </section>
    </>
  );
}

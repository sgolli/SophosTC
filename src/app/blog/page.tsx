import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Blog | Sophos Technology Consultancy LLC',
  description: 'Latest insights on fintech, payments, and software development from Sophos Technology Consultancy.',
};

const posts = [
  {
    title: 'Unlocking Business Potential Through Cutting-Edge Software Development',
    excerpt: "In today's fast-paced digital world, businesses in the finance, payments, and fintech industries...",
    date: 'Mar 20, 2024',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/6.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/03/unlocking-business-potential-through-cutting-edge-software-development/',
  },
  {
    title: 'Streamlining Payments: The Power of Seamless Payment Gateway Integration',
    excerpt: 'In the world of e-commerce and online transactions, a seamless payment experience is crucial for...',
    date: 'Mar 7, 2024',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/5.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/03/streamlining-payments/',
  },
  {
    title: 'Unlocking the Power: Strategies for Cloud Migration and Optimization',
    excerpt: "In today's fast-paced, data-driven business environment, cloud computing has emerged as a...",
    date: 'Feb 21, 2024',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/1.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/02/the-importance-of-lorem-ipsum/',
  },
  {
    title: 'Navigating the Fintech Revolution: The Value of Expert Fintech Consulting',
    excerpt: 'The world of finance is undergoing a rapid transformation, driven by the rise of financial...',
    date: 'Feb 2, 2024',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/4.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/02/navigating-the-fintech-revolution/',
  },
  {
    title: 'Transforming Banking Operations: The Benefits of Modern Core Banking Systems',
    excerpt: "In today's fast-paced, digital-first world, traditional banking institutions face increasing...",
    date: 'Jan 15, 2024',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/3.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/01/transforming-banking-operations/',
  },
  {
    title: 'Empowering Finance on the Go: The Rise of Mobile App Development',
    excerpt: 'In the era of smartphones and tablets, mobile apps have become an essential tool for businesses in...',
    date: 'Jan 11, 2024',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/2.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/01/empowering-finance-on-the-go/',
  },
];

const containerStyle = {
  maxWidth: '1080px',
  width: '80%' as const,
  margin: '0 auto',
};

export default function BlogPage() {
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
            Blog
          </h2>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      {/* Blog posts grid */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <div className="r-blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {posts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#242424', borderRadius: '15px', overflow: 'hidden' }}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                  />
                </a>
                <div style={{ padding: '20px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 500, lineHeight: '1.4em', color: '#ffffff', marginBottom: '10px' }}>
                    <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                      {post.title}
                    </a>
                  </h2>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#25e89d', marginBottom: '10px', textTransform: 'uppercase' as const, letterSpacing: '1px', fontFamily: '"Roboto Mono", monospace' }}>
                    by <a href="https://sophostc.com/author/sophostc/" target="_blank" rel="noopener noreferrer" style={{ color: '#25e89d', textDecoration: 'none' }}>sophostc</a> | {post.date} |
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28.8px', color: '#ffffff', marginBottom: '15px' }}>
                    {post.excerpt}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

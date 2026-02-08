import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Blog | Sophos Technology Consultancy LLC',
  description: 'Latest insights on fintech, payments, and software development from Sophos Technology Consultancy.',
};

const posts = [
  {
    title: 'Unlocking Business Potential Through Cutting-Edge Software Development',
    excerpt: 'In today\'s fast-paced digital world, businesses in the finance, payments, and fintech industries need to stay ahead of the curve with innovative software solutions.',
    date: 'Jan 15, 2026',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/6.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/03/unlocking-business-potential-through-cutting-edge-software-development/',
  },
  {
    title: 'Streamlining Payments: The Power of Seamless Payment Gateway Integration',
    excerpt: 'In the world of e-commerce and online transactions, a seamless payment experience is crucial for customer satisfaction and business growth.',
    date: 'Jan 5, 2026',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/5.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/03/streamlining-payments/',
  },
  {
    title: 'Unlocking the Power: Strategies for Cloud Migration and Optimization',
    excerpt: 'In today\'s fast-paced, data-driven business environment, cloud computing has emerged as a transformative force for organizations of all sizes.',
    date: 'Dec 20, 2025',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/1.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/02/the-importance-of-lorem-ipsum/',
  },
  {
    title: 'Navigating the Fintech Revolution: The Value of Expert Fintech Consulting',
    excerpt: 'The world of finance is undergoing a rapid transformation, driven by the rise of financial technology and the need for digital-first solutions.',
    date: 'Dec 15, 2025',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/4.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/02/navigating-the-fintech-revolution/',
  },
  {
    title: 'Transforming Banking Operations: The Benefits of Modern Core Banking Systems',
    excerpt: 'In today\'s fast-paced, digital-first world, traditional banking institutions face increasing pressure to modernize their operations.',
    date: 'Dec 10, 2025',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/3.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/01/transforming-banking-operations/',
  },
  {
    title: 'Empowering Finance on the Go: The Rise of Mobile App Development',
    excerpt: 'Mobile technology is reshaping the financial services landscape, enabling customers to manage their finances anytime, anywhere.',
    date: 'Dec 1, 2025',
    image: 'https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/2.png?resize=400%2C250&ssl=1',
    url: 'https://sophostc.com/2024/01/empowering-finance-on-the-go/',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="r-hero"
        style={{
          background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
          padding: '38.4px 0 51.2px',
          position: 'relative',
        }}
      >
        <div className="r-container" style={{ maxWidth: '1080px', width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif', fontSize: '65px', fontWeight: 900, lineHeight: '71.5px', color: '#000000', letterSpacing: '1.3px', textTransform: 'uppercase' }}>
            Blog
          </h1>
        </div>
        <WaveDivider position="bottom" shape="zigzag" fill="#ffffff" height={35} />
      </section>

      {/* Blog posts grid */}
      <section style={{ padding: '51.2px 0', backgroundColor: '#ffffff' }}>
        <div className="r-container" style={{ maxWidth: '1080px', width: '80%', margin: '0 auto' }}>
          <div className="r-blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {posts.map((post, index) => (
              <article key={index} style={{ backgroundColor: '#ffffff', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                  />
                </a>
                <div style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif', fontSize: '18px', fontWeight: 700, color: '#121212', lineHeight: '1.4em', marginBottom: '16px' }}>
                    <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: '#121212', textDecoration: 'none' }}>
                      {post.title}
                    </a>
                  </h2>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#999999', fontFamily: 'monospace', marginTop: 'auto' }}>
                    by sophostc | {post.date} |
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Sophos Technology Consultancy LLC',
  description: 'Latest insights on fintech, payments, and software development from Sophos Technology Consultancy.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of Digital Payments in the UAE',
      excerpt: 'Exploring how digital payment solutions are transforming the financial landscape in the United Arab Emirates and what businesses need to prepare for.',
      date: 'March 15, 2024',
    },
    {
      title: 'Why Fintech Companies Need Custom Software Solutions',
      excerpt: 'Off-the-shelf solutions can only take you so far. Discover why custom software development is essential for fintech companies looking to scale.',
      date: 'March 8, 2024',
    },
    {
      title: 'Securing Payment Gateways: Best Practices for 2024',
      excerpt: 'A comprehensive guide to implementing robust security measures in payment gateway integrations to protect your business and customers.',
      date: 'February 28, 2024',
    },
    {
      title: 'Cloud Migration Strategies for Financial Institutions',
      excerpt: 'Step-by-step approaches to successfully migrating financial systems to the cloud while maintaining compliance and security.',
      date: 'February 20, 2024',
    },
    {
      title: 'AI and Machine Learning in Modern Banking',
      excerpt: 'How artificial intelligence and machine learning are revolutionizing banking operations, from fraud detection to personalized customer experiences.',
      date: 'February 12, 2024',
    },
    {
      title: 'The Rise of Open Banking APIs',
      excerpt: 'Understanding the impact of open banking and how API-driven architectures are creating new opportunities in the financial services sector.',
      date: 'February 5, 2024',
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section
        style={{
          backgroundColor: '#25e89d',
          padding: '76.8px 0',
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
            Our Blog
          </h1>
          <p  style={{ marginTop: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Insights and updates from the world of fintech, payments, and software development.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section style={{padding:"51.2px 0",backgroundColor:"#ffffff"}}>
        <div style={{maxWidth:"1080px",width:"80%",margin:"0 auto"}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {posts.map((post, index) => (
              <article
                key={index}
                style={{
                  borderBottom: index < posts.length - 1 ? '1px solid #e5e5e5' : 'none',
                  paddingBottom: '30px',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#25e89d',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  {post.date}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
                    fontSize: '26px',
                    fontWeight: 700,
                    color: '#121212',
                    lineHeight: '1.3em',
                    marginBottom: '10px',
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '23.8px',
                    color: '#666666',
                    marginBottom: '10px',
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  style={{
                    color: '#2ea3f2',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

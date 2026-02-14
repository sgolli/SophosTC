import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog | Sophos Technology Consultancy LLC',
  description: 'Latest insights on fintech, payments, and software development from Sophos Technology Consultancy.',
};

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
            {blogPosts.map((post, i) => (
              <div key={i} style={{ backgroundColor: '#242424', borderRadius: '15px', overflow: 'hidden' }}>
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
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#25e89d', marginBottom: '10px', textTransform: 'uppercase' as const, letterSpacing: '1px', fontFamily: '"Roboto Mono", monospace' }}>
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
        </div>
      </section>
    </>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import WaveDivider from '@/components/WaveDivider';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sophos Technology Consultancy LLC`,
    description: post.excerpt,
  };
}

const containerStyle = {
  maxWidth: '1080px',
  width: '80%' as const,
  margin: '0 auto',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

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

      {/* Article */}
      <section style={{ padding: '54px 0' }}>
        <div className="r-container" style={containerStyle}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '30px' }}
          />
          <h1
            style={{
              fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              color: '#121212',
              marginBottom: '10px',
              lineHeight: '1.3',
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#25e89d',
              marginBottom: '30px',
              textTransform: 'uppercase' as const,
              letterSpacing: '1px',
              fontFamily: '"Roboto Mono", monospace',
            }}
          >
            by sophostc | {post.date}
          </p>
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '28.8px',
                color: '#666666',
                marginBottom: '20px',
              }}
            >
              {paragraph}
            </p>
          ))}
          <div style={{ marginTop: '40px' }}>
            <Link
              href="/blog"
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#ffffff',
                backgroundColor: '#242424',
                borderRadius: '14px',
                padding: '12px 24px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              &laquo; Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

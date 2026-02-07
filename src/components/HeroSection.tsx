'use client';

import Link from 'next/link';
import Image from 'next/image';

const buttonStyle = {
  fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
  fontSize: '16px',
  fontWeight: 500 as const,
  color: '#ffffff',
  backgroundColor: '#242424',
  padding: '15px 45px 15px 35px',
  borderRadius: '14px',
  border: '0px solid #ffffff',
  letterSpacing: '1px',
  display: 'inline-block' as const,
  textDecoration: 'none',
};

export default function HeroSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
        padding: '38.4px 0 51.2px 0',
      }}
    >
      <div style={{ maxWidth: '1080px', width: '80%', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap' as const,
          }}
        >
          {/* Left Content - 55% */}
          <div style={{ flex: '1 1 55%', minWidth: '300px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
                fontSize: '65px',
                fontWeight: 900,
                lineHeight: '71.5px',
                color: '#000000',
                letterSpacing: '1.3px',
                marginBottom: '20px',
              }}
            >
              Welcome to Sophos
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, Helvetica, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '28.8px',
                color: '#121212',
                marginBottom: '15px',
              }}
            >
              Your premier partner for cutting-edge software solutions in finance, payments, and fintech.
            </p>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '23.8px',
                color: '#666666',
                marginBottom: '30px',
              }}
            >
              With our deep industry expertise and innovative approach, we empower businesses to stay ahead in the rapidly evolving digital landscape. Discover how our tailored solutions can transform your operations, enhance customer experiences, and drive sustainable growth.
            </p>
            <Link href="/contact" style={buttonStyle}>
              Get Started
            </Link>
          </div>

          {/* Right Image - 45% */}
          <div style={{ flex: '1 1 40%', minWidth: '280px' }}>
            <Image
              src="/images/hero.png"
              alt="Fintech Innovation"
              width={2160}
              height={2160}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

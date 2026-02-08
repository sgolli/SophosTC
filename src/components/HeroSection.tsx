'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

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
      className="r-hero"
      style={{
        background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
        padding: '86px 0 144px 0',
        position: 'relative',
      }}
    >
      <div className="r-container" style={{ maxWidth: '1080px', width: '80%', margin: '0 auto' }}>
        <div
          className="r-flex-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap' as const,
          }}
        >
          {/* Left Content - 55% */}
          <div style={{ flex: '1 1 55%', minWidth: '300px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                  marginBottom: '15px',
                }}
              >
                With our deep industry expertise and innovative approach, we empower businesses to stay ahead in the rapidly evolving digital landscape.
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
                Discover how our tailored solutions can transform your operations, enhance customer experiences, and drive sustainable growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" style={buttonStyle}>
                Get Started &nbsp;&gt;
              </Link>
            </motion.div>
          </div>

          {/* Right Image - 45% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: '1 1 40%', minWidth: '280px', overflow: 'visible' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ transform: 'scale(1.15) translateY(-18%)' }}
            >
              <Image
                src="/images/hero.png"
                alt="Fintech Innovation"
                width={2160}
                height={2160}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <WaveDivider position="bottom" shape="zigzag" fill="#f2f2f2" height={90} />
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(1deg, rgb(142, 235, 226) 0%, rgb(37, 232, 157) 100%)',
        paddingTop: '76.8px',
        paddingBottom: '128px'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1080px', width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 
              style={{ 
                fontFamily: 'var(--font-roboto)', 
                fontSize: '65px', 
                fontWeight: 900, 
                lineHeight: '71.5px',
                color: '#000000',
                marginBottom: '0px'
              }}
            >
              Welcome to Sophos
            </h1>
            <p className="text-xl md:text-2xl mb-6" style={{ color: '#000000', marginTop: '20px' }}>
              Your premier partner for cutting-edge software solutions in finance, payments, and fintech.
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#000000' }}>
              With our deep industry expertise and innovative approach, we empower businesses to stay ahead in the rapidly evolving digital landscape. Discover how our tailored solutions can transform your operations, enhance customer experiences, and drive sustainable growth.
            </p>
            <Link
              href="/contact"
              className="inline-block transition-colors"
              style={{
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '1px',
                padding: '15px 45px 15px 35px',
                backgroundColor: '#242424',
                color: '#ffffff',
                borderRadius: '14px',
                border: '0px solid #ffffff',
                fontFamily: 'var(--font-roboto)'
              }}
            >
              Get Started
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="https://i0.wp.com/sophostc.com/wp-content/uploads/2024/03/Untitled-design-5-1.png"
                alt="Fintech Innovation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Welcome to Sophos
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Your premier partner for cutting-edge software solutions in finance, payments, and fintech.
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed">
              With our deep industry expertise and innovative approach, we empower businesses to stay ahead in the rapidly evolving digital landscape. Discover how our tailored solutions can transform your operations, enhance customer experiences, and drive sustainable growth.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
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
                src="/images/hero.png"
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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white" 
      style={{ 
        height: '94px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px'
      }}
    >
      <div className="mx-auto h-full" style={{ maxWidth: '1080px', paddingLeft: '4%', paddingRight: '4%' }}>
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Sophos Technology Consultancy LLC"
              width={193}
              height={85}
              style={{ maxHeight: '90%', width: 'auto', height: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-80 transition-opacity"
                style={{ 
                  fontFamily: 'var(--font-roboto-flex)',
                  fontSize: '18px', 
                  fontWeight: 600, 
                  letterSpacing: '1px',
                  color: '#333333'
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--font-roboto)',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '1px',
                padding: '15px 45px 15px 35px',
                backgroundColor: 'rgb(36, 36, 36)',
                color: '#ffffff',
                borderRadius: '14px',
                border: '0px solid #ffffff'
              }}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mx-4 mt-2 rounded-md text-center text-sm font-semibold transition-colors"
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'rgb(36, 36, 36)',
                  color: '#ffffff'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        height: '94px',
        backgroundColor: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          width: '80%',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
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
        <nav
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: '22px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-roboto-flex), "Roboto Flex", Helvetica, Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '1px',
                color: '#333333',
                textDecoration: 'none',
                padding: '0 0 0 0',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2ea3f2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="et-button"
            style={{ marginLeft: '15px' }}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            padding: '8px',
            color: '#333',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden"
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e5e5e5',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '10px 0',
                fontFamily: 'var(--font-roboto-flex)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#333333',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="et-button"
            style={{ display: 'inline-block', marginTop: '10px' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}

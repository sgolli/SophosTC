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
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="SophosTC Logo"
              width={180}
              height={79}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
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
                className="mx-4 mt-2 rounded-md bg-accent px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
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

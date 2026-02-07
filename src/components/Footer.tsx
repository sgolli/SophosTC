import Link from 'next/link';
import Image from 'next/image';

const containerStyle = {
  maxWidth: '1080px',
  width: '80%',
  margin: '0 auto',
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '60px 0 0 0' }}>
      <div className="r-container" style={containerStyle}>
        <div className="r-footer-cols" style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '40px', justifyContent: 'space-between' }}>
          {/* Column 1: Logo & Description */}
          <div className="r-footer-logo-col" style={{ flex: '1 1 350px', maxWidth: '400px' }}>
            <Image
              src="/images/logo.png"
              alt="Sophos Technology Consultancy LLC"
              width={193}
              height={85}
              style={{ width: 'auto', height: 'auto', opacity: 0.5, marginBottom: '20px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: '23.8px', color: '#474747' }}>
              Sophos Technology Consultancy LLC is a UAE-based software development company specializing in cutting-edge solutions for the finance, payments, and fintech industries.
            </p>
          </div>

          {/* Column 2: Menu */}
          <div style={{ flex: '0 1 180px' }}>
            <h4
              style={{
                fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#25e89d',
                marginBottom: '20px',
              }}
            >
              Menu
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: '10px' }}>
                  <Link href={link.href} style={{ color: '#474747', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div style={{ flex: '0 1 180px' }}>
            <h4
              style={{
                fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#25e89d',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms of Service' },
                { href: '#', label: 'Disclaimer' },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: '10px' }}>
                  <Link href={link.href} style={{ color: '#474747', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e0e0e0', marginTop: '40px', paddingTop: '25px', paddingBottom: '25px' }}>
          <div className="r-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: '15px' }}>
            <p style={{ fontSize: '14px', color: '#474747' }}>
              All Rights Reserved | <Link href="/" style={{ color: '#000', fontWeight: 600, textDecoration: 'none' }}>Sophos Technology Consultancy LLC</Link> | © {new Date().getFullYear()}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* GitHub */}
              <a href="https://github.com/sophostc" target="_blank" rel="noopener noreferrer" className="r-social-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#444', color: '#fff' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* X/Twitter */}
              <a href="https://twitter.com/sophostc" target="_blank" rel="noopener noreferrer" className="r-social-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#444', color: '#fff' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/sophostc" target="_blank" rel="noopener noreferrer" className="r-social-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#444', color: '#fff' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

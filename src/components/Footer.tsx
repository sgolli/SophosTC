import Link from 'next/link';
import Image from 'next/image';

const containerStyle = {
  maxWidth: '1080px',
  width: '80%',
  margin: '0 auto',
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#272a49', padding: '51.2px 0', color: '#ffffff' }}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '40px', justifyContent: 'space-between' }}>
          {/* Column 1 */}
          <div style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <Image
              src="/images/logo.png"
              alt="Sophos Technology Consultancy LLC"
              width={193}
              height={85}
              style={{ width: 'auto', height: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '15px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: '23.8px', color: 'rgba(255,255,255,0.7)' }}>
              Your premier partner for cutting-edge software solutions in finance, payments, and fintech.
            </p>
          </div>

          {/* Column 2 */}
          <div style={{ flex: '0 1 200px' }}>
            <h3 style={{ fontFamily: 'var(--font-roboto)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '15px' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: '8px' }}>
                  <Link href={link.href} style={{ color: '#2ea3f2', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div style={{ flex: '0 1 250px' }}>
            <h3 style={{ fontFamily: 'var(--font-roboto)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '15px' }}>
              Get In Touch
            </h3>
            <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: '23.8px', color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}>
              UAE-based software development company specializing in finance, payments, and fintech solutions.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://github.com/sophostc" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/sophostc" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '30px', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Sophos Technology Consultancy LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

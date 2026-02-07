'use client';

import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        padding: '30px',
        textAlign: 'left',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Icon */}
      <div
        style={{
          marginBottom: '20px',
          color: '#25e89d',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h4
        style={{
          fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '1.4em',
          color: '#121212',
          marginBottom: '10px',
        }}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '23.8px',
          color: '#666666',
        }}
      >
        {description}
      </p>

      {/* Arrow link */}
      <div style={{ marginTop: '20px' }}>
        <span style={{ color: '#25e89d', fontSize: '24px', cursor: 'pointer' }}>→</span>
      </div>
    </div>
  );
}

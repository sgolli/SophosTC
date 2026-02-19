'use client';

import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  bgColor?: string;
}

export default function ServiceCard({ icon, title, description, bgColor = '#2be8a1' }: ServiceCardProps) {
  const isLight = bgColor === '#2be8a1';
  const textColor = isLight ? '#121212' : '#ffffff';
  const iconColor = isLight ? '#121212' : '#25e89d';
  const descColor = isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.85)';
  const dividerColor = isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.4)';

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: '15px',
        padding: '100px 30px 30px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: '20px', color: iconColor }}>
        {icon}
      </div>

      {/* Title */}
      <h4
        style={{
          fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
          fontSize: '21px',
          fontWeight: 700,
          lineHeight: '1.4em',
          color: textColor,
          marginBottom: '20px',
        }}
      >
        {title}
      </h4>

      {/* Divider line */}
      <div
        style={{
          width: '60px',
          height: '3px',
          backgroundColor: dividerColor,
          marginBottom: '20px',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '23.8px',
          color: descColor,
        }}
      >
        {description}
      </p>

      {/* Arrow */}
      <div style={{ marginTop: '25px' }}>
        <svg width="32" height="32" fill="none" stroke={textColor} strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}

'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '4px',
        padding: '30px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.1)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <h4
        style={{
          fontFamily: 'var(--font-roboto), Roboto, Helvetica, Arial, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '1.4em',
          color: '#121212',
          marginBottom: '15px',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '23.8px',
          color: '#666666',
          marginBottom: '20px',
        }}
      >
        {description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#25e89d',
              backgroundColor: 'rgba(37, 232, 157, 0.1)',
              padding: '4px 12px',
              borderRadius: '3px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

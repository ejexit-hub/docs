import React, { useState } from 'react';

interface DetailsProps {
  children: React.ReactNode;
  summary: string;
  className?: string;
}

export default function Details({ children, summary, className = '' }: DetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`details-component ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="details-summary"
        style={{
          background: 'none',
          border: 'none',
          padding: '0.5rem 0',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#81BA54',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: '100%',
          textAlign: 'left'
        }}
      >
        <span style={{ 
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
          fontSize: '0.8rem'
        }}>
          ▶
        </span>
        {summary}
      </button>
      {isOpen && (
        <div className="details-content" style={{ 
          padding: '1rem 0 0 1.5rem',
          borderLeft: '2px solid #81BA54',
          marginLeft: '0.5rem'
        }}>
          {children}
        </div>
      )}
    </div>
  );
} 
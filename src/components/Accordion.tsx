import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  type?: 'info' | 'tip' | 'note';
}

export function Accordion({ title, description, children, type = 'info' }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'info':
        return 'accordion-info';
      case 'tip':
        return 'accordion-tip';
      case 'note':
        return 'accordion-note';
      default:
        return 'accordion-info';
    }
  };

  return (
    <div>
      <div 
        className={`accordion-header ${getTypeStyles()}`}
        onClick={toggleAccordion}
        style={{ cursor: 'pointer' }}
      >
        <h4 style={{ display: 'flex', alignItems: 'center', margin: 0, gap: '8px' }}>
          <span style={{ 
            transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.2s ease',
            display: 'inline-block'
          }}>
            ▼
          </span>
          <span>{title}</span>
          {description && (
            <span style={{ 
              fontSize: '0.9rem', 
              opacity: 0.7, 
              fontWeight: 'normal',
              marginLeft: '8px'
            }}>
              - {description}
            </span>
          )}
        </h4>
      </div>
      <div 
        className="accordion-content"
        style={{ 
          display: isOpen ? 'block' : 'none',
          padding: '0.5rem 0 1rem 1rem',
          marginBottom: '1rem',
          borderLeft: '3px solid transparent'
        }}
      >
        {children}
      </div>
    </div>
  );
} 
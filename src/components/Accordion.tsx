import React, { useState, createContext, useContext, useEffect } from 'react';

interface AccordionContextType {
  openAccordionId: string | null;
  setOpenAccordionId: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  type?: 'info' | 'tip' | 'note';
  id?: string;
}

export function Accordion({ title, description, children, type = 'info', id }: AccordionProps) {
  const [accordionId] = useState(id || `accordion-${Math.random().toString(36).substr(2, 9)}`);
  const context = useContext(AccordionContext);
  
  const isOpen = context?.openAccordionId === accordionId;

  const toggleAccordion = () => {
    if (context) {
      if (isOpen) {
        context.setOpenAccordionId(null);
      } else {
        context.setOpenAccordionId(accordionId);
      }
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'info':
        return 'faq-accordion-info';
      case 'tip':
        return 'faq-accordion-tip';
      case 'note':
        return 'faq-accordion-note';
      default:
        return 'faq-accordion-info';
    }
  };

  return (
    <div className={`faq-accordion-container ${getTypeStyles()}`}>
      <div 
        className={`faq-accordion-header ${isOpen ? 'open' : ''}`}
        onClick={toggleAccordion}
      >
        <div className="faq-accordion-title">
          <h4>
            {title}
            {description && <span className="faq-accordion-description"> - {description}</span>}
          </h4>
        </div>
        <div className={`faq-accordion-icon ${isOpen ? 'open' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"/>
          </svg>
        </div>
      </div>
      <div className={`faq-accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="faq-accordion-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  children: React.ReactNode;
}

export function AccordionGroup({ children }: AccordionGroupProps) {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openAccordionId, setOpenAccordionId }}>
      {children}
    </AccordionContext.Provider>
  );
} 
import React from 'react';
import WorkInstructionsNavBar from './WorkInstructionsNavBar';

interface WorkInstructionsLayoutProps {
  children: React.ReactNode;
}

export default function WorkInstructionsLayout({ children }: WorkInstructionsLayoutProps) {
  return (
    <div>
      <WorkInstructionsNavBar />
      <div className="work-instructions-content">
        {children}
      </div>
    </div>
  );
} 
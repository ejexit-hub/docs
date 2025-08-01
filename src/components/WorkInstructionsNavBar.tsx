import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from './WorkInstructionsNavBar.module.css';

const workInstructionCategories = [
  { label: 'Safety Procedures', path: '/docs/work-instructions/safety-procedures' },
  { label: 'Receiving', path: '/docs/work-instructions/receiving' },
  { label: 'Large Equipment', path: '/docs/work-instructions/large-equipment' },
  { label: 'Small Equipment', path: '/docs/work-instructions/small-equipment' },
  { label: 'Parts', path: '/docs/work-instructions/parts' },
  { label: 'Shipping', path: '/docs/work-instructions/shipping' },
  { label: 'Equipment Setup', path: '/docs/work-instructions/equipment-setup-example' },
];

export default function WorkInstructionsNavBar() {
  const location = useLocation();

  return (
    <div className={styles.navBar}>
      {workInstructionCategories.map((category) => {
        const isActive = location.pathname === category.path;
        return (
          <Link
            key={category.path}
            to={category.path}
            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
          >
            {category.label}
          </Link>
        );
      })}
    </div>
  );
}
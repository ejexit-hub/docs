import React from 'react';
import Link from '@docusaurus/Link';
import styles from './WorkInstructionsNavBar.module.css';

const navItems = [
  { label: 'Overview', to: '/docs/work-instructions/intro' },
  { label: 'Safety Procedures', to: '/docs/work-instructions/safety-procedures' },
  { label: 'Inbound', to: '/docs/work-instructions/inbound' },
  { label: 'Receiving', to: '/docs/work-instructions/receiving' },
  { label: 'Small Equipment', to: '/docs/work-instructions/small-equipment' },
  { label: 'Large Equipment', to: '/docs/work-instructions/large-equipment' },
  { label: 'Parts', to: '/docs/work-instructions/parts' },
  { label: 'Shipping', to: '/docs/work-instructions/shipping' },
];

export default function WorkInstructionsNavBar() {
  return (
    <nav className={styles.navBar}>
      {navItems.map((item) => (
        <Link key={item.to} className={styles.navLink} to={item.to}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

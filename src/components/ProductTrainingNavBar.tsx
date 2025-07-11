import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ProductTrainingNavBar.module.css';

const navItems = [
  { label: 'Laptops & Desktops', to: '/docs/product-training/laptops-desktops' },
  { label: 'Servers', to: '/docs/product-training/servers' },
  { label: 'Networking', to: '/docs/product-training/networking' },
  { label: 'Cards', to: '/docs/product-training/cards' },
  { label: 'Drives', to: '/docs/product-training/drives' },
  { label: 'GPU', to: '/docs/product-training/gpu' },
  { label: 'Memory', to: '/docs/product-training/memory' },
  { label: 'Processors', to: '/docs/product-training/processors' },
  { label: 'Storage', to: '/docs/product-training/storage' },
  { label: 'Phones', to: '/docs/product-training/phones' },
  { label: 'Tablets', to: '/docs/product-training/tablets' },
];

export default function ProductTrainingNavBar() {
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
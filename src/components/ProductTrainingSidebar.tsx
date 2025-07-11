import React from 'react';
import VerticalMenu from './VerticalMenu';

const productTrainingItems = [
  {
    label: 'Introduction',
    href: '/docs/product-training/intro',
    icon: '📚'
  },
  {
    label: 'Core Products',
    icon: '💻',
    children: [
      {
        label: 'Laptops & Desktops',
        href: '/docs/product-training/laptops-desktops',
        icon: '🖥️'
      },
      {
        label: 'Servers',
        href: '/docs/product-training/servers',
        icon: '🖥️'
      },
      {
        label: 'Networking',
        href: '/docs/product-training/networking',
        icon: '🌐'
      }
    ]
  },
  {
    label: 'Components',
    icon: '🔧',
    children: [
      {
        label: 'Cards',
        href: '/docs/product-training/cards',
        icon: '💳'
      },
      {
        label: 'Drives',
        href: '/docs/product-training/drives',
        icon: '💾'
      },
      {
        label: 'GPU',
        href: '/docs/product-training/gpu',
        icon: '🎮'
      },
      {
        label: 'Memory',
        href: '/docs/product-training/memory',
        icon: '🧠'
      },
      {
        label: 'Processors',
        href: '/docs/product-training/processors',
        icon: '⚡'
      },
      {
        label: 'Storage',
        href: '/docs/product-training/storage',
        icon: '🗄️'
      }
    ]
  },
  {
    label: 'Mobile Devices',
    icon: '📱',
    children: [
      {
        label: 'Phones',
        href: '/docs/product-training/phones',
        icon: '📞'
      },
      {
        label: 'Tablets',
        href: '/docs/product-training/tablets',
        icon: '📱'
      }
    ]
  }
];

export default function ProductTrainingSidebar() {
  return (
    <div style={{ 
      position: 'sticky', 
      top: '2rem', 
      height: 'fit-content',
      maxHeight: 'calc(100vh - 4rem)',
      overflowY: 'auto'
    }}>
      <VerticalMenu items={productTrainingItems} />
    </div>
  );
} 
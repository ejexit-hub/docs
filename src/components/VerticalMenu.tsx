import React from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './VerticalMenu.module.css';

interface MenuItem {
  label: string;
  href?: string;
  icon?: string;
  children?: MenuItem[];
}

interface VerticalMenuProps {
  items: MenuItem[];
}

export default function VerticalMenu({ items }: VerticalMenuProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const isParentActive = (item: MenuItem) => {
    if (item.children) {
      return item.children.some(child => child.href && isActive(child.href));
    }
    return false;
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const active = item.href ? isActive(item.href) : false;
    const parentActive = isParentActive(item);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.label} className={styles.menuItem}>
        {item.href ? (
          <a
            href={item.href}
            className={`${styles.menuLink} ${active ? styles.active : ''} ${parentActive ? styles.parentActive : ''}`}
            style={{ paddingLeft: `${level * 16 + 16}px` }}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
            {hasChildren && (
              <span className={`${styles.chevron} ${parentActive ? styles.expanded : ''}`}>
                ▼
              </span>
            )}
          </a>
        ) : (
          <div
            className={`${styles.menuLink} ${styles.parentItem} ${parentActive ? styles.parentActive : ''}`}
            style={{ paddingLeft: `${level * 16 + 16}px` }}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
            {hasChildren && (
              <span className={`${styles.chevron} ${parentActive ? styles.expanded : ''}`}>
                ▼
              </span>
            )}
          </div>
        )}
        {hasChildren && parentActive && (
          <div className={styles.submenu}>
            {item.children.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={styles.verticalMenu}>
      <div className={styles.menuHeader}>
        <h3 className={styles.menuTitle}>Product Training</h3>
      </div>
      <div className={styles.menuList}>
        {items.map(item => renderMenuItem(item))}
      </div>
    </nav>
  );
} 
import React from 'react';
import NavbarOriginal from '@theme-original/Navbar';
import AuthStatus from '@site/src/components/AuthStatus';

export default function Navbar(props) {
  return (
    <div style={{ position: 'relative' }}>
      <NavbarOriginal {...props} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '1rem',
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <AuthStatus />
      </div>
    </div>
  );
}
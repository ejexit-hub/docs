import React from 'react';
import NavbarOriginal from '@theme-original/Navbar';
import AuthStatus from '@site/src/components/AuthStatus';

export default function Navbar(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <NavbarOriginal {...props} />
      </div>
      <div style={{ marginRight: '1rem', display: 'flex', alignItems: 'center', zIndex: 1000 }}>
        <AuthStatus />
      </div>
    </div>
  );
}
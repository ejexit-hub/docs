import React, { useEffect } from 'react';
import { AuthProvider } from '@site/src/contexts/AuthContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import GlobalAuthGuard from '@site/src/components/GlobalAuthGuard';

export default function Root({children}) {
  // Only render AuthProvider on the client side
  if (!ExecutionEnvironment.canUseDOM) {
    return <>{children}</>;
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const keys = ['access_token','refresh_token','expires_in','token_type','code','type'];
    let dirty = false;
    for (const key of keys) {
      if (url.searchParams.has(key)) {
        url.searchParams.delete(key);
        dirty = true;
      }
    }
    if (dirty) {
      window.history.replaceState({}, document.title, url.pathname + url.hash);
    }
  }, []);

  return (
    <AuthProvider>
      <GlobalAuthGuard>
        {children}
      </GlobalAuthGuard>
    </AuthProvider>
  );
} 
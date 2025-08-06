import React from 'react';
import { AuthProvider } from '@site/src/contexts/AuthContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import GlobalAuthGuard from '@site/src/components/GlobalAuthGuard';

export default function Root({children}) {
  // Only render AuthProvider on the client side
  if (!ExecutionEnvironment.canUseDOM) {
    return <>{children}</>;
  }

  return (
    <AuthProvider>
      <GlobalAuthGuard>
        {children}
      </GlobalAuthGuard>
    </AuthProvider>
  );
} 
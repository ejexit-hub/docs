import React, { useEffect } from 'react';
import { useAuth } from '@site/src/contexts/AuthContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

interface GlobalAuthGuardProps {
  children: React.ReactNode;
}

export default function GlobalAuthGuard({ children }: GlobalAuthGuardProps) {
  const { user, loading } = useAuth();

  useEffect(() => {
    // Only run on client side
    if (!ExecutionEnvironment.canUseDOM) return;

    // Wait for auth to finish loading
    if (loading) return;

    // Get current path
    const currentPath = window.location.pathname;
    
    // Allow login page itself to be accessed
    if (currentPath === '/login') return;

    // If user is not authenticated, redirect to login
    if (!user) {
      // Store the intended destination
      sessionStorage.setItem('intendedPath', currentPath);
      window.location.href = '/login';
    }
  }, [user, loading]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, #2764AD 0%, #81BA54 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderTop: '3px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
        
        <h2 style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}>
          ExitTech Wiki
        </h2>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1rem',
          textAlign: 'center',
          maxWidth: '400px',
          lineHeight: '1.5'
        }}>
          Verifying your authentication status...
        </p>
        
        <div style={{
          marginTop: '2rem',
          padding: '1rem 1.5rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.875rem',
            margin: 0,
            textAlign: 'center'
          }}>
            🔒 Secure access required
          </p>
        </div>
      </div>
    );
  }

  // If we're on the login page or user is authenticated, show content
  const currentPath = ExecutionEnvironment.canUseDOM ? window.location.pathname : '';
  if (currentPath === '/login' || user) {
    return <>{children}</>;
  }

  // This should not happen due to the useEffect redirect, but just in case
  return null;
}
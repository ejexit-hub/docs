import React, { useEffect } from 'react';

export default function AuthCallback(): JSX.Element {
  useEffect(() => {
    // Supabase handles session from URL; just clean and redirect home
    try {
      const url = new URL(window.location.href);
      const keys = ['access_token','refresh_token','expires_in','token_type','code','type'];
      let dirty = false;
      for (const key of keys) {
        if (url.searchParams.has(key)) {
          url.searchParams.delete(key);
          dirty = true;
        }
      }
      const clean = url.pathname.replace(/\/auth-callback$/, '') || '/';
      if (dirty) {
        window.history.replaceState({}, document.title, clean);
      }
      // navigate to home
      window.location.replace('/');
    } catch (_) {
      window.location.replace('/');
    }
  }, []);

  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      Processing sign-in...
    </div>
  );
}
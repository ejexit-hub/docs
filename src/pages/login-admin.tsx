import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const ADMIN_EMAILS = ['ej@exittechnologies.com']; // Hardcoded admin email

export default function AdminLoginPage() {
  const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
  const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || '';
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!ADMIN_EMAILS.includes(email.toLowerCase())) {
      setError('You are not authorized for admin access.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/admin-dashboard'; // Change as needed
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: '2.5rem auto', padding: 24, background: '#23272f', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}>
      <img
        src="/img/logo-main.png"
        alt="Company Logo"
        style={{ display: 'block', margin: '0 auto 16px auto', width: 60, height: 60 }}
      />
      <h2 style={{ color: '#81BA54', marginBottom: 16, fontSize: '1.25rem' }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.25rem', fontSize: '0.8rem', fontWeight: '500' }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '0.9rem', background: 'rgba(255, 255, 255, 0.05)', color: 'white' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.25rem', fontSize: '0.8rem', fontWeight: '500' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '0.9rem', background: 'rgba(255, 255, 255, 0.05)', color: 'white' }}
          />
        </div>
        {error && <div style={{ color: '#ff4d4f', marginBottom: 16 }}>{error}</div>}
        {success && <div style={{ color: '#81BA54', marginBottom: 16 }}>Login successful! Redirecting...</div>}
        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: '0.7rem', background: loading ? 'rgba(39, 100, 173, 0.5)' : '#2764AD', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.9rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
} 
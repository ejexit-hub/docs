import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { Shield, Mail, Lock, CheckCircle } from 'lucide-react';

const ALLOWED_DOMAINS = ['exittechnologies.com', 'gmail.com']; // Add allowed domains here
const SIGNUP_ALLOWED_DOMAINS = ['exittechnologies.com']; // Only ExitTech emails can sign up

export default function LoginPage() {
  const { siteConfig } = useDocusaurusContext();
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const SUPABASE_URL = siteConfig.customFields?.supabaseUrl as string || '';
  const SUPABASE_ANON_KEY = siteConfig.customFields?.supabaseAnonKey as string || '';
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Check if user is already logged in
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      setAuthLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
      if (session?.user) {
        // Redirect to intended path or home page
        const intendedPath = sessionStorage.getItem('intendedPath') || '/';
        sessionStorage.removeItem('intendedPath');
        window.location.href = intendedPath;
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const getDomain = (email: string) => {
    const parts = email.split('@');
    return parts.length === 2 ? parts[1].toLowerCase() : '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    const domain = getDomain(email);
    
    if (isSignUp) {
      // Sign up validation
      if (!SIGNUP_ALLOWED_DOMAINS.includes(domain)) {
        setError('Sign up is only available for @exittechnologies.com email addresses.');
        return;
      }
      
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
      
      setLoading(true);
      try {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          }
        });
        
        if (error) {
          setError(error.message);
        } else {
          setSuccess(true);
          setError('');
          // Show success message for email confirmation
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // Sign in validation
      if (!ALLOWED_DOMAINS.includes(domain)) {
        setError('Only users with approved company email domains can log in.');
        return;
      }
      
      setLoading(true);
      try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          setError(error.message);
        } else {
          setSuccess(true);
          // Redirect to intended path or home page
          setTimeout(() => {
            const intendedPath = sessionStorage.getItem('intendedPath') || '/';
            sessionStorage.removeItem('intendedPath');
            window.location.href = intendedPath;
          }, 1000);
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (authLoading) {
    return (
      <div style={{ maxWidth: 400, margin: '4rem auto', padding: 32, textAlign: 'center' }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(129, 186, 84, 0.3)',
          borderTop: '3px solid #81BA54',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Checking authentication...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 350, margin: '2.5rem auto', padding: 24, background: '#23272f', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}>
      {/* Logo at the top */}
      <img
        src="/img/logo-main.png"
        alt="Company Logo"
        style={{ display: 'block', margin: '0 auto 16px auto', width: 60, height: 60 }}
      />
      <h2 style={{ color: '#81BA54', marginBottom: 16, fontSize: '1.25rem' }}>{isSignUp ? 'Create Account' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            color: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.25rem',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            <Mail size={14} />
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder={isSignUp ? "your.name@exittechnologies.com" : "your.name@exittechnologies.com"}
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.9rem',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#81BA54';
              e.target.style.boxShadow = '0 0 0 3px rgba(129, 186, 84, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            color: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.25rem',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            <Lock size={14} />
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.9rem',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#81BA54';
              e.target.style.boxShadow = '0 0 0 3px rgba(129, 186, 84, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {isSignUp && (
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              color: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.25rem',
              fontSize: '0.8rem',
              fontWeight: '500'
            }}>
              <Lock size={14} />
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required={isSignUp}
              placeholder="Confirm your password"
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.9rem',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#81BA54';
                e.target.style.boxShadow = '0 0 0 3px rgba(129, 186, 84, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        )}

        {error && (
          <div style={{
            color: '#ff6b6b',
            background: 'rgba(255, 107, 107, 0.1)',
            border: '1px solid rgba(255, 107, 107, 0.3)',
            borderRadius: '6px',
            padding: '0.5rem',
            marginBottom: '1rem',
            fontSize: '0.8rem'
          }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{
            color: '#81BA54',
            background: 'rgba(129, 186, 84, 0.1)',
            border: '1px solid rgba(129, 186, 84, 0.3)',
            borderRadius: '6px',
            padding: '0.5rem',
            marginBottom: '1rem',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <CheckCircle size={14} />
            {isSignUp ? 'Account created! Check your email to confirm.' : 'Login successful! Redirecting...'}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.7rem',
            background: loading ? 'rgba(39, 100, 173, 0.5)' : '#2764AD',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
          onMouseOver={(e) => {
            if (!loading) {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(39, 100, 173, 0.4)';
            }
          }}
          onMouseOut={(e) => {
            if (!loading) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          {loading ? (
            <>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
              {isSignUp ? 'Creating account...' : 'Signing in...'}
            </>
          ) : (
            <>
              <Shield size={16} />
              {isSignUp ? 'Create Account' : 'Sign In'}
            </>
          )}
        </button>
      </form>

      {/* Toggle between Sign In and Sign Up */}
      <div style={{
        marginTop: '1rem',
        textAlign: 'center',
        padding: '0.75rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.8rem',
          margin: '0 0 0.75rem 0'
        }}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError('');
            setSuccess(false);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }}
          style={{
            background: 'transparent',
            border: '1px solid rgba(129, 186, 84, 0.3)',
            color: '#81BA54',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(129, 186, 84, 0.1)';
            e.currentTarget.style.borderColor = '#81BA54';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(129, 186, 84, 0.3)';
          }}
        >
          {isSignUp ? 'Sign In Instead' : 'Create Account'}
        </button>
      </div>

      <div style={{
        marginTop: '0.75rem',
        padding: '0.6rem',
        background: isSignUp ? 'rgba(39, 100, 173, 0.1)' : 'rgba(129, 186, 84, 0.1)',
        borderRadius: '6px',
        border: `1px solid ${isSignUp ? 'rgba(39, 100, 173, 0.2)' : 'rgba(129, 186, 84, 0.2)'}`
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '0.75rem',
          margin: 0,
          textAlign: 'center'
        }}>
          {isSignUp ? 
            '🏢 Account creation restricted to @exittechnologies.com only' : 
            '🔒 Authorized company email addresses only'
          }
        </p>
      </div>
    </div>
  );
}
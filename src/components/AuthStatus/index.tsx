import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { useAuth } from '@site/src/contexts/AuthContext';
import { User, LogOut, ChevronDown, Shield } from 'lucide-react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

export default function AuthStatus() {
  // Don't render during SSR
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const { user, signOut, loading } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (loading) {
    return (
      <div className={styles.authLoading}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  if (!user) {
    return (
      <Link to="/login" className={styles.loginButton}>
        <Shield size={16} />
        <span>Login</span>
      </Link>
    );
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      setDropdownOpen(false);
      // Redirect to home page after logout
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getInitials = (email: string) => {
    const parts = email.split('@')[0].split('.');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return email.substring(0, 2).toUpperCase();
  };

  const getDomain = (email: string) => {
    return email.split('@')[1];
  };

  return (
    <div className={styles.authContainer}>
      <button
        className={styles.userButton}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
      >
        <div className={styles.avatar}>
          {getInitials(user.email || '')}
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>
            {user.email?.split('@')[0].replace('.', ' ') || 'User'}
          </span>
          <span className={styles.userDomain}>
            @{getDomain(user.email || '')}
          </span>
        </div>
        <ChevronDown size={16} className={styles.chevron} />
      </button>

      {dropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <div className={styles.avatarLarge}>
              {getInitials(user.email || '')}
            </div>
            <div>
              <div className={styles.dropdownEmail}>{user.email}</div>
              <div className={styles.dropdownStatus}>
                <div className={styles.statusDot}></div>
                Signed in
              </div>
            </div>
          </div>
          
          <div className={styles.dropdownDivider}></div>
          
          <button
            onClick={handleSignOut}
            className={styles.signOutButton}
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import ProtectedRoute from '@site/src/components/ProtectedRoute';
import { useAuth } from '@site/src/contexts/AuthContext';
import { Settings, Users, Database, Shield } from 'lucide-react';

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
}

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #2764AD 0%, #81BA54 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Shield size={24} color="white" />
          </div>
          <div>
            <h1 style={{
              color: 'white',
              margin: 0,
              fontSize: '1.75rem'
            }}>
              Admin Dashboard
            </h1>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
              fontSize: '1rem'
            }}>
              Welcome back, {user?.email?.split('@')[0].replace('.', ' ')}
            </p>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <Users size={24} color="#81BA54" />
            <h3 style={{ color: 'white', margin: 0 }}>User Management</h3>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            lineHeight: '1.5'
          }}>
            Manage user accounts, permissions, and access levels across the ExitTech Wiki platform.
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <Database size={24} color="#2764AD" />
            <h3 style={{ color: 'white', margin: 0 }}>Content Management</h3>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            lineHeight: '1.5'
          }}>
            Edit documentation, manage product training materials, and update technical resources.
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <Settings size={24} color="#81BA54" />
            <h3 style={{ color: 'white', margin: 0 }}>System Settings</h3>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            lineHeight: '1.5'
          }}>
            Configure system preferences, authentication settings, and platform integrations.
          </p>
        </div>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'rgba(129, 186, 84, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(129, 186, 84, 0.2)'
      }}>
        <h3 style={{
          color: '#81BA54',
          margin: '0 0 1rem 0',
          fontSize: '1.1rem'
        }}>
          🔐 Protected Content
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          margin: 0,
          fontSize: '0.9rem',
          lineHeight: '1.5'
        }}>
          This page is only accessible to authenticated users. You're currently signed in as <strong>{user?.email}</strong>.
          The authentication system automatically protects sensitive content and redirects unauthorized users to the login page.
        </p>
      </div>
    </div>
  );
}
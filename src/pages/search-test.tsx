import React from 'react';
import Layout from '@theme/Layout';

export default function SearchTest() {
  return (
    <Layout title="Search Test">
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Search Functionality Test</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2>How to Test Search:</h2>
          <ol>
            <li>Look for the search icon (magnifying glass) in the top-right corner</li>
            <li>Click the search icon or press <kbd>Ctrl+K</kbd> (or <kbd>Cmd+K</kbd> on Mac)</li>
            <li>Type one of these test terms:</li>
            <ul>
              <li><strong>ExitTech</strong> - Should find main page</li>
              <li><strong>processor</strong> - Should find product training</li>
              <li><strong>safety</strong> - Should find work instructions</li>
              <li><strong>carousel</strong> - Should find product pages</li>
              <li><strong>processing</strong> - Should find processing pages</li>
            </ul>
          </ol>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Search Test Content</h2>
          <p>This page contains test content to verify search functionality:</p>
          <ul>
            <li>ExitTech search test content</li>
            <li>Processor testing information</li>
            <li>Safety procedures testing</li>
            <li>Carousel functionality test</li>
            <li>Processing workflow test</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Troubleshooting:</h2>
          <ul>
            <li><strong>No search icon?</strong> Check if you're on mobile - it might be in the hamburger menu</li>
            <li><strong>No results?</strong> Try simple terms like "the", "and", "or"</li>
            <li><strong>Results don't work?</strong> Check browser console for errors</li>
            <li><strong>Still not working?</strong> Clear browser cache and refresh</li>
          </ul>
        </div>

        <div style={{ 
          background: '#f0f8ff', 
          padding: '1rem', 
          borderRadius: '8px',
          border: '1px solid #2764AD'
        }}>
          <h3>Search Configuration Status:</h3>
          <ul>
            <li>✅ Search plugin installed: <code>@easyops-cn/docusaurus-search-local</code></li>
            <li>✅ Search index generated: <code>build/search-index.json</code></li>
            <li>✅ Configuration in <code>docusaurus.config.ts</code></li>
            <li>✅ CSS styling for search components</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
} 
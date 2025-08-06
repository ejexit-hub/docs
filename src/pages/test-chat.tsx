import React from 'react';
import ChatButton from '@site/src/components/ChatButton';

export default function TestChat() {
  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <h1>Chat Component Test Page</h1>
      <p>This page is used to test the chat component functionality.</p>
      <p>You should see a chat button in the bottom-right corner.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Test Instructions:</h2>
        <ul>
          <li>Look for a blue/purple circular button in the bottom-right corner</li>
          <li>Click the button to open the chat interface</li>
          <li>Try sending a message to test the AI functionality</li>
        </ul>
      </div>

      {/* The ChatButton component should be rendered by the Layout */}
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        background: 'green', 
        color: 'white', 
        padding: '10px',
        zIndex: 10001,
        fontSize: '12px'
      }}>
        TEST PAGE LOADED
      </div>
    </div>
  );
} 
import React, { useState } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function ProductTrainingEditor() {
  const [content, setContent] = useState<string>('');

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', background: '#fff', padding: 24, borderRadius: 8, animation: 'fadeInUp 0.8s ease-out both' }}>
      <h1 style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>Product Training Editor</h1>
      {/* @ts-ignore */}
      <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
        <ReactQuill value={content} onChange={setContent} theme="snow" />
      </div>
      <div style={{ marginTop: 24, animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
        <h2>Preview</h2>
        <div style={{ border: '1px solid #ccc', padding: 16, minHeight: 100 }} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
} 
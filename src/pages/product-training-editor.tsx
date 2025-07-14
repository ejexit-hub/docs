import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function EditorContent() {
  const [content, setContent] = useState<string>('');
  const [ReactQuill, setReactQuill] = useState<any>(null);
  
  useEffect(() => {
    const loadQuill = async () => {
      try {
        const { default: Quill } = await import('react-quill');
        await import('react-quill/dist/quill.snow.css');
        setReactQuill(() => Quill);
      } catch (error) {
        console.error('Failed to load ReactQuill:', error);
      }
    };
    
    loadQuill();
  }, []);
  
  if (!ReactQuill) {
    return <div>Loading editor...</div>;
  }
  
  return (
    <>
      <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
        <ReactQuill value={content} onChange={setContent} theme="snow" />
      </div>
      <div style={{ marginTop: 24, animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
        <h2>Preview</h2>
        <div style={{ border: '1px solid #ccc', padding: 16, minHeight: 100 }} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}

export default function ProductTrainingEditor() {
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', background: '#fff', padding: 24, borderRadius: 8, animation: 'fadeInUp 0.8s ease-out both' }}>
      <h1 style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>Product Training Editor</h1>
      <BrowserOnly fallback={<div>Loading editor...</div>}>
        {() => <EditorContent />}
      </BrowserOnly>
    </div>
  );
} 
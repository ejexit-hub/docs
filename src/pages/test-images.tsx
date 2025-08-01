import React from 'react';
import Layout from '@theme/Layout';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { storage_images, phones_images, tablets_images } from '@site/src/data/product-images';

export default function TestImages() {
  return (
    <Layout title="Test Images" description="Testing product image loading">
      <main className="container margin-vert--lg">
        <h1>Product Image Test</h1>
        
        <div className="margin-vert--lg">
          <h2>Storage Images</h2>
          <ProductCarousel images={storage_images} />
        </div>

        <div className="margin-vert--lg">
          <h2>Phone Images</h2>
          <ProductCarousel images={phones_images} />
        </div>

        <div className="margin-vert--lg">
          <h2>Tablet Images</h2>
          <ProductCarousel images={tablets_images} />
        </div>

        <div className="margin-vert--lg">
          <h2>Direct Image Test</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {storage_images.map((image, index) => (
              <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                <img 
                  src={encodeURI(image.src)} 
                  alt={image.alt}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                  onError={(e) => {
                    console.error('Image failed to load:', image.src);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div style={{ display: 'none', textAlign: 'center', padding: '1rem' }}>
                  <div>❌ Failed to load</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>{image.src}</div>
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <strong>{image.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
} 
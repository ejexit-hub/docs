import React from 'react';
import Layout from '@theme/Layout';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { ImageModal } from '@site/src/components/ui/image-modal';
import { storage_images, phones_images, tablets_images } from '@site/src/data/product-images';

export default function TestImages() {
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    title?: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleImageClick = (image: { src: string; alt: string; title?: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

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
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => handleImageClick(image)}
                  style={{ position: 'relative' }}
                >
                  <img 
                    src={encodeURI(image.src)} 
                    alt={image.alt}
                    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.error('Image failed to load:', image.src);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  
                  {/* Expand Icon Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
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
        
        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            image={selectedImage}
          />
        )}
      </main>
    </Layout>
  );
} 
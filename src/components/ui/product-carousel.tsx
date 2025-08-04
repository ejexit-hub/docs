'use client';
import React from 'react';
import { ImageModal } from './image-modal';

interface ProductImage {
  src: string;
  alt: string;
  title?: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
  className?: string;
  showNavigation?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function ProductCarousel({
  images,
  className = '',
  showNavigation = true,
  showIndicators = true,
  autoPlay = false,
  interval = 5000,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [imageError, setImageError] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setImageError(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setImageError(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error('Failed to load image:', images[currentIndex].src);
    setImageError(true);
  };

  const handleImageClick = () => {
    console.log('Image clicked! Opening modal for image:', images[currentIndex]);
    setIsModalOpen(true);
  };

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500 p-8 border-2 border-red-500 bg-red-50">No images available</div>;
  }

  console.log('ProductCarousel rendering with images:', images.length, images);
  console.log('showNavigation:', showNavigation, 'images.length > 1:', images.length > 1);

  return (
    <div className={`relative w-full max-w-4xl product-carousel ${className}`} style={{ maxWidth: '900px', overflow: 'visible', position: 'relative' }}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 max-h-96" style={{ width: '100%', maxHeight: '600px', position: 'relative' }}>
        {/* Main Image */}
        {imageError ? (
          <div className="flex items-center justify-center h-full w-full bg-gray-200 dark:bg-gray-700">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🖼️</div>
              <div className="text-sm">Image failed to load</div>
              <div className="text-xs text-gray-400 mt-1">{images[currentIndex].src}</div>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full group cursor-pointer" onClick={handleImageClick}>
            <img
              src={encodeURI(images[currentIndex].src)}
              alt={images[currentIndex].alt}
              title={images[currentIndex].title || images[currentIndex].alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
              onError={handleImageError}
            />
            
            {/* Expand Icon Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 dark:text-gray-300">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* Image Title Overlay */}
        {images[currentIndex].title && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm font-medium">
            {images[currentIndex].title}
          </div>
        )}
        
        {/* Navigation Arrows */}
        {showNavigation && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full hover:bg-black/100 transition-colors z-50"
              aria-label="Previous image"
              style={{ 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 50
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full hover:bg-black/100 transition-colors z-50"
              aria-label="Next image"
              style={{ 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 50
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-opacity duration-300 ${
                index === currentIndex
                  ? 'bg-white opacity-100'
                  : 'bg-white/50 opacity-50 hover:opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={images[currentIndex]}
      />
    </div>
  );
}

// Helper function to get product images for a specific category
export function getProductImages(category: string): ProductImage[] {
  const imageMap: Record<string, ProductImage[]> = {
    'laptops-desktops': [
      { src: '/img/products/laptops-desktops/IMG_2663.JPG', alt: 'Laptop Desktop Product 1', title: 'High-performance Laptop' },
      { src: '/img/products/laptops-desktops/IMG_2807.JPG', alt: 'Laptop Desktop Product 2', title: 'Desktop Workstation' },
      { src: '/img/products/laptops-desktops/IMG_2743.JPG', alt: 'Laptop Desktop Product 3', title: 'Gaming Laptop' },
      { src: '/img/products/laptops-desktops/IMG_2722.JPG', alt: 'Laptop Desktop Product 4', title: 'Business Desktop' },
      { src: '/img/products/laptops-desktops/IMG_1548.JPEG', alt: 'Laptop Desktop Product 5', title: 'Ultrabook' },
      { src: '/img/products/laptops-desktops/IMG_5521.JPG', alt: 'Laptop Desktop Product 6', title: 'All-in-One Desktop' },
      { src: '/img/products/laptops-desktops/IMG_5510.JPG', alt: 'Laptop Desktop Product 7', title: 'Professional Laptop' },
      { src: '/img/products/laptops-desktops/IMG_6679.JPEG', alt: 'Laptop Desktop Product 8', title: 'Desktop Tower' },
    ],
    'processors': [
      { src: '/img/products/processors/IMG_2170.JPEG', alt: 'Processor Product 1', title: 'High-performance CPU' },
      { src: '/img/products/processors/IMG_2280.JPG', alt: 'Processor Product 2', title: 'Server Processor' },
      { src: '/img/products/processors/IMG_2512.JPG', alt: 'Processor Product 3', title: 'Gaming CPU' },
      { src: '/img/products/processors/IMG_2524.JPG', alt: 'Processor Product 4', title: 'Workstation CPU' },
    ],
    'memory': [
      { src: '/img/products/memory/IMG_2173.JPG', alt: 'Memory Product 1', title: 'High-speed RAM' },
      { src: '/img/products/memory/IMG_2406.JPG', alt: 'Memory Product 2', title: 'Server Memory' },
      { src: '/img/products/memory/IMG_2410.JPG', alt: 'Memory Product 3', title: 'Gaming RAM' },
      { src: '/img/products/memory/IMG_2421.JPG', alt: 'Memory Product 4', title: 'ECC Memory' },
    ],
    'storage': [
      { src: '/img/products/storage/Screenshot 2025-07-14 113024.png', alt: 'Storage Product 1', title: 'Enterprise SSD' },
      { src: '/img/products/storage/Screenshot 2025-07-14 113116.png', alt: 'Storage Product 2', title: 'High-capacity HDD' },
      { src: '/img/products/storage/Screenshot 2025-07-14 113147.png', alt: 'Storage Product 3', title: 'NVMe Storage' },
      { src: '/img/products/storage/Screenshot 2025-07-14 113238.png', alt: 'Storage Product 4', title: 'Storage Array' },
    ],
    'gpu': [
      { src: '/img/products/gpu/IMG_0322.JPEG', alt: 'GPU Product 1', title: 'Gaming Graphics Card' },
      { src: '/img/products/gpu/IMG_3228.JPG', alt: 'GPU Product 2', title: 'Workstation GPU' },
      { src: '/img/products/gpu/IMG_3291.JPG', alt: 'GPU Product 3', title: 'High-end Graphics' },
      { src: '/img/products/gpu/IMG_3432.JPG', alt: 'GPU Product 4', title: 'Professional GPU' },
    ],
    'networking': [
      { src: '/img/products/networking/IMG_2779.JPG', alt: 'Networking Product 1', title: 'Enterprise Switch' },
      { src: '/img/products/networking/IMG_2957.JPG', alt: 'Networking Product 2', title: 'Router' },
      { src: '/img/products/networking/IMG_2963.JPG', alt: 'Networking Product 3', title: 'Firewall' },
      { src: '/img/products/networking/IMG_3062.JPG', alt: 'Networking Product 4', title: 'Wireless AP' },
    ],
    'phones': [
      { src: '/img/products/phones/IMG_0521.JPEG', alt: 'Phone Product 1', title: 'Smartphone' },
      { src: '/img/products/phones/IMG_0531.JPEG', alt: 'Phone Product 2', title: 'Mobile Device' },
      { src: '/img/products/phones/Screenshot 2025-07-14 113622.png', alt: 'Phone Product 3', title: 'Phone Display' },
      { src: '/img/products/phones/Screenshot 2025-07-14 113650.png', alt: 'Phone Product 4', title: 'Phone Interface' },
    ],
    'tablets': [
      { src: '/img/products/tablets/Screenshot 2025-07-14 113729.png', alt: 'Tablet Product 1', title: 'Tablet Device' },
      { src: '/img/products/tablets/Screenshot 2025-07-14 113758.png', alt: 'Tablet Product 2', title: 'Tablet Display' },
      { src: '/img/products/tablets/Screenshot 2025-07-14 113841.png', alt: 'Tablet Product 3', title: 'Tablet Interface' },
      { src: '/img/products/tablets/Screenshot 2025-07-14 113911.png', alt: 'Tablet Product 4', title: 'Tablet Features' },
    ],
    'servers': [
      { src: '/img/products/servers/IMG_0386.JPG', alt: 'Server Product 1', title: 'Rack Server' },
      { src: '/img/products/servers/IMG_3858.JPEG', alt: 'Server Product 2', title: 'Blade Server' },
      { src: '/img/products/servers/IMG_4043.JPEG', alt: 'Server Product 3', title: 'Tower Server' },
      { src: '/img/products/servers/IMG_5491.JPG', alt: 'Server Product 4', title: 'Enterprise Server' },
    ],
    'cards': [
      { src: '/img/products/cards/IMG_2874.JPG', alt: 'Card Product 1', title: 'Network Card' },
      { src: '/img/products/cards/IMG_3130.JPG', alt: 'Card Product 2', title: 'Graphics Card' },
      { src: '/img/products/cards/IMG_3144.JPG', alt: 'Card Product 3', title: 'Sound Card' },
      { src: '/img/products/cards/IMG_3149.JPG', alt: 'Card Product 4', title: 'Expansion Card' },
    ],
    'drives': [
      { src: '/img/products/drives/IMG_0571.JPEG', alt: 'Drive Product 1', title: 'SSD Drive' },
      { src: '/img/products/drives/IMG_0580.JPEG', alt: 'Drive Product 2', title: 'HDD Drive' },
      { src: '/img/products/drives/IMG_0654.JPEG', alt: 'Drive Product 3', title: 'External Drive' },
      { src: '/img/products/drives/IMG_1489.JPEG', alt: 'Drive Product 4', title: 'Enterprise Drive' },
    ],
  };

  return imageMap[category] || [];
}
'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from './carousel';

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

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <Carousel
        initialIndex={currentIndex}
        onIndexChange={setCurrentIndex}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.title || image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm font-medium">
                    {image.title}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showNavigation && images.length > 1 && (
          <CarouselNavigation alwaysShow />
        )}
        
        {showIndicators && images.length > 1 && (
          <CarouselIndicator />
        )}
      </Carousel>
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
    'servers': [
      { src: '/img/products/servers/IMG_0386.JPG', alt: 'Server Product 1', title: 'Rack Server' },
      { src: '/img/products/servers/IMG_3858.JPEG', alt: 'Server Product 2', title: 'Tower Server' },
      { src: '/img/products/servers/IMG_4043.JPEG', alt: 'Server Product 3', title: 'Blade Server' },
      { src: '/img/products/servers/IMG_5491.JPG', alt: 'Server Product 4', title: 'Enterprise Server' },
    ],
    'networking': [
      { src: '/img/products/networking/IMG_2779.JPG', alt: 'Networking Product 1', title: 'Network Switch' },
      { src: '/img/products/networking/IMG_2957.JPG', alt: 'Networking Product 2', title: 'Router' },
      { src: '/img/products/networking/IMG_2963.JPG', alt: 'Networking Product 3', title: 'Wireless Access Point' },
      { src: '/img/products/networking/IMG_3062.JPG', alt: 'Networking Product 4', title: 'Network Hub' },
    ],
    'cards': [
      { src: '/img/products/cards/IMG_2874.JPG', alt: 'Card Product 1', title: 'Graphics Card' },
      { src: '/img/products/cards/IMG_3130.JPG', alt: 'Card Product 2', title: 'Network Card' },
      { src: '/img/products/cards/IMG_3144.JPG', alt: 'Card Product 3', title: 'Sound Card' },
      { src: '/img/products/cards/IMG_3149.JPG', alt: 'Card Product 4', title: 'Storage Card' },
    ],
    'drives': [
      { src: '/img/products/drives/IMG_0571.JPEG', alt: 'Drive Product 1', title: 'SSD Drive' },
      { src: '/img/products/drives/IMG_0580.JPEG', alt: 'Drive Product 2', title: 'HDD Drive' },
      { src: '/img/products/drives/IMG_0654.JPEG', alt: 'Drive Product 3', title: 'NVMe Drive' },
      { src: '/img/products/drives/IMG_1489.JPEG', alt: 'Drive Product 4', title: 'External Drive' },
    ],
    'gpu': [
      { src: '/img/products/gpu/IMG_0322.JPEG', alt: 'GPU Product 1', title: 'Gaming GPU' },
      { src: '/img/products/gpu/IMG_3228.JPG', alt: 'GPU Product 2', title: 'Workstation GPU' },
      { src: '/img/products/gpu/IMG_3291.JPG', alt: 'GPU Product 3', title: 'Professional GPU' },
      { src: '/img/products/gpu/IMG_3432.JPG', alt: 'GPU Product 4', title: 'Entry-level GPU' },
    ],
    'memory': [
      { src: '/img/products/memory/IMG_2173.JPG', alt: 'Memory Product 1', title: 'DDR4 RAM' },
      { src: '/img/products/memory/IMG_2406.JPG', alt: 'Memory Product 2', title: 'DDR5 RAM' },
      { src: '/img/products/memory/IMG_2410.JPG', alt: 'Memory Product 3', title: 'Server Memory' },
      { src: '/img/products/memory/IMG_2421.JPG', alt: 'Memory Product 4', title: 'Laptop Memory' },
    ],
    'processors': [
      { src: '/img/products/processors/IMG_2170.JPEG', alt: 'Processor Product 1', title: 'Intel CPU' },
      { src: '/img/products/processors/IMG_2280.JPG', alt: 'Processor Product 2', title: 'AMD CPU' },
      { src: '/img/products/processors/IMG_2512.JPG', alt: 'Processor Product 3', title: 'Server CPU' },
      { src: '/img/products/processors/IMG_2524.JPG', alt: 'Processor Product 4', title: 'Mobile CPU' },
    ],
    'storage': [
      { src: '/img/products/storage/Screenshot 2025-07-14 113024.png', alt: 'Storage Product 1', title: 'NAS Storage' },
      { src: '/img/products/storage/Screenshot 2025-07-14 113116.png', alt: 'Storage Product 2', title: 'SAN Storage' },
      { src: '/img/products/storage/Screenshot 2025-07-14 113147.png', alt: 'Storage Product 3', title: 'Cloud Storage' },
      { src: '/img/products/storage/Screenshot 2025-07-14 113238.png', alt: 'Storage Product 4', title: 'Backup Storage' },
    ],
    'phones': [
      { src: '/img/products/phones/IMG_0521.JPEG', alt: 'Phone Product 1', title: 'Smartphone' },
      { src: '/img/products/phones/IMG_0531.JPEG', alt: 'Phone Product 2', title: 'Business Phone' },
      { src: '/img/products/phones/Screenshot 2025-07-14 113622.png', alt: 'Phone Product 3', title: 'Mobile Device' },
      { src: '/img/products/phones/Screenshot 2025-07-14 113650.png', alt: 'Phone Product 4', title: 'Communication Device' },
    ],
    'tablets': [
      { src: '/img/products/tablets/Screenshot 2025-07-14 113729.png', alt: 'Tablet Product 1', title: 'iPad' },
      { src: '/img/products/tablets/Screenshot 2025-07-14 113758.png', alt: 'Tablet Product 2', title: 'Android Tablet' },
      { src: '/img/products/tablets/Screenshot 2025-07-14 113841.png', alt: 'Tablet Product 3', title: 'Windows Tablet' },
      { src: '/img/products/tablets/Screenshot 2025-07-14 113911.png', alt: 'Tablet Product 4', title: 'Professional Tablet' },
    ],
  };

  return imageMap[category] || [];
}
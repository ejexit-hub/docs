import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface ProductCarouselProps {
  images: CarouselImage[];
  title?: string;
}

export default function ProductCarousel({ images, title = "Product Gallery" }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-xs mx-auto mb-3">
      <h5 className="text-sm font-medium mb-1 text-center" style={{ color: '#2764AD' }}>
        {title}
      </h5>
      
      <div className="relative bg-white rounded shadow-sm overflow-hidden">
        {/* Thumbnail strip at top */}
        <div className="flex bg-gray-50">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-1 h-8 overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? 'opacity-100 border-b-2'
                  : 'opacity-60 hover:opacity-80'
              }`}
              style={{
                borderBottomColor: index === currentIndex ? '#81BA54' : 'transparent'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main image display */}
        <div className="relative h-20 overflow-hidden">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0.5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 transition-all duration-200"
              >
                <ChevronLeft size={12} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 transition-all duration-200"
              >
                <ChevronRight size={12} />
              </button>
            </>
          )}
        </div>

        {/* Minimal image info */}
        <div className="px-2 py-1 bg-white">
          <h6 className="text-xs font-medium text-gray-700 truncate">
            {images[currentIndex].title}
          </h6>
        </div>
      </div>
    </div>
  );
}
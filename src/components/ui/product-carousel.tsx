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
    <div className="w-full max-w-sm mx-auto mb-6">
      <h5 className="text-base font-medium mb-2 text-center" style={{ color: '#2764AD' }}>
        {title}
      </h5>
      
      <div className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        {/* Thumbnail strip at top */}
        <div className="flex bg-gray-50 border-b border-gray-200">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-1 h-5 overflow-hidden transition-all duration-200 ${
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

        {/* Main image display with fixed 4:3 aspect ratio */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
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
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
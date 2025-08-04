'use client';
import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
    title?: string;
  };
}

export function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  // Debug logging
  React.useEffect(() => {
    if (isOpen) {
      console.log('ImageModal opened with image:', image);
    }
  }, [isOpen, image]);

  // Reset states when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setImageError(false);
      setImageLoaded(false);
    }
  }, [isOpen]);

  // Handle escape key and body overflow
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Debug alert to test if component renders
  React.useEffect(() => {
    if (isOpen) {
      console.log('Modal is opening - should be visible now');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleImageError = () => {
    console.error('Failed to load image:', image.src);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', image.src);
    setImageLoaded(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px'
      }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div style={{
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        overflow: 'hidden'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative">
          {imageError ? (
            <div className="flex items-center justify-center w-full h-64 bg-gray-100 dark:bg-gray-800">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🖼️</div>
                <div className="text-sm">Image failed to load</div>
                <div className="text-xs text-gray-400 mt-1">{image.src}</div>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Loading overlay */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10">
                  <div className="text-center text-gray-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                    <div className="text-sm">Loading image...</div>
                    <div className="text-xs text-gray-400 mt-1">{image.src}</div>
                  </div>
                </div>
              )}
              
              {/* Image */}
              <img
                src={encodeURI(image.src)}
                alt={image.alt}
                className="max-w-full max-h-[90vh] object-contain"
                loading="eager"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ 
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>
          )}
          
          {/* Image Title */}
          {image.title && !imageError && imageLoaded && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <h3 className="text-lg font-medium">{image.title}</h3>
              {image.alt && image.alt !== image.title && (
                <p className="text-sm text-gray-300 mt-1">{image.alt}</p>
              )}
            </div>
          )}
        </div>

        {/* Zoom Instructions */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          Press ESC to close
        </div>
      </div>
    </div>
  );
} 
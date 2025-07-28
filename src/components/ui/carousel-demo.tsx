'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from './carousel';
import { ProductCarousel, getProductImages } from './product-carousel';

export function CarouselBasic() {
  return (
    <div className='relative w-full max-w-2xl'>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              1
            </div>
          </CarouselItem>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              2
            </div>
          </CarouselItem>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              3
            </div>
          </CarouselItem>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              4
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}

export function ProductCarouselDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Laptops & Desktops Gallery</h3>
        <ProductCarousel 
          images={getProductImages('laptops-desktops')}
          showNavigation={true}
          showIndicators={true}
          autoPlay={false}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Servers Gallery</h3>
        <ProductCarousel 
          images={getProductImages('servers')}
          showNavigation={true}
          showIndicators={true}
          autoPlay={true}
          interval={3000}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Networking Gallery</h3>
        <ProductCarousel 
          images={getProductImages('networking')}
          showNavigation={true}
          showIndicators={false}
          autoPlay={false}
        />
      </div>
    </div>
  );
} 
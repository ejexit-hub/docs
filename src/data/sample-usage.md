// Sample usage in your markdown files:

import ProductCarousel from '@site/src/components/ui/product-carousel';
import { laptops_desktops_images } from '@site/src/data/product-images';

// In your markdown file:
<ProductCarousel 
  images={laptops_desktops_images}
  title="Laptops & Desktops Gallery"
/>

// Or for a specific category:
<ProductCarousel 
  images={processors_images}
  title="Processors Gallery"
/>

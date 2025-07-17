import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { gpu_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# GPU (Graphics Processing Unit)

## Introduction
This manual helps personnel at Exit Technologies Inc. understand GPUs, ensuring clear communication with clients and team members.

## 1. Overview
GPUs handle graphical computations, significantly impacting visual performance, graphics rendering, and processing speed for graphics-intensive tasks.

### Key Types:
- **Integrated GPUs:** Built into CPUs, sufficient for basic graphical tasks.
- **Dedicated GPUs:** Separate hardware designed for intensive graphics applications such as gaming, video editing, and 3D modeling.

## 2. Key Specifications
- **Memory (VRAM):** GPU-dedicated memory, commonly from 4GB up to 24GB or more.
- **Core Count:** More cores typically translate to higher performance.
- **Clock Speed:** Measured in MHz/GHz; higher speeds enhance performance.

## 3. Common Use Cases
- Gaming: High-performance GPUs for immersive, real-time graphics.
- Professional Applications: Video editing, CAD software, 3D modeling.
- AI & Machine Learning: Specialized GPUs optimized for computational tasks.

## 4. Frequently Asked Questions
- **"Do I need a dedicated GPU?"**
  - Yes, if performing graphics-intensive tasks such as gaming, video editing, or professional design work.

- **"How much GPU memory (VRAM) do I need?"**
  - 4GB to 8GB for general use, 8GB+ for gaming or professional applications.

## 5. Practical Tips
- Identify client's specific use-case scenarios to recommend suitable GPU specifications.
- Simplify technical language to communicate GPU benefits clearly.

## 6. Additional Resources
For detailed technical specifications, refer to [Technical Cut Lines](8.1-2.3-P Technical Cut Lines.xlsb).

## Product Gallery

<ProductCarousel 
  images={gpu_images}
  title="GPU Gallery"
/>

---


## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=628871544&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>


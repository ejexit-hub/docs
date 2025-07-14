const fs = require('fs');
const path = require('path');

// Product categories mapping
const productCategories = {
  'laptops-desktops': 'Laptops & Desktops',
  'processors': 'Processors',
  'memory': 'Memory',
  'storage': 'Storage',
  'gpu': 'Graphics Cards',
  'networking': 'Networking',
  'phones': 'Phones',
  'tablets': 'Tablets',
  'servers': 'Servers',
  'cards': 'Cards',
  'drives': 'Drives'
};

// Function to generate image metadata
function generateImageMetadata(category, imageName) {
  const baseName = path.basename(imageName, path.extname(imageName));
  const title = baseName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    src: `/img/products/${category}/${imageName}`,
    alt: `${title} - ${productCategories[category]}`,
    title: title,
    description: `${title} for ${productCategories[category].toLowerCase()} category.`
  };
}

// Function to scan directory and generate image array
function scanProductImages(category) {
  const imageDir = path.join(__dirname, '..', 'static', 'img', 'products', category);
  
  if (!fs.existsSync(imageDir)) {
    console.log(`Directory not found: ${imageDir}`);
    return [];
  }
  
  const files = fs.readdirSync(imageDir);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  
  const images = files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => generateImageMetadata(category, file));
  
  return images;
}

// Function to generate import statement for a category
function generateImportStatement(category) {
  const images = scanProductImages(category);
  
  if (images.length === 0) {
    console.log(`No images found for category: ${category}`);
    return null;
  }
  
  const imagesJson = JSON.stringify(images, null, 2);
  
  return `// Auto-generated image imports for ${productCategories[category]}
const ${category.replace('-', '_')}_images = ${imagesJson};

export { ${category.replace('-', '_')}_images };`;
}

// Function to generate all import statements
function generateAllImports() {
  let allImports = '';
  
  Object.keys(productCategories).forEach(category => {
    const importStatement = generateImportStatement(category);
    if (importStatement) {
      allImports += importStatement + '\n\n';
    }
  });
  
  return allImports;
}

// Function to create a sample usage file
function createSampleUsage() {
  const sampleUsage = `// Sample usage in your markdown files:

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
`;

  return sampleUsage;
}

// Main execution
if (require.main === module) {
  console.log('=== Product Image Import Utility ===\n');
  
  // Generate all imports
  const allImports = generateAllImports();
  
  // Create the data file
  const dataFilePath = path.join(__dirname, '..', 'src', 'data', 'product-images.js');
  const dataDir = path.dirname(dataFilePath);
  
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(dataFilePath, allImports);
  console.log(`✅ Generated product image data file: ${dataFilePath}`);
  
  // Create sample usage file
  const sampleFilePath = path.join(__dirname, '..', 'src', 'data', 'sample-usage.md');
  fs.writeFileSync(sampleFilePath, createSampleUsage());
  console.log(`✅ Created sample usage file: ${sampleFilePath}`);
  
  console.log('\n=== Folder Structure Created ===');
  Object.keys(productCategories).forEach(category => {
    const imageDir = path.join(__dirname, '..', 'static', 'img', 'products', category);
    const imageCount = scanProductImages(category).length;
    console.log(`📁 ${category}/ - ${imageCount} images`);
  });
  
  console.log('\n=== Next Steps ===');
  console.log('1. Copy your product images to the appropriate folders in static/img/products/');
  console.log('2. Run this script again to regenerate the import data');
  console.log('3. Use the generated imports in your markdown files');
  console.log('4. Check sample-usage.md for examples');
}

module.exports = {
  scanProductImages,
  generateImageMetadata,
  generateImportStatement,
  productCategories
}; 
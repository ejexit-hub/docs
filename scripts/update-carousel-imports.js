import fs from 'fs';
import path from 'path';

const productTrainingDir = path.join(process.cwd(), 'docs/product-training');

const files = [
  'cards.md',
  'drives.md',
  'gpu.md',
  'memory.md',
  'networking.md',
  'phones.md',
  'processors.md',
  'servers.md',
  'storage.md',
  'tablets.md'
];

const categories = {
  'cards': 'cards',
  'drives': 'drives',
  'gpu': 'gpu',
  'memory': 'memory',
  'networking': 'networking',
  'phones': 'phones',
  'processors': 'processors',
  'servers': 'servers',
  'storage': 'storage',
  'tablets': 'tablets'
};

files.forEach(file => {
  const filePath = path.join(productTrainingDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const category = categories[file.replace('.md', '')];

  // Update the import statement
  content = content.replace(
    /import ProductCarousel from '@site\/src\/components\/ui\/product-carousel';/g,
    `import ProductCarousel, { getProductImages } from '@site/src/components/ui/product-carousel';`
  );

  // Update the ProductCarousel usage
  content = content.replace(
    /<ProductCarousel[\s\S]*?\/>/g,
    `<ProductCarousel 
  images={getProductImages('${category}')}
  showNavigation={true}
  showIndicators={true}
  autoPlay={false}
  className="mb-8"
/>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${file}`);
}); 
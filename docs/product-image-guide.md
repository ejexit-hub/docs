# Product Image Import Guide

This guide explains how to easily import and manage product images for your Docusaurus documentation site.

## 📁 Folder Structure

Your product images are organized in the following structure:

```
static/img/products/
├── laptops-desktops/
├── processors/
├── memory/
├── storage/
├── gpu/
├── networking/
├── phones/
├── tablets/
├── servers/
├── cards/
└── drives/
```

## 🚀 Quick Start

### Step 1: Copy Your Images

**Option A: Use the Batch Script (Windows)**
```bash
# Run the copy utility
scripts/copy-product-images.bat
```

**Option B: Manual Copy**
1. Copy your image files to the appropriate folder in `static/img/products/[category]/`
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

### Step 2: Generate Import Data

After copying your images, run:
```bash
node scripts/import-product-images.js
```

This will:
- Scan all product image folders
- Generate metadata for each image
- Create import statements in `src/data/product-images.js`

### Step 3: Use in Your Markdown Files

In your product training markdown files, use the generated imports:

```jsx
import ProductCarousel from '@site/src/components/ui/product-carousel';
import { laptops_desktops_images } from '@site/src/data/product-images';

<ProductCarousel 
  images={laptops_desktops_images}
  title="Laptops & Desktops Gallery"
/>
```

## 📝 Image Naming Convention

For best results, name your images descriptively:
- ✅ `dell-latitude-5520.jpg`
- ✅ `macbook-pro-m2.jpg`
- ✅ `hp-elitedesk-800.jpg`
- ❌ `IMG_001.jpg`
- ❌ `image1.png`

The script will automatically convert filenames to titles:
- `dell-latitude-5520.jpg` → "Dell Latitude 5520"
- `macbook-pro-m2.jpg` → "Macbook Pro M2"

## 🔄 Updating Images

When you add, remove, or rename images:

1. Copy the new images to the appropriate folder
2. Run the import script again:
   ```bash
   node scripts/import-product-images.js
   ```
3. The markdown files will automatically use the updated images

## 📊 Available Categories

| Category | Folder Name | Display Name |
|----------|-------------|--------------|
| Laptops & Desktops | `laptops-desktops` | Laptops & Desktops |
| Processors | `processors` | Processors |
| Memory | `memory` | Memory |
| Storage | `storage` | Storage |
| Graphics Cards | `gpu` | Graphics Cards |
| Networking | `networking` | Networking |
| Phones | `phones` | Phones |
| Tablets | `tablets` | Tablets |
| Servers | `servers` | Servers |
| Cards | `cards` | Cards |
| Drives | `drives` | Drives |

## 🛠️ Advanced Usage

### Custom Image Metadata

If you need custom titles or descriptions, you can modify the generated data in `src/data/product-images.js`:

```javascript
const laptops_desktops_images = [
  {
    src: "/img/products/laptops-desktops/dell-latitude.jpg",
    alt: "Dell Latitude 5520 - Laptops & Desktops",
    title: "Dell Latitude 5520", // Custom title
    description: "Business laptop with Intel i7 processor and 16GB RAM" // Custom description
  }
];
```

### Multiple Image Sets

You can create multiple image sets for the same category:

```javascript
// In src/data/product-images.js
const laptops_desktops_business = [/* business laptops */];
const laptops_desktops_gaming = [/* gaming laptops */];

export { laptops_desktops_business, laptops_desktops_gaming };
```

Then use them separately in your markdown:

```jsx
import { laptops_desktops_business, laptops_desktops_gaming } from '@site/src/data/product-images';

<ProductCarousel images={laptops_desktops_business} title="Business Laptops" />
<ProductCarousel images={laptops_desktops_gaming} title="Gaming Laptops" />
```

## 🐛 Troubleshooting

### Images Not Showing
1. Check that images are in the correct folder
2. Verify file extensions are supported (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`)
3. Run the import script again
4. Check browser console for errors

### Import Errors
1. Make sure the import path is correct: `@site/src/data/product-images`
2. Verify the category name matches the export name
3. Check that the data file was generated successfully

### Performance Tips
1. Optimize images before uploading (compress, resize if needed)
2. Use WebP format for better compression
3. Keep image files under 1MB for faster loading

## 📞 Support

If you encounter issues:
1. Check the console output when running the import script
2. Verify folder permissions
3. Ensure all dependencies are installed
4. Check the generated `src/data/product-images.js` file for syntax errors 
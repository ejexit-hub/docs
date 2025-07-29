---
id: adding-your-images
title: Adding Your Work Instruction Images
sidebar_label: Adding Images
description: How to add your own images to work instructions
---

# Adding Your Work Instruction Images

## 🖼️ **Quick Setup**

1. **Add your images** to `static/img/work-instructions/`
2. **Update the markdown files** to reference your images
3. **Use this syntax**:

```markdown
![Step Description](/img/work-instructions/your-image.jpg)
```

## 📁 **Image Organization**

### Recommended Structure:
```
static/img/work-instructions/
├── process-a/
│   ├── step1-setup.jpg
│   ├── step2-process.jpg
│   └── step3-completion.jpg
├── process-b/
│   ├── step1-prep.jpg
│   ├── step2-main.jpg
│   └── troubleshoot.jpg
└── common/
    ├── safety-equipment.jpg
    ├── tools.jpg
    └── quality-check.jpg
```

## 🔄 **Updating Existing Files**

### Current Placeholder Images:
The sample files currently use laptop/desktop images as placeholders. To use your own images:

1. **Replace the image paths** in your markdown files
2. **Use consistent naming** for easy maintenance
3. **Keep file sizes under 500KB** for fast loading

### Example Update:
```markdown
# Change from:
![Step 1 - Safety Setup](/img/products/laptops-desktops/IMG_2663.JPG)

# To:
![Step 1 - Safety Setup](/img/work-instructions/your-actual-image.jpg)
```

## 📱 **Image Best Practices**

### File Formats:
- **JPG/JPEG**: For photographs (recommended)
- **PNG**: For screenshots with text
- **WebP**: For better compression

### Sizing:
- **Width**: 600-800px (optimal)
- **Aspect ratio**: 4:3 or 16:9
- **File size**: Under 500KB

### Naming Convention:
```
step1-safety-setup.jpg
step2-equipment-prep.jpg
step3-main-process.jpg
troubleshoot-issue1.jpg
```

## 🚀 **Quick Start**

1. **Copy your images** to `static/img/work-instructions/`
2. **Update one markdown file** to test
3. **Check the website** at http://localhost:3000
4. **Repeat** for all your work instructions

## ✅ **Testing Your Images**

After adding images:
1. **Save your markdown files**
2. **Check the browser** - images should appear automatically
3. **Test on mobile** - images are responsive
4. **Verify hover effects** - images should scale slightly on hover

## 🎨 **Styling Features**

Your images automatically get:
- **Rounded corners** (12px border radius)
- **Drop shadows** for depth
- **Hover effects** (slight scale and enhanced shadow)
- **Brand-colored borders** (ExitTech green)
- **Responsive sizing** for all devices

## 📞 **Need Help?**

- Check the [Work Instructions Guide](/docs/work-instructions/README)
- Review the [Sample Work Instruction](/docs/work-instructions/sample-work-instruction)
- Contact the documentation team
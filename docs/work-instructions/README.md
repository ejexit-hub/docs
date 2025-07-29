---
id: work-instructions-guide
title: Creating Work Instructions Guide
sidebar_label: Creating Work Instructions
description: How to create and organize work instructions with pictures
---

# Creating Work Instructions Guide

This guide shows you how to create professional work instructions with pictures using markdown files.

## 📁 **File Structure**

```
docs/
├── work-instructions/
│   ├── _category_.json
│   ├── intro.md (main overview page)
│   ├── README.md (this guide)
│   ├── sample-work-instruction.md
│   ├── equipment-setup-example.md
│   ├── safety-procedures.md
│   └── your-new-instruction.md

static/
└── img/
    └── work-instructions/
        ├── step1-safety-setup.jpg
        ├── step2-equipment.jpg
        ├── step3-process.jpg
        ├── step4-quality.jpg
        └── step5-completion.jpg
```

## 🖼️ **Adding Pictures**

### Method 1: Basic Image Syntax
```markdown
![Step Description](/img/work-instructions/your-image.jpg)
```

### Method 2: With Caption
```markdown
![Step Description](/img/work-instructions/your-image.jpg "Optional caption")
```

### Method 3: Responsive Images
```markdown
<img src="/img/work-instructions/your-image.jpg" alt="Step Description" width="600" height="400" />
```

## 📝 **Creating a New Work Instruction**

1. **Create the markdown file:**
   ```bash
   # In docs/work-instructions/
   touch your-instruction-name.md
   ```

2. **Add the frontmatter:**
   ```markdown
   ---
   id: your-instruction-name
   title: Your Instruction Title
   sidebar_label: Short Title
   description: Brief description
   ---
   ```

3. **Structure your content:**
   ```markdown
   # Your Instruction Title
   
   Brief overview of the process.
   
   ## Prerequisites
   
   - Required tools
   - Safety equipment
   - Materials needed
   
   ## Step 1: First Step
   
   Description of the step.
   
   ![Step 1 Image](/img/work-instructions/step1.jpg)
   
   **Important Notes:**
   - Key point 1
   - Key point 2
   
   ## Step 2: Second Step
   
   Next step description.
   
   ![Step 2 Image](/img/work-instructions/step2.jpg)
   ```

## 🎨 **Styling Features**

Your work instructions automatically get:

- **Numbered steps** with colored circles
- **Enhanced images** with hover effects
- **Color-coded sections** (prerequisites, steps, troubleshooting)
- **Responsive design** for mobile devices
- **Brand colors** (ExitTech green and blue)

## 📱 **Mobile Optimization**

Images automatically:
- Scale to fit mobile screens
- Maintain aspect ratio
- Load quickly with optimized sizing

## 🔧 **Advanced Features**

### Accordion Sections
```markdown
<details>
<summary>Expandable Section</summary>

![Image in accordion](/img/work-instructions/accordion-image.jpg)

Content here...
</details>
```

### Admonitions
```markdown
:::warning Safety Alert
Important safety information
:::

:::tip Best Practice
Helpful tip
:::

:::note Important Note
Key information
:::
```

### Links to Other Documents
```markdown
- [Related Document](/docs/related-doc)
- [Equipment Manual](/docs/equipment-manual)
```

## 📊 **Image Best Practices**

### File Formats
- **JPG/JPEG**: For photographs (recommended)
- **PNG**: For screenshots with text
- **WebP**: For better compression

### Image Sizing
- **Width**: 600-800px (optimal)
- **Aspect ratio**: 4:3 or 16:9
- **File size**: Under 500KB

### Naming Convention
```
step1-safety-setup.jpg
step2-equipment-prep.jpg
step3-main-process.jpg
troubleshoot-issue1.jpg
```

## 🚀 **Quick Start Template**

Copy this template for new work instructions:

```markdown
---
id: your-instruction-name
title: Your Instruction Title
sidebar_label: Short Title
description: Brief description
---

# Your Instruction Title

Brief overview of the process.

## Prerequisites

- Required tools
- Safety equipment
- Materials needed

## Step 1: Initial Setup

Description of the first step.

![Step 1 - Setup](/img/work-instructions/step1-setup.jpg)

**Important Notes:**
- Key point 1
- Key point 2

## Step 2: Main Process

Description of the main process.

![Step 2 - Process](/img/work-instructions/step2-process.jpg)

**Process Details:**
1. Detail 1
2. Detail 2

## Troubleshooting

<details>
<summary>Common Issue</summary>

![Troubleshooting](/img/work-instructions/troubleshoot.jpg)

**Solution:**
- Step 1
- Step 2
</details>

## Safety Reminders

:::warning Safety First
Always follow safety protocols.
:::

## Related Documents

- [Related Doc 1](/docs/doc1)
- [Related Doc 2](/docs/doc2)
```

## 📋 **Organization Tips**

1. **Group related instructions** in subdirectories
2. **Use consistent naming** for files and images
3. **Include version numbers** in titles if needed
4. **Add tags or categories** for easy searching
5. **Keep images organized** in logical folders

## 🔄 **Updating Instructions**

When updating work instructions:

1. **Version your changes** in the title or description
2. **Update images** if procedures change
3. **Add change notes** at the bottom
4. **Notify relevant teams** of updates

## 📞 **Need Help?**

- Check the [main Work Instructions page](/docs/work-instructions/intro)
- Review existing examples for guidance
- Contact the documentation team for assistance
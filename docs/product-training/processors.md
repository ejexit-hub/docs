import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { processors_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Processors (CPU)

## Introduction
This manual helps personnel at Exit Technologies Inc. understand processors (CPUs), facilitating clear client and internal communication.

## 1. Overview
The Central Processing Unit (CPU) is the core component that performs calculations and processes instructions, significantly influencing a computer's performance.

:::info **Key Types** (Click to expand)

- **Consumer CPUs:** Suitable for general computing tasks, ranging from everyday use to gaming.
- **Server CPUs:** Optimized for multitasking, reliability, and performance in data centers and enterprise environments.

:::

## 2. Key Specifications

:::tip **Important Specs** (Click to expand)

- **Core Count:** More cores allow efficient multitasking and enhanced performance.
- **Clock Speed:** Measured in GHz; higher speeds enable faster processing.
- **Cache Size:** Temporary storage for rapid data access; larger caches improve performance.
- **Socket Type:** The physical interface that mates the CPU to the motherboard; matching socket types are essential for hardware compatibility and future upgrade options.

:::

## 3. Common Use Cases

:::info **Usage Scenarios** (Click to expand)

- General Computing: Mid-range CPUs (Intel i5, AMD Ryzen 5).
- Gaming/Creative Tasks: High-end CPUs (Intel i7/i9, AMD Ryzen 7/9).
- Servers/Data Centers: Specialized server CPUs (Intel Xeon, AMD EPYC).

:::

## 4. Frequently Asked Questions
- **"How many cores do I need?"**
  - 4 to 6 cores for general tasks; 8+ cores for gaming, creative work, or servers.

- **"What's more important: clock speed or core count?"**
  - Core count for multitasking and heavy workloads; clock speed for single-task performance.

## 5. Practical Tips

:::tip **Best Practices** (Click to expand)

- Clearly define the client's usage scenario to recommend suitable CPU specifications.
- Simplify technical language to effectively communicate processor benefits.

:::

## 6. Additional Resources
For detailed technical specifications, refer to [Technical Cut Lines](8.1-2.3-P Technical Cut Lines.xlsb).

## Product Gallery

<ProductCarousel 
  images={processors_images}
  title="Processors (CPU) Gallery"
/>

## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnkw0fLQVW9RiVoUQbeJiRhh06xbjChfc0LEM-G3fscA9hEMNxbiibHi0HKW9eWQ/pubhtml?widget=true&headers=false&gid=882296196&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowFullScreen
></iframe>
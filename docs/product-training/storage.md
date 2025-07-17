import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { storage_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Storage Units

## Introduction
This manual helps personnel at Exit Technologies Inc. understand storage units, ensuring effective communication with clients and team members.

## 1. Overview
Storage units refer to devices and systems designed to store digital data securely and efficiently.

### Key Types:
- **Direct Attached Storage (DAS):** Connected directly to a single computer or server.
- **Network Attached Storage (NAS):** Accessible over a network, ideal for sharing files between multiple devices.
- **Storage Area Network (SAN):** High-speed network storage providing data access to servers and enterprise-level systems.

## 2. Key Specifications
- **Capacity:** Measured from gigabytes (GB) to petabytes (PB).
- **Speed:** Determined by drive type (SSD or HDD) and connectivity.
- **Connectivity:** USB, Ethernet, Fibre Channel, iSCSI, etc.

## 3. Common Use Cases
- DAS: Suitable for individual workstations or servers requiring direct access.
- NAS: Ideal for small to medium businesses needing shared file access.
- SAN: Enterprise environments requiring high-speed, reliable, large-scale storage.

## 4. Frequently Asked Questions
- **"Should I choose NAS or SAN?"**
  - NAS for smaller networks needing simple shared storage; SAN for larger, performance-critical environments.

- **"What capacity storage do I need?"**
  - Based on data volume; small businesses typically require terabytes (TB), enterprises may require petabytes (PB).

## 5. Practical Tips
- Clarify client's storage needs (speed, accessibility, capacity) to recommend appropriate storage units.
- Use straightforward language when discussing the advantages of different storage solutions.

## 6. Additional Resources
For detailed technical specifications, refer to [Technical Cut Lines](8.1-2.3-P Technical Cut Lines.xlsb).

## Product Gallery

<ProductCarousel 
  images={storage_images}
  title="Storage Units Gallery"
/>

---


## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=708310103&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>


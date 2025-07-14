import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import ProductCarousel from '@site/src/components/ui/product-carousel';
import { drives_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Drives

## Introduction
This manual helps personnel at Exit Technologies Inc. understand drives (storage drives), facilitating clear and effective communication.

## 1. Overview
Drives are essential components for data storage and retrieval in computers and servers.

### Key Types:
- **Hard Disk Drives (HDDs):** Traditional drives, offering large storage capacity economically.
- **Solid State Drives (SSDs):** Provide faster data access speeds and improved reliability compared to HDDs.
- **Hybrid Drives (SSHD):** Combine the storage capacity of HDDs with SSD performance for frequently accessed data.

## 2. Key Specifications
- **Capacity:** Ranges from a few GB to multiple TB.
- **Speed:** SSDs offer significantly faster read/write speeds compared to HDDs.
- **Interface Type:** SATA, SAS, NVMe (with NVMe offering the fastest performance).

## 3. Common Use Cases
- HDDs: Cost-effective large-scale storage (archives, backups).
- SSDs: Operating systems, applications requiring rapid data access.
- Hybrid Drives: Balance between storage capacity and speed.

## 4. Frequently Asked Questions
- **"Should I choose an SSD or HDD?"**
  - SSD for performance, HDD for budget-friendly large-capacity storage.

- **"What's NVMe, and is it important?"**
  - NVMe drives offer superior speed and performance, important for intensive computing tasks.

## 5. Practical Tips
- Determine client storage requirements (performance vs. capacity vs. budget) to recommend suitable drive types.
- Use straightforward language to clearly explain drive differences.

## 6. Additional Resources
For detailed technical specifications, refer to [Technical Cut Lines](8.1-2.3-P Technical Cut Lines.xlsb).

## Product Gallery

<ProductCarousel 
  images={drives_images}
  title="Storage Drives Gallery"
/>

---

## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=255372992&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowFullScreen
></iframe>


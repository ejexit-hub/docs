import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { Accordion } from '@site/src/components/Accordion';
import { storage_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Storage Units (SAN, NAS, DAS)

## Introduction
This manual helps personnel at Exit Technologies Inc. understand storage units, their internal components, and highlights opportunities to recover valuable components for resale.

## 1. Overview
Storage units provide centralized data storage, backup, and file sharing capabilities, crucial for managing large volumes of enterprise data.

### Types of Storage Units

<Accordion title="Network Attached Storage (NAS)" description="Networked file-level storage" type="info">
  <p><strong>Overview:</strong> NAS provides shared file storage accessible over networks.</p>
  <p><strong>Common Valuable Components:</strong> Hard drives (SATA/SAS), SSDs, power supplies, motherboards, RAM.</p>
  <p><strong>Examples:</strong> Synology DiskStation, QNAP Turbo NAS.</p>
  <p><strong>Best For:</strong> Small to medium businesses, file sharing, backup.</p>
</Accordion>

<Accordion title="Storage Area Networks (SAN)" description="High-performance, block-level data storage" type="tip">
  <p><strong>Overview:</strong> SANs offer high-performance, scalable storage for enterprise applications.</p>
  <p><strong>Common Valuable Components:</strong> Fibre Channel controllers, SSDs, HDDs, network modules, power supplies.</p>
  <p><strong>Examples:</strong> Dell EMC PowerStore, HPE 3PAR StoreServ.</p>
  <p><strong>Best For:</strong> Data centers, enterprise virtualization, databases.</p>
</Accordion>

<Accordion title="Direct Attached Storage (DAS)" description="Directly connected storage devices" type="note">
  <p><strong>Overview:</strong> Storage directly connected to servers or workstations, offering simplicity and performance.</p>
  <p><strong>Common Valuable Components:</strong> SSDs, HDDs, RAID controllers, power supplies.</p>
  <p><strong>Examples:</strong> Dell PowerVault, HPE MSA storage arrays.</p>
  <p><strong>Best For:</strong> Small businesses, local storage needs, high-performance direct storage.</p>
</Accordion>

## 2. Valuable Internal Components
Knowing valuable internal components helps maximize returns.

<Accordion title="Solid-State Drives (SSDs)" description="High-performance flash storage" type="info">
  <p><strong>Description:</strong> Enterprise SSDs, especially NVMe or SAS, have excellent resale value.</p>
  <p><strong>Identification:</strong> Capacity, interface (SATA, NVMe, SAS), health condition, brand.</p>
</Accordion>

<Accordion title="Hard Disk Drives (HDDs)" description="Reliable mechanical storage drives" type="info">
  <p><strong>Description:</strong> Large-capacity enterprise-grade HDDs retain consistent market value.</p>
  <p><strong>Identification:</strong> Capacity, speed (RPM), interface (SAS/SATA), brand.</p>
</Accordion>

<Accordion title="RAID Controllers" description="Hardware for storage management" type="info">
  <p><strong>Description:</strong> Controllers used in enterprise storage systems for redundancy and performance.</p>
  <p><strong>Identification:</strong> Model, RAID levels supported, interface (SAS, SATA).</p>
</Accordion>

<Accordion title="Fibre Channel & Network Modules" description="Connectivity components with high demand" type="info">
  <p><strong>Description:</strong> Fibre Channel and high-speed network modules essential for SAN performance.</p>
  <p><strong>Identification:</strong> Speed (8Gbps, 16Gbps, 32Gbps), compatibility, manufacturer.</p>
</Accordion>

## 3. Key Specifications for Storage Unit Assessment

### SSD/HDD Specifications
- Capacity and Health Status
- Interface (SAS, SATA, NVMe)
- Speed (RPM for HDDs)

### Controller Specifications
- RAID support
- Compatibility (SAS, SATA)

### Connectivity Specifications
- Fibre Channel speed (Gbps)
- Network interface speed (GbE)

### Power Supplies
- Wattage
- Redundancy and Compatibility

## 4. Common Use Cases

### Enterprise Data Centers
Centralized, high-performance storage for critical business data.

### Backup & Disaster Recovery
Reliable systems ensuring data integrity and availability.

### Virtualization Environments
Scalable and flexible storage infrastructure for virtualized systems.

## 5. Frequently Asked Questions
- **"How do I identify valuable storage unit components?"**
  - Focus on enterprise-grade SSDs/HDDs, RAID controllers, and Fibre Channel/network modules.

- **"Which storage type typically has the highest resale value?"**
  - SAN and enterprise-grade NAS units usually yield higher resale values due to advanced features and components.

## 6. Practical Tips
- Accurately document all storage device specifications and conditions upon recovery.
- Ensure safe handling and storage of drives and controllers to maintain resale value.

## 7. Additional Resources
Refer to [Technical Cut Lines](link-to-document) for detailed technical specifications and valuations.

## Product Gallery

<ProductCarousel 
  images={storage_images}
  title="Storage Unit Gallery"
/>

---


## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=1752306421&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>


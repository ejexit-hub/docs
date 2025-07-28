import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { Accordion, AccordionGroup } from '@site/src/components/Accordion';
import { storage_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Storage Gear (Enterprise & Data Center)

## Introduction
This manual helps Exit Technologies personnel understand enterprise‑class storage systems and pinpoint high‑value components for reuse or resale.

## 1. Overview
Enterprise storage gear securely houses and serves data for applications, virtualization stacks, backups, and big‑data analytics. From ultra‑fast all‑flash SAN arrays to long‑term tape libraries, these devices are core to modern IT infrastructure—and their parts can carry significant aftermarket value.

### Types of Storage Equipment

<AccordionGroup>
<Accordion title="SAN Storage Arrays" description="Block‑level storage accessed over Fibre Channel or iSCSI" type="info">
  <p><strong>Overview:</strong> Provide high‑throughput, low‑latency block storage for servers and virtualization clusters.</p>
  <p><strong>Drive Options:</strong> NVMe, SAS SSD, 15K/10K SAS HDD.</p>
  <p><strong>Valuable Components:</strong> Dual controllers, NVMe SSDs, Fibre Channel adapters, cache/NVRAM modules.</p>
  <p><strong>Examples:</strong> Dell EMC PowerStore 5000, NetApp AFF A400, HPE Alletra 6000.</p>
  <p><strong>Best For:</strong> Mission‑critical databases, VMware/Hyper‑V, high‑IOPS workloads.</p>
</Accordion>

<Accordion title="NAS Appliances" description="File‑level storage (NFS/SMB) for shared documents and backups" type="tip">
  <p><strong>Overview:</strong> Serve files to users or applications over Ethernet using SMB/CIFS or NFS.</p>
  <p><strong>Form Factors:</strong> 1U‑4U rack units, scale‑out clusters.</p>
  <p><strong>Valuable Components:</strong> High‑capacity HDDs, NVMe caching tiers, 10/25/40 GbE NICs, redundant PSUs.</p>
  <p><strong>Examples:</strong> NetApp FAS2750, QNAP TS‑h1290FX, Synology SA6500.</p>
  <p><strong>Best For:</strong> User file shares, video editing, backup targets.</p>
</Accordion>

<Accordion title="Direct‑Attached Storage (DAS) Shelves" description="Disk enclosures connected via SAS or NVMe" type="note">
  <p><strong>Overview:</strong> JBOD or RAID shelves directly attached to a server or RAID controller.</p>
  <p><strong>Valuable Components:</strong> 12 Gb SAS/NVMe SSDs, 18‑22 TB enterprise HDDs, high‑speed SAS HBAs.</p>
  <p><strong>Examples:</strong> Dell EMC MD1420, HPE D3710, Supermicro JBOF.</p>
  <p><strong>Best For:</strong> Local bulk storage, backup repositories, video surveillance.</p>
</Accordion>

<Accordion title="Tape Libraries" description="Automated LTO tape loaders for archival" type="info">
  <p><strong>Overview:</strong> Provide cost‑effective, long‑term backup and compliance storage.</p>
  <p><strong>Valuable Components:</strong> LTO‑8/9 drives, robotics assemblies, magazines, SAS/FC interfaces.</p>
  <p><strong>Examples:</strong> Quantum Scalar i6000, HPE StoreEver MSL3040, IBM TS4500.</p>
  <p><strong>Best For:</strong> Off‑site backups, cold storage, regulatory archives.</p>
</Accordion>

<Accordion title="Object Storage Systems" description="Scale‑out clusters for S3‑compatible data" type="tip">
  <p><strong>Overview:</strong> Store unstructured data with high durability and horizontal scalability.</p>
  <p><strong>Valuable Components:</strong> Dense HDD nodes, erasure‑coding controllers, 25/100 GbE NICs.</p>
  <p><strong>Examples:</strong> Dell ECS, NetApp StorageGRID, MinIO appliance builds.</p>
  <p><strong>Best For:</strong> Cloud‑native apps, backups, media repositories.</p>
</Accordion>
</AccordionGroup>

## 2. Valuable Internal Components

<AccordionGroup>
<Accordion title="Enterprise SSDs & HDDs" description="High‑capacity, high‑endurance drives" type="info">
  <p><strong>Description:</strong> NVMe and SAS SSDs (3.84 TB–15.36 TB) and helium 18–22 TB SAS HDDs command strong resale prices.</p>
  <p><strong>Identification:</strong> Interface, capacity, DWPD/MTBF ratings, manufacturer firmware.</p>
</Accordion>

<Accordion title="Storage Controllers" description="Dual‑active or active/standby controllers" type="info">
  <p><strong>Description:</strong> Handle RAID, data services, and failover. Models with fast CPUs and large cache bring premium value.</p>
  <p><strong>Identification:</strong> Model/PN, cache size, supported protocols (FC/iSCSI/NVMe‑oF).</p>
</Accordion>

<Accordion title="Cache & NVRAM Modules" description="Battery‑backed or super‑cap flash modules" type="info">
  <p><strong>Description:</strong> Protect write cache and improve latency; often proprietary and expensive.</p>
  <p><strong>Identification:</strong> Capacity (GB), super‑cap or battery status, firmware level.</p>
</Accordion>

<Accordion title="Host Bus Adapters (HBAs) & NICs" description="Fibre Channel or Ethernet connectivity" type="info">
  <p><strong>Description:</strong> 16/32 Gb FC HBAs, 25/40/100 GbE cards, and NVMe‑oF adapters are highly sought after.</p>
  <p><strong>Identification:</strong> Data rate, port count, SFP/QSFP presence, part number.</p>
</Accordion>

<Accordion title="Power & Cooling Modules" description="Hot‑swap PSUs and fan packs" type="info">
  <p><strong>Description:</strong> Redundant titanium‑rated PSUs (1.6‑3 kW) and high‑CFM fan trays are critical spares.</p>
  <p><strong>Identification:</strong> Wattage, airflow direction, vendor PN.</p>
</Accordion>
</AccordionGroup>

## 3. Key Specifications for Storage Assessment

### Capacity & Density
- Raw vs. usable TB
- Drive mix (SSD/HDD) and form factor (2.5″ / 3.5″)

### Performance
- IOPS (random) and throughput (MB/s)
- Latency (μs) and cache size

### Connectivity
- FC/iSCSI/NVMe‑oF port speeds
- 10/25/40/100 GbE for NAS/object clusters

### Data Services & Licensing
- Snapshots, replication, deduplication, compression
- Active software licenses/support contracts

## 4. Common Use Cases

### Primary Block Storage
High‑performance SAN arrays for databases and VMs.

### File & Collaboration Shares
NAS appliances serving SMB/NFS workloads.

### Backup & Archive
Tape libraries or dense HDD arrays for cold data.

### Big‑Data & Object Stores
Scale‑out systems for analytics, video, and cloud storage.

## 5. Frequently Asked Questions

<AccordionGroup>
<Accordion title="What’s the difference between SAN and NAS?" description="Block vs. file storage" type="info">
  <p>SAN provides block‑level LUNs to servers (appears as local disks), typically over Fibre Channel or iSCSI. NAS serves file shares (SMB/NFS) over Ethernet, ideal for user data and backups.</p>
</Accordion>

<Accordion title="How can I check drive health before resale?" description="SMART and vendor tools" type="tip">
  <p>Pull SMART data (reallocated sectors, wear leveling, power‑on hours) or use vendor diagnostics (e.g., NetApp System Manager, Dell EMC Unisphere) to validate drive longevity.</p>
</Accordion>

<Accordion title="Which storage arrays retain the best resale value?" description="All‑flash SANs and high‑capacity NAS systems" type="note">
  <p>Recent‑generation all‑flash arrays (NVMe‑based) and large‑capacity NAS clusters command higher prices due to performance and demand for dense storage.</p>
</Accordion>

<Accordion title="How do I securely wipe drives?" description="NIST 800‑88, vendor secure erase, or physical shred" type="info">
  <p>Use vendor secure‑erase commands for SSDs/NVMe (Sanitize, Format NVM). For HDDs, NIST 800‑88 multi‑pass overwrite or a degausser works. Physically shred drives that fail wipe verification.</p>
</Accordion>

<Accordion title="Can expired support contracts impact resale?" description="Yes—especially for arrays with feature licenses" type="warning">
  <p>Arrays with active licenses/software updates fetch a premium. Lapsed contracts can lower value, but buyers may still pay more if relicensing is cheaper than new hardware.</p>
</Accordion>

<Accordion title="What’s “endurance” and why does it matter for SSD resale?" description="DWPD ratings indicate lifespan" type="info">
  <p>Drive Writes Per Day (DWPD) gauges how many full writes an SSD can handle over its warranty. Higher DWPD (e.g., 3–10 DWPD) signals enterprise‑grade endurance and bumps resale value.</p>
</Accordion>
</AccordionGroup>

## 6. Practical Tips
- Inventory drives by model and firmware; mismatched firmware can hurt cluster value.
- Keep rail kits, bezels, and expansion cables—they speed up resale and cut deductions.
- Photograph controller part numbers and license keys before decommissioning.

## 7. Additional Resources
Refer to the [Storage Cut Lines](link‑to‑document) for SKU‑level specs, endurance ratings, and price trends.

## Product Gallery

<ProductCarousel
  images={storage_images}
  title="Storage Gear Gallery"
/>

---

## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=3456789012&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Storage Cutlines"
  allowfullscreen
></iframe>

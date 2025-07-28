import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { Accordion, AccordionGroup } from '@site/src/components/Accordion';
import { laptops_desktops_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Laptops & Desktops (Enterprise & Consumer)

## Introduction
This manual helps Exit Technologies personnel understand enterprise‑grade laptops and desktops, highlighting components with the greatest resale or recovery value.

## 1. Overview
Laptops and desktops power day‑to‑day productivity, creative workloads, gaming, and specialized engineering tasks. From ultra‑portable ultrabooks to high‑end tower workstations, these systems contain valuable CPUs, GPUs, memory, and storage that often retain strong aftermarket demand.

### Types of Laptops & Desktops

<AccordionGroup>
<Accordion title="Business Laptops" description="Enterprise‑focused notebooks with security and manageability" type="info">
  <p><strong>Overview:</strong> Designed for corporate fleets—lightweight, durable, with TPM chips and vPro or AMD Pro management.</p>
  <p><strong>Key Specs:</strong> 13″–15″ displays, Intel Core i5/i7 P‑series or AMD Ryzen Pro, PCIe 4.0 SSDs.</p>
  <p><strong>Valuable Components:</strong> LPDDR5 RAM, PCIe 4.0 NVMe SSDs, batteries, Wi‑Fi 6E cards.</p>
  <p><strong>Examples:</strong> Dell Latitude 7440, Lenovo ThinkPad T14 Gen 4, HP EliteBook 840 G11.</p>
  <p><strong>Best For:</strong> Mobile professionals, secure enterprise deployments.</p>
</Accordion>

<Accordion title="Mobile Workstations" description="Portable systems with powerful CPUs & GPUs for CAD/3D" type="tip">
  <p><strong>Overview:</strong> Feature workstation‑class GPUs (NVIDIA RTX A‑series), ECC RAM options, and ISV certifications.</p>
  <p><strong>Valuable Components:</strong> RTX A2000/A3000 GPUs, high‑core‑count Intel HX/AMD Threadripper PRO CPUs, ECC SO‑DIMMs.</p>
  <p><strong>Examples:</strong> Lenovo ThinkPad P1 Gen 7, HP ZBook Fury 16 G11, Dell Precision 7680.</p>
  <p><strong>Best For:</strong> Engineers, architects, content creators.</p>
</Accordion>

<Accordion title="Gaming Laptops" description="High‑refresh displays and discrete GPUs" type="note">
  <p><strong>Overview:</strong> Prioritize graphics performance and thermal design; often feature RGB keyboards.</p>
  <p><strong>Valuable Components:</strong> NVIDIA RTX 40‑series mobile GPUs, QHD 240 Hz panels, high‑wattage GaN chargers.</p>
  <p><strong>Examples:</strong> ASUS ROG Zephyrus G16, MSI Stealth 16 Studio, Razer Blade 16.</p>
  <p><strong>Best For:</strong> Gamers, VR developers, streaming creators.</p>
</Accordion>

<Accordion title="Ultrabooks / Thin‑and‑Light" description="Sub‑1 kg ultra‑portable notebooks" type="info">
  <p><strong>Overview:</strong> Emphasize battery life, fanless or low‑noise cooling, and premium build (CNC aluminum, carbon fiber).</p>
  <p><strong>Valuable Components:</strong> OLED touch displays, soldered LPDDR5X RAM, high‑capacity Li‑Poly batteries.</p>
  <p><strong>Examples:</strong> Apple MacBook Air M3, Dell XPS 13 Plus, HP Spectre x360 14.</p>
  <p><strong>Best For:</strong> Executives, frequent travelers, students.</p>
</Accordion>

<Accordion title="All‑in‑One (AIO) Desktops" description="Display and PC integrated into a single chassis" type="tip">
  <p><strong>Overview:</strong> Reduce cable clutter and save desk space; some offer touchscreen and adjustable stands.</p>
  <p><strong>Valuable Components:</strong> 27″ 5K panels, mobile‑class CPUs/GPUs, low‑profile DDR5 SODIMMs.</p>
  <p><strong>Examples:</strong> Apple iMac 24″ M3, Dell OptiPlex 7410 AIO, Lenovo ThinkCentre M90a Gen 4.</p>
  <p><strong>Best For:</strong> Front‑office, retail points of sale, education.</p>
</Accordion>

<Accordion title="Small‑Form‑Factor (SFF) Desktops & Mini PCs" description="Compact systems with desktop‑grade performance" type="note">
  <p><strong>Overview:</strong> 1–3 L chassis; VESA‑mountable; often replace tower PCs under desks.</p>
  <p><strong>Valuable Components:</strong> Low‑profile DDR5 DIMMs, M.2 NVMe SSDs, 65 W desktop CPUs.</p>
  <p><strong>Examples:</strong> Intel NUC 13 Pro, Lenovo ThinkCentre Tiny M80q Gen 4, HP Elite Mini 800 G9.</p>
  <p><strong>Best For:</strong> Space‑constrained offices, digital signage, edge computing.</p>
</Accordion>

<Accordion title="Tower Workstations / Gaming Desktops" description="Full‑size ATX or E‑ATX towers" type="info">
  <p><strong>Overview:</strong> Support desktop Xeon/W‑series or Ryzen Threadripper CPUs, multiple GPUs, and extensive storage.</p>
  <p><strong>Valuable Components:</strong> RTX 5000 Ada GPUs, DDR5 ECC RDIMMs, 1600 W platinum PSUs.</p>
  <p><strong>Examples:</strong> Dell Precision 7865, HP Z8 Fury G5, Origin PC Neutron.</p>
  <p><strong>Best For:</strong> 3D rendering, AI/ML training, high‑end gaming.</p>
</Accordion>
</AccordionGroup>

## 2. Valuable Internal Components

<AccordionGroup>
<Accordion title="Processors (CPUs)" description="Mobile & desktop chips with high resale value" type="info">
  <p><strong>Description:</strong> Intel 13th/14th Gen Core, Apple M‑series SoCs, AMD Ryzen 7000 series retain strong demand.</p>
  <p><strong>Identification:</strong> Core count, boost clocks, integrated graphics tier (Xe, RDNA 3), socket/SoC generation.</p>
</Accordion>

<Accordion title="Graphics Processors (GPUs)" description="Discrete and integrated graphics" type="info">
  <p><strong>Description:</strong> Laptop/desktop NVIDIA RTX 30/40‑series and AMD Radeon RX 7000 chips are top resale items.</p>
  <p><strong>Identification:</strong> VRAM size (GDDR6/6X), TGP/TDP, CUDA cores or RDNA 3 compute units.</p>
</Accordion>

<Accordion title="Memory (RAM)" description="DDR5/LPDDR5 modules" type="info">
  <p><strong>Description:</strong> High‑speed DDR5 4800–6400 MHz SODIMMs or soldered LPDDR5X fetch premiums.</p>
  <p><strong>Identification:</strong> Capacity, speed, rank (1R/2R), ECC vs. non‑ECC.</p>
</Accordion>

<Accordion title="Solid‑State Drives (SSDs)" description="PCIe 4.0/5.0 NVMe drives" type="info">
  <p><strong>Description:</strong> M.2 2280 NVMe SSDs (1 TB–4 TB) with DRAM caches and TLC NAND hold value.</p>
  <p><strong>Identification:</strong> Interface (PCIe 4.0/5.0), controller (Phison E26, Samsung PMS), endurance (TBW).</p>
</Accordion>

<Accordion title="Displays & Panels" description="High‑resolution or high‑refresh screens" type="info">
  <p><strong>Description:</strong> 4K OLED, mini‑LED, and QHD 240 Hz IPS panels are lucrative spares.</p>
  <p><strong>Identification:</strong> Size, resolution, refresh rate, color gamut (sRGB/DCI‑P3).</p>
</Accordion>

<Accordion title="Batteries & Power Adapters" description="Li‑ion packs and GaN chargers" type="info">
  <p><strong>Description:</strong> 70 Wh+ batteries and 100 W USB‑C PD GaN chargers are in high demand.</p>
  <p><strong>Identification:</strong> Watt‑hours, cycle count, charger output profiles (20 V 5 A, etc.).</p>
</Accordion>
</AccordionGroup>

## 3. Key Specifications for System Assessment

### CPU & GPU
- Generation, core count, base/boost speeds
- Integrated vs. discrete GPU, TDP/TGP

### Memory
- Capacity (GB) and type (DDR5/LPDDR5X)
- Upgradeability (soldered vs. socketed)

### Storage
- Interface (NVMe PCIe 4.0/5.0), capacity, endurance
- Additional drive bays (2.5″, M.2)

### Display
- Size, resolution, refresh rate, panel tech (IPS/OLED/mini‑LED)

### Battery Life & Power
- Battery capacity (Wh), fast‑charge support
- Charger wattage, USB‑C PD compatibility

### Expansion & Connectivity
- Thunderbolt 4/USB4 ports, SD card reader
- Wi‑Fi 6E/7 and Bluetooth 5.3 radios

## 4. Common Use Cases

### Corporate Fleet Deployment
Standardized business laptops/desktops with remote manageability.

### Creative & Engineering
Mobile/desktop workstations with high‑end GPUs and color‑accurate displays.

### Gaming & eSports
High‑refresh gaming laptops/desktops with powerful GPUs and cooling.

### Education & Front‑Office
Affordable AIOs or SFF PCs with robust security and easy maintenance.

## 5. Frequently Asked Questions

<AccordionGroup>
<Accordion title="What’s the difference between a business laptop and a mobile workstation?" description="Security vs. performance focus" type="info">
  <p>Business laptops prioritize battery life, portability, and corporate security (TPM, vPro). Mobile workstations add high‑core‑count CPUs, professional GPUs, ISV certifications, and ECC RAM support for CAD/3D.</p>
</Accordion>

<Accordion title="How do I securely wipe a laptop before resale?" description="Use vendor or open‑source tools" type="tip">
  <p>Enable Secure Boot reset, then run full‑drive NVMe sanitize or a multi‑pass overwrite (NIST 800‑88). Remove MDM/Apple ID, and reset BIOS/UEFI passwords before shipping.</p>
</Accordion>

<Accordion title="Which components should I harvest for maximum resale value?" description="NVMe SSDs, high‑speed RAM, discrete GPUs" type="note">
  <p>Modern NVMe SSDs, DDR5/LPDDR5 RAM sticks, and discrete GPUs (MXM or socketed desktop cards) often yield more value than selling a low‑spec system whole.</p>
</Accordion>

<Accordion title="Can swollen batteries be resold?" description="No—recycle safely" type="warning">
  <p>Swollen or degraded Li‑ion batteries are a safety hazard and must be recycled following EPA and R2 v3 guidelines; do not ship or resell them.</p>
</Accordion>

<Accordion title="How can I quickly test a used desktop for resale?" description="Basic POST and stress tests" type="info">
  <p>Verify POST with no error beeps, run MemTest86, use Cinebench/3DMark for CPU/GPU stress, and CrystalDiskInfo for SSD SMART health. Document temps and benchmark scores.</p>
</Accordion>
</AccordionGroup>

## 6. Practical Tips
- Keep original chargers, dongles, and packaging—they boost resale by up to 15 %.
- Photograph serial numbers and key specs for listing accuracy.
- Use ESD protection when swapping NVMe drives, RAM, or GPUs.

## 7. Additional Resources
Refer to the [Laptop & Desktop Cut Lines](link‑to‑document) for SKU‑specific configurations, CPU/GPU tiers, and current market pricing.

## Product Gallery

<ProductCarousel
  images={laptops_desktops_images}
  title="Laptop & Desktop Gallery"
/>

---


## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=658319452&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>


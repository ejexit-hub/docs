import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { Accordion } from '@site/src/components/Accordion';
import { servers_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Server (Enterprise & Data Center)

## Introduction
This manual helps personnel at Exit Technologies Inc. understand servers and their internal components clearly, emphasizing opportunities for recovering value from specific high-value internal components.

## 1. Overview
Servers manage, store, and process data, supporting organizational infrastructure and critical business applications. Servers typically contain valuable internal components that can be recovered for additional value.

### Types of Servers

<Accordion title="Rack Servers" description="Compact, scalable servers for data centers" type="info">
  <p><strong>Overview:</strong> Installed into standard server racks, optimizing space efficiency in data centers.</p>
  <p><strong>Form Factors:</strong> 1U, 2U, 4U.</p>
  <p><strong>Common Valuable Components:</strong> CPUs, RAM, SSDs/HDDs, RAID Controllers, Power Supplies, Network Cards (NICs), Motherboards.</p>
  <p><strong>Examples:</strong> Dell PowerEdge R740, HP ProLiant DL380 Gen10.</p>
  <p><strong>Best For:</strong> Large enterprises, virtualization, cloud infrastructure.</p>
</Accordion>

<Accordion title="Blade Servers" description="Modular servers housed in a shared enclosure" type="tip">
  <p><strong>Overview:</strong> Modular servers housed within blade enclosures, enabling easy scalability and simplified management.</p>
  <p><strong>Form Factors:</strong> Blade modules within a chassis.</p>
  <p><strong>Common Valuable Components:</strong> CPUs, RAM, SSDs, Network Modules, Interconnect Modules, Mezzanine Cards.</p>
  <p><strong>Examples:</strong> Cisco UCS B200 M5, HPE BladeSystem BL460c Gen10.</p>
  <p><strong>Best For:</strong> High-density data centers, virtualization, enterprise environments.</p>
</Accordion>

<Accordion title="Tower Servers" description="Standalone servers suitable for small businesses" type="note">
  <p><strong>Overview:</strong> Standalone servers resembling desktop computers; do not require rack mounting.</p>
  <p><strong>Form Factors:</strong> Tower (freestanding).</p>
  <p><strong>Common Valuable Components:</strong> CPUs, RAM, SSDs/HDDs, Motherboards, Power Supplies.</p>
  <p><strong>Examples:</strong> Dell PowerEdge T640, Lenovo ThinkSystem ST550.</p>
  <p><strong>Best For:</strong> Small to medium-sized businesses, branch offices, remote locations.</p>
</Accordion>

## 2. Valuable Internal Components
Not all servers have the same valuable components. Understanding what to recover can significantly enhance profitability.

<Accordion title="Processors (CPUs)" description="High-value computing units" type="info">
  <p><strong>Description:</strong> CPUs from servers, particularly Intel Xeon or AMD EPYC series, hold substantial resale value.</p>
  <p><strong>Identification:</strong> Socket type, core count, clock speed, and generation (e.g., Xeon Silver, Gold, Platinum).</p>
</Accordion>

<Accordion title="Memory (RAM)" description="High-capacity server memory modules" type="info">
  <p><strong>Description:</strong> ECC DDR4 and DDR5 modules have significant value in secondary markets.</p>
  <p><strong>Identification:</strong> Capacity (GB), speed (MHz), type (DDR4, DDR5), ECC (Error-correcting code).</p>
</Accordion>

<Accordion title="Storage Drives (SSDs/HDDs)" description="High-performance storage components" type="info">
  <p><strong>Description:</strong> Enterprise-grade SSDs (NVMe/SAS) and HDDs (SAS) retain considerable value.</p>
  <p><strong>Identification:</strong> Capacity, interface type (NVMe, SATA, SAS), condition, health rating.</p>
</Accordion>

<Accordion title="Networking Cards & Controllers" description="Advanced networking hardware" type="info">
  <p><strong>Description:</strong> High-speed NICs, Fibre Channel cards, and RAID controllers can have high resale values.</p>
  <p><strong>Identification:</strong> Manufacturer, model, speed (10GbE, 25GbE, 40GbE, 100GbE), interface type.</p>
</Accordion>

## 3. Key Specifications for Server Assessment

### CPU Specifications
- Socket Type
- Generation
- Core Count and Clock Speed

### RAM Specifications
- Capacity
- Type (DDR4, DDR5)
- ECC or non-ECC

### Storage Specifications
- Type (SSD, HDD, NVMe)
- Interface (SATA, SAS, NVMe)
- Capacity and Health

### Networking & Controllers
- Type and speed (Gbps)
- Manufacturer and compatibility

## 4. Common Use Cases

### Enterprise IT Infrastructure
Data centers, cloud computing, enterprise applications.

### Virtualization
Resource-intensive environments that require powerful and efficient computing.

### Small Business Solutions
Standalone servers providing localized data management and IT services.

## 5. Frequently Asked Questions
- **"How do I identify valuable components inside a server?"**
  - Check specifications on CPUs, RAM modules, SSDs, HDDs, RAID controllers, and network cards.

- **"Which server form factor typically has the highest resale value?"**
  - Rack and Blade servers usually have the highest resale values due to their components and enterprise usage.

## 6. Practical Tips
- Always carefully document each component's specification during recovery for accurate valuation.
- Identify high-value items early to streamline the recovery and resale processes.

## 7. Additional Resources
Refer to the [Technical Cut Lines](link-to-document) for detailed specification sheets and component value estimations.

## Product Gallery

<ProductCarousel 
  images={servers_images}
  title="Server Gallery"
/>

---


## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=1966414049&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>


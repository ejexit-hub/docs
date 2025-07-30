import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { Accordion, AccordionGroup } from '@site/src/components/Accordion';
import { servers_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Server (Enterprise & Data Center)

## Introduction
This manual helps personnel at Exit Technologies Inc. understand servers and their internal components clearly, emphasizing opportunities for recovering value from specific high‑value internal components.

## 1. Overview
Servers manage, store, and process data, supporting organizational infrastructure and critical business applications. Servers typically contain valuable internal components that can be recovered for additional value.

### Types of Servers

<AccordionGroup>
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
</AccordionGroup>

## 2. Valuable Internal Components
Not all servers have the same valuable components. Understanding what to recover can significantly enhance profitability.

<AccordionGroup>
  <Accordion title="Processors (CPUs)" description="High-value computing units" type="info">
    <p><strong>Description:</strong> CPUs from servers, particularly Intel Xeon or AMD EPYC series, hold substantial resale value.</p>
    <p><strong>Identification:</strong> Socket type, core count, clock speed, and generation (e.g., Xeon Silver, Gold, Platinum).</p>
  </Accordion>

  <Accordion title="Memory (RAM)" description="High-capacity server memory modules" type="info">
    <p><strong>Description:</strong> ECC DDR4 and DDR5 modules have significant value in secondary markets.</p>
    <p><strong>Identification:</strong> Capacity (GB), speed (MHz), type (DDR4, DDR5), ECC (Error-correcting code).</p>
  </Accordion>

  <Accordion title="Storage Drives (SSDs/HDDs)" description="High-performance storage components" type="info">
    <p><strong>Description:</strong> Enterprise‑grade SSDs (NVMe/SAS) and HDDs (SAS) retain considerable value.</p>
    <p><strong>Identification:</strong> Capacity, interface type (NVMe, SATA, SAS), condition, health rating.</p>
  </Accordion>

  <Accordion title="Networking Cards & Controllers" description="Advanced networking hardware" type="info">
    <p><strong>Description:</strong> High‑speed NICs, Fibre Channel cards, and RAID controllers can have high resale values.</p>
    <p><strong>Identification:</strong> Manufacturer, model, speed (10GbE, 25GbE, 40GbE, 100GbE), interface type.</p>
  </Accordion>
</AccordionGroup>

## 3. Key Specifications for Server Assessment

### CPU Specifications
- Socket Type
- Generation
- Core Count and Clock Speed

### RAM Specifications
- Capacity
- Type (DDR4, DDR5)
- ECC or non‑ECC

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
Resource‑intensive environments that require powerful and efficient computing.

### Small Business Solutions
Standalone servers providing localized data management and IT services.

## 5. Frequently Asked Questions

<AccordionGroup>
  <Accordion title="How do I identify valuable components inside a server?" description="Check specifications on CPUs, RAM modules, SSDs, HDDs, RAID controllers, and network cards" type="info">
  <p>Check specifications on CPUs, RAM modules, SSDs, HDDs, RAID controllers, and network cards. Look for model numbers, capacity, speed ratings, and generation information to determine resale value.</p>
</Accordion>

<Accordion title="Which server form factor typically has the highest resale value?" description="Rack and Blade servers usually have the highest resale values due to their components and enterprise usage" type="info">
  <p>Rack and Blade servers usually have the highest resale values due to their components and enterprise usage. These server types typically contain high-end enterprise-grade components that retain value in secondary markets.</p>
</Accordion>

<Accordion title="What is a server and how does it function in a network?" description="Dedicated system providing data and services to client computers" type="info">
  <p>A server is a specialized computer that manages, stores, and delivers data or services to other computers over a network. It is built to run continuously (24/7) and often hosts critical applications or databases, ensuring multiple users or devices can reliably access shared resources.</p>
</Accordion>

<Accordion title="What are the main types of servers and how do they differ?" description="Differences between rack, blade, and tower server form factors" type="info">
  <p>There are three primary server form factors: rack servers, blade servers, and tower servers. Rack servers are slim units mounted in data center racks to save space. Blade servers are highly compact modules that slide into a shared chassis for high‑density deployments. Tower servers are standalone upright machines (similar to desktop PCs) that do not require rack enclosures. Rack and blade systems excel in large enterprise environments, whereas tower servers are more common in small businesses or remote offices.</p>
</Accordion>

<Accordion title="How are servers maintained for optimal performance?" description="Regular updates, hardware monitoring, and environmental controls for reliability" type="tip">
  <p>Servers require routine maintenance to ensure high performance and uptime. Key tasks include applying software/firmware updates, running hardware diagnostics, monitoring system performance (CPU, memory, disk usage), and verifying data backups regularly. It’s also crucial to maintain a proper environment – keep servers cool and dust‑free – to prevent overheating or hardware failures.</p>
</Accordion>

<Accordion title="How do I identify valuable components inside a server?" description="Tips for spotting high‑value parts (CPUs, RAM, drives, etc.) in a server" type="tip">
  <p>Identify the major hardware parts, as these often carry resale value. Check the processor model (e.g., Intel Xeon or AMD EPYC), the memory modules (ECC DDR4 or DDR5 RAM), and any storage drives (enterprise SSDs or high‑speed SAS HDDs). Also look for expansion cards – high‑end network interface cards or RAID controllers can be quite valuable on the secondary market. Note each component’s model and specs; those details will help determine its market demand and worth.</p>
</Accordion>

<Accordion title="Which server components are most valuable for resale?" description="CPUs, RAM, enterprise drives, and other high‑demand server parts with strong resale value" type="info">
  <p>In secondary markets, certain server parts consistently fetch higher prices. Modern multi‑core processors and large‑capacity ECC memory modules are typically top‑value components. Enterprise‑grade storage drives (SSD or SAS HDD) tend to retain strong resale value, and specialized add‑ons like high‑speed NICs or RAID controller cards are often in high demand as well.</p>
</Accordion>

<Accordion title="How can I maximize the value recovered from a decommissioned server?" description="Best practices to get the highest return when reselling retired servers" type="tip">
  <p>To recover the most value from a retired server, focus on extracting its high‑value parts rather than selling the unit whole. Identify and remove key components like CPUs, RAM, and storage drives that have strong resale demand. Selling these parts individually often yields greater total profit, though it requires careful handling. Be sure to test each component for functionality and securely wipe any data on drives. Cleaning the hardware and documenting each part’s model and specifications will make them more appealing to buyers.</p>
</Accordion>
</AccordionGroup>

## 6. Practical Tips
- Always carefully document each component's specification during recovery for accurate valuation.
- Identify high‑value items early to streamline the recovery and resale processes.

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


import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { Accordion, AccordionGroup } from '@site/src/components/Accordion';
import { networking_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Networking Gear (Enterprise & Data Center)

## Introduction
This manual helps personnel at Exit Technologies Inc. understand enterprise networking hardware and identify the highest‑value internal components for reuse or resale.

## 1. Overview
Networking gear moves, secures, and manages data traffic across local and wide‑area networks. From high‑throughput core switches to edge firewalls, these devices underpin mission‑critical connectivity and often house components with strong secondary‑market demand.

### Types of Networking Equipment

<AccordionGroup>
<Accordion title="Switches" description="Layer 2/3 devices that forward packets within a LAN" type="info">
  <p><strong>Overview:</strong> Aggregate and segment network traffic. Come in fixed, modular, and chassis‑based designs.</p>
  <p><strong>Port Options:</strong> 1 GbE, 2.5 GbE, 10 GbE, 25 GbE, 40 GbE, 100 GbE.</p>
  <p><strong>Valuable Components:</strong> Switching ASICs, SFP+/QSFP transceivers, PoE power supplies, fan trays.</p>
  <p><strong>Examples:</strong> Cisco Catalyst 9300, Arista 7050X, Juniper EX4300.</p>
  <p><strong>Best For:</strong> Data‑center aggregation, campus core, top‑of‑rack (ToR) deployments.</p>
</Accordion>

<Accordion title="Routers" description="Layer 3 devices that route traffic between networks" type="tip">
  <p><strong>Overview:</strong> Direct traffic across LANs, WANs, and the internet, applying QoS and policy controls.</p>
  <p><strong>Form Factors:</strong> Branch, enterprise edge, carrier‑grade chassis.</p>
  <p><strong>Valuable Components:</strong> Route processors, line cards, power supplies, high‑capacity memory.</p>
  <p><strong>Examples:</strong> Cisco ASR 1001‑X, Juniper MX480, Ubiquiti EdgeRouter Infinity.</p>
  <p><strong>Best For:</strong> WAN aggregation, MPLS/VPN services, internet edge.</p>
</Accordion>

<Accordion title="Firewalls / Security Appliances" description="Inspect and secure traffic at the network edge" type="note">
  <p><strong>Overview:</strong> Provide stateful packet inspection, next‑gen filtering, and threat prevention.</p>
  <p><strong>Deployment Modes:</strong> Hardware appliance, virtual firewall, carrier‑grade chassis.</p>
  <p><strong>Valuable Components:</strong> Security ASICs, SSL offload modules, SSDs for logging, redundant PSUs.</p>
  <p><strong>Examples:</strong> Palo Alto PA‑5220, Fortinet FG‑100F, Cisco Firepower 4110.</p>
  <p><strong>Best For:</strong> Perimeter defense, east‑west segmentation, branch security.</p>
</Accordion>

<Accordion title="Wireless Access Points (APs)" description="Provide Wi‑Fi connectivity to client devices" type="info">
  <p><strong>Overview:</strong> Broadcast and manage WLANs using 802.11ac/ax (Wi‑Fi 5/6) standards.</p>
  <p><strong>Deployment:</strong> Stand‑alone, controller‑based, or cloud‑managed.</p>
  <p><strong>Valuable Components:</strong> Dual‑band radios, internal antennas, PoE injectors.</p>
  <p><strong>Examples:</strong> Aruba 515, Cisco Catalyst 9130, Ubiquiti UniFi U6‑LR.</p>
  <p><strong>Best For:</strong> Office environments, warehouses, public venues.</p>
</Accordion>
</AccordionGroup>

## 2. Valuable Internal Components
Identifying and extracting high‑value parts maximizes downstream profit.

<AccordionGroup>
<Accordion title="ASICs & NPUs" description="High‑performance packet‑processing chips" type="info">
  <p><strong>Description:</strong> Custom application‑specific integrated circuits (ASICs) or network processing units (NPUs) drive switching and routing at line rate.</p>
  <p><strong>Identification:</strong> Vendor PNs (Broadcom Trident/Tomahawk, Cisco UADP, etc.), generation, throughput (Tbps).</p>
</Accordion>

<Accordion title="Optical Transceivers" description="SFP, SFP+, QSFP, and CFP modules" type="info">
  <p><strong>Description:</strong> Hot‑swappable optics convert electrical to optical signals; 10G/25G/40G/100G modules hold strong resale value.</p>
  <p><strong>Identification:</strong> Form factor, data rate, wavelength, reach (SR/LR/ER), DOM support.</p>
</Accordion>

<Accordion title="Power Supplies (PSUs)" description="Redundant hot‑swap PSUs for PoE or high‑draw chassis" type="info">
  <p><strong>Description:</strong> High‑output (750 W–3 kW) supplies, often 80 PLUS Platinum/Titanium rated.</p>
  <p><strong>Identification:</strong> Output wattage, input voltage range, connector type, PoE budget.</p>
</Accordion>

<Accordion title="Fan Trays & Cooling Modules" description="Critical for high‑density chassis" type="info">
  <p><strong>Description:</strong> Hot‑swappable fans maintain airflow and thermal stability; costly in large switches/routers.</p>
  <p><strong>Identification:</strong> RPM rating, airflow direction (front‑to‑back or reverse), part number.</p>
</Accordion>
</AccordionGroup>

## 3. Key Specifications for Networking Gear Assessment

### Throughput & Switching Capacity
- Fabric capacity (Gbps/Tbps)
- Forwarding rate (Mpps)

### Port Configuration
- Quantity and speed (1G/10G/25G/40G/100G)
- Copper vs. fiber, PoE budget (if applicable)

### Latency & Buffering
- Cut‑through vs. store‑and‑forward
- Buffer memory size (MB)

### Redundancy & High Availability
- Dual PSUs, modular fans
- Stackability or chassis clustering

## 4. Common Use Cases

### Data‑Center Fabric
Leaf‑spine architectures, high‑bandwidth east‑west traffic.

### Campus Core & Distribution
Aggregates access‑layer switches and uplinks to the WAN edge.

### Branch & SMB Networks
All‑in‑one firewall/SD‑WAN routers with integrated Wi‑Fi.

## 5. Frequently Asked Questions

<AccordionGroup>
<Accordion title="What’s the difference between a switch and a router?" description="L2 forwarding vs. L3 routing" type="info">
  <p>A switch forwards frames within the same network (Layer 2), while a router directs packets between different networks (Layer 3), making routing decisions based on IP addresses.</p>
</Accordion>

<Accordion title="How can I spot high‑value parts in networking gear?" description="Look for optics, PSUs, and ASICs" type="tip">
  <p>Check for populated SFP+/QSFP cages, modular line cards, redundant PSUs, and high‑end ASICs or NPUs. These command strong prices on the secondary market.</p>
</Accordion>

<Accordion title="Which networking devices hold the best resale value?" description="Core switches and next‑gen firewalls usually top the list" type="note">
  <p>High‑port‑density data‑center switches, carrier‑grade routers, and next‑gen firewalls (with valid licenses) typically fetch the highest returns due to enterprise demand.</p>
</Accordion>

<Accordion title="How do I verify optics before reselling?" description="Use DOM data and loopback testing" type="info">
  <p>Insert the transceiver in a compatible switch, confirm Digital Optical Monitoring (DOM) shows normal Tx/Rx power, and perform a loopback or short‑fiber test to ensure clean signal.</p>
</Accordion>

<Accordion title="Can expired licenses hurt resale value?" description="Yes—software support matters" type="warning">
  <p>For firewalls and SD‑WAN appliances, lapsed subscriptions or out‑of‑support OS versions can significantly reduce buyer interest. Factor relicensing costs into valuation.</p>
</Accordion>

<Accordion title="What’s the safest way to wipe configuration data?" description="Factory‑reset and erase NVRAM / flash" type="info">
  <p>Perform a secure erase or write‑erase followed by a reload, then verify startup‑config is blank. For devices with flash or SSD logging, run vendor‑provided sanitize commands.</p>
</Accordion>
</AccordionGroup>

## 6. Practical Tips
- Record full part numbers and installed licenses; buyers pay more for documented features.
- Retain original rack ears, faceplates, and blanks—missing hardware can cut resale by 10‑15 %.
- Store optics in dust‑cap tubes or clamshells to prevent ferrule damage.

## 7. Additional Resources
Refer to the [Networking Cut Lines](link‑to‑document) for SKU‑specific specs and pricing guidelines.

## Product Gallery

<ProductCarousel
  images={networking_images}
  title="Networking Gear Gallery"
/>

---

## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=2345678901&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Networking Cutlines"
  allowfullscreen
></iframe>

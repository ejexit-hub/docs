import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import { ProductCarousel } from '@site/src/components/ui/product-carousel';
import { networking_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Networking Gear

## Introduction
This manual is designed for Exit Technologies Inc. personnel to understand networking hardware. It provides technical guidance for evaluating, deploying, and managing network equipment throughout its lifecycle.

## 1. Networking Gear Overview
Networking gear refers to hardware devices used to connect, manage, and secure communications between computers, servers, and other endpoints. These devices ensure reliable data transfer, network segmentation, and internet access.

### Key Functions:
- **Connectivity:** Link multiple devices within local and wide area networks.
- **Traffic Management:** Prioritize and control data flow (QoS, routing policies).
- **Security:** Firewalling, packet inspection, and segmentation.
- **Scalability:** Support for growth through modular upgrades or stacking.

### Key Components:
- **Switches:** Provide device interconnection within LANs.
- **Routers:** Connect networks and manage traffic between LAN/WAN.
- **Firewalls:** Protect against unauthorized access and threats.
- **Access Points (APs):** Enable wireless connectivity.
- **Network Interface Cards (NICs):** Interface between hardware and the network.
- **Transceivers/Cables:** Fiber and copper components for physical links.

## 2. Types of Networking Gear

### Switches
- **Unmanaged Switches:** Basic plug-and-play; no configuration needed.  
  *Examples: Netgear GS308, TP-Link TL-SG108.*

- **Managed Switches:** VLAN support, traffic monitoring, QoS control.  
  *Examples: Cisco Catalyst 2960, HPE Aruba 2530.*

- **Layer 3 Switches:** Switches with routing capabilities for enterprise networks.  
  *Examples: Cisco Catalyst 9300, Juniper EX Series.*

### Routers
- Direct traffic between networks (LAN/WAN).
- Support advanced features like VPNs, NAT, and firewall rules.
- *Examples: Cisco ISR 4000 Series, Ubiquiti EdgeRouter, Mikrotik CCR.*

### Firewalls
- Inspect and filter traffic based on rules/policies.
- Available as hardware appliances or integrated into routers.
- *Examples: Palo Alto Networks PA-Series, Fortinet FortiGate, Cisco ASA.*

### Wireless Access Points
- Provide Wi-Fi connectivity across enterprise environments.
- Support modern standards (Wi-Fi 6/6E).
- *Examples: Ubiquiti UniFi 6 LR, Cisco Meraki MR series, Aruba Instant On.*

### Load Balancers
- Distribute traffic across multiple servers for availability and performance.
- Can be hardware (F5 BIG-IP) or software-based (NGINX, HAProxy).

### Network Security Appliances
- Unified Threat Management (UTM) devices combining firewall, IDS/IPS, and VPN.
- *Examples: Fortinet FortiGate UTM, Sophos XG Firewall.*

## 3. Key Specifications

### Throughput & Speed
- 1GbE, 10GbE, 25GbE, 40GbE, 100GbE links for switches/routers.
- Firewall throughput rated in Gbps (e.g., 5 Gbps NGFW performance).

### Port Count & Form Factor
- 8, 24, 48-port switches; modular chassis for large deployments.
- Rack-mount vs desktop units (1U, 2U form factors).

### Redundancy & Reliability
- Dual power supplies, hot-swappable fans.
- Stackable switches for fault tolerance.

### Management Features
- CLI, web-based GUIs, SNMP, or cloud-managed dashboards (e.g., Meraki).
- VLANs, QoS, PoE support for IP phones/cameras.

## 4. Networking Protocols

### Common Protocols
- **Ethernet (IEEE 802.3):** Wired LAN communication.
- **Wi-Fi (IEEE 802.11):** Wireless LAN communication.
- **BGP/OSPF:** Dynamic routing protocols for WANs.
- **MPLS:** Traffic engineering and VPN services.
- **VLAN/802.1Q:** Network segmentation.

## 5. Security Considerations

### Physical Security
- Lock racks, secure cabling, limit access to core switches and routers.

### Network Security
- Access Control Lists (ACLs), port security, 802.1X authentication.
- Firewalls and intrusion detection/prevention systems (IDS/IPS).

### Data Protection
- Encrypt management traffic (SSH, HTTPS).
- VPNs for remote access.

## 6. Deployment & Management

### Configuration
- CLI (Cisco IOS, Junos), web UI, or API-based management.
- Automate with Ansible, Netmiko, or vendor orchestration tools.

### Monitoring & Troubleshooting
- SNMP, NetFlow, Syslog for traffic and device health.
- Tools: SolarWinds, PRTG, Nagios.

### Scaling
- Stackable switches for horizontal scaling.
- Upgrade links (1GbE to 10/40/100GbE) for bandwidth growth.

## 7. Practical Tips
- Choose PoE switches if deploying IP phones, cameras, or APs.
- Standardize vendors for easier maintenance and spare parts.
- Keep firmware and configurations backed up and version-controlled.

## 8. Additional Resources
For detailed technical specifications, refer to [Technical Cut Lines](8.1-2.3-P Technical Cut Lines.xlsb).

## Product Gallery

<ProductCarousel 
  images={networking_images}
  title="Networking Gear Gallery"
/>

---

## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=2095076836&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>
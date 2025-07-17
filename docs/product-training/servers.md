import ProductTrainingNavBar from '@site/src/components/ProductTrainingNavBar';
import ProductCarousel from '@site/src/components/ui/product-carousel';
import { servers_images } from '@site/src/data/product-images';

<ProductTrainingNavBar />

# Servers

## Introduction
This manual helps personnel at Exit Technologies Inc. understand the basics of servers, facilitating clear communication with clients and internal stakeholders.

## 1. Server Overview
Servers are specialized computers designed to provide services, data, resources, or applications to other computers, known as clients, within a network.

### Key Components:
- **Processor (CPU):** Handles instructions and processing power. Servers often have multiple CPUs for higher performance.
- **Memory (RAM):** Crucial for server performance; typically offered from 32GB up to several terabytes.
- **Storage:**
  - **SSD:** Offers fast performance, ideal for rapid data access.
  - **HDD:** Cost-effective solution for storing large volumes of data.
- **Network Interface Card (NIC):** Manages server network connections.
- **Power Supply Unit (PSU):** Ensures consistent and reliable power delivery.

## 2. Types of Servers
### Tower Servers:
- Standalone, similar in size to a desktop computer.
- Ideal for small to medium businesses without dedicated server rooms.
- Examples: Dell PowerEdge T-Series, HP ProLiant ML Series.

### Rack Servers:
- Designed to fit into standard server racks, optimizing space and organization.
- Suitable for businesses needing multiple servers in a centralized location.
- Examples: Dell PowerEdge R-Series, HP ProLiant DL Series.

### Blade Servers:
- Compact and modular servers inserted into blade chassis for efficient power and space utilization.
- Ideal for high-density environments, like data centers.
- Examples: HP BladeSystem, Dell PowerEdge M-Series.

## 3. Server Use Cases
- **Web Servers:** Host websites and web applications.
- **Database Servers:** Store, manage, and retrieve databases.
- **File Servers:** Centralize storage and management of files.
- **Email Servers:** Manage and facilitate email communication.
- **Application Servers:** Run applications that clients can access remotely.

## 4. Specifications – Simplified Breakdown
- **CPU:** More CPUs or cores mean better multitasking and performance.
- **RAM:** Larger RAM enables efficient handling of multiple concurrent tasks.
- **Storage:** Choose SSD for speed, HDD for economical large-capacity storage.
- **Networking:** Gigabit or higher speed NICs for fast and reliable network connections.

## 5. Common Questions & Effective Responses
- **"How many CPUs do I need?"**
  - Single CPU for basic tasks; multiple CPUs for high-demand applications.

- **"What type of storage should I choose?"**
  - SSDs for speed-intensive tasks, HDDs for cost-effective large storage.

- **"Why choose a rack server over a tower?"**
  - Rack servers are ideal when managing multiple servers or limited physical space.

## 6. Practical Tips
- Clearly identify client requirements and recommend server types accordingly.
- Focus discussions around client business needs, emphasizing reliability and scalability.
- Use scenarios to illustrate practical server applications relevant to the client's industry.

## 7. Additional Resources
For detailed technical specifications, refer to [Technical Cut Lines](8.1-2.3-P Technical Cut Lines.xlsb).

## Product Gallery

<ProductCarousel 
  images={servers_images}
  title="Servers Gallery"
/>

---


## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=816388005&single=true"
  width="100%"
  height="800"
  style="border: none; border-radius: 8px;"
  title="Technical Cutlines"
  allowfullscreen
></iframe>


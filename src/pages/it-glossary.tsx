import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { Search, BookOpen, Cpu, HardDrive, Monitor, Smartphone, Server, Network, MemoryStick, X, Plus } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  abbreviation: string;
  definition: string;
  category: string;
  icon: React.ComponentType<any>;
}

const glossaryData: GlossaryTerm[] = [
  // Hardware Components
  {
    term: '10Base-T',
    abbreviation: '10Base-T',
    definition: 'Ethernet standard supporting 10 Mbps over twisted pair cable with maximum segment length of 100 meters.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: '100Base-TX',
    abbreviation: '100Base-TX',
    definition: 'Fast Ethernet standard supporting 100 Mbps over Category 5 twisted pair cable.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: '1000Base-T',
    abbreviation: '1000Base-T',
    definition: 'Gigabit Ethernet standard supporting 1 Gbps over Category 5e or better twisted pair cable.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: '802.11',
    abbreviation: '802.11',
    definition: 'IEEE standard for wireless local area network communications.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: '802.11i',
    abbreviation: '802.11i',
    definition: 'IEEE standard for wireless network security, also known as WPA2.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Access Point',
    abbreviation: 'AP',
    definition: 'Device that allows wireless devices to connect to a wired network using Wi-Fi.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Application Programming Interface',
    abbreviation: 'API',
    definition: 'Set of rules and protocols for building and integrating application software.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Application Service Provider',
    abbreviation: 'ASP',
    definition: 'Company that offers software applications and related services over the internet.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Backup',
    abbreviation: 'Backup',
    definition: 'Copy of data stored separately from the original to prevent data loss.',
    category: 'Software',
    icon: HardDrive,
  },
  {
    term: 'Bandwidth',
    abbreviation: 'BW',
    definition: 'Maximum rate of data transfer across a given path or network connection.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Basic Input Output System',
    abbreviation: 'BIOS',
    definition: 'Firmware used to perform hardware initialization during the booting process.',
    category: 'Hardware',
    icon: Cpu,
  },
  {
    term: 'Bluetooth',
    abbreviation: 'BT',
    definition: 'Wireless technology standard for exchanging data over short distances.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Blu-ray Disc',
    abbreviation: 'BD',
    definition: 'Digital optical disc storage format designed to supersede DVDs.',
    category: 'Hardware',
    icon: HardDrive,
  },
  {
    term: 'Cache',
    abbreviation: 'Cache',
    definition: 'High-speed data storage layer that stores a subset of data for faster access.',
    category: 'Hardware',
    icon: MemoryStick,
  },
  {
    term: 'Central Processing Unit',
    abbreviation: 'CPU',
    definition: 'The primary processor that executes instructions and performs calculations in a computer system.',
    category: 'Hardware',
    icon: Cpu,
  },
  {
    term: 'Cloud Computing',
    abbreviation: 'Cloud',
    definition: 'Delivery of computing services over the internet including servers, storage, databases, and software.',
    category: 'Software',
    icon: Server,
  },
  {
    term: 'Compact Disc',
    abbreviation: 'CD',
    definition: 'Digital optical disc data storage format originally developed for storing digital audio.',
    category: 'Hardware',
    icon: HardDrive,
  },
  {
    term: 'Configuration Management Database',
    abbreviation: 'CMDB',
    definition: 'Database that stores information about IT assets and their relationships.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Data Center',
    abbreviation: 'DC',
    definition: 'Facility used to house computer systems and associated components such as telecommunications and storage systems.',
    category: 'Devices',
    icon: Server,
  },
  {
    term: 'Database',
    abbreviation: 'DB',
    definition: 'Organized collection of structured information or data stored electronically in a computer system.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Desktop Computer',
    abbreviation: 'Desktop',
    definition: 'Personal computer designed for regular use at a single location on or near a desk.',
    category: 'Devices',
    icon: Monitor,
  },
  {
    term: 'Digital Video Disc',
    abbreviation: 'DVD',
    definition: 'Digital optical disc storage format invented and developed in 1995.',
    category: 'Hardware',
    icon: HardDrive,
  },
  {
    term: 'Domain Name System',
    abbreviation: 'DNS',
    definition: 'Hierarchical and decentralized naming system for computers, services, or other resources connected to the internet.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Dynamic Host Configuration Protocol',
    abbreviation: 'DHCP',
    definition: 'Network management protocol used to automate the process of configuring devices on IP networks.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Ethernet',
    abbreviation: 'Ethernet',
    definition: 'Family of wired computer networking technologies commonly used in local area networks.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Firewall',
    abbreviation: 'FW',
    definition: 'Network security device that monitors and filters incoming and outgoing network traffic.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Firmware',
    abbreviation: 'FW',
    definition: 'Software that provides low-level control for a device\'s specific hardware.',
    category: 'Software',
    icon: Cpu,
  },
  {
    term: 'Graphics Processing Unit',
    abbreviation: 'GPU',
    definition: 'Specialized processor designed to handle graphics rendering and parallel computing tasks.',
    category: 'Hardware',
    icon: Cpu,
  },
  {
    term: 'Hard Disk Drive',
    abbreviation: 'HDD',
    definition: 'Traditional storage device using magnetic disks to store and retrieve digital data.',
    category: 'Hardware',
    icon: HardDrive,
  },
  {
    term: 'Hypertext Transfer Protocol',
    abbreviation: 'HTTP',
    definition: 'Application protocol for distributed, collaborative, hypermedia information systems.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Hypertext Transfer Protocol Secure',
    abbreviation: 'HTTPS',
    definition: 'Extension of HTTP for secure communication over a computer network.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Information Technology',
    abbreviation: 'IT',
    definition: 'Use of computers, software, and telecommunications equipment to store, retrieve, and transmit data.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Information Technology Asset Management',
    abbreviation: 'ITAM',
    definition: 'Process of managing and optimizing IT assets throughout their lifecycle.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Internet Protocol',
    abbreviation: 'IP',
    definition: 'Protocol that defines how data is sent and received over the internet.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Internet Protocol Version 4',
    abbreviation: 'IPv4',
    definition: 'Fourth version of the Internet Protocol that uses 32-bit addresses.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Internet Protocol Version 6',
    abbreviation: 'IPv6',
    definition: 'Most recent version of the Internet Protocol that uses 128-bit addresses.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Internet Service Provider',
    abbreviation: 'ISP',
    definition: 'Organization that provides services for accessing, using, or participating in the internet.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Laptop Computer',
    abbreviation: 'Laptop',
    definition: 'Portable computer with integrated display, keyboard, and battery power.',
    category: 'Devices',
    icon: Monitor,
  },
  {
    term: 'Local Area Network',
    abbreviation: 'LAN',
    definition: 'Network that connects devices within a limited geographic area like an office or building.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Media Access Control',
    abbreviation: 'MAC',
    definition: 'Unique identifier assigned to network interfaces for communications on a network segment.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Mobile Device',
    abbreviation: 'Mobile',
    definition: 'Portable computing device including smartphones, tablets, and other handheld devices.',
    category: 'Devices',
    icon: Smartphone,
  },
  {
    term: 'Network Interface Card',
    abbreviation: 'NIC',
    definition: 'Hardware component that enables a computer to connect to a network.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Operating System',
    abbreviation: 'OS',
    definition: 'Software that manages computer hardware and provides services for computer programs.',
    category: 'Software',
    icon: BookOpen,
  },
  {
    term: 'Personal Computer',
    abbreviation: 'PC',
    definition: 'General-purpose computer designed for individual use, typically desktop or laptop.',
    category: 'Devices',
    icon: Monitor,
  },
  {
    term: 'Random Access Memory',
    abbreviation: 'RAM',
    definition: 'Volatile memory that provides fast access to data and instructions for the CPU.',
    category: 'Hardware',
    icon: MemoryStick,
  },
  {
    term: 'Read Only Memory',
    abbreviation: 'ROM',
    definition: 'Non-volatile memory used in computers and other electronic devices.',
    category: 'Hardware',
    icon: MemoryStick,
  },
  {
    term: 'Redundant Array of Independent Disks',
    abbreviation: 'RAID',
    definition: 'Data storage virtualization technology that combines multiple physical disk drive components.',
    category: 'Hardware',
    icon: HardDrive,
  },
  {
    term: 'Router',
    abbreviation: 'Router',
    definition: 'Networking device that forwards data packets between computer networks.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Server',
    abbreviation: 'Server',
    definition: 'Computer system designed to provide services, resources, or data to other computers.',
    category: 'Devices',
    icon: Server,
  },
  {
    term: 'Solid State Drive',
    abbreviation: 'SSD',
    definition: 'Storage device using flash memory for faster data access compared to traditional hard drives.',
    category: 'Hardware',
    icon: HardDrive,
  },
  {
    term: 'Switch',
    abbreviation: 'Switch',
    definition: 'Networking device that connects devices together on a computer network.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Tablet',
    abbreviation: 'Tablet',
    definition: 'Mobile computing device with a touchscreen display, processing circuitry, and battery.',
    category: 'Devices',
    icon: Smartphone,
  },
  {
    term: 'Transmission Control Protocol',
    abbreviation: 'TCP',
    definition: 'One of the main protocols of the Internet protocol suite for reliable data transmission.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Universal Serial Bus',
    abbreviation: 'USB',
    definition: 'Industry standard for cables, connectors and communications protocols for connection and power supply.',
    category: 'Hardware',
    icon: Network,
  },
  {
    term: 'Virtual Private Network',
    abbreviation: 'VPN',
    definition: 'Secure connection that allows users to access private networks over public internet.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Wide Area Network',
    abbreviation: 'WAN',
    definition: 'Network that spans large geographic areas, often connecting multiple LANs.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Wi-Fi',
    abbreviation: 'Wi-Fi',
    definition: 'Technology for wireless local area networking with devices based on IEEE 802.11 standards.',
    category: 'Networking',
    icon: Network,
  },
  {
    term: 'Wireless Local Area Network',
    abbreviation: 'WLAN',
    definition: 'Wireless computer network that links two or more devices using wireless communication.',
    category: 'Networking',
    icon: Network,
  },
];

const categories = ['All', 'Hardware', 'Devices', 'Networking', 'Software'];

export default function ITGlossary(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTerm, setNewTerm] = useState({
    term: '',
    abbreviation: '',
    definition: '',
    category: 'Hardware'
  });
  const [localGlossaryData, setLocalGlossaryData] = useState(glossaryData);
  const termsPerPage = 12;

  // Sort terms alphabetically
  const sortedTerms = [...localGlossaryData].sort((a, b) => a.term.localeCompare(b.term));

  const filteredTerms = sortedTerms.filter((term) => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'All' ||
      term.term.charAt(0).toUpperCase() === selectedLetter ||
      (selectedLetter === '#' && /^\d/.test(term.term));
    return matchesSearch && matchesLetter;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredTerms.length / termsPerPage);
  const paginatedTerms = filteredTerms.slice((currentPage - 1) * termsPerPage, currentPage * termsPerPage);

  // Reset to page 1 when filter/search changes
  useEffect(() => { setCurrentPage(1); }, [searchTerm, selectedLetter]);

  const handleAddTerm = () => {
    if (newTerm.term && newTerm.definition) {
      const iconMap = {
        'Hardware': Cpu,
        'Software': BookOpen,
        'Networking': Network,
        'Devices': Monitor
      };
      
      const newGlossaryTerm: GlossaryTerm = {
        term: newTerm.term,
        abbreviation: newTerm.abbreviation || newTerm.term,
        definition: newTerm.definition,
        category: newTerm.category,
        icon: iconMap[newTerm.category as keyof typeof iconMap] || Cpu
      };
      
      setLocalGlossaryData(prev => [...prev, newGlossaryTerm]);
      setNewTerm({ term: '', abbreviation: '', definition: '', category: 'Hardware' });
      setShowAddModal(false);
    }
  };

  const handleCancel = () => {
    setNewTerm({ term: '', abbreviation: '', definition: '', category: 'Hardware' });
    setShowAddModal(false);
  };

  // Generate alphabet for filter
  const alphabet = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

  return (
    <Layout title="IT Asset Glossary" description="Comprehensive glossary of IT asset terminology and abbreviations">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--12">
            {/* Header Section */}
            <div className="text--center margin-bottom--xl">
              <h1 className="hero__title margin-bottom--md">IT Asset Glossary</h1>
              <p className="hero__subtitle margin-bottom--lg">
                Essential terminology and abbreviations for IT asset management
              </p>
              
              {/* Action Buttons */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <button 
                  onClick={() => setShowAddModal(true)}
                  style={{
                    backgroundColor: '#2764AD',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1e4a8a'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#2764AD'}
                >
                  <Plus size={16} />
                  Add New
                </button>

                {/* Search Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="searchBox" style={{ position: 'relative', minWidth: '200px' }}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '14px',
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#ffffff'
                      }}
                    />
                  </div>
                  <button style={{
                    backgroundColor: '#2764AD',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1e4a8a'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#2764AD'}
                  >
                    <Search size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Alphabetical Navigation */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '4px', 
              marginBottom: '2rem',
              justifyContent: 'center'
            }}>
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  style={{
                    backgroundColor: selectedLetter === letter ? '#81BA54' : 'transparent',
                    color: selectedLetter === letter ? 'white' : '#2764AD',
                    border: `1px solid ${selectedLetter === letter ? '#81BA54' : '#2764AD'}`,
                    borderRadius: '4px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    minWidth: '32px',
                    textAlign: 'center'
                  }}
                                     onMouseEnter={(e) => {
                     if (selectedLetter !== letter) {
                       (e.target as HTMLElement).style.backgroundColor = '#f0f9ff';
                     }
                   }}
                   onMouseLeave={(e) => {
                     if (selectedLetter !== letter) {
                       (e.target as HTMLElement).style.backgroundColor = 'transparent';
                     }
                   }}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="margin-bottom--lg">
              <p className="text--secondary margin-bottom--none">
                Showing {paginatedTerms.length} of {filteredTerms.length} terms (Total: {localGlossaryData.length})
              </p>
            </div>

            {/* Glossary Terms - 3 columns, paginated */}
            <div className="row">
              {paginatedTerms.map((term, index) => {
                const IconComponent = term.icon;
                return (
                  <div key={index} className="col col--4 margin-bottom--lg">
                    <div className="card shadow--md hover:shadow--lg transition-shadow duration-200" style={{ height: '100%' }}>
                      <div className="card__header padding-horiz--md padding-vert--md">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            padding: '8px',
                            backgroundColor: '#2764AD',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <IconComponent size={20} style={{ color: '#ffffff' }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 className="margin-bottom--xs" style={{ fontSize: '18px', fontWeight: '600', color: '#d1d5db' }}>{term.term}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="badge badge--primary" style={{ fontSize: '12px', padding: '4px 8px' }}>{term.abbreviation}</span>
                              <span className="badge badge--secondary" style={{ fontSize: '12px', padding: '4px 8px' }}>{term.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card__body padding-horiz--md padding-vert--md">
                        <p className="margin-bottom--none" style={{ lineHeight: '1.6', fontSize: '14px' }}>{term.definition}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  style={{
                    backgroundColor: currentPage === 1 ? '#e5e7eb' : '#2764AD',
                    color: currentPage === 1 ? '#9ca3af' : 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{
                      backgroundColor: currentPage === i + 1 ? '#81BA54' : 'transparent',
                      color: currentPage === i + 1 ? 'white' : '#2764AD',
                      border: `1px solid ${currentPage === i + 1 ? '#81BA54' : '#2764AD'}`,
                      borderRadius: '4px',
                      padding: '6px 12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minWidth: '32px',
                      textAlign: 'center',
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  style={{
                    backgroundColor: currentPage === totalPages ? '#e5e7eb' : '#2764AD',
                    color: currentPage === totalPages ? '#9ca3af' : 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Next
                </button>
              </div>
            )}

            {/* No Results */}
            {paginatedTerms.length === 0 && (
              <div className="text--center margin-vert--xl">
                <BookOpen size={64} className="margin-bottom--lg" style={{ color: '#9ca3af' }} />
                <h3 className="margin-bottom--md">No terms found</h3>
                <p className="text--secondary margin-bottom--none">
                  Try adjusting your search terms or letter filter
                </p>
              </div>
            )}

            {/* Add New Term Modal */}
            {showAddModal && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '1rem'
              }}>
                <div style={{
                  backgroundColor: '#23272f',
                  borderRadius: '12px',
                  border: '1px solid rgba(129, 186, 84, 0.2)',
                  padding: '2rem',
                  width: '100%',
                  maxWidth: '500px',
                  maxHeight: '85vh',
                  overflow: 'auto',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0, color: '#81BA54', fontSize: '1.5rem', fontWeight: '600' }}>Add New Term</h2>
                    <button
                      onClick={handleCancel}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        borderRadius: '4px',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                      <X size={20} style={{ color: '#9ca3af' }} />
                    </button>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#ffffff', fontSize: '14px' }}>
                      Term Name *
                    </label>
                    <input
                      type="text"
                      value={newTerm.term}
                      onChange={(e) => setNewTerm(prev => ({ ...prev, term: e.target.value }))}
                      placeholder="Enter the full term name"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'all 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#81BA54';
                        e.target.style.boxShadow = '0 0 0 2px rgba(129, 186, 84, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#ffffff', fontSize: '14px' }}>
                      Abbreviation
                    </label>
                    <input
                      type="text"
                      value={newTerm.abbreviation}
                      onChange={(e) => setNewTerm(prev => ({ ...prev, abbreviation: e.target.value }))}
                      placeholder="Enter abbreviation (optional)"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'all 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#81BA54';
                        e.target.style.boxShadow = '0 0 0 2px rgba(129, 186, 84, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#ffffff', fontSize: '14px' }}>
                      Category
                    </label>
                    <select
                      value={newTerm.category}
                      onChange={(e) => setNewTerm(prev => ({ ...prev, category: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#81BA54';
                        e.target.style.boxShadow = '0 0 0 2px rgba(129, 186, 84, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <option value="Hardware" style={{ backgroundColor: '#23272f', color: '#ffffff' }}>Hardware</option>
                      <option value="Software" style={{ backgroundColor: '#23272f', color: '#ffffff' }}>Software</option>
                      <option value="Networking" style={{ backgroundColor: '#23272f', color: '#ffffff' }}>Networking</option>
                      <option value="Devices" style={{ backgroundColor: '#23272f', color: '#ffffff' }}>Devices</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#ffffff', fontSize: '14px' }}>
                      Definition *
                    </label>
                    <textarea
                      value={newTerm.definition}
                      onChange={(e) => setNewTerm(prev => ({ ...prev, definition: e.target.value }))}
                      placeholder="Enter the definition of the term"
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'all 0.2s',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#81BA54';
                        e.target.style.boxShadow = '0 0 0 2px rgba(129, 186, 84, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button
                      onClick={handleCancel}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '6px',
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddTerm}
                      disabled={!newTerm.term || !newTerm.definition}
                      style={{
                        backgroundColor: !newTerm.term || !newTerm.definition ? 'rgba(255, 255, 255, 0.1)' : '#81BA54',
                        color: !newTerm.term || !newTerm.definition ? 'rgba(255, 255, 255, 0.5)' : '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: !newTerm.term || !newTerm.definition ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (newTerm.term && newTerm.definition) {
                          (e.target as HTMLElement).style.backgroundColor = '#6ba045';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (newTerm.term && newTerm.definition) {
                          (e.target as HTMLElement).style.backgroundColor = '#81BA54';
                        }
                      }}
                    >
                      Add Term
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
} 
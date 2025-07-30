import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { Search, BookOpen, FileText, Plus, X, Settings, Wrench, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Procedure {
  id: string;
  title: string;
  category: string;
  description: string;
  steps: string[];
  requirements?: string[];
  notes?: string[];
  icon: React.ComponentType<any>;
}

const procedureData: Procedure[] = [
  {
    id: 'proc-001',
    title: 'CABLES',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for cable inventory.',
    steps: [
      'Template: RESALE>CABLE',
      'Item Number: Template: [MODEL NUMBER] (Example: CAB-Q-Q-100G-2M-EO)',
      'Master Item Title: Template: [PART NUMBER] [CABLE LENGTH*] [CABLE TYPE*] [ITEM TYPE]',
      'Example: CAB-Q-Q-100G-2M-EO 2M PASSIVE COPPER TWINAX CABLE'
    ],
    requirements: ['Cable inventory system', 'Length measurement tools', 'Type identification'],
    notes: ['Ensure accurate length and type specifications'],
    icon: Wrench,
  },
  {
    id: 'proc-002',
    title: 'CELL PHONE',
    category: 'Consumer Electronics',
    description: 'RAZOR Categorical Structure and naming conventions for cell phone inventory.',
    steps: [
      'Template: RESALE>CONSUMER ELECTRONICS>CELL PHONES & PDAS>CELL PHONES & SMARTPHONES',
      'Template will be the same as the Example (subject to change)',
      'Item Number: Template: MODEL NAME (Example: IPHONE XR)',
      'Master Item Title: Template: [BRAND] [MODEL NAME] [SERVICE PROVIDER*] [COLOR] [CAPACITY*] [ITEM TYPE]',
      'Example: APPLE IPHONE XR UNLOCKED SPACE GRAY 64GB WITH 12MP CAMERA CELL PHONE'
    ],
    requirements: ['Phone inventory system', 'Brand identification', 'Capacity verification'],
    notes: ['Template will be the same as the Example (subject to change)'],
    icon: CheckCircle,
  },
  {
    id: 'proc-003',
    title: 'CPU',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for CPU inventory.',
    steps: [
      'Template: RESALE>[ITEM TYPE]>[PLATFORM (DESKTOP VS SERVER)]>[LINE]>[GEN]',
      'Example: RESALE> CPU>SERVER>XEON>GEN 1',
      'Example: RESALE> CPU>SERVER>XEON>V3>E3, E5, E7',
      'WILL FLUCTUATE BASED ON IF I5-2500 VS 4116, FOR EXAMPLE',
      'RAZOR mfg: AMD/Intel/IBM/ORACLE (Never Dell, HP etc.)',
      'Item Number: Template: [MODEL NUMBER] (Example: 4116)',
      'Master Item Title: Template: [STEP] [GHZ] [#CORES] [SOCKET] [LINE]',
      'Example: SR0BB 2.50GHZ 4C LGA1155 I-SERIES DESKTOP',
      'Example: SR2P7 3.60GHZ 6C LGA2011-3 XEON SERVER'
    ],
    requirements: ['CPU inventory system', 'Model number identification', 'Specification verification'],
    notes: ['WILL FLUCTUATE BASED ON IF I5-2500 VS 4116, FOR EXAMPLE'],
    icon: AlertCircle,
  },
  {
    id: 'proc-004',
    title: 'DESKTOP',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for desktop inventory.',
    steps: [
      'Template: Resale>Desktop',
      'Desktop, Workstation',
      'Item Number: Template: [Line] [MODEL NUMBER] [Form Factor] (Example: Optiplex 7440 SFF)',
      'Specify "- NO OS" in Item ID if item has no OS',
      'If item has OS, do not specify that it does (it is the assumption)',
      'Master Item Title: Template: [socket] [RAM Type] Desktop (Example: LGA1151 DDR3 DESKTOP)',
      'Attributes: CPU, Total RAM GB, Drive GB, Drive Type'
    ],
    requirements: ['Desktop inventory system', 'Model identification', 'Specification verification'],
    notes: [
      'All desktops with drives will have Win10 Pro installed',
      'If a workstation came with a "workstation" version of Windows, we should harvest the key before wiping and put it back on after erasure. Otherwise, install Win10 Pro.',
      'If a desktop does not use a standard power cable, we should either purchase it or scrap it, and stock them together. (The SFF desktops will often have a power cable that looks like the laptop ones.)'
    ],
    icon: Clock,
  },
  {
    id: 'proc-005',
    title: 'DRIVE',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for drive inventory.',
    steps: [
      'Template: RESALE>DRIVE>[INTERFACE]>[DRIVE TYPE]>[DRIVE WIDTH/FORM FACTOR] [DRIVE DENSITY/CAPACITY]',
      'Example: RESALE>DRIVE>SAS>HDD>3.5">8TB',
      'Item Number: Template: MFG P/N//MODEL NUMBER//PART NUMBER',
      'Various manufacturer-specific formats (CRUCIAL, DELL, EMC, HITACHI/HGST, HP, etc.)',
      'IF NO CADDY IS PRESENT, USE GPN OR HP/N',
      'If additional HP label is present on a drive, use HP P/N instead',
      'If additional Dell label is present on a drive, use Dell P/N instead (only applies to M2 SSD\'s)',
      'EXIT P/N ONLY APPLIES TO SATA DRIVES',
      'Master Item Title: Template: [DENSITY] [WIDTH/FORM FACTOR] [INTERFACE*] [RPM] [CACHE] [TRANSRATE] [DRIVE LINE] [ITEM TYPE]',
      'Example: 2TB 3.5" ES 7.2K 64MB 6GB/S ULTRASTAR HDD'
    ],
    requirements: ['Drive inventory system', 'Manufacturer identification', 'Specification verification'],
    notes: [
      'IF NO CADDY IS PRESENT, USE GPN OR HP/N',
      'If additional HP label is present on a drive, use HP P/N instead',
      'If additional Dell label is present on a drive, use Dell P/N instead (only applies to M2 SSD\'s)',
      'EXIT P/N ONLY APPLIES TO SATA DRIVES'
    ],
    icon: FileText,
  },
  {
    id: 'proc-006',
    title: 'FANS - ARCHIVED',
    category: 'Components',
    description: 'RAZOR Categorical Structure and naming conventions for fan inventory.',
    steps: [
      'Template: Resale>Parts & Components>Computer Components>Fans, Heatsinks & Cooling>Fans',
      'Template will be the same as the Example (subject to change)',
      'Item Number: Template: MODEL/PART NUMBER (Example: 090XRN)',
      'Part number will vary per brand',
      'Master Item Title: Template: [BRAND] [ITEM #] [COMPATIBLE SERVERS*] [GENERAL LINE] [ITEM TYPE]',
      'Example: DELL 090XRN COMPATIBLE WITH R710 COOLING FAN'
    ],
    requirements: ['Fan inventory system', 'Part number identification', 'Compatibility verification'],
    notes: ['This category is archived - do not inventory new items'],
    icon: FileText,
  },
  {
    id: 'proc-007',
    title: 'GENERAL',
    category: 'Miscellaneous',
    description: 'RAZOR Categorical Structure for general items that do not require large detail.',
    steps: [
      'Template: RESALE>[ITEM TYPE]',
      'Example: RESALE>NETWORKING>WIRELESS NETWORKING>ROUTERS & ACCESS POINTS',
      'SEARCH FOR ITEM IN CATEGORIES TAB BAR (EX: WIRELESS CARD, ROUTER, ETC)',
      'NOTIFY MANAGEMENT IF NO MATCHING CATEOGORY IS AVAILABLE',
      'MAKE SURE MASTER ITEM TEMPLATE IS SET TO "GENERAL"',
      'SOLELY TO BE USED FOR ITEMS THAT DO NOT REQUIRE LARGE DETAIL IN ORDER TO SELL; IF UNSURE, ASK',
      'RAZOR Item ID: Template: MODEL/P/N (Example: MG90, NA AND EMEA, LTE-A)',
      'RAZOR Description: Template: [BRAND] [ITEM #] [GENERAL LINE] [ITEM TYPE]',
      'Example: SIERRA WIRELESS MG90, NA AND EMEA, LTE-A P/N 1102695 ROUTER'
    ],
    requirements: ['General inventory system', 'Category search', 'Management notification'],
    notes: [
      'SOLELY TO BE USED FOR ITEMS THAT DO NOT REQUIRE LARGE DETAIL IN ORDER TO SELL',
      'IF UNSURE, ASK'
    ],
    icon: CheckCircle,
  },
  {
    id: 'proc-008',
    title: 'GPU',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for GPU inventory.',
    steps: [
      'Template: RESALE>GPU>[BRAND]>[GPU LINE]',
      'Example: RESALE>GPU>NVIDIA>QUADRO',
      'Examples of Acceptable Subcategories: Quadro, GeForce, Titan, Tesla, Grid, Radeon, and Firepro',
      'RAZOR Mfg: AORUS, EVGA, MSI, PowerColor, PNY, GIGABYTE, Zotac, Asus',
      'Only use Nvidia or AMD if there are no other brands on it',
      'Do not use Dell, HP, IBM, etc.',
      'Item Number: Card Type (NVIDIA) - Quadro: (Ex: Quadro 5000), GeForce (Ex: 699-1G600-0000-520), Tesla (Ex: 699-2G414-0200-101)',
      'DO NOT USE GENERIC FORM FOR ANYTHING OTHER THAN QUADRO (EX: GEFORCE GTX TITAN X)',
      'Card Type (AMD) - Radeon: (Ex: RADEON RX 550 2GT LP OC OR GV-R927XOC-4GD), Firepro: (Ex: Firepro W7100)',
      'Master Item Title: Template: [GPU LINE] [MODEL] [RAMCAPACITY*] [RAMTYPE*] [MARKETING MONIKERS] [ITEM TYPE]',
      'Example: GeForce 1080 Ti 8GB GDDR5 FTW3 iCX GPU'
    ],
    requirements: ['GPU inventory system', 'Brand identification', 'Specification verification'],
    notes: [
      'Do not use Dell, HP, IBM, etc. as manufacturers',
      'DO NOT USE GENERIC FORM FOR ANYTHING OTHER THAN QUADRO',
      'Attributes: Has Original Box: Yes/No, Has Bracket: Yes/No'
    ],
    icon: Wrench,
  },
  {
    id: 'proc-009',
    title: 'HEATSINK - ARCHIVED',
    category: 'Components',
    description: 'RAZOR Categorical Structure and naming conventions for heatsink inventory.',
    steps: [
      'Template: RESALE>PARTS & COMPONENTS>COMPUTER COMPONENTS>FANS, HEATSINKS & COOLING>HEATSINKS',
      'Template will be the same as the Example (subject to change)',
      'RAZOR Item ID: Template: MODEL/PN (Example: SNK-P0038P)',
      'RAZOR Description: Template: [BRAND] [ITEM #] [SERVER_U*] [CPU_SOCKET*] [COMPATIBLE SERVERS*] [GENERAL_LINE] [ITEM TYPE]',
      'Example: SUPERMICRO SNK-P0038P LGA1366 2U HEATSINK'
    ],
    requirements: ['Heatsink inventory system', 'Part number identification', 'Compatibility verification'],
    notes: ['This category is archived - do not inventory new items'],
    icon: FileText,
  },
  {
    id: 'proc-010',
    title: 'LAPTOP',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for laptop inventory.',
    steps: [
      'Template: RESALE>DESKTOPS & LAPTOPS>LAPTOPS',
      'Template will be the same as the Example (subject to change)',
      'RAZOR Item ID: Template: MODEL # (Example: X240)',
      'Specify "- NO OS" in Item ID if item has no OS',
      'If item has OS, do not specify that it does (it is the assumption)',
      'RAZOR Description: Template: [LINE] [SCREEN SIZE] [ITEM TYPE]',
      'Example: THINKPAD 12.5" LAPTOP'
    ],
    requirements: ['Laptop inventory system', 'Model identification', 'Specification verification'],
    notes: [
      'If item has OS, do not specify that it does (it is the assumption)',
      'GPU: only indicate model number if not integrated; if integrated, state "integrated"'
    ],
    icon: CheckCircle,
  },
  {
    id: 'proc-011',
    title: 'LCD DISPLAY',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for LCD display inventory.',
    steps: [
      'Template: RESALE>DISPLAY> [OLED, LCD, LED, PROJECTOR]',
      'Example: RESALE>DISPLAY> LCD',
      'RAZOR Item ID: Template: MODEL # (Example: Z32X)',
      'RAZOR Description: Template: [LINE] [TOUCH SCREEN*] [COLOR] [RESOLUTION*] [SCREEN SIZE*] [ITEM TYPE]',
      'Example: HP Z32X DREAMCOLOR BLACK UHD 4K 31.5" DISPLAY'
    ],
    requirements: ['Display inventory system', 'Model identification', 'Specification verification'],
    notes: ['Ensure accurate resolution and screen size specifications'],
    icon: AlertCircle,
  },
  {
    id: 'proc-012',
    title: 'MOTHERBOARD',
    category: 'Components',
    description: 'RAZOR Categorical Structure and naming conventions for motherboard inventory.',
    steps: [
      'Template: RESALE>[SYSTEM TYPE]>MOTHERBOARD>[RAM TYPE]',
      'Example: RESALE>SERVER>MOTHERBOARD>DDR4',
      'RAZOR Item ID: Template: MODEL/PN (Example: MBD-X10DRFF)',
      'RAZOR Description: Template: [BRAND] [ITEM #] [GENERAL_LINE] [SOCKET SUPPORTED*] [RAM_GEN*] [RAM SPEED*] [ITEM TYPE]',
      'Example: SUPERMICRO MBD-X10DRFF LGA2011-3 DDR4 1600 MOTHERBOARD'
    ],
    requirements: ['Motherboard inventory system', 'Part number identification', 'Specification verification'],
    notes: ['Ensure accurate socket and RAM specifications'],
    icon: Clock,
  },
  {
    id: 'proc-013',
    title: 'NETCHASSIS',
    category: 'Networking',
    description: 'RAZOR Categorical Structure and naming conventions for network chassis inventory.',
    steps: [
      'Template: RESALE>NETCHASSIS>[NETWORKING TYPE]',
      'Example: RESALE>NETCHASSIS>SWITCH',
      'Switch, Security, Timeserver',
      'RAZOR Item ID: Template: MODEL/PN',
      'Arista Example: DCS-7050S-64, HP Example: JL167A, Cisco Example: ASA5516-X V02, Dell Example: N1108P-ON',
      'RAZOR Description: Template: [NETCHASSIS_LINE*] [Model] [U*] [ports*] [SFP Type] [IF MANAGED] [POEWATTS] [ITEM TYPE]',
      'Only include the model if it is different from the PN',
      'SFP Types: SFP, SFP+, QSFP, QSFP+',
      'If the switch is not capable of optical communications, leave it blank',
      'PoE can be PoE+, which has more power',
      'Example: ALTOLINE 6920 1U 48 PORT MANAGED POE 315W'
    ],
    requirements: ['Network chassis inventory system', 'Model identification', 'Specification verification'],
    notes: [
      'Only include the model if it is different from the PN',
      'SFP Types: SFP, SFP+, QSFP, QSFP+',
      'If the switch is not capable of optical communications, leave it blank',
      'PoE can be PoE+, which has more power'
    ],
    icon: FileText,
  },
  {
    id: 'proc-014',
    title: 'NETWORKING CARDS (NIC)',
    category: 'Networking',
    description: 'RAZOR Categorical Structure and naming conventions for networking card inventory.',
    steps: [
      'Template: RESALE>NIC>[PCI-E/NDC]',
      'Example: RESALE>NIC>PCI-E',
      'Type: PCI-E, Line Card, NDC = Network Daughter Card (The blades will have them, the card will connect directly to the board using a special connector and often will not have cables coming out of it)',
      'Item Number: Template: PART NUMBER (Example: 03TM39)',
      'Prioritize HP, Dell, IBM number, then mfg PN',
      'Master Item Title: Template: [MFG] [MODEL] [SPEED*] [QTYPORTS*] [INTERFACE*] [SOCKET*] [HEIGHT] [BRACKET] [FEATURES]',
      'Only specify mfg or model if different from the Razor ones. So if Razor mfg is Dell, the description mfg can be brocade. Never duplicate mfg',
      'Example: BROADCOM 57416 10GBE 2-PORT RJ45 PCI-E FULL HEIGHT'
    ],
    requirements: ['NIC inventory system', 'Part number identification', 'Specification verification'],
    notes: [
      'Only specify mfg or model if different from the Razor ones',
      'Never duplicate mfg'
    ],
    icon: Wrench,
  },
  {
    id: 'proc-015',
    title: 'PDU',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for PDU inventory.',
    steps: [
      'Template: RESALE>PDU',
      'RAZOR Item ID: Template: MODEL/PN (Example: AP7841)',
      'RAZOR Description: Template: [IF METERED] [AMPS] [VOLTS]',
      'Example: METERED 20A 200-208V'
    ],
    requirements: ['PDU inventory system', 'Model identification', 'Specification verification'],
    notes: ['Ensure accurate amperage and voltage specifications'],
    icon: CheckCircle,
  },
  {
    id: 'proc-016',
    title: 'PRINTER',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for printer inventory.',
    steps: [
      'Template: RESALE>PRINTER',
      'RAZOR Item ID: Template: MODEL/PN (Example: M252DW)',
      'RAZOR Description: Template: [PRINTER TYPE] [ITEM TYPE]',
      'Example: LASER PRINTER'
    ],
    requirements: ['Printer inventory system', 'Model identification', 'Type verification'],
    notes: ['Ensure accurate printer type identification'],
    icon: AlertCircle,
  },
  {
    id: 'proc-017',
    title: 'PSU',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for power supply inventory.',
    steps: [
      'Template: RESALE>[ITEM TYPE]:[SERVER VS ATX VS STORAGE]>[EPP OR NON]>[WATTAGE]',
      'Example: RESALE>PSU>SERVER>NON-EPP>550W',
      'RAZOR Item ID: Template: PART NUMBER (Example: 0X0551)',
      'RAZOR Description: Template: [BRAND] [PART NUMBER] [WATTS*] [COMPATIBLE SERVERS*] [EPP*] [CLASS] [TYPE] [MODEL*] [ITEM TYPE]',
      'Example: 550W NON-EPP SERVER AA23300 PSU'
    ],
    requirements: ['PSU inventory system', 'Part number identification', 'Specification verification'],
    notes: ['Ensure accurate wattage and compatibility specifications'],
    icon: Clock,
  },
  {
    id: 'proc-018',
    title: 'RAID',
    category: 'Components',
    description: 'RAZOR Categorical Structure and naming conventions for RAID card inventory.',
    steps: [
      'Template: RESALE>[ITEM TYPE]>[GB/S]',
      'Example: RESALE>RAID>6GB/S',
      'RAZOR Item ID: Template: [MODEL] (Example: H310)',
      'RAID cards usually have a PCI-E socket, however some RAID cards are smaller and plug into a special slot on the motherboard, they are known as, "mini\'s"',
      'Include this information in the attribute field: RAID_Model',
      'Some RAID cards will have the battery. It looks like a Laptop RAM module and plugs into a socket on the RAID card',
      'Include this information in the RAID Batt field',
      'Razor Description: Template: [OEM Part Number] [LINE] [GB/S] [PORT TYPE] [SOCKET] [INTERFACE] [INTERNAL/EXTERNAL] [ITEM TYPE]'
    ],
    requirements: ['RAID inventory system', 'Model identification', 'Specification verification'],
    notes: [
      'Must be stocked with bracket, cable, flash module, and battery otherwise order replacement part or scrap',
      'Unless the part does not normally come with it. As an example the minis do not have the bracket or cable since they plug directly into the board'
    ],
    icon: FileText,
  },
  {
    id: 'proc-019',
    title: 'RAM',
    category: 'Components',
    description: 'RAZOR Categorical Structure and naming conventions for RAM inventory.',
    steps: [
      'Template: RESALE>[ITEM TYPE]>[RAM TYPE]>[RAM Type]>[RAM GB]>[Rank]>[Speed]',
      'Example: RESALE>RAM>RDIMM>DDR4>16GB>2Rx8>2133',
      'RAZOR Item ID (Depending on Cutline):',
      'Part Numbered Template: [MODEL/PN] (Example: M378A2K43BB1-CPB)',
      'Exit Generic / Short Code Template:',
      'RAM Type Code: D, L, EL, E, ER, FB, LR, NV',
      '# of generation, 2, 3, 4',
      '"-"',
      '# of GB, 2, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512',
      '"-"',
      'Speed (whatever is after the PC#- on the module): 12800, 2133, 2400',
      '"-"',
      'Rank (if applicable): 1Rx8',
      'Omit brand information (M, M3, N)',
      'Example: ER4-16-2133-2Rx8',
      'RAZOR Mfg: Should match mfg of part number, see cut line sheet',
      'If it\'s put in the system by Exit Generic or Shortcode, put "VARIOUS"',
      'RAZOR Description: Template: [GB] [RANK] [GENERATION (PC#)]-[SPEED] [PROFILE HEIGHT* (ONLY SPECIFY IF PROFILE IS VLP)] [RAM TYPE]',
      'Example: 16GB 2RX8 PC4-2666 RDIMM'
    ],
    requirements: ['RAM inventory system', 'Part number identification', 'Specification verification'],
    notes: [
      'RAM Type Code: D, L, EL, E, ER, FB, LR, NV',
      'Mfg should match mfg of part number, see cut line sheet',
      'If it\'s put in the system by Exit Generic or Shortcode, put "VARIOUS"'
    ],
    icon: CheckCircle,
  },
  {
    id: 'proc-020',
    title: 'SERVERS',
    category: 'Hardware',
    description: 'RAZOR Categorical Structure and naming conventions for server inventory.',
    steps: [
      'Template: RESALE>[ITEM TYPE]>[SERVER TYPE]',
      'Example: RESALE>SERVER>RACK',
      'Rack, Tower, Blade',
      'RAZOR Mfg: Dell, HP, Quanta, SuperMicro, IBM',
      'The mfg should always reflect the part number that it is put in the system as',
      'RAZOR Item ID: Template: [MODEL]-[HDD FORM FACTOR]x[QTY OF DRIVES - 2 DIGITS]',
      'Example: R620-2.5x04',
      'RAZOR Description: Template: [U*][# BAYS*][BAY SIZE*] BAYS [CPU SOCKET*] [RAM TYPE*] [Line] [Server Type] [Item Type]',
      'Example: 1U 4X 2.5" BAYS LGA2011 DDR3 POWEREDGE RACK SERVER',
      'If components have been removed, write "Removed" on attribute field'
    ],
    requirements: ['Server inventory system', 'Model identification', 'Specification verification'],
    notes: [
      'All servers should be stocked with two matching PSUs; or we order them',
      'Servers must be stocked without certain components - see full documentation',
      'If components have been removed, write "Removed" on attribute field'
    ],
    icon: AlertCircle,
  },
  {
    id: 'proc-021',
    title: 'STORAGE',
    category: 'Storage',
    description: 'RAZOR Categorical Structure and naming conventions for storage equipment inventory.',
    steps: [
      'Template: RESALE>NETWORKING>NETWORK STORAGE EQUIPMENT>[NETWORK STORAGE EQUIPMENT TYPE]',
      'Example: RESALE>NETWORKING>NETWORK STORAGE EQUIPMENT',
      'RAZOR Item ID: Template: MODEL/PN (Example: S45)',
      'RAZOR Description: Template: [STORAGE LINE*] [MODEL] [FORM*] [STORAGE TYPE*] [QTY DRIVES*] [DRIVE WIDTH*] [STORAGE CONTROLLER GBE] [CONTROLLER INTERFACE] [ITEM TYPE]',
      'Example: ULTRA HIGH-POWERED 3U 45-DRIVE 3.5" 1GBE SAS STORAGE'
    ],
    requirements: ['Storage inventory system', 'Model identification', 'Specification verification'],
    notes: ['Ensure accurate drive quantity and interface specifications'],
    icon: Clock,
  },
];

const iconMap = {
  'CABLES': Wrench,
  'CELL PHONE': CheckCircle,
  'CPU': AlertCircle,
  'DESKTOP': Clock,
  'DRIVE': FileText,
  'FANS - ARCHIVED': FileText,
  'GENERAL': Settings,
  'GPU': Wrench,
  'HEATSINK - ARCHIVED': FileText,
  'LAPTOP': CheckCircle,
  'LCD DISPLAY': AlertCircle,
  'MOTHERBOARD': Clock,
  'NETCHASSIS': FileText,
  'NETWORKING CARDS (NIC)': Wrench,
  'PDU': CheckCircle,
  'PRINTER': AlertCircle,
  'PSU': Clock,
  'RAID': FileText,
  'RAM': CheckCircle,
  'SERVERS': AlertCircle,
  'STORAGE': Clock,
};

export default function Nomenclature(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProcedure, setNewProcedure] = useState({
    title: 'CABLES',
    category: 'Asset Management',
    description: '',
    steps: [''],
    requirements: [''],
    notes: ['']
  });
  const [localProcedureData, setLocalProcedureData] = useState(procedureData);

  const categories = [
    'All',
    'CABLES',
    'CELL PHONE',
    'CPU',
    'DESKTOP',
    'DRIVE',
    'FANS',
    'GENERAL',
    'GPU',
    'HEATSINK',
    'LAPTOP',
    'LCD DISPLAY',
    'MOTHERBOARD',
    'NETCHASSIS',
    'NETWORKING CARDS',
    'PDU',
    'PRINTER',
    'PSU',
    'RAID',
    'RAM',
    'SERVERS',
    'STORAGE',
  ];
  const proceduresPerPage = 2; // Show fewer procedures per page for document format

  // Filter procedures based on search term and category
  const filteredProcedures = localProcedureData.filter(procedure => {
    const matchesSearch = procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         procedure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         procedure.steps.some(step => step.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || 
                           procedure.title === selectedCategory || 
                           procedure.title.startsWith(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProcedures.length / proceduresPerPage);
  const paginatedProcedures = filteredProcedures.slice(
    (currentPage - 1) * proceduresPerPage,
    currentPage * proceduresPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleAddProcedure = () => {
    if (newProcedure.title.trim() && newProcedure.description.trim()) {
      const IconComponent = iconMap[newProcedure.title as keyof typeof iconMap] || FileText;
      const procedure: Procedure = {
        id: Date.now().toString(),
        title: newProcedure.title,
        category: newProcedure.category,
        description: newProcedure.description,
        steps: newProcedure.steps.filter(step => step.trim()),
        requirements: newProcedure.requirements.filter(req => req.trim()),
        notes: newProcedure.notes,
        icon: IconComponent,
      };
      setLocalProcedureData([...localProcedureData, procedure]);
      setNewProcedure({
        title: 'CABLES',
        category: 'Asset Management',
        description: '',
        steps: [''],
        requirements: [''],
        notes: ['']
      });
      setShowAddModal(false);
    }
  };

  const handleCancel = () => {
    setNewProcedure({
      title: 'CABLES',
      category: 'Asset Management',
      description: '',
      steps: [''],
      requirements: [''],
      notes: ['']
    });
    setShowAddModal(false);
  };

  const addStep = () => {
    setNewProcedure({
      ...newProcedure,
      steps: [...newProcedure.steps, '']
    });
  };

  const updateStep = (index: number, value: string) => {
    const updatedSteps = [...newProcedure.steps];
    updatedSteps[index] = value;
    setNewProcedure({
      ...newProcedure,
      steps: updatedSteps
    });
  };

  const removeStep = (index: number) => {
    const updatedSteps = newProcedure.steps.filter((_, i) => i !== index);
    setNewProcedure({
      ...newProcedure,
      steps: updatedSteps
    });
  };

  const addRequirement = () => {
    setNewProcedure({
      ...newProcedure,
      requirements: [...newProcedure.requirements, '']
    });
  };

  const updateRequirement = (index: number, value: string) => {
    const updatedRequirements = [...newProcedure.requirements];
    updatedRequirements[index] = value;
    setNewProcedure({
      ...newProcedure,
      requirements: updatedRequirements
    });
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = newProcedure.requirements.filter((_, i) => i !== index);
    setNewProcedure({
      ...newProcedure,
      requirements: updatedRequirements
    });
  };

  return (
    <Layout
      title="IT Asset Nomenclature"
      description="RAZOR Categorical Structure and Naming Conventions"
    >
      <main className="container margin-vert--lg">
        {/* Document Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '2rem 0'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#3B82F6', // Changed to blue
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Nomenclature
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#9ca3af',
            marginBottom: '1rem'
          }}>
            RAZOR Categorical Structure and Naming Conventions
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setShowAddModal(true)}
              style={{
                backgroundColor: '#81BA54', // Back to green
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#6ba045'} // Darker green
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#81BA54'}
            >
              <Plus size={16} />
              Add New Procedure
            </button>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search size={16} style={{
                position: 'absolute',
                left: '12px',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                placeholder="Search procedures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)', // Back to white border
                  borderRadius: '6px',
                  padding: '10px 12px 10px 40px',
                  color: '#ffffff',
                  fontSize: '14px',
                  width: '250px',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                backgroundColor: selectedCategory === category ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)', // Changed to blue
                color: selectedCategory === category ? 'white' : '#9ca3af',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Back to white hover
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#9ca3af',
          fontSize: '14px'
        }}>
          Showing {paginatedProcedures.length} of {filteredProcedures.length} procedures (Total: {localProcedureData.length})
        </div>

        {/* Document Content */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)' // Back to white border
        }}>
          {paginatedProcedures.length > 0 ? (
            <div>
              {paginatedProcedures.map((procedure, index) => (
                <div key={procedure.id} style={{
                  marginBottom: index < paginatedProcedures.length - 1 ? '3rem' : '0',
                  paddingBottom: index < paginatedProcedures.length - 1 ? '3rem' : '0',
                  borderBottom: index < paginatedProcedures.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' // Back to white border
                }}>
                  {/* Procedure Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      backgroundColor: '#81BA54', // Back to solid green
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <procedure.icon size={24} color="#ffffff" />
                    </div>
                    <div>
                      <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: '#3B82F6', // Changed to blue
                        margin: '0 0 0.5rem 0'
                      }}>
                        {procedure.title}
                      </h2>
                      <span style={{
                        backgroundColor: 'rgba(129, 186, 84, 0.2)', // Back to green background
                        color: '#81BA54', // Back to green text
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {procedure.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Back to white background
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    borderLeft: '4px solid #81BA54' // Back to green accent
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      margin: '0 0 0.5rem 0'
                    }}>
                      Description
                    </h3>
                    <p style={{
                      color: '#d1d5db',
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      {procedure.description}
                    </p>
                  </div>

                  {/* Steps */}
                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      margin: '0 0 1rem 0'
                    }}>
                      Procedure Steps
                    </h3>
                    <ol style={{
                      listStyle: 'none',
                      padding: '0',
                      margin: '0'
                    }}>
                      {procedure.steps.map((step, stepIndex) => (
                        <li key={stepIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '1rem',
                          marginBottom: '0.75rem',
                          padding: '1rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)', // Back to white background
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.05)' // Back to white border
                        }}>
                          <span style={{
                            backgroundColor: '#81BA54', // Back to solid green
                            color: 'white',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            flexShrink: '0',
                            marginTop: '2px'
                          }}>
                            {stepIndex + 1}
                          </span>
                          <span style={{
                            color: '#d1d5db',
                            lineHeight: '1.5',
                            flex: '1'
                          }}>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Requirements */}
                  {procedure.requirements && procedure.requirements.length > 0 && (
                    <div style={{
                      marginBottom: '1.5rem'
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        margin: '0 0 1rem 0'
                      }}>
                        Requirements
                      </h3>
                      <ul style={{
                        listStyle: 'none',
                        padding: '0',
                        margin: '0'
                      }}>
                        {procedure.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '0.5rem',
                            padding: '0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.03)', // Back to white background
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.05)' // Back to white border
                          }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: '#81BA54', // Back to solid green
                              borderRadius: '50%',
                              flexShrink: '0'
                            }} />
                            <span style={{
                              color: '#d1d5db',
                              lineHeight: '1.5'
                            }}>
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Notes */}
                  {procedure.notes && procedure.notes.length > 0 && (
                    <div style={{
                      backgroundColor: 'rgba(255, 193, 7, 0.1)', // Back to yellow background
                      border: '1px solid rgba(255, 193, 7, 0.2)', // Back to yellow border
                      borderRadius: '8px',
                      padding: '1.5rem',
                      borderLeft: '4px solid #ffc107' // Back to yellow accent
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#ffc107', // Back to yellow text
                        margin: '0 0 1rem 0'
                      }}>
                        Important Notes
                      </h3>
                      <ul style={{
                        listStyle: 'none',
                        padding: '0',
                        margin: '0'
                      }}>
                        {procedure.notes.map((note, noteIndex) => (
                          <li key={noteIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '0.5rem',
                            color: '#fbbf24' // Back to yellow text
                          }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: '#ffc107', // Back to solid yellow
                              borderRadius: '50%',
                              flexShrink: '0'
                            }} />
                            <span style={{ lineHeight: '1.5' }}>
                              {note}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '3rem 2rem'
            }}>
              <FileText size={64} style={{ color: '#9ca3af', marginBottom: '1rem' }} />
              <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>No procedures found</h3>
              <p style={{ color: '#9ca3af' }}>
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                backgroundColor: currentPage === 1 ? 'rgba(255, 255, 255, 0.1)' : '#81BA54', // Back to green
                color: currentPage === 1 ? '#6b7280' : 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Previous
            </button>
            
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                backgroundColor: currentPage === totalPages ? 'rgba(255, 255, 255, 0.1)' : '#81BA54', // Back to green
                color: currentPage === totalPages ? '#6b7280' : 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Next
            </button>
          </div>
        )}

        {/* Add New Procedure Modal */}
        {showAddModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}>
            <div style={{
              backgroundColor: '#1f2937',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.1)', // Back to white border
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Back to black shadow
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{
                  color: '#ffffff',
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  Add New Procedure
                </h2>
                <button
                  onClick={handleCancel}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <X size={20} />
                </button>
              </div>



              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Product Type
                </label>
                <select
                  value={newProcedure.title}
                  onChange={(e) => setNewProcedure({...newProcedure, title: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)', // Back to white border
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  {categories.filter(cat => cat !== 'All').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Description *
                </label>
                <textarea
                  value={newProcedure.description}
                  onChange={(e) => setNewProcedure({...newProcedure, description: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)', // Back to white border
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none',
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                  placeholder="Enter procedure description"
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <label style={{
                    color: '#ffffff',
                    fontWeight: '500'
                  }}>
                    Steps
                  </label>
                  <button
                    type="button"
                    onClick={addStep}
                    style={{
                      backgroundColor: '#81BA54', // Back to green
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Plus size={12} />
                    Add Step
                  </button>
                </div>
                {newProcedure.steps.map((step, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => updateStep(index, e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)', // Back to white border
                        borderRadius: '4px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                      placeholder={`Step ${index + 1}`}
                    />
                    {newProcedure.steps.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeStep(index)}
                        style={{
                          backgroundColor: '#ef4444',
                          color: 'white',
                          border: 'none',
                          padding: '8px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <label style={{
                    color: '#ffffff',
                    fontWeight: '500'
                  }}>
                    Requirements
                  </label>
                  <button
                    type="button"
                    onClick={addRequirement}
                    style={{
                      backgroundColor: '#81BA54',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Plus size={12} />
                    Add Requirement
                  </button>
                </div>
                {newProcedure.requirements.map((req, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => updateRequirement(index, e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)', // Back to white border
                        borderRadius: '4px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                      placeholder={`Requirement ${index + 1}`}
                    />
                    {newProcedure.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRequirement(index)}
                        style={{
                          backgroundColor: '#ef4444',
                          color: 'white',
                          border: 'none',
                          padding: '8px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
                marginTop: '2rem'
              }}>
                <button
                  onClick={handleCancel}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#9ca3af',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProcedure}
                  style={{
                    backgroundColor: '#81BA54',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#6ba045'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#81BA54'}
                >
                  Add Procedure
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
} 
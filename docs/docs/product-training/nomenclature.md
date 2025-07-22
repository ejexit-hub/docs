

## BATTERY - ARCHIVED
RAZOR Categorical Structure:
Template: RESALE>BATTERY>[System Type]
Example: RESALE>BATTERY>LAPTOP
Almost all inventoried batteries for resale would be for laptops
Other options might be, tablet, cell phone, UPS
Item Number:
Template: MODEL NUMBER
Example: 628666-001
Master Item Title:
Template: [TYPE*]
Example: LITHIUM ION


## CABLES
RAZOR Categorical Structure:
Template: RESALE>CABLE
Example: RESALE>CABLE
Item Number:
Template: [MODEL NUMBER]
Example: CAB-Q-Q-100G-2M-EO
Master Item Title:
Template: [PART NUMBER] [CABLE LENGTH*] [CABLE TYPE*] [ITEM TYPE]
Example: CAB-Q-Q-100G-2M-EO 2M PASSIVE COPPER TWINAX CABLE


## CELL PHONE
RAZOR Categorical Structure:
Template: RESALE>CONSUMER ELECTRONICS>CELL PHONES & PDAS>CELL PHONES & SMARTPHONES
Example: RESALE>CONSUMER ELECTRONICS>CELL PHONES & PDAS>CELL PHONES & SMARTPHONES
Template will be the same as the Example (subject to change)
Item Number:
Template: MODEL NAME
Example: IPHONE XR
Master Item Title:
Template: [BRAND] [MODEL NAME] [SERVICE PROVIDER*] [COLOR] [CAPACITY*] [ITEM TYPE]
Example: APPLE IPHONE XR UNLOCKED SPACE GRAY 64GB WITH 12MP CAMERA CELL PHONE


## CPU
RAZOR Categorical Structure:
Template: RESALE>[ITEM TYPE]>[PLATFORM (DESKTOP VS SERVER)]>[LINE]>[GEN]
Example: RESALE> CPU>SERVER>XEON>GEN 1
Example: RESALE> CPU>SERVER>XEON>V3>E3, E5, E7
WILL FLUCTUATE BASED ON IF I5-2500 VS 4116, FOR EXAMPLE
RAZOR mfg:
AMD/Intel/IBM/ORACLE
Never Dell, HP etc.
Item Number:
Template: [MODEL NUMBER]
Example: 4116
Master Item Title:
Template: [STEP] [GHZ] [#CORES] [SOCKET] [LINE]
Example: SR0BB 2.50GHZ 4C LGA1155 I-SERIES DESKTOP
Example: SR2P7 3.60GHZ 6C LGA2011-3 XEON SERVER
RAZOR Attributes:


## NONE


## DESKTOP
RAZOR Categorical Structure:
Template: Resale>Desktop
Example: Resale>Desktop
Desktop, Workstation
Item Number:
Template: [Line] [MODEL NUMBER] [Form Factor]
Example: Optiplex 7440 SFF
Specify “ - NO OS” in Item ID
If item has OS, do not specify that it does (it is the assumption)
Master Item Title:
Template: [Chipset] [RAM Type] Desktop
Example: LGA1151 DDR3 DESKTOP
Attributes:
CPU: i7-4770
Total RAM GB: 8GB
Drive GB: 256GB
Drive Type: SSD
Notes:
All desktops with drives will have Win10 Pro installed
If a workstation came with a “workstation” version of Windows, we should harvest the key before wiping and put it back on after erasure. Otherwise, install Win10 Pro.
If a desktop does not use a standard power cable, we should either purchase it or scrap it, and stock them together. (The SFF desktops will often have a power cable that looks like the laptop ones.)


## DRIVE
RAZOR Categorical Structure:
Template: RESALE>DRIVE>[INTERFACE]>[DRIVE TYPE]>[DRIVE WIDTH/FORM FACTOR] [DRIVE DENSITY/CAPACITY]
Example: RESALE>DRIVE>SAS>HDD>3.5">8TB
Item Number:
Template: MFG P/N//MODEL NUMBER//PART NUMBER
Example:


## CRUCIAL: MODEL/PN (CT250MX500SSD4) (SN: 1925E20DAA81)
DELL: DELL P/N (0W348K) (SN: WFK151ZQ) (NEEDS CADDY)
EMC: EMC P/N (118032816) (SN: LXY7XHEN)
HITACHI/HGST: P/N # (0F12470) (SN: YFK5H9HK)
HP: HP SP/N (# ON CADDY) (804612-001) (SN: 79GPDB7NPZXP OR 9QJ4RGMW)
IF NO CADDY IS PRESENT, USE GPN OR HP/N


## HYNIX: M/N: (HFS512GD9MND-5510A) (SN: ES78N692710308S6G)
IBM: IBM FRU (00AJ361) (SN: 501016XP)
INTEL: M/N (SSDPEKKA256GB) HPE P/N (877709-001) (SN: PHDV6336007B240AGN)


## LENOVO: PN: (SSS0L25089) (SN: 1150592409634)


## LITEON: PN: (00UP688) (SN: TW0V89JT550855AEB2NK)


## MICRON: P/N (MTFDDAK960TDD-1AT1ZABYY) (SN: 17501A201B67)
NETAPP: NETAPP MKTG. P/N (X269A-R5) (SN: P5G1XVLX)


## SAMSUNG: MODEL: MZ-V6E1T0 (SN: S59ANM0RA18631X)
SANDISK: PN/MODEL # (SD7SB6S-128G-1122) (SN: FG00C47B)
SEAGATE: MODEL NUMBER (ST8000NM0075) (SN: ZR56VE7P)
TOSHIBA: MODEL # (AL13SEB300) (SN: 29RS11PYTP5T)
VARIOUS: EXIT P/N (S-SATA-2.5-120GB; H-SATA-3.5-500GB; S-M2-256GB, S-MS-256GB(MS= MSATA)
EXIT P/N ONLY APPLIES TO SATA DRIVES; SEE TECHNICAL CUT LINES SOP FOR MORE INFORMATION
Western Digital: P/N (WD3000FYYZ) (SN: WCC4E5JE698A or 21383K800733)
If additional HP label is present on a drive, use HP P/N instead
If additional Dell label is present on a drive, use Dell P/N instead (only applies to M2 SSD’s)
Master Item Title:
Template: [DENSITY] [WIDTH/FORM FACTOR] [INTERFACE*] [RPM] [CACHE] [TRANSRATE] [DRIVE LINE] [ITEM TYPE]
Example: 2TB 3.5" ES 7.2K 64MB 6GB/S ULTRASTAR HDD
FANS – Archived, do not inventory
RAZOR Categorical Structure:
Template: Resale>Parts & Components>Computer Components>Fans, Heatsinks & Cooling>Fans
Example: Resale>Parts & Components>Computer Components>Fans, Heatsinks 699-1G600-0000-520& Cooling>Fans
Template will be the same as the Example (subject to change)
Item Number:
Template: MODEL/PART NUMBER
Part number will vary per brand
Example: 090XRN
Master Item Title:
Template: [BRAND] [ITEM #] [COMPATIBLE SERVERS*] [GENERAL LINE] [ITEM TYPE]
Example: DELL 090XRN COMPATIBLE WITH R710 COOLING FAN


## GENERAL
RAZOR Categorical Structure:
Template: RESALE>[ITEM TYPE]
Example: RESALE>NETWORKING>WIRELESS NETWORKING>ROUTERS & ACCESS POINTS
SEARCH FOR ITEM IN CATEGORIES TAB BAR (EX: WIRELESS CARD, ROUTER, ETC)
NOTIFY MANAGEMENT IF NO MATCHING CATEOGORY IS AVAILABLE
MAKE SURE MASTER ITEM TEMPLATE IS SET TO “GENERAL”
SOLELY TO BE USED FOR ITEMS THAT DO NOT REQUIRE LARGE DETAIL IN ORDER TO SELL; IF UNSURE, ASK
Item Number:
Template: MODEL/P/N
Example: MG90, NA AND EMEA, LTE-A
Master Item Title:
Template: [BRAND] [ITEM #] [GENERAL LINE] [ITEM TYPE]
Example: SIERRA WIRELESS MG90, NA AND EMEA, LTE-A  P/N 1102695 ROUTER


## GPU
RAZOR Categorical Structure:
Template: RESALE>GPU>[BRAND]>[GPU LINE]
Example: RESALE>GPU>NVIDIA>QUADRO
Examples of Acceptable Subcategories: Quadro, GeForce, Titan, Tesla, Grid, Radeon, and Firepro
RAZOR Mfg:
AORUS, EVGA, MSI, PowerColor, PNY, GIGABYTE, Zotac, Asus
Only use Nvidia or AMD if there are no other brands on it
Do not use Dell, HP, IBM, etc.
Item Number:
Card Type (NVIDIA)
Quadro: (Ex: Quadro 5000)
GeForce (Ex: 699-1G600-0000-520)
Tesla (Ex: 699-2G414-0200-101)
DO NOT USE GENERIC FORM FOR ANYTHING OTHER THAN QUADRO (EX: GEFORCE GTX TITAN X)
Card Type (AMD)
Radeon: (Ex: RADEON RX 550 2GT LP OC OR GV-R927XOC-4GD)
Firepro: (Ex: Firepro W7100)
Master Item Title:
Template: [GPU LINE] [MODEL] [RAMCAPACITY*] [RAMTYPE*] [MARKETING MONIKERS] [ITEM TYPE]
Example: GeForce 1080 Ti 8GB GDDR5 FTW3 iCX GPU
RAZOR Attributes:
Has Original Box: Yes/No
Has Bracket: Yes/No
HEATSINK – ARCHIVED, DO NOT INVENTORY
RAZOR Categorical Structure:
Template: RESALE>PARTS & COMPONENTS>COMPUTER COMPONENTS>FANS, HEATSINKS & COOLING>HEATSINKS
Example: RESALE>PARTS & COMPONENTS>COMPUTER COMPONENTS>FANS, HEATSINKS & COOLING>HEATSINKS
Template will be the same as the Example (subject to change)
Item Number:
Template: MODEL/PN
Example: SNK-P0038P
Master Item Title:
Template: [BRAND] [ITEM #] [SERVER_U*] [CPU_SOCKET*] [COMPATIBLE SERVERS*] [GENERAL_LINE] [ITEM TYPE]
Example: SUPERMICRO SNK-P0038P LGA1366 2U HEATSINK


## LAPTOP
RAZOR Categorical Structure:
Template: RESALE>DESKTOPS & LAPTOPS>LAPTOPS
Example: RESALE>DESKTOPS & LAPTOPS>LAPTOPS
Template will be the same as the Example (subject to change)
Item Number:
Template: MODEL #
Example: X240
Specify “ - NO OS” in Item ID
If item has OS, do not specify that it does (it is the assumption)
Master Item Title:
Template: [LINE] [SCREEN SIZE] [ITEM TYPE]
Example: THINKPAD 12.5" LAPTOP
RAZOR Attributes:
Drive GB: 256GB
Drive Type: SSD
CPU: i7-4600U
Touch Screen: No
GPU: (only indicate model number if not integrated; if integrated, state “integrated”)
Screen Resolution: 1366x768
Total RAM GB: 8GB
Webcam: Yes


## LCD DISPLAY
RAZOR Categorical Structure:
Template: RESALE>DISPLAY> [OLED, LCD, LED, PROJECTOR]
Example: RESALE>DISPLAY> LCD
Item Number:
Template: MODEL #
Example: Z32X
Master Item Title:
Template: [LINE] [TOUCH SCREEN*] [COLOR] [RESOLUTION*] [SCREEN SIZE*] [ITEM TYPE]
Example: HP Z32X DREAMCOLOR BLACK UHD 4K 31.5" DISPLAY


## MOTHERBOARD
RAZOR Categorical Structure:
Template: RESALE>[SYSTEM TYPE]>MOTHERBOARD>[RAM TYPE]
Example: RESALE>SERVER>MOTHERBOARD>DDR4
Item Number:
Template: MODEL/PN
Example: MBD-X10DRFF
Master Item Title:
Template: [BRAND] [ITEM #] [GENERAL_LINE] [SOCKET SUPPORTED*] [RAM_GEN*] [RAM SPEED*] [ITEM TYPE]
Example: SUPERMICRO MBD-X10DRFF LGA2011-3 DDR4 1600 MOTHERBOARD


## NETCHASSIS
RAZOR Categorical Structure:
Template: RESALE>NETCHASSIS>[NETWORKING TYPE]
Example: RESALE>NETCHASSIS>SWITCH
Switch, Security, Timeserver
Item Number:
Template: MODEL/PN
Arista Example: DCS-7050S-64
HP Example: JL167A
Cisco Example: ASA5516-X V02
Dell Example: N1108P-ON
Master Item Title:
Template: [NETCHASSIS_LINE*] [Model] [U*] [ports*] [SFP Type] [IF MA NAGED] [POEWATTS] [ITEM TYPE]
Only include the model if it is different from the PN
SFP Types: SFP, SFP+, QSFP, QSFP+
If the switch is not capable of optical communications, leave it blank
PoE can be PoE+, which has more power
Example: ALTOLINE 6920 1U 48 PORT MANAGED POE 315W
Attributes:
None


## NETWORKING CARDS (NIC)
RAZOR Categorical Structure:
Template: RESALE>NIC>[PCI-E/NDC]
Example: RESALE>NIC>PCI-E
Type: PCI-E, Line Card, NDC = Network Daughter Card (The blades will have them, the card will connect directly to the board using a special connector and often will not have cables coming out of it)
Item Number:
Template: PART NUMBER
Example: 03TM39
Prioritize HP, Dell, IBM number, then mfg PN
Master Item Title:
Template: [MFG] [MODEL] [SPEED*] [QTYPORTS*] [INTERFACE*] [SOCKET*] [HEIGHT] [BRACKET] [FEATURES]
Only specify mfg or model if different from the Razor ones. So if Razor mfg is Dell, the description mfg can be brocade. Never duplicate mfg
Example: BROADCOM 57416 10GBE 2-PORT RJ45 PCI-E FULL HEIGHT
Attributes:
None


## PDU
RAZOR Categorical Structure:
Template: RESALE>PDU
Example: RESALE>PDU
Item Number:
Template: MODEL/PN
Example: AP7841
Master Item Title:
Template: [IF METERED] [AMPS] [VOLTS]
Example: METERED 20A 200-208V


## PRINTER
RAZOR Categorical Structure:
Template: RESALE>PRINTER
Example: RESALE>PRINTER
Item Number:
Template: MODEL/PN
Example: M252DW
Master Item Title:
Template: [PRINTER TYPE] [ITEM TYPE]
Example: LASER PRINTER


## PSU
RAZOR Categorical Structure:
Template: RESALE>[ITEM TYPE]:[SERVER VS ATX VS STORAGE]>[EPP OR NON]>[WATTAGE]
Example: RESALE>PSU>SERVER>NON-EPP>550W
Item Number:
Template: PART NUMBER
Example: 0X0551
Master Item Title:
Template: [BRAND] [PART NUMBER] [WATTS*] [COMPATIBLE SERVERS*] [EPP*] [CLASS] [TYPE] [MODEL*] [ITEM TYPE]
Example: 550W NON-EPP SERVER AA23300 PSU


## RAID
RAZOR Categorical Structure:
Template: RESALE>[ITEM TYPE]>[GB/S]
Example: RESALE>RAID>6GB/S
Item Number:
Template: [MODEL]
Example: H310
RAID cards usually have a PCI-E socket, however some RAID cards are smaller and plug into a special slot on the motherboard, they are known as, “mini’s”
Include this information in the attribute field: RAID_Model
Some RAID cards will have the battery. It looks like a Laptop RAM module and plugs into a socket on the RAID card
Include this information in the RAID Batt field
Razor Description:
Template: [OEM Part Number] [LINE] [GB/S] [PORT TYPE] [SOCKET] [INTERFACE] [INTERNAL/EXTERNAL] [ITEM TYPE]


## N
Must be stocked with bracket, cable, flash module, and battery otherwise order replacement part or scrap. Unless the part does not normally come with it. As an example the minis do not have the bracket or cable since they plug directly into the board.


## RAM
RAZOR Categorical Structure:
Template: RESALE>[ITEM TYPE]>[RAM TYPE]>[RAM Type]>[RAM GB]>[Rank]>[Speed]
Example: RESALE>RAM>RDIMM>DDR4>16GB>2Rx8>2133
Item Number (Depending on Cutline):
Part Numbered
Template: [MODEL/PN]
Example: M378A2K43BB1-CPB
Exit Generic / Short Code
Template:
RAM Type Code: D, L, EL, E, ER, FB, LR, NV
# of generation, 2, 3, 4
“-“
# of GB, 2, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512
“-“
Speed (whatever is after the PC#- on the module): 12800, 2133, 2400
“-“
Rank (if applicable): 1Rx8
Omit brand information (M, M3, N)
Example: ER4-16-2133-2Rx8
RAZOR Mfg:
Should match mfg of part number, see cut line sheet
So if it’s put in the system by 500203-061, Mfg should be HP
If it has an HP sticker, but the cut line says to use the Samsung part number, then put Samsung
If it’s put in the system by Exit Generic or Shortcode, put “VARIOUS”
Master Item Title:
Template: [GB] [RANK] [GENERATION (PC#)]-[SPEED] [PROFILE HEIGHT* (ONLY SPECIFY IF PROFILE IS VLP)] [RAM TYPE]
Example: 16GB 2RX8 PC4-2666 RDIMM
RAZOR Attributes:
None


## SERVERS
Razor Categorical Structure:
Template: RESALE>[ITEM TYPE]>[SERVER TYPE]
Example: RESALE>SERVER>RACK
Rack, Tower, Blade
Razor Mfg:
Dell, HP, Quanta, SuperMicro, IBM
The mfg should always reflect the part number that it is put in the system as. For example if the machine comes in with Nutanix branding, but it’s clearly a SuperMicro, and it goes into stock with a SuperMicro part number; then the brand is SuperMicro not Nutanix
The notes should specify that is has the other branding. As an example some Dell servers will be stripped of their Dell branding and have an off brand. That should be notated in the notes as it may reduce the value.
Razor Item ID:
Template: [MODEL]-[HDD FORM FACTOR]x[QTY OF DRIVES - 2 DIGITS]
Example: R620-2.5x04
Razor Description:
Template: [U*][# BAYS*][BAY SIZE*] BAYS [CPU SOCKET*] [RAM TYPE*] [Line] [Server Type] [Item Type]
Example: 1U 4X 2.5” BAYS LGA2011 DDR3 POWEREDGE RACK SERVER
If components have been removed, write “Removed” on attribute field
Examples:
Dell: R620-2.5X04
Supermicro: P/N - SYS-6028TP-HTR (LOCATED ON THE SUPERMICRO LABEL) --> CHASSIS P/N (MOTHERBOARD P/N)
HP: P/N DL60 G9-2.5X04 (USUALLY LOCATED ON THE FRONT OF SERVER)


## IBM: FRU P/N
RAZOR Attributes:
PSU_Watts: 750, 1150
All servers should be stocked with two matching PSUs; or we order them
RAID_Card: H710P, OnBoard (backplane drive cables will plug directly into motherboard)
Use the shorter model number if possible, not the long part number
Do not stock a server without RAID, either scrap the server or buy the RAID card
Notes:
Servers must be stocked without the following components. If the server does not have them, order or scrap it.
A set of matching rails
Drives caddies (Unless HP or Dell)
Two ears (for rack mount servers)
A power supply for every PSU socket
A heatsink for every CPU socket
All PCI-E slots have slot covers
The PCI-E risers (If the server usually comes with it)
The SD card (For iDrac, iLo, etc.)
RAID Card (Unless the server usually comes with integrated RAID only)
Raid Card Battery
Raid Cable
Backplane
Fan Shroud
Top Cover


## STORAGE
RAZOR Categorical Structure:
Template: RESALE>NETWORKING>NETWORK STORAGE EQUIPMENT>[NETWORK STORAGE EQUIPMENT TYPE]
Example: RESALE>NETWORKING>NETWORK STORAGE EQUIPMENT
Item Number:
Template: MODEL/PN
Example: S45
Master Item Title:
Template: [STORAGE LINE*] [MODEL] [FORM*] [STORAGE TYPE*] [QTY DRIVES*] [DRIVE WIDTH*] [STORAGE CONTROLLER GBE] [CONTROLLER INTERFACE] [ITEM TYPE]
Example: ULTRA HIGH-POWERED 3U 45-DRIVE 3.5” 1GBE SAS STORAGE


## TELEVISION PARTS
RAZOR Categorical Structure:
Template:
Example:
Item Number:
Template:
Example:
Master Item Title:
110206Template:
Example:


## TRANSCEIVER
RAZOR Categorical Structure:
Template:
Example:
Item Number:
Template:
Example:
Master Item Title:
Template:
Example:


## WORKSTATION
RAZOR Categorical Structure:
Template:
Example:
Item Number:
Template:
Example:
Master Item Title:
Template:
Example:

import p5catalogenpdfUrl from '@contents/docs/p5-catalog-en.pdf?url';
import p5catalogkopdfUrl from '@contents/docs/p5-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const p5Data = {
  meta: {
    title: "DEEPSOUND P5 | Portable Phased Array Ultrasonic NDT Instrument",
    description: 'Explore the DEEPSOUND P5 by SEONGSANLAB. Featuring a 12.1" display, 32CH/128PR channel configuration, multi-group PAUT + TOFD, and real-time TFM/FMC capabilities.'
  },
  hero: {
    badge: "Flagship Portable PAUT",
    title: "DEEPSOUND P5",
    subtitle: "High-Performance PAUT & TOFD",
    description: "The DEEPSOUND P5 is a premium portable Phased Array Ultrasonic Testing (PAUT) instrument designed for high-resolution defect detection. Equipped with a glove-friendly 12.1\" wide touchscreen, it delivers outstanding operation speed, deep multi-group configuration, and raw TFM/FMC data processing for the most demanding field NDT environments.",
    buttons: {
      quote: "Request Quote",
      catalog: "Download Catalog (PDF)"
    }
  },
  quickSpecs: [
    { value: "32CH/128PR", label: "PAUT Configuration" },
    { value: "12.1\" TFT LCD", label: "Resistive Touchscreen" },
    { value: "Max 30 kHz", label: "Pulse Repetition Freq" },
    { value: "PAUT + TOFD", label: "Multi-Group Support" }
  ],
  features: [
    {
      badge: "PROCESSING VELOCITY",
      title: "Instantaneous Operation & Max 30kHz PRF",
      description: "Unlike standard NDT equipment, the DEEPSOUND P5 features an incredibly optimized operating architecture, ensuring responsive operations with zero delay. Supporting Pulse Repetition Frequencies (PRF) up to 30kHz, the P5 enables rapid scanning and seamless real-time data collection when paired with industrial encoders. Experience rapid focal law angle switching and instant depth scale adjustments in the field.",
      bullets: [
        "High-speed real-time data processing without frame drops",
        "Dynamic PRF range adjusting up to 30kHz",
        "Immediate rendering of Sectorial and Linear scans"
      ]
    },
    {
      badge: "IMAGE QUALITY",
      title: "Superior Axial Resolution & TFM / FMC",
      description: "Equipped with advanced beamforming algorithms, the P5 produces visible differences in beam focusing, enabling technicians to clearly distinguish between closely adjacent defects. For cutting-edge inspections, it supports Total Focusing Method (TFM) and Full Matrix Capture (FMC), allowing raw FMC data export to support research institutions and corporate partner R&D.",
      bullets: [
        "Excellent axial resolution for separating micro-defects",
        "Supports raw TFM/FMC data export via proprietary API",
        "Highly intuitive color-coded C-scan corrosion thickness mapping"
      ]
    },
    {
      badge: "REMOTE OPERATIONS",
      title: "Ethernet-Based Remote Control Connection",
      description: "The DEEPSOUND P5 supports a Remote Connection feature via Gigabit Ethernet, allowing engineers to run the DSVision acquisition suite directly on a laboratory desktop or laptop. This feature is ideal for remote monitoring in hazardous testing areas, or when performing CPU-heavy analyses that demand higher performance from a dedicated PC workstation.",
      bullets: [
        "Gigabit Ethernet LAN connection support",
        "Perfect for hazardous field setups or clean laboratory stations"
      ]
    }
  ],
  interfaceShowcase: {
    badge: "SOFTWARE SHOWCASE",
    title: "Optimized for the DSVision NDT Suite",
    description: "Operate the DEEPSOUND P5 using DSVision, our proprietary NDT acquisition software. It offers a clean, dark-mode GUI optimized for long hours of field inspection, with fast calibration wizards and comprehensive defect sizing tools.",
    screens: [
      {
        title: "Real-time Thickness & Corrosion Mapping View",
        description: "A C-scan thickness mapping interface that measures material thinning and corrosion. It detects depth variations in the engraved \"DSPAUT\" letters on the demo block, displaying them via a color-coded C-scan alongside simultaneous A-scan and B-scan profiles for precise thickness measurement."
      },
      {
        title: "Multi-Group PAUT + TOFD Simultaneous Analysis View",
        description: "Enhances cross-verification precision by displaying two Sectorial Scans (S-Scans) with different focal laws alongside a TOFD (Time-of-Flight Diffraction) scan for high-density crack depth sizing, all simultaneously on a single screen."
      }
    ]
  },
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "Intuitive Hardware Interface Map",
    description: "The DEEPSOUND P5 ensures perfect compatibility with various sensor probes and precision encoders. Check out the custom-designed ports for TC-ZIF or IPEX type connections.",
    left: {
      title: "Left Side Connections (Sensor & Encoder Interfaces)",
      items: [
        { label: "IPEX 160-pin Connector", desc: "MiniDLP IPEX 160-pin standard connector for secure probe fastening." },
        { label: "3-Axis Precision Encoder Port (D-sub 15-pin)", desc: "Directly receives encoder information from automated or manual pipe scanners to track scan distance." },
        { label: "LEMO 00 UT Connectors (2 Ports)", desc: "Dedicated LEMO 00 ultrasonic signal ports for independent pulse transmission and reception." }
      ]
    },
    right: {
      title: "Right Side Connections (Standard I/O & Power)",
      items: [
        { label: "External I/O Ports (USB, HDMI, LAN)", desc: "Supports USB data extraction, external monitor cloning, and Gigabit Ethernet network remote control." },
        { label: "DC Power Input Terminal", desc: "DC input port for device power supply and charging of hot-swappable internal batteries." }
      ]
    }
  },
  applications: {
    badge: "APPLICATIONS",
    title: "Major NDT Industrial Applications",
    description: "The DEEPSOUND P5 delivers precision and high reliability in demanding inspection conditions, ensuring facility safety and standard compliance.",
    items: [
      { title: "Power Plants & Hot Piping", desc: "Detection of defects in high-pressure steam pipes and gas pipeline welds, and real-time precise diagnosis of stress corrosion cracking (SCC) and thermal fatigue." },
      { title: "Shipbuilding & Offshore", desc: "Full penetration inspection of hull butt-welds and multi-channel monitoring of structural defects in complex curved penetrations." },
      { title: "Petrochemical & Tanks", desc: "C-scan mapping of corrosion distribution and measurement of remaining wall thickness on pressure vessels, distillation heat exchangers, and large storage columns." },
      { title: "Aerospace & Composites", desc: "Analysis of internal voids and delaminations in Carbon Fiber Reinforced Plastic (CFRP) fuselage structures and honeycomb sandwich composites." }
    ]
  },
  technicalSpecs: {
    title: "Technical Specifications",
    categories: [
      {
        name: "General & Mechanical",
        rows: [
          { label: "Dimensions (W x H x D)", value: "340 x 257 x 147 mm" },
          { label: "Weight", value: "5.9 Kg (including 3 batteries)" },
          { label: "Display", value: "12.1\" Widescreen [1280 x 800], Resistive Touchscreen" },
          { label: "Power & Battery", value: "12V 5A; 3x Li-ion 48Wh hot-swappable batteries (Up to 4 hours)" }
        ]
      },
      {
        name: "Acoustic & Configuration",
        rows: [
          { label: "PAUT Configuration", value: "32CH/128PR channels" },
          { label: "Effective Digitizer", value: "100 MHz" },
          { label: "Max PRF", value: "Up to 30 kHz" },
          { label: "Pulser Voltage / Width", value: "25V ~ 160V (5V step); Bipolar Pulse; Width: 50ns ~ 2,000ns" },
          { label: "Receiver Gain Range", value: "0 dB ~ 90 dB" },
          { label: "Receiver Bandwidth", value: "0.5 MHz ~ 20 MHz (16-bit sampling resolution)" },
          { label: "Scan Types", value: "Linear, Sectorial, Conventional UT, TOFD, TFM/FMC (optional)" }
        ]
      },
      {
        name: "Connectivity & Environmental",
        rows: [
          { label: "Probe Ports", value: "MiniDLP Ipex 160p x1 (with 2x Lemo 00)" },
          { label: "Encoder Input", value: "3-axis Encoder Input (D-sub 15pin 3row)" },
          { label: "Data Interfaces", value: "Gigabit Ethernet x1, HDMI x1, USB 2.0 x1" },
          { label: "Environmental Ranges", value: "Operating: 0 ~ 60°C; Storage: -20 ~ 80°C" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND P5 Documents & Support",
    items: [
      { title: "English Catalog", type: "PDF · 1.5MB", file: p5catalogenpdfUrl },
      { title: "Korean Catalog", type: "PDF · 1.6MB", file: p5catalogkopdfUrl },
      { title: "DSViewer Manual", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "Download"
  },
  contact: {
    title: "Request Quote for DEEPSOUND P5",
    description: "Submit your contact information and customized testing configurations, and our technical sales engineers will contact you with a dedicated quote.",
    labels: {
      name: "Your Name",
      company: "Company",
      email: "Email Address",
      message: "Custom Testing Configuration / Inquiries"
    },
    placeholder: "Mention your target NDT configurations, required probes/wedges, or testing specifications...",
    button: "Submit Quote Request"
  }
};

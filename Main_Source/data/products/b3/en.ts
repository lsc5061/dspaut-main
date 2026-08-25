import b3catalogenpdfUrl from '@contents/docs/b3-catalog-en.pdf?url';
import b3catalogkopdfUrl from '@contents/docs/b3-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const b3Data = {
  meta: {
    title: "DEEPSOUND B3 | Ultra-Lightweight Portable PAUT NDT Instrument",
    description: 'Explore the DEEPSOUND B3 by SEONGSANLAB. Under 1.4kg, featuring 16CH/64PR channel configuration, 7" touchscreen, and advanced real-time weld visualization.'
  },
  hero: {
    badge: "Maximum Mobility PAUT",
    title: "DEEPSOUND B3",
    subtitle: "Uncompromising Field Portability",
    description: "The DEEPSOUND B3 is an ultra-lightweight Portable Phased Array Ultrasonic Testing (PAUT) system specifically engineered for maximum mobility without sacrificing inspection quality. Weighing in at just 1.4kg, it is the ideal choice for scaffolding, rope access, and inspections in confined spaces where safety and portability are paramount.",
    buttons: {
      quote: "Request Quote",
      catalog: "Download Catalog (PDF)"
    }
  },
  quickSpecs: [
    { value: "1.4 kg", label: "Weight with Battery" },
    { value: "16CH/64PR", label: "PAUT Configuration" },
    { value: "7\" Touch", label: "Capacitive Display" },
    { value: "Max 30 kHz", label: "Pulse Repetition Freq" }
  ],
  features: [
    {
      badge: "ULTRA PORTABILITY",
      title: "Incredible Portability: Less Than 1.4kg",
      description: "When every gram counts, the DEEPSOUND B3 delivers. Weighing in at just 1.4kg with the battery (and under 1kg for the body), it is one of the lightest high-performance PAUT units in the world. Ideal for operators executing rope-access inspections or climbing scaffolding structures.",
      bullets: [
        "**True Grab-and-Go Design:** Compact form factor allows for stable one-handed operation in challenging environments.",
        "**7\" Wide Touchscreen:** Highly responsive capacitive touchscreen (1024×600) for effortless navigation.",
        "**Fast Swap Battery:** Quick-detachable smart battery system ensures up to 4 hours of continuous inspection."
      ]
    },
    {
      badge: "INSPECTION POWER",
      title: "Precision Inspection & Advanced Visualization",
      description: "Despite its compact design, the B3 utilizes advanced beam focusing technology to distinguish between complex micro-defects with clarity far surpassing standard NDT gear. It is equipped with a real-time data acquisition engine matching the flagship P5.",
      bullets: [
        "**Weld Visualization Mastery:** Simulate and visualize actual weld structures (V, Double V) and Heat Affected Zones (HAZ) directly within the software.",
        "**Flexible Group Management:** Support for up to 4 independent channel groups, allowing combined PAUT + TOFD inspections.",
        "**High-Speed Processing:** 30kHz PRF support ensures instantaneous operation and fast data collection.",
        "**Integrated Calibration:** Fast calibration for Velocity, Wedge Delay, TCG, and Encoder to guarantee accuracy on-site."
      ],
      imageCaption: "100% P5 Software Engine Matching"
    }
  ],
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "DEEPSOUND B3 Interface & Ports Map",
    description: "Designed for immediate field diagnostic capability, the B3 layout incorporates dedicated sensor ports on the top and standard communication interfaces behind a protective rear hatch.",
    left: {
      title: "Top Connector Panel (Probe & Encoder)",
      items: [
        { label: "IPEX 160p Connector", desc: "Secure high-density attachment interface for Phased Array (PAUT) probes." },
        { label: "2x UT BNC Connectors", desc: "Dedicated BNC ports for conventional pulse-receive ultrasonic transducers." },
        { label: "Encoder / Aux Interface", desc: "Integrated encoder port for displacement tracking and scanner synchronization." }
      ]
    },
    right: {
      title: "Rear Panel Connections (I/O & Power)",
      items: [
        { label: "Gigabit Ethernet (RJ45)", desc: "High-speed LAN link supporting remote PC control and data sync." },
        { label: "Standard USB 3.0 & Micro USB", desc: "Allows fast file exports, firmware upgrades, and device connectivity." },
        { label: "Micro HDMI & DC Jack", desc: "Supports external screen cloning and DC 12V power adapter charging." }
      ]
    }
  },
  technicalSpecs: {
    title: "Technical Specifications",
    categories: [
      {
        name: "General & Mechanical",
        rows: [
          { label: "Weight", value: "1.4 kg (Including Battery), < 1.0 kg (Body Only)" },
          { label: "Display", value: "7\" Wide Capacitive Touchscreen (1024 x 600)" },
          { label: "Battery Life", value: "Up to 4 hours of continuous operation (quick-detachable)" }
        ]
      },
      {
        name: "Acoustic & Configuration",
        rows: [
          { label: "PAUT Configuration", value: "16CH/64PR channels" },
          { label: "Effective Digitizer", value: "100 MHz" },
          { label: "Max PRF", value: "Up to 30 kHz" },
          { label: "Sample Resolution", value: "16 bit" },
          { label: "Scanner Support", value: "Linear, Sectorial, Conventional, TOFD (Up to 4 Independent Groups)" }
        ]
      },
      {
        name: "Connectivity",
        rows: [
          { label: "I/O Ports", value: "USB 3.0, Micro HDMI, 2-Axis Encoder input" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND B3 Documents & Support",
    items: [
      { title: "English Catalog", type: "PDF · 2.8MB", file: b3catalogenpdfUrl },
      { title: "Korean Catalog", type: "PDF · 2.8MB", file: b3catalogkopdfUrl },
      { title: "DSViewer Manual", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "Download"
  },
  contact: {
    title: "Request Quote for DEEPSOUND B3",
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

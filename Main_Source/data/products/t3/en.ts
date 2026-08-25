import t3catalogenpdfUrl from '@contents/docs/t3-catalog-en.pdf?url';
import t3catalogkopdfUrl from '@contents/docs/t3-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const t3Data = {
  meta: {
    title: "DEEPSOUND T3 | Portable Precision Conventional UT & TOFD NDT Instrument",
    description: 'Explore the DEEPSOUND T3 by SEONGSANLAB. A class-leading Conventional UT scanner under 0.9kg with 7" touchscreen, 3000Hz PRF, and real-time TOFD imaging.'
  },
  hero: {
    badge: "Ultralight Conventional UT & TOFD",
    title: "DEEPSOUND T3",
    subtitle: "Class-Leading Lightweight Precision",
    description: "The DEEPSOUND T3 is a class-leading Conventional Ultrasonic Testing (UT) scanner that shatters the weight barriers of industrial NDT gear. Designed by SEONGSANLAB, the T3 combines an astonishing 0.9kg ultra-lightweight body with the precision and encoder support required for mission-critical TOFD and UT assessments.",
    buttons: {
      quote: "Request Quote",
      catalog: "Download Catalog (PDF)"
    }
  },
  quickSpecs: [
    { value: "0.9 kg", label: "Weight with Battery" },
    { value: "3,000 Hz", label: "Max PRF" },
    { value: "7\" Touch", label: "Capacitive Display" },
    { value: "UT & TOFD", label: "Core Support" }
  ],
  features: [
    {
      badge: "FEATHERWEIGHT DESIGN",
      title: "Astonishing 0.9kg: The Lightest in its Class",
      description: "Experience fatigue-free inspection sessions. Even with the battery installed, the DEEPSOUND T3 remains under 0.9kg, allowing for stable, one-handed operation during long shifts or in narrow, difficult-to-access locations. It is designed to maximize field agility without sacrificing performance.",
      bullets: [
        "**Featherweight Design:** At just 0.9kg, the T3 reduces physical strain during inspections.",
        "**7\" High-Resolution Display:** A vibrant 1024×600 capacitive touchscreen provides crystal-clear A-scan data.",
        "**Extended Endurance:** High-capacity 47.52Wh smart battery supports up to 5 hours of continuous operation."
      ]
    },
    {
      badge: "PRECISION IMAGING",
      title: "Professional UT & Specialized TOFD Imaging",
      description: "The DEEPSOUND T3 is optimized for core NDT inspection, featuring specialized TOFD tools and integrated encoder support for real-time high-fidelity recording. It ensures excellent thickness measurements and flaw evaluation.",
      bullets: [
        "**Real-Time TOFD:** Capture and record reliable TOFD images on the fly via the built-in encoder port.",
        "**High-Speed Signals:** 3,000Hz PRF and 16-bit resolution deliver exceptionally sharp signals.",
        "**Intuitive Mapping:** Gate-triggered B-Scan and C-Scan transformations allow visual defect analysis.",
        "**Full Calibration:** Standard integrated tools for Velocity, Wedge Delay, DAC, and Encoder."
      ]
    }
  ],
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "DEEPSOUND T3 Interface & Ports Map",
    description: "The DEEPSOUND T3 layout incorporates dedicated ultrasonic sensor ports on the top edge and industrial communication connections on the right panel.",
    left: {
      title: "Top Connector Panel (Probe & Encoder)",
      items: [
        { label: "Dual BNC UT Connectors", desc: "Dedicated BNC ports optimized for pulse-receive Conventional UT and TOFD probes." },
        { label: "Encoder / Aux Interface", desc: "Integrated encoder port for displacement tracking and scanner synchronization." }
      ]
    },
    right: {
      title: "Right Panel Connections (I/O & Power)",
      items: [
        { label: "Gigabit Ethernet (RJ45)", desc: "High-speed LAN link supporting remote PC control and data sync." },
        { label: "Standard USB 3.0", desc: "Allows fast file exports, firmware upgrades, and device connectivity." },
        { label: "DC 12V Power Jack", desc: "DC power input for system operation and charging the internal battery." }
      ]
    }
  },
  technicalSpecs: {
    title: "Technical Specifications",
    categories: [
      {
        name: "General & Mechanical",
        rows: [
          { label: "Classification", value: "Portable Conventional UT (휴대용 초음파 탐상기)" },
          { label: "Weight", value: "0.9 kg (Including Battery)" },
          { label: "Display", value: "7\" Wide Capacitive Touchscreen (1024 x 600)" },
          { label: "Battery Life", value: "Up to 5 Hours (47.52Wh Smart Battery)" }
        ]
      },
      {
        name: "Acoustic & Configuration",
        rows: [
          { label: "Max PRF", value: "3,000 Hz (3 kHz)" },
          { label: "Sample Resolution", value: "16 bit" },
          { label: "Pulser Type", value: "Bipolar Pulse (25V ~ 160V)" },
          { label: "Scan Support", value: "Conventional UT, TOFD (including B-Scan, C-Scan)" }
        ]
      },
      {
        name: "Connectivity",
        rows: [
          { label: "I/O Interfaces", value: "2-Axis Encoder, Gigabit LAN, USB 3.0" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND T3 Documents & Support",
    items: [
      { title: "English Catalog", type: "PDF · 2.1MB", file: t3catalogenpdfUrl },
      { title: "Korean Catalog", type: "PDF · 2.2MB", file: t3catalogkopdfUrl },
      { title: "DSViewer Manual", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "Download"
  },
  contact: {
    title: "Request Quote for DEEPSOUND T3",
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

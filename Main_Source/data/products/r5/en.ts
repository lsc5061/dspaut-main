import r5catalogenpdfUrl from '@contents/docs/r5-catalog-en.pdf?url';
import r5catalogkopdfUrl from '@contents/docs/r5-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const r5Data = {
  meta: {
    title: "DEEPSOUND R5 | Rack-Mount NDT PAUT System Board for Automation",
    description: 'Explore the DEEPSOUND R5 by SEONGSANLAB. A 19" rack-mountable 32CH/128PR PAUT system board optimized for automated manufacturing lines and custom NDT R&D.'
  },
  hero: {
    badge: "Automated Inspection & R&D Board",
    title: "DEEPSOUND R5",
    subtitle: "High-Performance OEM PAUT Engine",
    description: "The DEEPSOUND R5 is a cutting-edge 19-inch rack-mountable Phased Array Ultrasonic Testing (PAUT) system specifically designed for automated manufacturing lines and advanced R&D environments. The R5 provides the raw processing power, multi-board scaling, and integration flexibility required for high-volume quality control and experimental research.",
    buttons: {
      quote: "Request R5 OEM Quote",
      catalog: "Download Catalog (PDF)"
    }
  },
  quickSpecs: [
    { value: "19\" Rack", label: "Standard Form Factor" },
    { value: "32CH/128PR", label: "PAUT Configuration" },
    { value: "Max 30 kHz", label: "Pulse Repetition Freq" },
    { value: "DSK Support", label: "C# SDK" }
  ],
  features: [
    {
      badge: "SCALABLE ARCHITECTURE",
      title: "Industrial Scalability: 19\" Rack-Mount Design",
      description: "Experience seamless integration into your existing factory infrastructure. The R5 is optimized for industrial rack systems, allowing for stable, multi-channel configurations. It is equipped with a built-in standalone PC, so there's no need to connect external hardware control units.",
      bullets: [
        "**19-Inch Rack Compatibility:** Standard rack-mount form factor for organized, secure, and compact multi-unit operation.",
        "**Standalone Operation:** Built-in PC inside. Simply connect a monitor via HDMI and run inspection programs directly.",
        "**Multi-Board Expansion:** Stack multiple units to accommodate high-volume factory automated scanner lines."
      ]
    },
    {
      badge: "C# SYSTEM INTEGRATION",
      title: "Advanced Multi-Channel Processing & Flexible C# DSK Integration",
      description: "The DEEPSOUND R5 features a high-performance hardware architecture designed for precise multi-channel ultrasonic signal computation. It seamlessly processes dense data streams from 32CH/128PR Phased Array and 4-channel Conventional UT configurations. For quick integration, it supports a dedicated C# DSK API/SDK to program custom automation UI screens and hardware control algorithms.",
      bullets: [
        "**32CH/128PR High-Fidelity Signal:** Handles linear, sectoral, and single conventional UT probe inputs with zero data loss.",
        "**C#-Dedicated DSK SDK:** Features optimized .NET API classes for rapid development of control logic and customized inspection dashboards.",
        "**Real-Time Data Streaming:** Streams acoustic raw data over a 1Gbps Ethernet connection directly to your remote PC without latency."
      ],
      codeSnippet: {
        filename: "dsk_api_example.cs",
        code: `using System;
using DEEPSOUND;

// Initialize R5 OEM Board via DSK
DSK.InitDsk();
bool isReady = DSK.InitDevice();

if (isReady) {
    // Configure hardware parameters
    DSK.SetGain(45.0);
    DSK.SetPulseVoltage(120);
    
    // Apply parameters to hardware
    DSK.UploadAllParameters();
}`
      }
    }
  ],
  applications: {
    badge: "KEY APPLICATIONS",
    title: "Target Industrial Applications",
    description: "The DEEPSOUND R5 Phased Array engine is optimized for high-volume automated testing setups and custom scientific R&D platforms.",
    items: [
      {
        icon: "🏭",
        title: "In-Line Automated QA",
        desc: "Seamlessly integrates with robotic arms and factory conveyor setups for high-speed, 24/7 automated inspection of automotive, steel, and tube parts."
      },
      {
        icon: "✈️",
        title: "Aerospace & Composites",
        desc: "Supports automated gantry and water-immersion systems for high-resolution ultrasonic imaging (C-scan) of critical composite materials and wing components."
      },
      {
        icon: "🔬",
        title: "NDT R&D & Custom Rigs",
        desc: "Provides an open DSK SDK interface for university researchers and system integrators to write custom scripts and test new beamforming algorithms."
      },
      {
        icon: "🚄",
        title: "Railway & Infrastructure",
        desc: "Powers high-speed rolling search units for automatic detection of internal cracks and defects in railway wheelsets, axles, and tracks."
      }
    ]
  },
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "DEEPSOUND R5 Interface & Ports Map",
    description: "The DEEPSOUND R5 layout integrates high-frequency sensor connections and a phased array probe port on the front panel, with power, display, and high-speed communication interfaces on the rear panel.",
    left: {
      title: "Front Panel (Probes & Control)",
      items: [
        { label: "High-Density Phased Array Connector", desc: "Multi-pin high-density probe connector supporting up to 32CH/128PR Phased Array configurations." },
        { label: "4x Conventional UT Ports", desc: "4 auxiliary coaxial channels (LEMO 00) for standard pulse-echo UT or TOFD probes." },
        { label: "Power Switch & LED Indicators", desc: "Backlit power button and 3-channel diagnostic LEDs indicating hardware status." }
      ]
    },
    right: {
      title: "Rear Panel (I/O, Video & Communication)",
      items: [
        { label: "DB25 Encoder / I/O Port", desc: "25-pin D-sub port supporting 3-axis encoder inputs and hardware trigger synchronization." },
        { label: "Dual Video Outputs (HDMI & VGA)", desc: "Support for external monitor connection to display real-time PAUT software UI." },
        { label: "Gigabit Ethernet & USB 3.0", desc: "High-speed LAN connectivity for raw data streaming and USB ports for system peripherals." }
      ]
    }
  },
  technicalSpecs: {
    title: "Technical Specifications",
    categories: [
      {
        name: "General & Mechanical",
        rows: [
          { label: "Form Factor", value: "19\" standard rack mount multi-board design" },
          { label: "PC System", value: "Built-in Standalone Industrial PC" },
          { label: "Operating System", value: "Windows Embedded / Linux support" }
        ]
      },
      {
        name: "Acoustic & Configuration",
        rows: [
          { label: "PAUT Configuration", value: "32CH/128PR channels" },
          { label: "Conventional UT", value: "4 Channels (LEMO 00 connectors)" },
          { label: "Pulser Type", value: "Bipolar Pulse (25V ~ 190V)" },
          { label: "Effective Digitizer", value: "100 MHz" },
          { label: "Max PRF", value: "Up to 30,000 Hz (30 kHz)" },
          { label: "Sample Resolution", value: "16 bit" },
          { label: "Software Support", value: "DSK (SDK APIs), Custom UI integrations" }
        ]
      },
      {
        name: "Connectivity",
        rows: [
          { label: "I/O Ports", value: "Fast Gigabit LAN, HDMI out, USB 3.0, 3-Axis Encoder support" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND R5 Documents & Support",
    items: [
      { title: "English Catalog", type: "PDF · 1.4MB", file: r5catalogenpdfUrl },
      { title: "Korean Catalog", type: "PDF · 1.5MB", file: r5catalogkopdfUrl },
      { title: "DSViewer Manual", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "Download"
  },
  contact: {
    title: "Request R5 Spec & OEM Inquiry",
    description: "Submit your company details and automated NDT scanner project requirements. Our technical R&D and integration engineers will contact you.",
    labels: {
      name: "Your Name",
      company: "Company",
      email: "Email Address",
      message: "Project Requirements & OEM Inquiries"
    },
    placeholder: "Mention your target factory scanning setups, multiboard configurations, required DSK SDK language interfaces...",
    button: "Submit R5 OEM Inquiry"
  }
};

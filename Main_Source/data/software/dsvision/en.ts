export const dsvisionData = {
  meta: {
    title: "DSVision | Real-Time Phased Array Ultrasonic Testing (PAUT) Data Acquisition & Analysis Software",
    description: "Introducing SEONGSANLAB's real-time ultrasonic data acquisition and analysis software, DSVision. High-resolution A/B/C/S-scan imaging, guided calibration wizards, weld overlay, and corrosion mapping support."
  },
  hero: {
    badge: "Instrument Native Real-Time Acquisition SW",
    title: "DSVision",
    subtitle: "Real-Time Ultrasonic Data Acquisition & Analysis",
    description: "DSVision is a real-time data acquisition and analysis software designed specifically for Phased Array Ultrasonic Testing (PAUT) and TOFD inspections. Integrated directly into portable hardware systems (P5, B3, etc.), it delivers an intuitive, operator-focused user interface and high-speed signal processing to visualize sectorial and linear scan beam-forming signals live.",
    buttons: {
      quote: "Software Inquiry",
      support: "Technical Support Portal"
    }
  },
  quickSpecs: [
    { value: "A/B/C/S-Scan", label: "Live Imaging Mapping" },
    { value: "Max 30 kHz", label: "Pulse Repetition Frequency (PRF)" },
    { value: "PAUT & TOFD", label: "Multi-Group Acquisition" },
    { value: "Guided Calibration", label: "Auto Calibration Wizard" }
  ],
  tabs: {
    badge: "SCANNING MODES",
    title: "Linear & Sectorial Imaging Modes",
    description: "Switch between high-speed Linear array scans and multi-angle Sectorial sweep scans to adapt to various weld inspection, corrosion mapping, and structural testing geometries.",
    linear: {
      title: "Volumetric Linear Array Scanning",
      description1: "Linear Scanning utilizes a group of elements to sweep sequentially along the length of the phased array probe at a fixed angle. This provides uniform coverage and constant beam characteristics across the active aperture.",
      description2: "By configuring a linear scan, technicians can compile real-time **B-scan (Side View)** and **C-scan (Top View)** maps, rendering a comprehensive volumetric reconstruction of the specimen to precisely position subsurface flaws.",
      bullets: [
        "Sequential electronic aperture stepping",
        "Real-time B-scan & C-scan volumetric compilation",
        "Ideal for corrosion mapping & plate inspections",
        "Uniform acoustic sensitivity across the scan path"
      ]
    },
    sectorial: {
      title: "Angular Sectorial Sweeps & Weld Overlay",
      description1: "Sectorial Scanning (S-Scan) sweeps the ultrasonic beam through a range of refracted angles (e.g., 30° to 80°) using precise element time-delay configurations. This allows the acoustic wave to penetrate deep into complex weld geometries from a single probe position.",
      description2: "Coupled with our real-time **Weld Overlay** module, S-scan data is mapped directly on top of joint profiles (V-weld, Double-V). Leg markers (B0, T1, B2) are visualized dynamically, assisting technicians in correlating flaw echoes with their exact physical position inside the weld root or HAZ.",
      bullets: [
        "High angle resolution angular sweeps (30° to 80°)",
        "Dynamic Weld Overlay & heat-affected zone (HAZ) lines",
        "Weld skip path markers (Leg B0, T1, B2, T3)",
        "Rapid angular sizing of weld cracks & lack of fusion"
      ]
    }
  },
  multibeam: {
    badge: "MULTI-BEAM SYSTEM",
    title: "Multi-Group & Multi-Channel Progression",
    description: "Expand your scan capabilities sequentially, from single-probe PAUT checks up to complex multi-probe scanner networks.",
    cards: [
      {
        badge: "Standard Mode",
        title: "Single Group PAUT (1-GP)",
        description: "Configure one phased array probe to steer angle sweeps. Provides real-time sectorial (S-scan) or linear scan data for basic weld inspections and flaw diagnostics.",
        footer: "Basic 1-Probe configuration",
        status: "1-Group ✔"
      },
      {
        badge: "Dual Technique",
        title: "Simultaneous PAUT & TOFD",
        description: "Combine Phased Array and Conventional TOFD (Time of Flight Diffraction) side-by-side. Allows dual detection of volumetric weld flaws and micro-crack tip diffraction sizing.",
        footer: "Parallel technique synchronization",
        status: "2-Group ✔"
      },
      {
        badge: "Complex Scan",
        title: "Multi-Probe Scanner Setup",
        description: "Link multiple active probes (e.g. dual-sided weld setups) simultaneously. The software maps separate channels on the screen and aligns coordinates using encoder feedback.",
        footer: "Up to 4 encoder-linked groups",
        status: "Multi-Group ✔"
      }
    ]
  },
  premium: {
    badge: "PREMIUM HIGH-RESOLUTION IMAGING",
    title: "Real-Time Total Focusing Method (TFM) \n & Full Matrix Capture (FMC)",
    description: "Traditional phased array focusing is limited to designated depths. TFM captures raw FMC waveforms and post-processes them in real-time, calculating focal coordinates at **every single pixel** of the ROI to yield unmatched volumetric resolution. Technicians can toggle below to compare high-resolution TFM scans with traditional Phased Array S-scans.",
    galleryLabel: "TFM & PAUT Calibration Gallery"
  },
  measurement: {
    badge: "MEASUREMENT & TOLERANCE",
    title: "High-Precision Sizing Cursors & Gating",
    description1: "Perform instant on-screen defect dimensioning with independent horizontal and vertical cursors. Gate configurations (Gate A, B, I) can be defined with separate threshold levels and height parameters to automate defect alerts.",
    description2: "Supports **Peak and Edge** detection gating. The **Edge detection mode** is particularly optimized for corrosion mapping (C-scan thickness calculation), tracking the first breaking wave edge to avoid measurement jumps due to signal noise.",
    bullets: [
      "Three gates (Gate A, B, and I) for precise signal monitoring and surface tracking",
      "Edge detection gating prevents thickness readout jitter",
      "Live gate measurement display: Amplitude (%), Primary (P), Depth (D), and Sound (S)",
      "Relative value differences (%, D, S) calculation between Gate A and Gate B"
    ],
    labels: {
      cursor: "Sizing Cursor Analysis (ΔH, ΔV)",
      keypad: "Gate Start Keypad Overlay"
    }
  },
  contact: {
    title: "Inquire about DSVision",
    description: "Submit your contact information and inquiries regarding DSVision licensing or technical sales support, and our team will get back to you shortly.",
    labels: {
      name: "Your Name",
      company: "Company",
      email: "Email Address",
      message: "Inquiries & Requirements"
    },
    placeholder: "Mention your target applications, licensing questions, or sales inquiries...",
    button: "Submit DSVision Inquiry"
  }
};

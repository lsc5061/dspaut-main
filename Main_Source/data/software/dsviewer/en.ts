export const dsviewerData = {
  meta: {
    title: "DSViewer | Offline Phased Array Ultrasonic Testing (PAUT) Data Analysis Software",
    description: "Introducing SEONGSANLAB's offline data analysis software, DSViewer. High-resolution A/B/C/D/S-scan viewing, precise flaw sizing, and offline calibration."
  },
  hero: {
    badge: "PC-dedicated Offline Data Analysis SW",
    title: "DSViewer",
    subtitle: "Offline Data Analysis",
    description: "DSViewer is a dedicated PC software package developed to analyze and evaluate raw ultrasonic inspection data (.dat, .raw) offline. Offering a highly optimized user interface with flexible multi-view layouts, precise crosshair sizing, and customized corrosion color mapping, it enables engineers to easily identify, size, and document flaws.",
    buttons: {
      download: "Download DSViewer (Hub)",
      support: "Technical Support Portal"
    },
    tabs: [
      { label: "Corrosion C-Scan" },
      { label: "Weld Inspection" },
      { label: "Multi-Channel" },
      { label: "Sizing Measurement" }
    ]
  },
  quickSpecs: [
    { value: "Raw Data", label: "Drag & Drop File Load" },
    { value: "Data Bar", label: "Scan Position Data Sync" },
    { value: "Precision Sizing", label: "Measure Flaw Size & Depth" },
    { value: "Multi-Scan View", label: "A/B/C/D/S-Scan Display" }
  ],
  features: [
    {
      badge: "DATA VISUALIZATION",
      title: "Offline 2D C-Scan & Corrosion Mapping",
      description1: "Load raw inspection data files (.dat, .raw) copied from portable hardware via USB. Generates high-contrast 2D color maps (such as \"DSPAUT\" specimen scans) to visually inspect corrosion topography, composite delamination, or internal material voids.",
      description2: "Supports dedicated corrosion mapping mode. Operators can toggle color map rendering based on Amplitude (A%) or Position (A/, B/, A/-B/, Position), and dynamically adjust visual scale limits (Min/Max, Linear/Reverse) to easily distinguish micro-thickness variations.",
      bullets: [
        "Ultra-fast rendering of large raw ultrasonic data files",
        "Corrosion-specific color map palettes and real-time range control",
        "Automatic extraction of original acquisition hardware parameters"
      ],
      reverseLayout: true
    },
    {
      badge: "SCAN LAYOUTS",
      title: "Multi-View Layouts & 5-Axis Rulers",
      description1: "Provides a comprehensive multi-window scan dashboard. View A-scan, B-scan, C-scan, D-scan, and S-scan (Sectorial) simultaneously. Windows are fully customizable, allowing operators to arrange layouts (e.g. A-B-C or side-by-side) to match their workflow.",
      description2: "To help identify defect coordinates instantly, the software features dedicated, color-coded rulers: Scan Axis (Blue), Index Axis (Green), Amplitude (Yellow), Sound Path (Pink), and True Depth (Purple).",
      bullets: [
        "Simultaneous multi-scan views (A, B, C, D, S-scan) mapped in real-time",
        "5-axis color-coded rulers for error-free coordinate verification",
        "Multi-channel support to analyze multiple active probes side-by-side"
      ],
      reverseLayout: false
    },
    {
      badge: "MEASUREMENT & TOLERANCE",
      title: "Precision Flaw Sizing & 3-Gate Analysis",
      description1: "Evaluate flaws quantitatively with independent Reference and Measurement cursors on the horizontal and vertical axes. Cursors allow operators to outline defect boundaries and calculate exact length and height.",
      description2: "Features Gate A, B, and I (Interface gate) to monitor A-scan and S-scan wave peaks. The built-in Measure Tool displays critical sizing metrics: Amplitude (A%, B%, I%), Sound Path (SA, SB, SI), Reflector Depth (DA, DB, DI), Distance from zero (PA, PB, PI), and Delta (Δ) difference values between Gate A and B.",
      bullets: [
        "Interactive Reference & Measurement cursor lines for spatial dimensioning",
        "Independent 3-gate (A, B, I) configuration and threshold triggers",
        "Comprehensive Measure Tool displaying %, SA/SB/SI, DA/DB/DI, and Delta"
      ],
      reverseLayout: true
    },
    {
      badge: "CALIBRATION & DATA EXPORT",
      title: "Dynamic Zoom & Offline Calibration",
      description1: "Activate Zoom mode to inspect micro-defects closely. Simply drag and drop to magnify region-of-interest areas, or scroll with the mouse wheel to zoom dynamically.",
      description2: "Supports post-inspection calibration without changing raw files. Adjust Wedge Delay, material Velocity, or TOFD alignment values dynamically to correct rulers instantly. Analysis screens can be captured and saved as individual PNG files for quick reporting and documentation.",
      bullets: [
        "Mouse wheel zoom & drag-to-magnify window control",
        "Offline Wedge Delay, material Velocity, and TOFD synchronization calibration",
        "Direct export of active scan views to individual PNG image files"
      ],
      reverseLayout: false
    }
  ],
  contact: {
    title: "Inquire about DSViewer",
    description: "Submit your contact information and inquiries regarding DSViewer licensing or technical sales support, and our team will get back to you shortly.",
    labels: {
      name: "Your Name",
      company: "Company",
      email: "Email Address",
      message: "Inquiries & Requirements"
    },
    placeholder: "Mention your target applications, licensing questions, or sales inquiries...",
    button: "Submit DSViewer Inquiry"
  }
};

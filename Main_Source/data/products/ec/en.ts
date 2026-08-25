export const ecData = {
  meta: {
    title: "DEEPSOUND EC | Encoder Converter Adapter",
    description: "Connect standard scanner encoders to your DSPAUT instrument using the DEEPSOUND EC Converter. Features lightweight aluminum body, 300mm cable, and cost-effective Lemo to D-sub mapping."
  },
  hero: {
    badge: "NDT Hardware Adaptability",
    title: "DEEPSOUND EC",
    subtitle: "Encoder Converter",
    description: "Solve your encoder connection issues with a single cost-effective converter. Developed by SEONGSANLAB, the DEEPSOUND EC bridges standard scanner encoders to your DSPAUT instrumentation, allowing coordinate sync without purchasing expensive new encoders.",
    buttons: {
      quote: "Inquire Now",
      specs: "View Specifications"
    }
  },
  quickSpecs: [
    { value: "100 g", label: "Pocketable & Light Weight" },
    { value: "300 mm", label: "Standard Cable Length" },
    { value: "Lemo Type", label: "Output (To Instrument)" },
    { value: "Aluminum (AL)", label: "Anodized Housing" }
  ],
  features: [
    {
      badge: "KEY ADVANTAGES",
      title: "Durable Aluminum Body & Easy Integration",
      description: "The DEEPSOUND EC Converter features a highly reliable D-SUB screw lock for standard scanner connectors, matched with a LEMO type port for standard DSPAUT instrument input. It delivers precise coordinate matching under active scanning configurations.",
      bullets: [
        "**Easy to Carry:** Lightweight, pocketable size, easy to store and handle during tall climbing operations.",
        "**Rugged Aluminum Casing:** Unlike plastic adapters, the EC uses a precision metal shell to resist mechanical stress on-site.",
        "**Universal Selection:** Connect Olympus, Sungsan, or other standard scanners directly with a single mapping box."
      ],
      card: {
        title: "Broad Scanner Compatibility",
        description: "Connect standard scanner models like the Olympus HST-Lite, ChainScanner, Cobra, or any third-party crawler scanner system directly. No need to cut wires or splice pins in field trailers. Simply plug and lock the adapter for immediate data collection.",
        specs: [
          { label: "Supported Scanners", value: "Olympus, Sonatest, Custom Crawlers" },
          { label: "Enclosure Rating", value: "IP65 Protected Molded ABS Casing" }
        ]
      },
      connectors: {
        lemo: "LEMO Connector Type",
        dsub: "D-SUB Connector Type"
      }
    }
  ],
  technicalSpecs: {
    title: "Technical Specifications",
    categories: [
      {
        name: "Electrical & Signal",
        rows: [
          { label: "Encoder Signal Type", value: "TTL Incremental (Quadrature A / B)" },
          { label: "Max Pulse Frequency", value: "500 kHz" }
        ]
      },
      {
        name: "Mechanical & Environmental",
        rows: [
          { label: "Port (Input)", value: "D-SUB type (From Scanner)" },
          { label: "Port (Output)", value: "LEMO type (To Instrument)" },
          { label: "Housing Material", value: "Precision CNC-milled Anodized Aluminum (AL)" },
          { label: "Cable Length", value: "300 mm" },
          { label: "Weight", value: "100g (Lightweight handheld bridge)" }
        ]
      }
    ]
  },
  connectionFlow: {
    badge: "CONNECTION FLOW",
    title: "DEEPSOUND EC Connection Flow & Design Perspective",
    description: "Visual representation of connection interfaces and the physical layout of the encoder converter.",
    diagramLabel: "Converter Connection Flow",
    perspectiveLabel: "Product Perspective View",
    note: "* The connection flow illustrates the interface conversion path from scanner sensors to instruments."
  },
  contact: {
    title: "Inquire About DEEPSOUND EC",
    description: "Submit your scanner model and required connector pins. Our custom assembly engineering team will assemble the proper converter interface for your site.",
    labels: {
      name: "Your Name *",
      company: "Company *",
      email: "Email Address *",
      message: "Inquiry / Encoder Pin Specifications *"
    },
    placeholder: "Specify your scanner model (e.g., Olympus Cobra), encoder connector type (e.g. 15-pin D-sub or Lemo 4-pin), and the target instrument model...",
    button: "Submit Inquiry"
  }
};

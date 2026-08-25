export const ztoData = {
  meta: {
    title: "DEEPSOUND ZTO | Portable Probe Converter Adapter",
    description: "Connect standard third-party Phased Array probes to your DSPAUT instrument using the DEEPSOUND ZTO Converter. Features lightweight aluminum body, 30-40% cost efficiency, and 160p to 260p port conversion."
  },
  hero: {
    badge: "NDT Hardware Adaptability",
    title: "DEEPSOUND ZTO",
    subtitle: "Portable Probe Converter",
    description: "Maximize legacy sensor investments and eliminate the burden of purchasing new ultrasonic sensors every time equipment is changed. Developed by SEONGSANLAB, the DEEPSOUND ZTO is a premium palm-sized aluminum adapter designed to map standard third-party IPEX 160-pin probes directly to DSPAUT 260-pin ZIF instrumentation.",
    buttons: {
      quote: "Inquire Now",
      specs: "View Specifications"
    }
  },
  quickSpecs: [
    { value: "240 g", label: "Compact & Light Weight" },
    { value: "IPEX 160p", label: "Female Input Port" },
    { value: "TC-ZIF 260p", label: "Male Output Port" },
    { value: "Aluminum (AL)", label: "Lightweight & Sturdy Body" }
  ],
  features: [
    {
      badge: "KEY ADVANTAGES",
      title: "Palm-Sized High-Durability Adaptability",
      description: "The DEEPSOUND ZTO Converter bridges the brand gap between standard industrial probes and DSPAUT systems. Highly recommended for inspection agencies looking to utilize existing sensor infrastructure while transitioning to high-speed digital instrumentation.",
      bullets: [
        "**Comfortable Portability:** Compact and flexible cable-integrated design optimized for tight scaffolding and field NDT settings.",
        "**Outstanding Cost Savings:** Experience 30% to 40% lower costs compared to buying expensive imported converters or brand-new probes.",
        "**Rugged Aluminum Casing:** Anodized metal shield housing protects delicate interior pins from drops, impacts, and heavy vibration."
      ],
      card: {
        title: "Developed by SEONGSANLAB",
        description: "Since 2011, SEONGSANLAB (성산연구소) has been at the forefront of Phased Array UT diagnostic hardware design. Every DEEPSOUND ZTO adapter undergoes rigorous laboratory testing to ensure zero signal lag, standard 50 Ω impedance matching, and seamless data transfer.",
        specs: [
          { label: "Origin", value: "100% Made in South Korea" },
          { label: "Shielding Level", value: "Double Shielded Coaxial Layout" }
        ]
      },
      connectors: {
        plug: "Latch-Lock Interface (260P)",
        adapter: "Adapter Module (ZTO-260P)"
      }
    }
  ],
  technicalSpecs: {
    title: "Technical Specifications",
    categories: [
      {
        name: "Electrical & Signal",
        rows: [
          { label: "Signal Attenuation", value: "< 0.2 dB (at 5 MHz, optimized for 0.5-15 MHz band)" },
          { label: "Impedance", value: "50 Ω standard match" },
          { label: "Maximum Channels", value: "128 element mapping (supports 16:64, 32:128)" }
        ]
      },
      {
        name: "Mechanical & Connectors",
        rows: [
          { label: "Input Port (Female)", value: "IPEX minidock 160-Pin (Universal Omniscan standard)" },
          { label: "Output Port (Male)", value: "TC-ZIF 260-Pin (DSPAUT native instrument layout)" },
          { label: "Housing Material", value: "Precision CNC-milled Anodized Aluminum (AL)" },
          { label: "Dimensions", value: "84.6 mm (W) × 67.3 mm (H) × 25.4 mm (D)" },
          { label: "Weight", value: "240g (Lightweight handheld bridge)" }
        ]
      }
    ]
  },
  connectionFlow: {
    badge: "CONNECTION FLOW",
    title: "DEEPSOUND ZTO Connection Flow & Outer Shell Perspective",
    description: "Visual mapping flow and physical perspective diagram for legacy probe signal conversions.",
    diagramLabel: "P5 Instrument Integration",
    perspectiveLabel: "Product Perspective View",
    note: "* The 3D visualization represents technical schematics designed for physical wiring reference and shielding configuration."
  },
  contact: {
    title: "Inquire About DEEPSOUND ZTO",
    description: "Tell us your legacy probe model and your target DSPAUT instrument configuration. We will custom map the adapter to match your precise testing parameters.",
    labels: {
      name: "Your Name *",
      company: "Company *",
      email: "Email Address *",
      message: "Inquiry / Legacy Probe Model Details *"
    },
    placeholder: "Specify your third-party probe manufacturer (e.g., Olympus 5L64-A12), element layout, and how many units you require...",
    button: "Submit Inquiry"
  }
};

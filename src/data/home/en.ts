export const homeData = {
  metadata: {
    title: "DSPAUT by SEONGSANLAB | Phased Array Ultrasonic NDT Systems",
    description: "Advanced Phased Array NDT solutions by SEONGSANLAB. Explore DSPAUT portable PAUT instruments, scanner systems, and expert acquisition software."
  },
  hero: {
    badge: "Ultrasonic NDT Brand: DSPAUT",
    title: "Unified NDT Ecosystem: <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-blue-400\">Precision Hardware & Integrated Software</span>",
    description: "Developed by SEONGSANLAB, DSPAUT delivers portable Phased Array UT, multi-channel rack scanners, and specialized defect acquisition/analysis software for global NDT technicians.",
    slides: {
      p5: {
        badge: "NDT Specifications",
        lcd: "12.1\" LCD",
        title: "DEEPSOUND P5",
        desc: "Reflecting core feedback from field technicians, ensuring fast operation speed and rugged field usability.",
        specs: ["PAUT", "TOFD", "Multi-Group"],
        swBadge: "Acquisition SW",
        swState: "Realtime Scan",
        swTitle: "DSVision",
        swThickness: "Thickness: 24.5mm",
        swSens: "Amp: 88% FSH"
      },
      b3: {
        badge: "High Efficiency",
        lcd: "Robust Utility",
        title: "DEEPSOUND B3",
        desc: "Designed for optimal budget efficiency while preserving raw signal accuracy and compatibility with P5 ecosystem.",
        specs: ["Value Model", "Precision UT", "P5 Compatible"],
        swBadge: "Compact UT UI",
        swState: "Standby",
        swTitle: "DSVision Mini",
        swGain: "Gain Ctrl: 42.0 dB",
        swRange: "Range: 100 mm"
      },
      t3: {
        badge: "Next-Gen TOFD",
        lcd: "0.9kg",
        title: "DEEPSOUND T3",
        desc: "0.9kg handheld design featuring an integrated 7\" touchscreen to maximize mobility in narrow inspection spaces.",
        specs: ["One-Hand", "7.0\" Touch", "TOFD Built-in"],
        swBadge: "TOFD Signal Analyzer",
        swState: "Scanning",
        swTitle: "DSVision TOFD",
        swScanner: "Scanner: Active",
        swSpeed: "Speed: 50mm/s"
      },
      suite: {
        badge: "Analysis Software",
        lcd: "Multi-Scan",
        title: "DSViewer Suite",
        desc: "Empowering comprehensive A, B, C-scan data analysis, high-resolution image exports, and standard CSV data exports.",
        specs: ["Multi-Scan Analysis", "Image Export", "CSV Export"],
        swBadge: "Offline Data Analyzer",
        swState: "Analyzing Scan",
        swTitle: "DSViewer Analysis Software",
        swFlaws: "Flaw Size: L=12.4mm",
        swCoords: "Depth: Y=45.2mm"
      }
    }
  },
  quickBar: {
    tech: {
      title: "Proprietary Tech",
      desc: "In-House H/W & S/W R&D"
    },
    precision: {
      title: "High Precision",
      desc: "PAUT & TOFD Multi-Channel"
    },
    support: {
      title: "Rapid Support",
      desc: "B2B Portal & Custom SDKs"
    },
    links: {
      hardware: "H/W Products",
      software: "NDT Software",
      support: "Technical Support"
    }
  },
  hardware: {
    badge: "DSPAUT HARDWARE SYSTEM",
    title: "Precision Ultrasonic NDT Hardware Systems",
    description: "From portable standalone phased array ultrasonic instruments to large-scale automated OEM system boards, explore our high-reliability NDT product lineup.",
    tabs: {
      portable: "Portable PAUT & UT Instruments",
      system: "OEM System Boards",
      accessories: "Adapters & Accessories"
    },
    portableList: {
      p5: {
        badge: "PREMIUM MODEL",
        title: "DEEPSOUND P5",
        desc: "Features a high-resolution 12.1-inch display with fast boot times and latency-free operation. Ensures precise defect detection across diverse industrial environments.",
        specs: [
          { label: "Screen Size", value: "12.1\" LCD" },
          { label: "HW Channels", value: "32CH/128PR" },
          { label: "Tech Specs", value: "PAUT + TOFD" },
          { label: "Software", value: "DSVision Native" }
        ],
        learnMore: "Learn More ➔",
        learnMoreHref: "/products/p5/",
        quote: "Request Quote"
      },
      b3: {
        badge: "HIGH EFFICIENCY",
        title: "DEEPSOUND B3",
        desc: "Achieving an ultra-light body below 2.0kg (including battery) for maximized field portability. Outfitted with high cost efficiency and a real-time data acquisition engine matching the P5.",
        specs: [
          { label: "Weight", value: "< 2.0kg (w/ Batt)" },
          { label: "Hardware Channel", value: "16CH/64PR" },
          { label: "Utility", value: "Compact Design" },
          { label: "Value", value: "Outstanding ROI" }
        ],
        learnMore: "Learn More ➔",
        learnMoreHref: "/products/b3/",
        quote: "Request Quote"
      },
      t3: {
        badge: "CONVENTIONAL UT",
        title: "DEEPSOUND T3",
        desc: "Combining a 0.9kg ultra-lightweight body with a 7-inch bright touch LCD screen. Optimized for single-handed operations in narrow workspaces with default TOFD software integration.",
        specs: [
          { label: "Weight", value: "0.9kg (Ultra-light)" },
          { label: "Screen Size", value: "7.0\" Touch LCD" },
          { label: "Technique", value: "Conventional UT + TOFD" },
          { label: "Portability", value: "One-hand Capable" }
        ],
        learnMore: "Learn More ➔",
        learnMoreHref: "/products/t3/",
        quote: "Request Quote"
      }
    },
    system: {
      badge: "RACK-MOUNTED OEM SYSTEM BOARD",
      title: "DEEPSOUND R5 System Board",
      desc: "Engineered for seamless integration into industrial 19-inch standard rack mounts. Accommodates up to 32 transmit/receive (PR) channels, 128 element apertures, and 4 independent UT ports. Facilitates multi-board coordination through specialized IO control ports, making it the perfect foundation for partner corporations building customized factory automated scanner systems.",
      specs: ["19\" Rack Mountable", "32CH/128PR Multi-channel", "4-Ch UT Independent", "SDK API Compatible"],
      learnMore: "Learn More ➔",
      learnMoreHref: "/products/r5/",
      cta: "Request R5 Spec & OEM Inquiry"
    },
    accessoriesList: {
      probe: {
        badge: "ADAPTER MODULE",
        title: "Probe Converter: DEEPSOUND ZTO",
        desc: "A premium palm-sized aluminum adapter bridging third-party standard IPEX 160-pin probes to DSPAUT 260-pin ZIF instruments, eliminating legacy sensor replacement costs.",
        specLabel: "IPEX 160p to TC-ZIF 260p",
        learnMore: "Learn More ➔",
        learnMoreHref: "/products/zto/",
        cta: "Inquire Now"
      },
      scanners: {
        badge: "ADAPTER MODULE",
        title: "Encoder Converter: DEEPSOUND EC",
        desc: "Resolves coordinate mismatches between standard scanner encoders and DSPAUT instruments. Supports D-sub to Lemo connector signal adaptation with a durable aluminum body.",
        specLabel: "D-sub to Lemo Conversion",
        learnMore: "Learn More ➔",
        learnMoreHref: "/products/ec/",
        cta: "Inquire Now"
      }
    }
  },
  software: {
    badge: "NDT SOFTWARE WORKFLOW",
    title: "From Real-Time Field Acquisition to Comprehensive Offline Analysis & Custom SDKs",
    description: "SEONGSANLAB provides real-time data acquisition applications for rapid scanning, desktop-based offline analytical suites, and native developer libraries for custom integration.",
    acquire: {
      badge: "Real-time Acquisition",
      title: "DSVision",
      desc: "Highly integrated data acquisition and visualization software designed for portable PAUT hardware. Delivers seamless multi-group signals and real-time A/B/C/S-scan visualization to technicians directly in the field.",
      thickness: "Thickness: 24.5mm",
      sens: "Amp: 88% FSH",
      type: "Instrument Native SW",
      cta: "Learn More ➔"
    },
    analysis: {
      badge: "Offline Analysis",
      title: "DSViewer Analysis",
      desc: "Desktop software built to analyze and evaluate pre-acquired raw files offline. Offers deep drag-and-drop defect sizing, depth measurement tools, and high-resolution screenshot image exports.",
      pos: "Position: Y=45.2mm",
      flawSize: "Flaw Size: L=12.4mm",
      flawBadge: "Flaw Detected",
      type: "PC Analysis SW (Offline)",
      cta: "Learn More ➔"
    },
    sdk: {
      badge: "Developer Kit",
      title: "DSPAUT SDK (DSK)",
      desc: "A versatile library to develop and integrate custom applications directly with DSPAUT instruments. Bundles C# code APIs, ideal for institutional NDT researchers.",
      codeComment: "// SEONGSANLAB DSK API Example",
      codeLines: [
        "DSK_InitDevice(DEVICE_ID_P5);",
        "DSK_StartAcquisition();",
        "float thickness = DSK_GetThickness();"
      ],
      type: "Developer Library API",
      cta: "Learn More ➔"
    }
  },
  supportHub: {
    badge: "SEONGSANLAB FIELD PROOF & SUPPORT HUB",
    title: "Technical Support Center & Download Hub",
    description: "SEONGSANLAB provides open access to catalogs, company presentations, and software manuals to assist global engineers and partners in rapid deployment.",
    videoBadge: "LIVE FIELD SCAN VIDEO",
    videoTitle: "DSPAUT Field Validation & Case Study",
    videoSpecs: [
      { label: "HARDWARE CHANNELS", value: "32CH/128PR Active Aperture" },
      { label: "INSPECTION TECH", value: "Integrated PAUT & TOFD" },
      { label: "OPERATING SYSTEM", value: "DSVision Real-time Acquisition" },
      { label: "DATA ANALYSIS", value: "DSViewer Offline Analysis & Image Export" }
    ],
    resourceHub: {
      badge: "INTEGRATED DOWNLOADS",
      title: "Go to Download Hub",
      desc: "Securely download the latest official software releases (DSVision) and developer SDK libraries to control, collect, and analyze your DSPAUT phased array ultrasonic testing data.",
      cta: "Open Download ➔"
    },
    portal: {
      badge: "SEONGSAN SUPPORT PORTAL",
      title: "Go to Support Portal",
      desc: "Navigate directly to our central support platform to access comprehensive instrument manuals, latest firmware updates, product calibration forms, and NDT engineering FAQs.",
      cta: "Open Support Portal (New Window) ➔"
    }
  },
  contact: {
    badge: "SECURE TECHNICAL INQUIRY",
    title: "Engineering Support & Sales Inquiry",
    description: "To request a commercial quote, apply for software manual clearance, or schedule a technical consultation regarding PAUT inspection setups, please complete the secure form below.",
    form: {
      name: {
        label: "Contact Name *",
        placeholder: "e.g. John Doe",
        error: "Please enter your name."
      },
      company: {
        label: "Company Name *",
        placeholder: "e.g. Seongsan NDT Corp",
        error: "Please enter your company name."
      },
      email: {
        label: "Corporate Email Address *",
        placeholder: "name@company.com",
        errorEmpty: "Please enter your email address.",
        errorInvalid: "Invalid email format (e.g. name@company.com)."
      },
      country: {
        label: "Country / Region *",
        placeholder: "e.g. South Korea",
        error: "Please enter your country/region."
      },
      inquiryType: {
        label: "Inquiry Type *",
        error: "Please select an inquiry type.",
        placeholderOption: "-- Select Inquiry Category --",
        options: [
          { value: "quote", label: "DSPAUT Instrument Quotation (P5 / B3 / T3 / R5)" },
          { value: "manual", label: "Restricted Resource Access Request (Manuals / Software Patches)" },
          { value: "technical", label: "NDT Instrumentation & Control Engineering Support" },
          { value: "partner", label: "Global Distributorship & Partnership Proposal" }
        ]
      },
      message: {
        label: "Inquiry Details *",
        placeholder: "Please describe your inspection target or technical requirements, and our engineering team will follow up promptly.",
        errorEmpty: "Please enter your inquiry details.",
        errorLength: "For better assistance, please write at least 10 characters."
      },
      consent: {
        label: "I agree to the collection and processing of my corporate contact details for technical consultation, in accordance with the Privacy Policy. *",
        error: "You must consent to the privacy policy to submit.",
        linkText: "[View Privacy Policy]"
      },
      submit: {
        label: "Send Secure Technical Inquiry",
        loading: "Sending..."
      }
    },
    modal: {
      success: {
        title: "Inquiry Received Successfully",
        message: "Thank you for contacting SEONGSANLAB. A technical engineer will review your request and follow up within 24 hours.",
        simulationTitle: "Inquiry Sent Successfully (Simulation)",
        simulationMsg: "B2B inquiry simulation has been sent successfully.<br/><br/><strong>[Input Summary]</strong><br/>• Name: {name}<br/>• Company: {company}<br/>• Email: <strong>{email}</strong><br/>• Category: {category}<br/><br/>Replacing the simulation key with a production Web3Forms key in your config will send real emails to your designated inbox."
      },
      error: {
        title: "Transmission Failed",
        message: "Unable to submit form due to network errors or key mismatches.<br/>Please contact us directly:<br/><br/>• Email: <strong>info@dspaut.com</strong><br/>• Error Details: {error}"
      },
      close: "OK"
    }
  }
};

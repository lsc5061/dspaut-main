export const dskData = {
  meta: {
    title: "DSPAUT SDK (DSK) | C# Phased Array Ultrasonic Development Library & API",
    description: "Introducing SEONGSANLAB's software development kit, DSPAUT SDK (DSK). Highly optimized for C# & .NET 8.0, supports real-time ultrasonic frame acquisition, S-Scan conversion, and multi-axis encoder alignment."
  },
  hero: {
    badge: "Official Support for C# / .NET 8.0 & .NET Framework 4.5.2",
    title: "DSPAUT SDK (DSK)",
    subtitle: "C# Ultrasonic Library",
    description: "DSPAUT SDK (DSK) is a dedicated C# development library designed to control the measurement engine of DSPAUT phased array ultrasonic testing (PAUT) hardware (P5, B3, R5, etc.) programmatically. Acquire, process, and map real-time ultrasonic signals to custom visual layouts using the `SVDSK.dll` assembly.",
    buttons: {
      inquire: "Inquire SDK Licenses",
      support: "Technical Support Portal"
    },
    image: {
      caption: "App: 10-SimplePAUT Integrated Calibration Modules",
      status: "Active"
    }
  },
  quickSpecs: [
    { value: "using DSPAUT;", label: "Single Namespace & Assembly" },
    { value: "Rx Callback Frame", label: "Real-time Rx Callback Methods" },
    { value: "CalcSScanImage", label: "Built-in S-Scan Graphic conversion" },
    { value: "Scan/Index Encoder", label: "Multi-axis encoder control support" }
  ],
  features: [
    {
      badge: "LIBRARY STRUCTURE",
      title: "Intuitive C# SDK Referencing & Clean Architecture",
      description: "Enables developers to quickly prototype and deploy customized NDT software in Windows 10 using Visual Studio 2017 and above. Simply add the core C# assembly `SVDSK.dll` and the helper library `DskCommon` to your project references. The execution operates directly from the build output directory (`../Bin/Release_x86`), and resources are cleanly decoupled and managed within `CommonResource`.",
      bullets: [
        "Provides clean C# .NET 8.0 classes and properties for all device parameters",
        "Direct hardware access via the `DSPAUT` namespace API calls",
        "Unified debugging and diagnostic trace logging using Log2console integration"
      ],
      reverseLayout: true
    },
    {
      badge: "PHYSICAL LEVEL CONTROLS",
      title: "Low-Level Parameter Adjustment & Gate Control",
      description: "Fine-tune pulser-receiver settings programmatically via C# functions to optimize signal response. Manage gain, digitizing frequency indexes, PRF, and voltage levels (ranging from 25V to 200V). Leverages bipolar pulsing to customize Burst Counts (from 1 to 5 cycles), boosting acoustic penetration in highly attenuative industrial materials.",
      bullets: [
        "Real-time position, range, and threshold management of 3 independent gates (Gate A/B/I)",
        "Configure transmitter/receiver element limits and hardware frequency bandpass filters",
        "Channel Group configuration organizes multi-vector arrays to stream through Rx callbacks"
      ],
      reverseLayout: false
    }
  ],
  tutorials: {
    badge: "DSK TUTORIALS",
    title: "5 Core C# Development Tutorials",
    description: "Fully functional samples ready to build and run in Visual Studio. Click on any screenshot to view the interface in full, crisp resolution.",
    items: [
      {
        id: "TUTORIAL 01",
        title: "01-InitDevice",
        subtitle: "Device Connection & Real-time Acquisition",
        description: "Initializes the hardware using `InitDsk` and `InitDevice` commands, starting acquisition channels to capture incoming data. Uses `Dsk.Freeze` and `UnFreeze` properties to control streaming programmatically.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 02",
        title: "02-SScan",
        subtitle: "Real-time S-Scan Image Conversion",
        description: "Demonstrates coordinate mapping logic converting raw A-scans to a 2D sectorial scan visual. Gathers boundaries using `GetSScanWidth`/`Height` and computes 2D byte arrays using `CalcSScanImage`.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 03",
        title: "03-AScan",
        subtitle: "Extracting Beam Waveforms & A-Scans",
        description: "Retrieves signal amplitude data for a user-specified focal law index. Processes multi-beam signals in real-time, displaying linear waveform graphs directly on a custom bitmap surface.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 04",
        title: "04-Inspection",
        subtitle: "Multi-Axis Encoder & Distance Tracking",
        description: "Essential for mechanical crawlers and automated industrial scanning. Uses `SetScanEncoder` to set bounds, step sizes, and pulse resolution to track physical movement in millimeters.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 10",
        title: "10-SimplePAUT",
        subtitle: "JSON Config Serialization & Complete PAUT App",
        description: "Our master demo illustrating complete SDK capability. Showcases setup file saving and loading using `JsonFile2Object`, gate threshold alarms, multi-channel connections, and A/B/C/S-scan concurrent graphics.",
        colSpan: 2
      }
    ]
  },
  codeSection: {
    badge: "C# Integration Guide",
    title: "A few lines of code to control",
    subtitle: "Ultrasonic Hardware",
    description: "The official SDK hides lower-level register complexities inside clean, object-oriented C# wrappers. Initialize the device and bind the real-time callback using simple C# constructs.",
    steps: [
      {
        number: "Step 1",
        title: "Import the DEEPSOUND Namespace",
        description: "Add referencing declarations in your C# assembly entry points."
      },
      {
        number: "Step 2",
        title: "Initialize Device Engine",
        description: "Call `InitDsk()` and `InitDevice()` to gain hardware access."
      },
      {
        number: "Step 3",
        title: "Bind SetCallBackFrame",
        description: "Register callbacks to receive real-time frame arrays containing locational coordinates."
      }
    ],
    codeMeta: {
      path: "DskTutorial / Program.cs",
      lang: "C# (.NET 8.0)"
    }
  },
  contact: {
    title: "Inquire about DSPAUT SDK (DSK)",
    description: "Submit your contact information and inquiries regarding DSK SDK licensing, custom development assistance, or OEM integration, and our team will get back to you shortly.",
    labels: {
      name: "Your Name",
      company: "Company",
      email: "Email Address",
      message: "Inquiries & Requirements"
    },
    placeholder: "Mention your target hardware, C# application requirements, or custom development inquiries...",
    button: "Submit DSK SDK Inquiry"
  }
};

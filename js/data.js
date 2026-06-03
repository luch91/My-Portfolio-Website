// ============================================================
//  data.js — Single source of truth for all portfolio content
//  To add anything new: edit only this file.
// ============================================================

var DATA = {

  // ── PERSONAL ────────────────────────────────────────────
  personal: {
    name: "Judith Oluchi Ekeleme",
    titles: [
      "Zero-to-One Product Lead",
      "Technical AI PM",
      "AI Systems Builder"
    ],
    tagline: "I don't just manage products. I architect them, build them, and ship them.",
    bio: `I've taken three products from zero to live, each time owning the full surface: consumer app, admin dashboard, backend architecture, and GTM. My technical depth spans MLOps pipelines, LLMOps orchestration, and multi-agent RAG systems. My design instincts run from zero-handoff Figma prototypes to governance-first agentic architectures. My business mind closes the loop from problem framing to pricing strategy.\n\nI operate at the rare intersection where product strategy, AI engineering, and execution converge. That combination isn't common. It's what I bring to every product I touch.`,
    photo: "resources/Oluchi pfp.jpeg",
    email: "judithluchi@gmail.com",
    phone: "+234 907 781 5953",
    linkedin: "https://linkedin.com/in/ekeleme-judith",
    github: "https://github.com/luch91"
  },

  // ── METRICS ─────────────────────────────────────────────
  metrics: [
    { value: 3,    suffix: "",   label: "Products Launched"  },
    { value: 5,    suffix: "+",  label: "Years Experience"   },
    { value: 40,   suffix: "+",  label: "A/B Tests Run"      },
    { value: 95,   suffix: "%",  label: "Sprint Delivery Rate"},
    { value: 6,    suffix: "",   label: "Projects Shipped"   }
  ],

  // ── PROJECTS ────────────────────────────────────────────
  // To add a project: copy one block, fill in the fields, save.
  projects: [
    {
      id: "cognarc",
      title: "CognArc",
      type: "Agentic AI Platform",
      year: "2026",
      description: "Always-on cognitive evaluation agent that continuously scores AI systems for cognitive load, trust coherence, manipulation risk, and comprehension. Powered by TRIBE v2 fMRI research.",
      stack: ["React 18", "TypeScript", "FastAPI", "Docker", "GCP Cloud Run", "TRIBE v2", "HuggingFace", "Vercel"],
      liveUrl: "https://cognarc-landing.vercel.app/",
      caseStudyId: "cognarc",
      featured: true,
      personal: true
    },
    {
      id: "cpna",
      title: "CPNA",
      type: "Agentic RAG System",
      year: "2026",
      description: "Multi-agent RAG assistant providing evidence-based paediatric nutrition therapy grounded in clinical sources and regional Food Composition Tables. Hybrid retrieval with deterministic safety guardrails.",
      stack: ["Python", "LangChain", "FAISS", "HuggingFace", "DistilBERT", "Groq API", "LLaMA", "Vercel", "Qdrant"],
      liveUrl: "https://nutriintel-frontend.vercel.app",
      caseStudyId: "cpna",
      featured: true,
      personal: true
    },
    {
      id: "cpna-eval",
      title: "CPNA Evaluation Suite",
      type: "AI Eval Platform",
      year: "2026",
      description: "Standalone precision instrument for testing, scoring, and monitoring every layer of the CPNA system: intent classification, therapy gating, retrieval quality, and context safety.",
      stack: ["Next.js", "FastAPI", "Python", "Vercel"],
      liveUrl: "https://cpna-eval-one.vercel.app/",
      caseStudyId: null,
      featured: true,
      personal: true
    },
    {
      id: "fashville",
      title: "Fashville",
      type: "AI Social Commerce",
      year: "2026",
      description: "Two-sided AI-powered social commerce platform for African fashion creators entering global markets. Combines live commerce, creator discovery, and AI-powered search relevance.",
      stack: ["Figma", "AI-Assisted Design", "PRD Architecture"],
      liveUrl: null,
      prototypeUrl: "https://chat.qwen.ai/s/deploy/t_ac4274c9-037c-4e0b-b9da-22ef0451b787",
      adminPrototypeUrl: "https://chat.qwen.ai/s/deploy/t_fd3ebaf5-4c4b-403d-b119-22c2fe8f0906",
      caseStudyId: "fashville",
      featured: true,
      personal: true
    },
    {
      id: "powerhouse9ja",
      title: "Powerhouse9ja",
      type: "Consumer FinTech",
      year: "2025–Present",
      description: "Prize-draw platform enabling Nigerians to win high-value homes through structured, transparent draw cycles. A real alternative to mortgage debt and instalment loans.",
      stack: ["iOS", "Android", "Admin Dashboard", "Draw Engine"],
      liveUrl: "https://powerhouse9ja.com/",
      caseStudyId: null,
      featured: true
    },
    {
      id: "hotel-ml",
      title: "Hotel Cancellation Predictor",
      type: "MLOps",
      year: "2025",
      description: "End-to-end ML system predicting hotel booking cancellations, modelling ~$150K–$300K annual revenue savings per 1,000 rooms. Full MLOps pipeline with experiment tracking and cloud deployment.",
      stack: ["Python", "scikit-learn", "LightGBM", "MLflow", "Docker", "Jenkins", "Flask", "GCP Cloud Run"],
      liveUrl: null,
      caseStudyId: null,
      featured: false,
      personal: true
    }
  ],

  // ── CASE STUDIES ────────────────────────────────────────
  // To add a case study: add an entry here and drop the PDF in resources/case_studies/
  caseStudies: [
    {
      id: "cognarc",
      title: "CognArc",
      subtitle: "Agentic Cognitive-Behavioral AI Evaluation & Alignment Platform",
      coverColor: "#0D2B2B",
      accentColor: "#00B5A0",
      stats: [
        { value: "9",  label: "Feature Pillars"  },
        { value: "54", label: "Total Features"   },
        { value: "3",  label: "Build Phases"     },
        { value: "4",  label: "Oversight Zones"  }
      ],
      role: "AI Product Manager · Co-Founder",
      productType: "Agentic AI Evaluation Platform",
      scope: "Zero-to-one: problem framing, architecture, feature strategy, roadmap, GTM",
      keyInsights: [
        "Cognitive quality is not a property you check for. It is a property you maintain. Maintenance requires continuous monitoring across every output, at scale.",
        "Governance before features: the Trust Gradient Engine was designed before a single feature was scoped. Every pillar lives inside its constraints, not retrofitted to comply afterward.",
        "Five distinct buyer problems (AI engineer, PM, growth, designer, red team) unified by one underlying cause: no team has a cognitive measurement instrument. CognArc is that instrument.",
        "Integration over replacement: CognArc owns cognitive impact scoring and integrates cleanly with Braintrust, Amplitude, and Figma. That integration decision is what determines adoption over resistance."
      ],
      pageUrl: "case-studies/cognarc.html",
      pdfPath: "resources/case_studies/cognarc-casestudy-v8.docx.pdf",
      liveUrl: "https://cognarc-landing.vercel.app/"
    },
    {
      id: "cpna",
      title: "CPNA v1",
      subtitle: "Agentic RAG Clinical Pediatric Nutrition Assistant",
      coverColor: "#0D1F2D",
      accentColor: "#4A9EBF",
      stats: [
        { value: "4",   label: "Query Types"       },
        { value: "MVP", label: "Status"             },
        { value: "0",   label: "LLM Nutrient Calls" },
        { value: "Africa",  label: "Localised For"  }
      ],
      role: "Technical AI PM, zero to shipped MVP",
      productType: "Agentic RAG Clinical Assistant",
      scope: "Zero-to-one: architecture, safety design, multi-agent pipeline, deployment",
      keyInsights: [
        "The problem in clinical nutrition AI is not missing knowledge. It is missing structure. No product had separated what the LLM should do from what deterministic computation must own.",
        "No LLM for nutrient computation. Every therapy output traces to the deterministic nutrient engine or DRI tables. If neither can produce a value, the system does not produce a value.",
        "Safety rules are load-bearing, not compliance theatre. The therapy gatekeeper, display adapter, and context inheritance rules each came from a specific harm identified before a line of code was written.",
        "Scope discipline compounds. Every feature deferred from v1 is one that can be built correctly in v2, on a stable foundation. The Nigeria-specific food mapping (liver, crayfish, moringa, uziza) was a deliberate product decision, not an edge case."
      ],
      pageUrl: "case-studies/cpna.html",
      pdfPath: "resources/case_studies/CPNA%20v1%20%E2%80%94%20Agentic%20RAG%20Clinical%20Pediatric%20Nutrition%20Assistant.pdf",
      liveUrl: "https://nutriintel-frontend.vercel.app"
    },
    {
      id: "fashville",
      title: "Fashville",
      subtitle: "AI-Powered Social Commerce Platform for African Fashion",
      coverColor: "#1F0D1A",
      accentColor: "#C9A96E",
      stats: [
        { value: "2",      label: "Hi-Fi Prototypes" },
        { value: "2-sided", label: "Marketplace"     },
        { value: "AI",     label: "Search Engine"    },
        { value: "Live",   label: "Live Commerce"    }
      ],
      role: "AI Product Manager, zero-to-one product design",
      productType: "AI Social Commerce Platform",
      scope: "Product vision, dual hi-fi prototypes, admin PRD, technical case study",
      keyInsights: [
        "African fashion creators face a structural distribution problem: platforms built for Western markets misunderstand their inventory, pricing, and discovery patterns. Fashville was designed from the ground up for creators scaling globally from Africa.",
        "Two full hi-fi interactive prototypes (consumer platform and operator admin dashboard) built using AI-assisted design, eliminating a full handoff cycle.",
        "LLMs transform search relevance on a two-sided fashion marketplace: semantic understanding of African fabric names, style references, and occasion language that keyword search cannot handle.",
        "The admin dashboard was designed as a single source of truth for product and growth analytics: creator management, inventory visibility, and live commerce performance in one operator surface."
      ],
      pageUrl: "case-studies/fashville.html",
      pdfPath: "resources/case_studies/How%20Artificial%20Intelligence%20Transforms%20Discovery%2C%20Monetization%2C%20and%20Live%20Commerce%20on%20Fashville.pdf",
      prototypeUrl: "https://chat.qwen.ai/s/deploy/t_ac4274c9-037c-4e0b-b9da-22ef0451b787",
      adminPrototypeUrl: "https://chat.qwen.ai/s/deploy/t_fd3ebaf5-4c4b-403d-b119-22c2fe8f0906"
    }
  ],

  // ── EXPERIENCE ──────────────────────────────────────────
  // To add a role: add a new object here.
  experience: [
    {
      title: "Lead Product Manager (Contract)",
      company: "Confidential",
      companyUrl: null,
      period: "May 2026",
      type: "Contract",
      description: "Leading end-to-end product delivery of a three-platform Nigerian loan management system from zero to launch: borrower mobile app, collector mobile and web app, and admin dashboard.",
      highlights: [
        "Authored full PRD suite across three platforms (35+ features per app) covering CBN/FCCPC compliance, NIBSS payment rails, and multi-lender portfolio management",
        "Designed all UI/UX in Figma with Claude MCP integration, cutting design-to-handoff cycle time significantly",
        "Mapped technology stack across three phases including KYC, NIBSS NIP/eMandates, and CRC bureau integration",
        "Scoped compliance layer covering NDPR 2023, FCCPC ethical collections guidelines, CBN portfolio ageing reporting, and AML/KYC audit trails"
      ]
    },
    {
      title: "Lead Product Manager",
      company: "Powerhouse9ja",
      companyUrl: "https://powerhouse9ja.com/",
      period: "2025 – Present",
      type: "Full-time",
      description: "Prize-draw platform enabling Nigerians to win high-value homes through structured, transparent draw cycles. A real alternative to mortgage debt.",
      highlights: [
        "Led zero-to-one product development across 4 surfaces simultaneously: landing page (live), iOS app, Android app, and operator admin dashboard",
        "Architected core draw engine product logic: tiered prize unlock system, draw cycle management, participant eligibility rules, and prize fulfilment tracking",
        "Defined backend data architecture and API contracts, ensuring real-time draw visibility, user management controls, and fraud detection tooling",
        "Built high-fidelity end-to-end interactive prototype for operator admin dashboard using AI-assisted design, eliminating a full handoff cycle"
      ]
    },
    {
      title: "Technical Product Manager",
      company: "Purplegate Technologies",
      companyUrl: null,
      period: "May 2022 – June 2024",
      type: "Full-time",
      description: "B2B software development startup. Led zero-to-one product builds across two consumer-facing platforms, each shipped with full admin dashboard and operator tooling.",
      highlights: [
        "Built two products from zero to live: food delivery platform and classified ads platform",
        "Redesigned GTM strategy for both platforms, growing product adoption by 22%",
        "Lifted conversion rates by 12% across key product categories via funnel analysis and targeted UI/UX changes",
        "Maintained 95% sprint delivery rate across fully remote cross-functional teams"
      ]
    },
    {
      title: "Technical PM & Product Lead",
      company: "Seamsville Ltd.",
      companyUrl: null,
      period: "August 2019 – May 2022",
      type: "Full-time",
      description: "E-commerce and logistics platform. Led product from pre-launch to growth stage, owning consumer app, seller dashboard, and logistics operator interface.",
      highlights: [
        "Built e-commerce and logistics platform from zero, defining product architecture, user flows, and admin tooling",
        "Drove 20% increase in user engagement via 40+ A/B tests over 12 months",
        "Improved onboarding completion by 50% by redesigning the first-run experience from drop-off data",
        "Drove 15% improvement in customer retention through loyalty-focused product features"
      ]
    }
  ],

  // ── SKILLS ──────────────────────────────────────────────
  skills: [
    {
      category: "AI / ML",
      items: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "AI Agents", "RAG Systems", "Keras", "scikit-learn", "TensorFlow", "PyTorch", "FHE (fhEVM)"]
    },
    {
      category: "MLOps / LLMOps",
      items: ["MLflow", "LangChain", "LangGraph", "FastAPI", "Docker", "Jenkins", "AWS ECS", "GCP Cloud Run"]
    },
    {
      category: "Product & Design",
      items: ["Zero-to-One Product Development", "AI-Accelerated Product Design", "Agentic System Design", "Hi-Fi Prototyping", "Admin Dashboard Architecture", "GTM Strategy", "PRD Writing", "Cross-Platform (iOS & Android)"]
    },
    {
      category: "Data & Analytics",
      items: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "Google Analytics", "MixPanel", "Seaborn", "Matplotlib"]
    },
    {
      category: "Tools",
      items: ["Figma", "Jira", "Notion", "Balsamiq", "Linear", "Slack", "GitHub"]
    }
  ],

  // ── CERTIFICATIONS ──────────────────────────────────────
  // To add a cert: add an object here.
  certifications: [
    { issuer: "Oracle",           title: "Cloud Infrastructure Generative AI Professional" },
    { issuer: "Duke University",  title: "Large Language Model Operations (LLMOps)"        },
    { issuer: "Duke University",  title: "MLOps | Machine Learning Operations"              },
    { issuer: "Stanford",         title: "Machine Learning Specialization"                  },
    { issuer: "IBM",              title: "AI Product Manager Professional"                  },
    { issuer: "McKinsey",         title: "Digital Transformation Leadership Program"        },
    { issuer: "Coursera",         title: "LLM Benchmarking and Evaluation"                  }
  ],

  // ── EDUCATION ───────────────────────────────────────────
  education: [
    {
      degree: "MBA, Marketing",
      institution: "NEXT MBA, Next University",
      location: "Valencia, Spain",
      year: "April 2025"
    },
    {
      degree: "BSc. Nutrition & Dietetics",
      institution: "University of Nigeria, Nsukka",
      location: "Nigeria",
      year: "March 2013"
    }
  ],

  // ── BLOG POSTS ──────────────────────────────────────────
  // To add a blog post: add an object here.
  // type: "article" | "video" | "tutorial"
  // For articles with external URL: set url, leave filePath null
  // For local HTML: set filePath, leave url null
  // For videos: set videoFile (filename in resources/videos/) OR videoUrl for external
  blogPosts: [
    {
      id: "protein-structure",
      type: "article",
      title: "Highly Accurate Protein Structure Prediction",
      excerpt: "A deep dive into how AI is revolutionising protein structure prediction and what it means for drug discovery and biotech.",
      date: "2024",
      readTime: "6 min read",
      tags: ["AI", "Biotech", "Research"],
      url: "https://www.linkedin.com/pulse/highly-accurate-protein-structure-prediction-paper-oluchi-ekeleme-fyohf/?trackingId=yDeWYOBgSuOYfFaKngmgsA%3D%3D",
      filePath: null,
      videoFile: null,
      videoUrl: null
    },
    {
      id: "claude-figma-guide",
      type: "tutorial",
      title: "Claude × Figma: Beginner's Prototype Guide",
      excerpt: "How to use Claude MCP with Figma to go from concept to high-fidelity prototype without a traditional design handoff cycle.",
      date: "2025",
      readTime: "8 min read",
      tags: ["AI", "Figma", "Product Design", "Tutorial"],
      url: null,
      filePath: "resources/blog/claude-figma-guide.html",
      videoFile: null,
      videoUrl: null
    },
    {
      id: "notebooklm-research",
      type: "article",
      title: "How to Use NotebookLM for In-Depth Market Research",
      excerpt: "A practical guide to using Google's NotebookLM as a supercharged research assistant for product and market discovery.",
      date: "2025",
      readTime: "7 min read",
      tags: ["AI Tools", "Research", "Product Management"],
      url: null,
      filePath: "blog/notebooklm-market-research.html",
      videoFile: null,
      videoUrl: null
    },
    {
      id: "cognarc-video",
      type: "video",
      title: "CognArc: Product Demo",
      excerpt: "A walkthrough of the CognArc platform: the cognitive evaluation pipeline, Trust Gradient Engine, and five-buyer dashboard views.",
      date: "2026",
      readTime: null,
      tags: ["CognArc", "AI", "Demo"],
      url: null,
      filePath: null,
      videoFile: null,
      videoUrl: null
    }
  ]

};

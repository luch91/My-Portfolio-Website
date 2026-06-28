// ============================================================
//  data.js: Single source of truth for all portfolio content
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
      blogUrl: "blog/cpna-eval.html",
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
      id: "p90",
      title: "P90",
      type: "Agentic AI Platform",
      year: "2026",
      description: "Full-stack agentic platform that solves a structural problem in AI product economics: teams apply SaaS pricing assumptions to systems where cost is variable, behavior-driven, and compounding. P90 monitors the p90 cost tail autonomously and surfaces ranked pricing recommendations for human approval.",
      stack: ["LangGraph", "FastAPI", "Python", "Groq", "Langfuse", "Vercel", "Supabase"],
      liveUrl: "https://p90app.vercel.app/",
      caseStudyId: "p90",
      featured: true,
      personal: true
    },
    {
      id: "truvyx",
      title: "Truvyx",
      type: "AI Eval Platform",
      year: "2024",
      description: "Evaluation and diagnostic intelligence platform for multi-agent AI systems. Generates test scenarios from natural language, validates constraints, auto-scores deployments on feasibility, completeness, and optimality, and traces failures to root cause with the Agentic RCA Engine.",
      stack: ["Python SDK", "Scenario Studio", "Constraint Engine", "RS256 Audit Trail"],
      liveUrl: "https://truvyx.vercel.app/",
      caseStudyId: "truvyx",
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

  // ── PROTOTYPES ──────────────────────────────────────────
  prototypes: [
    {
      id: "kyvo-loan-admin",
      title: "Kyvo Loan Admin Dashboard",
      type: "FinTech",
      year: "2026",
      description: "Admin and analytics dashboard serving as single source of truth for a three-platform Nigerian loan management system. Covers borrower portfolio, collector activity, repayment tracking, and compliance reporting.",
      stack: ["React", "Dashboard", "Analytics", "CBN Compliance"],
      liveUrl: "https://kyvoloan.netlify.app/",
      note: "Live prototype"
    },
    {
      id: "trisonet",
      title: "TrisoNet Trading Zone",
      type: "African Marketplace",
      year: "2024",
      description: "Trusted African marketplace connecting buyers, citizen sellers, and verified business partners. Features real-time price negotiation, quality-verified products, GKWTH cryptocurrency exchange, and buyer protection guarantees.",
      stack: ["Marketplace", "Live Chat", "Crypto Exchange", "Escrow"],
      liveUrl: "https://trisonet-prototype.netlify.app/",
      note: "Live prototype"
    },
    {
      id: "user-loan-app",
      title: "User Loan App",
      type: "FinTech Mobile",
      year: "2026",
      description: "High-fidelity Figma prototype for the borrower-facing mobile app in the loan management system. Covers loan application, KYC, NIBSS repayment rails, and real-time loan status tracking.",
      stack: ["Figma", "Mobile Design", "NIBSS", "KYC"],
      liveUrl: "https://www.figma.com/design/oJ4jfjZ6Fxmuzmmk76mM1b/User-Loan-App?t=WbCmDVVk0F8h2Llh-0",
      note: "Figma prototype"
    },
    {
      id: "loan-collector-app",
      title: "Loan Collector App",
      type: "FinTech Mobile",
      year: "2026",
      description: "High-fidelity Figma prototype for the field collector mobile and web app. Covers daily collections, route management, payment confirmation, and FCCPC-compliant recovery workflows.",
      stack: ["Figma", "Mobile Design", "Field Ops", "Collections"],
      liveUrl: "https://www.figma.com/design/v2dkCDVjpqvn8SKJiLw0N0/Loan-Collector-App?t=WbCmDVVk0F8h2Llh-0",
      note: "Figma prototype"
    }
  ],

  // ── CASE STUDIES ────────────────────────────────────────
  // To add a case study: add an entry here and drop the PDF in resources/case_studies/
  caseStudies: [
    {
      id: "p90",
      title: "P90",
      subtitle: "A Full-Stack Agentic Platform for AI Product Unit Economics",
      coverColor: "#1A0E00",
      accentColor: "#D4851A",
      stats: [
        { value: "7",    label: "Feature Modules" },
        { value: "4",    label: "Agent Nodes"     },
        { value: "p90",  label: "Pricing Principle"},
        { value: "$40",  label: "Est. Monthly Cost"}
      ],
      role: "AI Product Manager",
      productType: "Agentic AI Platform",
      scope: "Full product specification: seven modules, agentic core, integration architecture, GTM",
      keyInsights: [
        "Pricing is system design. Every architecture decision is a pricing decision made before the pricing conversation happens. P90 makes that connection visible in real time.",
        "Average cost is a dangerous metric for AI products. The tail is where pricing models fail. Building for median behavior when power users drive margin compression is structurally incorrect.",
        "The human approval gate is not a limitation of V1. It is the correct architectural decision. An agent that can change pricing autonomously without accountability infrastructure creates more risk than it removes.",
        "Eval and guardrails are absent from over 70 percent of self-reported cost models but represent 8 to 15 percent of true COGS in production. The seven-layer model forces honesty."
      ],
      pageUrl: "case-studies/p90.html",
      pdfPath: "resources/case_studies/P90%20Case%20Study.pdf",
      liveUrl: "https://p90app.vercel.app/"
    },
    {
      id: "truvyx",
      title: "Truvyx",
      subtitle: "The Evaluation and Diagnostic Intelligence Platform for Multi-Agent AI Systems",
      coverColor: "#001A18",
      accentColor: "#2BA8A0",
      stats: [
        { value: "7",   label: "Industries Covered" },
        { value: "6",   label: "Core Modules"       },
        { value: "10+", label: "Buyer Segments"     },
        { value: "50",  label: "Free Monthly Runs"  }
      ],
      role: "AI Product Manager",
      productType: "Multi-Agent AI Evaluation Platform",
      scope: "Full product specification: six modules, implementation path, multi-industry case studies",
      keyInsights: [
        "Vendor benchmarks are not neutral. They are designed to show what the vendor chose to test, which is rarely the hardest 20 percent of a real operational environment.",
        "A feasibility score of 88.4 percent sounds acceptable until you learn which 11.6 percent failed. In healthcare, those scenarios involved the most vulnerable patients. Averages hide the distribution that determines safety.",
        "Constraint conflicts surface during the constraint definition step, before a single test runs. The ICU capacity and post-operative monitoring conflict at Kingsbridge had existed as an undocumented inconsistency in policy for three years.",
        "Incremental adoption produces better outcomes than comprehensive implementation. Starting with the domain of highest risk, demonstrating value, and expanding is faster and builds better stakeholder buy-in."
      ],
      pageUrl: "case-studies/truvyx.html",
      pdfPath: "resources/case_studies/Truvyx%20Case%20Study.pdf",
      liveUrl: "https://truvyx.vercel.app/"
    },
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
      id: "ai-unit-economics",
      type: "article",
      title: "Why Your AI Product Looks Profitable at Month 3 and Breaks at Month 9",
      excerpt: "You didn't change your pricing. Your users changed their behaviour. The bill came anyway. A specific kind of meeting happens inside AI product companies around month 8 or 9: margins are compressing, and nobody touched the pricing page.",
      date: "2026",
      readTime: null,
      tags: ["AI Product", "Unit Economics", "Product Management", "LLMOps"],
      url: "https://www.linkedin.com/pulse/why-your-ai-product-looks-profitable-month-3-breaks-9-oluchi-ekeleme-f1d6f",
      filePath: null,
      videoFile: null,
      videoUrl: null
    },
    {
      id: "cpna-eval",
      type: "article",
      title: "I Built a Full-Stack AI Evaluation Platform for a Clinical Pediatric Nutrition Assistant",
      excerpt: "AI builders celebrate the demo. I built the system that catches what the demo hides: five evaluator modules, 10 canonical E2E scenarios, 12 dashboard surfaces, and one live run that revealed six things automated checks missed entirely.",
      date: "2026",
      readTime: "18 min read",
      tags: ["AI Evaluation", "Clinical AI", "RAG", "Product Management", "Agentic Systems"],
      url: null,
      filePath: "blog/cpna-eval.html",
      videoFile: null,
      videoUrl: null
    },
    {
      id: "decision-intelligence",
      type: "article",
      title: "The System Design Masterclass: Turning Raw Data into Decision Intelligence",
      excerpt: "Most systems collect data. Very few turn it into something people can act on. Six layers every data system needs to close the gap between storage and decisions.",
      date: "2025",
      readTime: "12 min read",
      tags: ["System Design", "Data Engineering", "Product Management", "Decision Intelligence"],
      url: null,
      filePath: "blog/decision-intelligence.html",
      videoFile: null,
      videoUrl: null
    },
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
      id: "rag-deep-dive",
      type: "article",
      title: "A PM's Deep Dive into RAG Systems",
      excerpt: "How Retrieval-Augmented Generation actually works in production: seven failure-prone layers, system trade-offs, and what separates feature PMs from platform PMs.",
      date: "2025",
      readTime: "10 min read",
      tags: ["RAG", "AI Systems", "Product Management", "LLMs"],
      url: null,
      filePath: "blog/rag-deep-dive.html",
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

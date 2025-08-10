export type ResourceType = "checklist" | "quiz" | "tool" | "link";

export interface ChecklistPayload {
  items: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface QuizPayload {
  questions: QuizQuestion[];
}

export interface ToolPayload {
  tool: "roi";
}

export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  type: ResourceType;
  payload?: ChecklistPayload | QuizPayload | ToolPayload;
  href?: string; // for links
}

export const CATEGORIES = [
  "Faith & Religious",
  "K-12 Schools & PTAs",
  "Youth Sports",
  "Community Centers & Nonprofits",
  "Arts & Culture",
  "Parks & Recreation",
  "Camps",
  "Local Businesses",
  "Independent Creatives",
];

export const TAGS = [
  "Fundraising",
  "Events",
  "Accessibility",
  "Content",
  "SEO",
  "Volunteers",
  "Onboarding",
  "Marketing",
  "Registration",
  "Compliance",
  "Safety",
  "Grants",
  "Email",
  "Social",
];

export const resources: Resource[] = [
  {
    id: "accessibility-quick-check",
    title: "Accessibility Quick Check (10-step)",
    excerpt:
      "Run a fast AA checklist to ensure color, alt text, and structure are compliant.",
    category: "Community Centers & Nonprofits",
    tags: ["Accessibility", "Content"],
    type: "checklist",
    payload: {
      items: [
        "Every image has descriptive alt text",
        "Headings use a single H1, then H2/H3 structure",
        "Links describe destination (no 'click here')",
        "Text color contrast meets AA on light and dark themes",
        "Form fields have visible labels",
        "Interactive elements are keyboard focusable",
        "Page has a clear skip-to-content link",
        "Videos include captions or transcripts",
        "Buttons are at least 44x44px tappable",
        "No content flashes more than 3 times/sec",
      ],
    },
  },
  {
    id: "event-readiness-checklist",
    title: "Event Readiness Checklist",
    excerpt:
      "Everything you need to publish and promote community events that drive attendance.",
    category: "Parks & Recreation",
    tags: ["Events", "Volunteers"],
    type: "checklist",
    payload: {
      items: [
        "Create event with date, time, and location",
        "Add accessible directions and parking info",
        "Publish event image with alt text",
        "Add RSVP or registration form",
        "Enable reminders and post-event follow-up",
        "Share to social and newsletter",
      ],
    },
  },
  {
    id: "package-fit-quiz",
    title: "Which Package Fits Your Org? (3‑minute quiz)",
    excerpt:
      "Answer a few questions to see whether Essential, Community Plus, or Impact Pro fits best.",
    category: "K-12 Schools & PTAs",
    tags: ["Onboarding"],
    type: "quiz",
    payload: {
      questions: [
        {
          question: "How many pages do you need at launch?",
          options: ["Up to 5", "6–10", "11+"],
          correctIndex: 1, // not used for scoring recommendation; kept for simple score
        },
        {
          question: "Do you need Events, News/Sermons, or Volunteer modules?",
          options: ["One", "Two", "Three or more"],
          correctIndex: 1,
        },
        {
          question: "How much content migration?",
          options: ["0–5 pages", "6–10 pages", "11–20 pages"],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "roi-calculator",
    title: "Community Web ROI Calculator",
    excerpt: "Estimate impact from donations, registrations, and time saved.",
    category: "Community Centers & Nonprofits",
    tags: ["Fundraising", "Events"],
    type: "tool",
    payload: { tool: "roi" },
  },
  {
    id: "volunteer-signup-best-practices",
    title: "Volunteer Signup Best Practices",
    excerpt:
      "Simple changes that increase volunteer signups by 20–40%.",
    category: "Faith & Religious",
    tags: ["Volunteers", "Content", "Onboarding"],
    type: "link",
    href: "https://www.notion.so/", // placeholder link
  },
  // New resources (2 per group served)
  // Faith & Religious
  {
    id: "online-giving-optimization",
    title: "Online Giving Optimization Checklist",
    excerpt: "Proven steps to increase donations by 10–30% from your site.",
    category: "Faith & Religious",
    tags: ["Fundraising", "SEO", "Content"],
    type: "checklist",
    payload: {
      items: [
        "Place Give button in header and sticky mobile nav",
        "Use a simple, distraction-free donation form",
        "Offer recurring giving with monthly as default",
        "Add giving impact examples (what $50 funds)",
        "Ensure one-page checkout with wallet support",
        "Create a 90‑second giving explainer video",
        "Add trust badges and financial transparency",
        "Send thank-you email with next-step invitation",
      ],
    },
  },
  // K-12 Schools & PTAs
  {
    id: "pta-fundraiser-promotion-kit",
    title: "PTA Fundraiser Promotion Kit",
    excerpt: "A simple launch checklist to hit participation and revenue goals.",
    category: "K-12 Schools & PTAs",
    tags: ["Fundraising", "Events", "Marketing"],
    type: "checklist",
    payload: {
      items: [
        "Publish fundraiser page with goal and deadline",
        "Send launch email to families and staff",
        "Post to social with student-safe images",
        "Add QR codes to flyers and posters",
        "Enable classroom/team leaderboards",
        "Share mid-campaign progress update",
        "Thank supporters and report results",
      ],
    },
  },
  // Youth Sports
  {
    id: "youth-sports-registration-readiness",
    title: "Season Registration Readiness",
    excerpt: "Checklist to open registration smoothly and reduce support tickets.",
    category: "Youth Sports",
    tags: ["Registration", "Events", "Onboarding"],
    type: "checklist",
    payload: {
      items: [
        "Publish dates, divisions, and eligibility",
        "Confirm team/league fees and payment plans",
        "Enable waivers and medical forms",
        "Set up family accounts and sibling discounts",
        "Add photo upload and jersey sizing",
        "Automate confirmation and next steps email",
      ],
    },
  },
  {
    id: "team-communications-playbook",
    title: "Team Communications Playbook",
    excerpt: "Templates for game reminders, cancellations, and updates.",
    category: "Youth Sports",
    tags: ["Content", "Email", "Social"],
    type: "link",
    href: "https://www.notion.so/", // placeholder link
  },
  // Arts & Culture
  {
    id: "arts-promo-checklist",
    title: "Exhibit & Performance Promotion Checklist",
    excerpt: "Drive attendance with timing, channels, and message templates.",
    category: "Arts & Culture",
    tags: ["Events", "Marketing", "SEO"],
    type: "checklist",
    payload: {
      items: [
        "Publish event with artist bios and high‑res images",
        "Announce to email list with member pre‑sale",
        "Schedule socials with alt text and captions",
        "Pitch local media and calendar listings",
        "Add structured data for events (rich results)",
        "Post day‑of reminders and wayfinding info",
      ],
    },
  },
  {
    id: "grant-readiness-checklist",
    title: "Grant Readiness Checklist",
    excerpt: "Prepare assets and data to submit stronger grant applications.",
    category: "Arts & Culture",
    tags: ["Grants", "Content", "Compliance"],
    type: "checklist",
    payload: {
      items: [
        "Maintain updated mission and program outcomes",
        "Collect testimonials and impact photos (w/ releases)",
        "Track attendance and demographics",
        "Document budget, 990s, and audit letters",
        "Assemble board list and governance policies",
        "Create one‑pager and elevator pitch",
      ],
    },
  },
  // Parks & Recreation
  {
    id: "parks-program-participation-booster",
    title: "Program Participation Booster Guide",
    excerpt: "Tactics to fill classes and leagues without extra staff time.",
    category: "Parks & Recreation",
    tags: ["Events", "Marketing", "Content"],
    type: "link",
    href: "https://www.notion.so/", // placeholder link
  },
  // Camps
  {
    id: "camp-session-prep-checklist",
    title: "Camp Session Prep Checklist",
    excerpt: "Everything to publish before opening registration.",
    category: "Camps",
    tags: ["Onboarding", "Registration", "Safety"],
    type: "checklist",
    payload: {
      items: [
        "Session dates, ages, and capacity published",
        "Packing lists and drop‑off/pick‑up details",
        "Scholarship info and payment plans",
        "Health forms and allergy collection",
        "Cabin requests and buddy system",
        "Automated confirmations with what to expect",
      ],
    },
  },
  {
    id: "camp-safety-compliance-essentials",
    title: "Safety & Compliance Essentials",
    excerpt: "Critical policies and training before campers arrive.",
    category: "Camps",
    tags: ["Safety", "Compliance"],
    type: "checklist",
    payload: {
      items: [
        "Background checks and mandatory reporter training",
        "Emergency action plan posted and drilled",
        "Medical protocols and medication handling",
        "Incident reporting and parent notifications",
        "Photo permissions and privacy standards",
        "ADA accommodations process documented",
      ],
    },
  },
  // Local Businesses (selected A & D)
  {
    id: "local-seo-quick-wins",
    title: "Local SEO Quick Wins (7‑step)",
    excerpt: "Fast actions that improve local visibility and calls this week.",
    category: "Local Businesses",
    tags: ["SEO", "Marketing"],
    type: "checklist",
    payload: {
      items: [
        "Add city + service keywords to your homepage H1",
        "Ensure NAP (name, address, phone) matches across the web",
        "Embed Google Map with proper schema on Contact page",
        "Create a Services page with 3–5 offerings",
        "Compress images and set descriptive alt text",
        "Add tap‑to‑call and tap‑for‑directions buttons",
        "Collect 3 new Google reviews this week",
      ],
    },
  },
  {
    id: "google-business-profile-optimization",
    title: "Google Business Profile Optimization (12‑step)",
    excerpt: "Optimize GBP for more calls, direction taps, and bookings.",
    category: "Local Businesses",
    tags: ["SEO", "Marketing"],
    type: "checklist",
    payload: {
      items: [
        "Choose correct primary and secondary categories",
        "Add services and descriptions with target keywords",
        "Upload 10 high‑quality photos (exterior, interior, team)",
        "Set hours incl. holiday hours; enable messaging",
        "Add booking or order links where relevant",
        "Answer Q&A with helpful information",
        "Post weekly updates or promotions",
        "Ensure website URL uses HTTPS and loads fast",
        "Request and respond to reviews",
        "Enable product/menu items with photos",
        "Set service area (if applicable)",
        "Verify business info and attributes",
      ],
    },
  },
  // Independent Creatives
  {
    id: "portfolio-landing-essentials",
    title: "Portfolio Landing Page Essentials",
    excerpt: "What to include to convert visitors into inquiries.",
    category: "Independent Creatives",
    tags: ["Content", "Marketing", "SEO"],
    type: "checklist",
    payload: {
      items: [
        "Clear headline: niche + result (e.g., \"Brand photographer for DTC\")",
        "Curated hero gallery with alt text and fast loading",
        "Social proof: 3 client logos or testimonial quotes",
        "Services overview with typical price range",
        "Simple contact form with project type selector",
        "About section with portrait and location",
        "FAQ: timeline, deliverables, rights, revisions",
      ],
    },
  },
  {
    id: "creative-client-onboarding-checklist",
    title: "Client Onboarding Checklist (Creative)",
    excerpt: "Steps and assets to start projects smoothly and professionally.",
    category: "Independent Creatives",
    tags: ["Onboarding", "Compliance", "Content"],
    type: "checklist",
    payload: {
      items: [
        "Signed agreement and deposit received",
        "Creative brief: goals, audience, deliverables",
        "Brand assets: logo, colors, typography, examples",
        "Content plan: pages/sections, copy sources",
        "Timeline with key milestones and approvals",
        "Single point of contact and feedback process",
        "File delivery method and rights clarified",
      ],
    },
  },
];

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
];

export const TAGS = [
  "Fundraising",
  "Events",
  "Accessibility",
  "Content",
  "SEO",
  "Volunteers",
  "Onboarding",
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
];

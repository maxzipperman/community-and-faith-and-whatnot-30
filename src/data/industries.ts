import { IndustryData } from '@/types/industry';

export const professionalServicesData: IndustryData = {
  industry: "Professional Services",
  icon: "gavel",
  slug: "/professional-services",
  vanityAliases: ["/law-firms", "/accountants", "/consultants", "/therapists"],
  hero: {
    headline: "Websites that Win Trust — and Clients",
    subheadline: "We help professional services turn outdated, slow sites into credibility-driving, lead-generating assets.",
    primaryCtaText: "Request a 5-min Loom Site Review",
    secondaryCtaText: "See Accountant Results"
  },
  whyMatters: [
    "First impressions happen in seconds — and your website is your handshake.",
    "A slow or unclear site erodes trust and loses potential clients.",
    "A modern, fast site positions you as the expert clients choose."
  ],
  proof: [
    "Load time reduced from 6s to 1.2s for a mid-size law firm.",
    "25% more consultation bookings within 90 days for an accounting practice.",
    "3× more contact form submissions after redesign for a consulting firm."
  ],
  servicesFocus: [
    "Speed optimization and performance tuning",
    "Strategic messaging and copywriting tailored to your industry",
    "Full redesigns with abstract, modern visuals",
    "Compliance-minded builds for regulated fields",
    "Lead capture integrations (Calendly, email sign-up)"
  ],
  valueProps: [
    "Ethics-safe layouts for attorneys (disclaimers, no misleading claims)",
    "Trust signals that convert: bios, bar admissions, case results",
    "Practice-area page architecture that ranks and converts",
    "Performance tuned for mobile (sub-1.5s LCP on real devices)",
    "Service/FAQ schema for richer search results",
    "Calendly/Clio/Microsoft Bookings intake flows",
    "ADA-conscious, WCAG 2.1-friendly design",
    "No plugins = no maintenance retainers"
  ],
  offers: [
    {
      name: "Strategy Sprint (2 weeks)",
      description: "Brand voice, homepage wire, CTA map, SEO outline — paid upfront to anchor a premium build.",
      points: [
        "Brand voice guide + messaging hierarchy",
        "Homepage wireframe and hero copy",
        "CTA map + intake flow recommendations (Calendly included)",
        "SEO outline and page architecture"
      ]
    },
    {
      name: "Launch Build (3–5 pages)",
      description: "Hand-coded, speed-first site with copy included. Priced to match your premium custom service.",
      points: [
        "Custom design, no templates; sub-1.5s LCP target",
        "Compliance-minded forms + local SEO schema",
        "Copywriting included for core pages",
        "Recommended pricing: $6,000–$9,500 for 'Brand Refresh Website'"
      ]
    },
    {
      name: "Care & Content",
      description: "Light maintenance with quarterly updates so the site improves over time.",
      points: [
        "Quarterly content and UX updates",
        "Security patches and uptime monitoring",
        "Optional analytics reviews and recommendations"
      ]
    }
  ],
  gtm: {
    title: "Accountants Are Our Premier Market",
    points: [
      "Prioritize Accountants: largest accessible market with budget and clear pain points",
      "Lead with Value: open with a personalized 5‑min Loom mini-audit (2 fixes + call ask)",
      "Pricing: stop undercutting — position custom builds at $6k–$9.5k to attract serious clients",
      "Automation Stack: HubSpot (CRM) + Apollo.io (sourcing) + Instantly.ai (outreach)",
      "Channels: LinkedIn outreach for pros; Facebook/community groups for local creators",
      "Messaging Split: Pros = 'Credibility Engine' (trust gap); Locals = 'Revenue Leak' (ROI focus)",
      "Run small hyperlocal ads highlighting 'no lock‑in, faster sites' when ready"
    ]
  },
  caseStudies: [
    {
      title: "Law Firm Speed Overhaul",
      client: "Davis & Cole LLP",
      challenge: "Website took 6+ seconds to load, causing high bounce rates.",
      solution: "Rebuilt on Next.js with optimized assets and clear messaging.",
      outcome: "Load time cut to 1.2s, +27% client inquiries in 3 months."
    },
    {
      title: "Accountant Brand Refresh",
      client: "Ledgerwise Accounting",
      challenge: "Outdated site design failed to convey professionalism or trust.",
      solution: "Full visual rebrand, new copy, and faster hosting.",
      outcome: "25% increase in booked consultations, improved Google ranking."
    }
  ],
  beforeAfter: [
    {
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      caption: "Davis & Cole LLP — 6s load time → 1.2s and a modern, trust-building homepage."
    },
    {
      beforeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      caption: "Ledgerwise Accounting — outdated template → clean, high-conversion design."
    }
  ],
  testimonial: {
    quote: "They transformed our online presence. We went from invisible to in-demand.",
    author: "Jane D.",
    role: "Managing Partner, Davis & Cole LLP"
  },
  faqs: [
    {
      q: "How long does a typical project take?",
      a: "Most projects run 4–8 weeks from kickoff to launch, depending on scope."
    },
    {
      q: "Do you handle hosting and maintenance?",
      a: "We set up fast, secure hosting and offer optional maintenance plans."
    },
    {
      q: "Can you work with our existing branding?",
      a: "Yes — we can refresh your current brand or create a new visual identity."
    }
  ],
  endCta: {
    heading: "Ready to Attract Higher-Value Clients?",
    subheading: "Let's make your website your most trusted salesperson.",
    primaryCtaText: "Speak With the Founder"
  },
  seo: {
    title: "Accountants-First Web Design | Position Digital",
    description: "Accountants are our top focus. Premium, fast, trust-building sites. Strategy Sprint + Launch Build ($6k–$9.5k) + Care & Content.",
    keywords: ["professional services websites", "law firm web design", "accountant website design", "consultant web design", "therapist websites"]
  }
};

export const localBusinessData: IndustryData = {
  industry: "Local Businesses",
  icon: "building2",
  slug: "/local-businesses",
  vanityAliases: ["/restaurants", "/retailers", "/service-providers"],
  hero: {
    headline: "Local Websites That Drive Foot Traffic",
    subheadline: "We build fast, mobile-first websites that help local businesses get found and chosen by nearby customers.",
    primaryCtaText: "Book Your 20-Min Discovery Call",
    secondaryCtaText: "View Success Stories"
  },
  whyMatters: [
    "72% of consumers search online before visiting a local business.",
    "Mobile-first design is critical — most local searches happen on phones.",
    "Fast loading and clear contact info directly impact foot traffic."
  ],
  proof: [
    "40% increase in phone calls for a local restaurant chain.",
    "Google My Business clicks up 60% after website redesign.",
    "Online orders doubled for a specialty retail store."
  ],
  servicesFocus: [
    "Local SEO optimization and Google My Business integration",
    "Mobile-first responsive design",
    "Online ordering and reservation systems",
    "Location and hours management",
    "Customer review integration"
  ],
  valueProps: [
    "Tap-to-call and tap-for-directions above the fold",
    "Live hours + holiday closures synced to Google",
    "Menu, services, or booking in two clicks",
    "Auto-ask and showcase 5-star reviews",
    "LocalBusiness schema + source-tagged conversions",
    "Photo galleries that load instantly",
    "Promotions/events module, easy to update",
    "$120/yr hosting, no platform fees"
  ],
  comparison: {
    title: "Why Local Businesses Choose Us",
    subtitle: "Clear advantages over DIY builders and traditional retainers",
    columns: ["Position Digital", "DIY Website Builders", "Traditional Agency Retainer"],
    rows: [
      { label: "Core Web Vitals pass on real devices", values: ["Yes", "No", "Partial"], emphasis: true },
      { label: "Local SEO setup (GMB, schema, citations)", values: ["Yes", "Partial", "Yes"] },
      { label: "Tap-to-call / directions above the fold", values: ["Yes", "Partial", "Yes"] },
      { label: "Reviews integration + auto-ask flow", values: ["Yes", "No", "Partial"] },
      { label: "Custom design (not a template)", values: ["Yes", "No", "Yes"] },
      { label: "Ownership (no platform lock-in)", values: ["Yes", "No", "Partial"], emphasis: true },
      { label: "Time to launch", values: ["2–4 weeks", "1–2 weeks", "8–12 weeks"] },
      { label: "Upfront cost", values: ["$2–5k", "$0–$500", "$10–25k"] },
      { label: "Ongoing fees", values: ["$120/yr hosting", "$25–$60/mo", "$2–5k/mo retainer"], emphasis: true },
      { label: "Support", values: ["Founder-led", "Self-serve", "Account manager"] }
    ],
    footnote: "Costs are typical ranges; exact pricing depends on scope. Retainers shown are common for small local business agency contracts."
  },
  caseStudies: [
    {
      title: "Restaurant Online Ordering",
      client: "Bella's Italian Kitchen",
      challenge: "Lost revenue during COVID with no online ordering system.",
      solution: "Built custom ordering platform with delivery integration.",
      outcome: "Online orders now represent 35% of total revenue."
    },
    {
      title: "Retail Store Modernization",
      client: "Downtown Hardware Co.",
      challenge: "Outdated website didn't show inventory or store hours.",
      solution: "Mobile-optimized site with real-time inventory and maps integration.",
      outcome: "60% more website visitors convert to in-store customers."
    }
  ],
  beforeAfter: [
    {
      beforeImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      caption: "Bella's Italian Kitchen — basic menu page → full online ordering system."
    },
    {
      beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      caption: "Downtown Hardware Co. — static info page → dynamic inventory showcase."
    }
  ],
  testimonial: {
    quote: "Our new website tripled our online orders and brought back customers we thought we'd lost.",
    author: "Marco R.",
    role: "Owner, Bella's Italian Kitchen"
  },
  faqs: [
    {
      q: "Do you help with Google My Business setup?",
      a: "Yes, we optimize your Google My Business profile as part of our local SEO package."
    },
    {
      q: "Can you integrate with our POS system?",
      a: "We work with most major POS systems to enable online ordering and inventory sync."
    },
    {
      q: "What about online payment processing?",
      a: "We integrate secure payment systems like Stripe, Square, or your preferred processor."
    }
  ],
  endCta: {
    heading: "Ready to Dominate Your Local Market?",
    subheading: "Let's build a website that brings customers to your door.",
    primaryCtaText: "Start Your Local Growth"
  },
  seo: {
    title: "Position Digital — Local Business Websites That Drive Foot Traffic",
    description: "Mobile-first websites for restaurants, retailers, and service providers. Get found by local customers and increase foot traffic.",
    keywords: ["local business websites", "restaurant web design", "retail website design", "local SEO", "mobile-first design"]
  }
};

export const nonprofitData: IndustryData = {
  industry: "Nonprofits",
  icon: "heart",
  slug: "/nonprofits",
  vanityAliases: ["/charities", "/foundations", "/ngo"],
  hero: {
    headline: "Websites That Inspire Action",
    subheadline: "We help nonprofits build compelling digital experiences that turn visitors into donors, volunteers, and advocates.",
    primaryCtaText: "Get Your Free Strategy Session",
    secondaryCtaText: "See Impact Stories"
  },
  whyMatters: [
    "First-time visitors decide whether to donate within 15 seconds.",
    "Clear storytelling and easy donation flows increase conversion rates.",
    "Mobile accessibility ensures you reach supporters anywhere."
  ],
  proof: [
    "250% increase in online donations for a wildlife conservation org.",
    "Volunteer sign-ups doubled after website redesign for a food bank.",
    "Email list grew 400% with optimized lead magnets for an education nonprofit."
  ],
  servicesFocus: [
    "Donation platform integration and optimization",
    "Storytelling through visual design and content",
    "Volunteer management and event registration",
    "Grant application and impact reporting",
    "Accessibility compliance (WCAG 2.1)"
  ],
  valueProps: [
    "2-click donate with Apple/Google Pay",
    "Recurring + campaign-based giving options",
    "Impact storytelling blocks (metrics, outcomes)",
    "Volunteer signup with shift scheduling",
    "CRM sync (Salesforce/DonorPerfect/Bloomerang)",
    "WCAG 2.1 AA accessibility standards",
    "Donor receipts & finance-friendly exports",
    "No platform tax — keep more of each gift"
  ],
  caseStudies: [
    {
      title: "Wildlife Conservation Relaunch",
      client: "Save Our Oceans Foundation",
      challenge: "Outdated donation system and poor mobile experience.",
      solution: "Modern design with streamlined giving flow and impact visualizations.",
      outcome: "250% increase in online donations and 180% more monthly supporters."
    },
    {
      title: "Food Bank Volunteer Portal",
      client: "Community Harvest Network",
      challenge: "Manual volunteer coordination was limiting their reach.",
      solution: "Integrated volunteer portal with shift scheduling and automated communications.",
      outcome: "Volunteer capacity increased by 300%, serving 40% more families."
    }
  ],
  beforeAfter: [
    {
      beforeImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
      caption: "Save Our Oceans Foundation — cluttered donation page → clean, conversion-focused design."
    },
    {
      beforeImage: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      caption: "Community Harvest Network — basic info site → comprehensive volunteer platform."
    }
  ],
  testimonial: {
    quote: "Our new website doesn't just look better — it's helping us save more animals and grow our impact.",
    author: "Sarah M.",
    role: "Director, Save Our Oceans Foundation"
  },
  faqs: [
    {
      q: "Do you offer nonprofit discounts?",
      a: "Yes, we provide 30% discounts for registered 501(c)(3) organizations."
    },
    {
      q: "Can you integrate with our CRM?",
      a: "We work with popular nonprofit CRMs like Salesforce, DonorPerfect, and Bloomerang."
    },
    {
      q: "What about grant reporting features?",
      a: "We can build custom dashboards to track metrics and generate reports for funders."
    }
  ],
  endCta: {
    heading: "Ready to Amplify Your Mission?",
    subheading: "Let's build a website that turns passion into action.",
    primaryCtaText: "Transform Your Impact"
  },
  seo: {
    title: "Position Digital — Nonprofit Websites That Drive Donations & Volunteers",
    description: "Compelling websites for nonprofits, charities, and foundations. Increase donations, recruit volunteers, and amplify your mission.",
    keywords: ["nonprofit website design", "charity web design", "donation platform", "volunteer management", "nonprofit digital marketing"]
  }
};

export const creativesData: IndustryData = {
  industry: "Creatives",
  icon: "scissors",
  slug: "/creatives",
  vanityAliases: ["/artists", "/designers", "/photographers", "/agencies"],
  hero: {
    headline: "Portfolios That Win Clients",
    subheadline: "We build stunning, fast-loading portfolio sites that showcase your work and convert visitors into high-paying clients.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "View Portfolio Examples"
  },
  whyMatters: [
    "Your portfolio is your most powerful sales tool — it must load fast and look perfect.",
    "Clean, distraction-free design lets your work speak for itself.",
    "Mobile optimization is crucial — clients browse portfolios on all devices."
  ],
  proof: [
    "Photography studio booked 40% more weddings after portfolio redesign.",
    "Design agency's new site generated 6-figure contract within first month.",
    "Freelancer doubled their project inquiries with optimized contact flow."
  ],
  servicesFocus: [
    "High-performance image optimization and lazy loading",
    "Clean, minimal design that highlights your work",
    "Client portal and project management integration",
    "SEO optimization for creative keywords",
    "Contact and booking form optimization"
  ],
  valueProps: [
    "Visual-first layouts that let your work sell",
    "Ultra-fast galleries (lazy-loaded images/video)",
    "Private/proofing client galleries",
    "Booking/inquiry flows with pre-qualification",
    "Services & package modules you can update",
    "SEO tuned for niche + location",
    "IG/TikTok embeds without slowing the site",
    "Own your site — no templates, no monthly fee"
  ],
  subProfessions: [
    { name: "Hair Stylists", icon: "scissors" },
    { name: "Photographers", icon: "camera" },
    { name: "Designers", icon: "pen-tool" },
    { name: "Makeup Artists", icon: "brush" },
    { name: "Videographers", icon: "video" },
    { name: "Illustrators", icon: "palette" }
  ],
  caseStudies: [
    {
      title: "Photography Portfolio Overhaul",
      client: "Elena Rodriguez Photography",
      challenge: "Slow-loading gallery was losing potential wedding clients.",
      solution: "Rebuilt with optimized images, fast CDN, and streamlined booking flow.",
      outcome: "40% more wedding bookings and average project value increased by $2,000."
    },
    {
      title: "Design Agency Rebrand",
      client: "Pixel Perfect Studio",
      challenge: "Generic template wasn't reflecting their premium positioning.",
      solution: "Custom design showcasing case studies with detailed project breakdowns.",
      outcome: "Landed largest client ever worth $150K within 30 days of launch."
    }
  ],
  beforeAfter: [
    {
      beforeImage: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      caption: "Elena Rodriguez Photography — cluttered template → clean, fast-loading gallery."
    },
    {
      beforeImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      caption: "Pixel Perfect Studio — basic portfolio → premium case study showcase."
    }
  ],
  testimonial: {
    quote: "My new portfolio site pays for itself every month. The inquiries keep coming and they're higher quality than ever.",
    author: "Elena R.",
    role: "Wedding Photographer"
  },
  faqs: [
    {
      q: "How do you optimize images for fast loading?",
      a: "We use next-gen formats, progressive loading, and global CDN delivery for lightning-fast galleries."
    },
    {
      q: "Can you integrate client galleries?",
      a: "Yes, we build password-protected client galleries for project delivery and feedback."
    },
    {
      q: "What about e-commerce for selling prints?",
      a: "We integrate with Shopify, WooCommerce, or custom solutions for selling your work online."
    }
  ],
  endCta: {
    heading: "Ready to Turn Your Portfolio Into a Client Magnet?",
    subheading: "Let's showcase your work in a way that commands premium rates.",
    primaryCtaText: "Elevate Your Portfolio"
  },
  seo: {
    title: "Position Digital — Portfolio Websites That Convert Visitors to Clients",
    description: "Fast-loading, stunning portfolio sites for photographers, designers, artists, and creative agencies. Showcase your work and win more clients.",
    keywords: ["portfolio website design", "photographer website", "artist portfolio", "designer portfolio", "creative agency website"]
  }
};

export const faithData: IndustryData = {
  industry: "Faith & Religious",
  icon: "hand-heart",
  slug: "/faith",
  hero: {
    headline: "A Digital Home for Your Church or Faith Community",
    subheadline: "Sermons, groups, events, and giving—simple and welcoming.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "See Examples",
  },
  whyMatters: [
    "Members check the site for service times and groups.",
    "Clear giving flows increase recurring support.",
    "Welcoming design helps visitors feel at home.",
  ],
  proof: [
    "+35% recurring giving after simplifying the flow",
    "+40% group sign‑ups with clear ministries pages",
    "1.1s LCP on mobile across campuses",
  ],
  servicesFocus: [
    "Sermons/media archive",
    "Groups/ministries pages",
    "Online giving setup",
    "Events calendar",
    "Volunteer forms",
  ],
  valueProps: [
    "Two-click mobile giving with Apple/Google Pay",
    "Series-based sermon archive with audio/video",
    "Simple groups directory and next steps",
    "Child check-in info and safety details",
  ],
  caseStudies: [
    { title: "Multi-campus Church Refresh", client: "Westside Community Church", challenge: "Confusing navigation and giving flow.", solution: "Clear next steps, simplified giving tiers.", outcome: "+28% giving in 90 days." },
    { title: "Youth Ministry Microsite", client: "City Youth", challenge: "Low event attendance.", solution: "Mobile-first events w/ reminders.", outcome: "+45% RSVPs." },
  ],
  beforeAfter: [
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Sermon archive clarity boost." },
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Giving flow simplified." },
  ],
  testimonial: { quote: "Our site finally feels like our church.", author: "Mark H.", role: "Lead Pastor" },
  faqs: [
    { q: "Can you migrate sermons?", a: "Yes, we migrate recent series and set up an easy archive." },
    { q: "Do you support Planning Center?", a: "We integrate Planning Center, Donorbox, and Stripe." },
  ],
  endCta: { heading: "Ready to Welcome More People?", subheading: "Make next steps and giving effortless.", primaryCtaText: "Get a Free Strategy Call" },
  seo: { title: "Church & Faith Web Design | Position Digital", description: "Websites for churches and faith organizations with sermons, groups, events, and giving.", keywords: ["church websites","faith web design","online giving","sermon archive"] },
};

export const schoolsData: IndustryData = {
  industry: "K-12 Schools & PTAs",
  icon: "book-open",
  slug: "/schools",
  hero: {
    headline: "Clear, Parent-Friendly School Websites",
    subheadline: "Events, announcements, calendars, and forms—easy to update.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "See Examples",
  },
  whyMatters: ["Parents need quick answers on mobile.", "Accessible design supports all families.", "Clear calendars reduce office calls."],
  proof: ["-30% office calls after calendar revamp", "+22% volunteer signups", "1.2s LCP on budget devices"],
  servicesFocus: ["Announcements & newsletters", "Events calendar", "Registration & forms", "Teacher pages", "Language access"],
  valueProps: ["ADA-conscious layouts", "One-click translate ready", "Safe photo galleries", "PTA fundraising pages"],
  caseStudies: [
    { title: "District Calendar Overhaul", client: "Riverbend SD", challenge: "Scattered info.", solution: "Unified calendar + alerts.", outcome: "Parents report fewer missed events." },
    { title: "PTA Fundraiser Microsite", client: "Northview PTA", challenge: "Confusing donate flow.", solution: "Preset tiers + mobile-first.", outcome: "+31% donations." },
  ],
  beforeAfter: [
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Cleaner announcements layout." },
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Parent-focused navigation." },
  ],
  testimonial: { quote: "Parents finally find things fast.", author: "Dana L.", role: "Principal" },
  faqs: [
    { q: "Do you handle translation?", a: "We set up one-click translate and structure content for clarity." },
    { q: "How about teacher pages?", a: "We create a simple, uniform teacher page template." },
  ],
  endCta: { heading: "Make Your School Site Parent-Friendly", subheading: "Fewer calls, more engagement.", primaryCtaText: "Start a Conversation" },
  seo: { title: "School Website Design | Position Digital", description: "K-12 school and PTA websites with calendars, announcements, and mobile-first access.", keywords: ["school websites","pta website","district site","school calendar"] },
};

export const youthSportsData: IndustryData = {
  industry: "Youth Sports",
  icon: "award",
  slug: "/youth-sports",
  hero: {
    headline: "Websites for Leagues and Clubs",
    subheadline: "Registration, schedules, rosters, and sponsor highlights—fast and simple.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "See Examples",
  },
  whyMatters: ["Parents register on phones.", "Clear schedules reduce messages.", "Sponsors want visibility."],
  proof: ["+50% on-time registrations", "Schedules viewed 5× more", "Sponsor clicks up 2×"],
  servicesFocus: ["Online registration", "Season schedules", "Team pages & rosters", "Sponsor blocks", "Field status alerts"],
  valueProps: ["Mobile-first registration", "Calendar sync", "Coach-friendly updates", "Sponsor display modules"],
  caseStudies: [
    { title: "League Registration Streamlined", client: "Metro Soccer", challenge: "Drop-offs at checkout.", solution: "Simplified form + payments.", outcome: "+38% completed regs." },
    { title: "Sponsor Visibility", client: "Hills Baseball", challenge: "Sponsors underexposed.", solution: "Homepage placements.", outcome: "+2× sponsor clicks." },
  ],
  beforeAfter: [
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Cleaner schedule layout." },
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Frictionless registration." },
  ],
  testimonial: { quote: "Coaches and parents love the simplicity.", author: "Kim S.", role: "League Director" },
  faqs: [
    { q: "Do you integrate sports platforms?", a: "Yes—TeamSnap, SportsEngine, or custom forms with Stripe." },
    { q: "Sponsor pages?", a: "We create tiered placements with tracking." },
  ],
  endCta: { heading: "Make Next Season Easier", subheading: "Less admin, more play.", primaryCtaText: "Get a Free Strategy Call" },
  seo: { title: "Youth Sports Websites | Position Digital", description: "League and club websites with registration, schedules, and sponsor visibility.", keywords: ["sports websites","league registration","team pages"] },
};

export const communityData: IndustryData = {
  industry: "Community Centers & Nonprofits",
  icon: "users",
  slug: "/community",
  hero: {
    headline: "Websites That Power Community Programs",
    subheadline: "Events, volunteers, donations, and impact stories in one place.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "See Examples",
  },
  whyMatters: ["Clear next steps drive action.", "Mobile-first matters for outreach.", "Trust grows with impact stories."],
  proof: ["Volunteer signups doubled", "+180% monthly givers", "Bounce rate down 35%"],
  servicesFocus: ["Donate + volunteer flows", "Events & programs", "Impact storytelling", "CRM integrations", "Accessibility"],
  valueProps: ["2-click donate", "Recurring giving", "Shift scheduling", "Impact metrics blocks"],
  caseStudies: [
    { title: "Volunteer Portal", client: "Neighborhood Hub", challenge: "Manual scheduling.", solution: "Self-serve shifts.", outcome: "+3× capacity." },
    { title: "Donation Uplift", client: "HelpLine", challenge: "Low conversion.", solution: "Simplified tiers.", outcome: "+70% donors." },
  ],
  beforeAfter: [
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Volunteer flow clarity." },
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Donation UX uplift." },
  ],
  testimonial: { quote: "Our impact is clearer and support is up.", author: "Alicia P.", role: "Program Director" },
  faqs: [
    { q: "Which CRMs do you support?", a: "Salesforce, Bloomerang, DonorPerfect, and more." },
    { q: "Can we track impact?", a: "Yes, we set up metrics blocks and dashboards." },
  ],
  endCta: { heading: "Turn Passion into Action", subheading: "Make it easy to give, volunteer, and attend.", primaryCtaText: "Start Your Project" },
  seo: { title: "Community Nonprofit Websites | Position Digital", description: "Community and nonprofit websites for donations, volunteers, and events.", keywords: ["nonprofit websites","volunteer signup","donations"] },
};

export const artsCultureData: IndustryData = {
  industry: "Arts & Culture",
  icon: "palette",
  slug: "/arts-culture",
  hero: {
    headline: "Showcase Your Season and Grow Membership",
    subheadline: "Events, ticket links, galleries, and member sign-ups.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "See Examples",
  },
  whyMatters: ["Audiences plan on phones.", "Clear CTAs drive attendance.", "Support grows with storytelling."],
  proof: ["Memberships up 25%", "+2× event RSVPs", "Gallery load times 5× faster"],
  servicesFocus: ["Season/events pages", "Ticketing links", "Galleries & media", "Membership sign-up", "Sponsors"],
  valueProps: ["Ultra-fast media", "Clear season schedule", "Donor tiers", "Sponsor showcases"],
  caseStudies: [
    { title: "Community Choir Growth", client: "City Voices", challenge: "Low awareness.", solution: "Season page + media.", outcome: "+2× attendees." },
    { title: "Museum Supporters", client: "Heritage Museum", challenge: "Stagnant members.", solution: "Member tiers + stories.", outcome: "+25% memberships." },
  ],
  beforeAfter: [
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Faster galleries." },
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Clearer events." },
  ],
  testimonial: { quote: "Our season finally shines online.", author: "Renee T.", role: "Artistic Director" },
  faqs: [
    { q: "Ticketing integrations?", a: "Yes—Eventbrite, Square, or venue systems." },
    { q: "Member portals?", a: "We set up member sign-ups and newsletters." },
  ],
  endCta: { heading: "Grow Your Audience", subheading: "Make every event easy to attend.", primaryCtaText: "Plan Your Season Site" },
  seo: { title: "Arts & Culture Websites | Position Digital", description: "Websites for choirs, theater, bands, and museums with events and membership.", keywords: ["arts website","theater website","museum site"] },
};

export const parksRecData: IndustryData = {
  industry: "Parks & Recreation",
  icon: "map-pin",
  slug: "/parks-rec",
  hero: {
    headline: "Simple Sites for Parks, Rec, and City Programs",
    subheadline: "Programs, facility info, registration links, and alerts.",
    primaryCtaText: "Speak With the Founder",
    secondaryCtaText: "See Examples",
  },
  whyMatters: ["Residents need quick info.", "Mobile access is critical.", "Alerts reduce phone volume."],
  proof: ["Registrations up 30%", "Fewer info calls", "Program pages viewed 3× more"],
  servicesFocus: ["Program listings", "Registration links", "Facility pages", "Hours & closures", "Alerts"],
  valueProps: ["Clear fees & forms", "Map & directions", "Accessible info", "Easy program search"],
  caseStudies: [
    { title: "Rec Program Signups", client: "North Parks", challenge: "Confusing registration.", solution: "Program index + links.", outcome: "+30% signups." },
    { title: "Facility Info", client: "City Rec", challenge: "Frequent calls.", solution: "Hours + closures module.", outcome: "Call volume down 25%." },
  ],
  beforeAfter: [
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Facility info clarity." },
    { beforeImage: "/placeholder.svg", afterImage: "/placeholder.svg", caption: "Program listings simplified." },
  ],
  testimonial: { quote: "Residents find what they need fast.", author: "Tom V.", role: "Parks Director" },
  faqs: [
    { q: "Do you handle alerts?", a: "We add a simple alert bar for closures and notices." },
    { q: "Registration systems?", a: "We link to or embed your preferred system." },
  ],
  endCta: { heading: "Serve Residents Better", subheading: "Clear info, fewer calls.", primaryCtaText: "Talk With Us" },
  seo: { title: "Parks & Recreation Websites | Position Digital", description: "Websites for parks districts and city programs with registration and facility info.", keywords: ["parks website","rec center site","city programs"] },
};

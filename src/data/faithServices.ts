export interface ServiceModule {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  priorityScore: number;
  pricing: {
    setup: number;
    monthly: number;
  };
  roiMetrics: {
    hoursSavedWeekly: string;
    valueCreatedMonthly: string;
  };
  culturalAdaptations?: {
    churches?: string[];
    synagogues?: string[];
    mosques?: string[];
  };
}

export interface FaithServiceData {
  industry: string;
  slug: string;
  heroStats: {
    stat: string;
    label: string;
    icon: string;
  }[];
  modules: ServiceModule[];
  integrations: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

// Core AI Service Modules for Faith Organizations
export const coreServiceModules: ServiceModule[] = [
  {
    id: 'member-faq-automation',
    title: 'Member FAQ Automation',
    description: 'AI chatbot trained on your organization policies, service times, programs, and frequently asked questions. Available 24/7 to help members and visitors.',
    benefits: [
      'Answers service times, parking, childcare questions',
      'Provides program information and requirements',
      'Handles basic pastoral/spiritual care inquiries',
      'Reduces staff phone calls by 70%'
    ],
    priorityScore: 4.75,
    pricing: {
      setup: 1299,
      monthly: 99
    },
    roiMetrics: {
      hoursSavedWeekly: '8-12',
      valueCreatedMonthly: '$800-1,200'
    },
    culturalAdaptations: {
      churches: ['Pastoral care question routing', 'Prayer request handling', 'Biblical reference integration'],
      synagogues: ['Hebrew/English bilingual support', 'Jewish lifecycle event coordination', 'Torah study scheduling'],
      mosques: ['Arabic/English bilingual support', 'Prayer time integration', 'Islamic calendar events']
    }
  },
  {
    id: 'communications-drafting',
    title: 'Smart Communications Drafting',
    description: 'AI assistant that helps draft weekly bulletins, newsletters, and announcements with your organization voice and theological accuracy.',
    benefits: [
      'Drafts bulletin content from calendar events',
      'Maintains consistent organizational voice',
      'Suggests relevant scriptural references',
      'Saves 3-5 hours weekly on writing'
    ],
    priorityScore: 4.25,
    pricing: {
      setup: 899,
      monthly: 79
    },
    roiMetrics: {
      hoursSavedWeekly: '3-5',
      valueCreatedMonthly: '$375-625'
    },
    culturalAdaptations: {
      churches: ['Biblical quote integration', 'Seasonal liturgical content', 'Pastoral message assistance'],
      synagogues: ['Hebrew text integration', 'Jewish holiday content', 'Torah portion references'],
      mosques: ['Quranic verse integration', 'Islamic calendar awareness', 'Hadith references']
    }
  },
  {
    id: 'volunteer-coordination',
    title: 'Volunteer Coordination System',
    description: 'Intelligent matching system that connects members with volunteer opportunities based on skills, availability, and ministry interests.',
    benefits: [
      'Matches volunteers to ministry/service needs',
      'Automated reminder and scheduling',
      'Tracks volunteer hours and impact',
      'Reduces coordination time by 60%'
    ],
    priorityScore: 3.75,
    pricing: {
      setup: 699,
      monthly: 59
    },
    roiMetrics: {
      hoursSavedWeekly: '5-8',
      valueCreatedMonthly: '$625-1,000'
    },
    culturalAdaptations: {
      churches: ['Ministry team coordination', 'Outreach program management', 'Service project organization'],
      synagogues: ['Shabbat-observant scheduling', 'Mitzvah project coordination', 'Educational program support'],
      mosques: ['Community service coordination', 'Ramadan program support', 'Interfaith outreach management']
    }
  },
  {
    id: 'content-archive-search',
    title: 'Teaching & Content Archive Search',
    description: 'Semantic search through your sermon library, studies, and teaching materials with AI-powered discovery.',
    benefits: [
      'Search by topic, scripture, or theme',
      'Find related teachings instantly',
      'Discover content connections',
      'Saves 2-3 hours on research'
    ],
    priorityScore: 3.25,
    pricing: {
      setup: 499,
      monthly: 49
    },
    roiMetrics: {
      hoursSavedWeekly: '2-3',
      valueCreatedMonthly: '$250-375'
    },
    culturalAdaptations: {
      churches: ['Sermon archive organization', 'Bible study material search', 'Theological resource discovery'],
      synagogues: ['Torah study archive', 'Rabbinic teaching search', 'Jewish text cross-referencing'],
      mosques: ['Khutbah archive search', 'Islamic teaching materials', 'Quranic study resources']
    }
  }
];

// Bundle packages combining multiple modules
export const bundlePackages = [
  {
    id: 'essential-bundle',
    name: 'Essential AI Bundle',
    modules: ['member-faq-automation', 'communications-drafting'],
    discount: 0.15, // 15% discount
    description: 'Core automation for member support and communications'
  },
  {
    id: 'comprehensive-bundle',
    name: 'Comprehensive AI Suite',
    modules: ['member-faq-automation', 'communications-drafting', 'volunteer-coordination'],
    discount: 0.20, // 20% discount
    description: 'Complete automation for member engagement and coordination'
  },
  {
    id: 'complete-bundle',
    name: 'Complete AI Solution',
    modules: ['member-faq-automation', 'communications-drafting', 'volunteer-coordination', 'content-archive-search'],
    discount: 0.25, // 25% discount
    description: 'Full AI-powered ministry and community management'
  }
];
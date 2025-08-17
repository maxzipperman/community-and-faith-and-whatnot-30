import { ServiceModule, FaithServiceData } from './faithServices';

export const mosqueServiceModules: ServiceModule[] = [
  {
    id: 'member-faq',
    title: 'Member FAQ Automation',
    description: 'AI-powered FAQ system with Arabic/English bilingual support and Islamic calendar awareness',
    benefits: [
      'Instant answers to common mosque questions in Arabic and English',
      'Prayer time integration and Islamic calendar notifications',
      'Automated responses about Islamic holidays and observances',
      'Community event information with cultural context'
    ],
    pricing: { setup: 299, monthly: 49 },
    priorityScore: 95,
    roiMetrics: {
      hoursSavedWeekly: '12-18 hours/month',
      valueCreatedMonthly: '$480-720/month'
    },
    culturalAdaptations: {
      mosques: [
        'Arabic script support with right-to-left text rendering',
        'Islamic calendar (Hijri) integration alongside Gregorian dates',
        'Prayer time automation for all five daily prayers',
        'Ramadan and Islamic holiday scheduling features'
      ]
    }
  },
  {
    id: 'communications',
    title: 'Islamic Communications Drafting',
    description: 'AI assistant for mosque communications with Quranic integration and Islamic cultural awareness',
    benefits: [
      'Draft newsletters with appropriate Quranic verses and Hadith references',
      'Community announcements with Islamic holiday context',
      'Interfaith outreach communications with cultural sensitivity',
      'Ramadan and Hajj program coordination messages'
    ],
    pricing: { setup: 399, monthly: 79 },
    priorityScore: 92,
    roiMetrics: {
      hoursSavedWeekly: '15-25 hours/month',
      valueCreatedMonthly: '$600-1000/month'
    },
    culturalAdaptations: {
      mosques: [
        'Quranic verse and Hadith reference integration',
        'Islamic terminology and cultural context awareness',
        'Gender-appropriate language for community communications',
        'Halal event planning and coordination features'
      ]
    }
  },
  {
    id: 'volunteer-coordination',
    title: 'Community Service Coordination',
    description: 'Organize mosque volunteers with Islamic community service principles and cultural considerations',
    benefits: [
      'Coordinate community service projects with Islamic values focus',
      'Manage Ramadan iftar and charity programs efficiently',
      'Organize interfaith dialogue and community outreach',
      'Schedule gender-appropriate volunteer opportunities'
    ],
    pricing: { setup: 449, monthly: 89 },
    priorityScore: 88,
    roiMetrics: {
      hoursSavedWeekly: '10-15 hours/month',
      valueCreatedMonthly: '$400-600/month'
    },
    culturalAdaptations: {
      mosques: [
        'Zakat and charity program coordination',
        'Ramadan community service scheduling',
        'Gender-appropriate volunteer coordination',
        'Islamic community values integration'
      ]
    }
  },
  {
    id: 'content-archive',
    title: 'Khutbah & Teaching Archive Search',
    description: 'AI-powered search through mosque content library with Islamic scholarship context',
    benefits: [
      'Instant search through years of Khutbah recordings and transcripts',
      'Find Islamic teaching materials by topic, verse, or theme',
      'Access Quranic study resources and commentary archives',
      'Discover relevant Hadith and scholarly references quickly'
    ],
    pricing: { setup: 349, monthly: 69 },
    priorityScore: 85,
    roiMetrics: {
      hoursSavedWeekly: '8-12 hours/month',
      valueCreatedMonthly: '$320-480/month'
    },
    culturalAdaptations: {
      mosques: [
        'Arabic and English content indexing and search',
        'Quranic verse and Surah reference integration',
        'Islamic scholarship and commentary organization',
        'Multilingual support for diverse Muslim communities'
      ]
    }
  }
];

export const mosqueServiceData: FaithServiceData = {
  industry: 'Mosques & Islamic Centers',
  slug: 'mosques',
  heroStats: [
    { stat: '12+', label: 'Islamic Centers Served', icon: 'users' },
    { stat: '45-65', label: 'Hours Saved Monthly', icon: 'clock' },
    { stat: '3.8-5.5x', label: 'Return on Investment', icon: 'trending-up' },
    { stat: '2-3', label: 'Weeks to Setup', icon: 'calendar' }
  ],
  modules: mosqueServiceModules,
  integrations: [
    'Islamic Society Management Systems',
    'Prayer Time APIs (IslamicFinder, Aladhan)',
    'Quranic Reference Databases',
    'Islamic Calendar Integration',
    'Mosque Donation Platforms',
    'Community Communication Tools'
  ],
  testimonial: {
    quote: "The AI has transformed how we serve our community. From answering questions in both Arabic and English to coordinating our Ramadan programs, it's like having a dedicated assistant who understands our Islamic values and traditions.",
    author: "Imam Abdullah Rahman",
    role: "Religious Director, Islamic Center of Greater Springfield"
  }
};

export default mosqueServiceData;
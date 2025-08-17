import { coreServiceModules, bundlePackages, type ServiceModule, type FaithServiceData } from './faithServices';

// Synagogue-specific service data
export const synagogueServiceData: FaithServiceData = {
  industry: 'synagogues',
  slug: 'synagogues',
  heroStats: [
    { stat: '10-15', label: 'Hours saved weekly on member inquiries', icon: 'MessageSquare' },
    { stat: '4-6', label: 'Hours saved on Hebrew/English communications', icon: 'Clock' },
    { stat: '6-10', label: 'Hours saved on Torah study & event coordination', icon: 'Calendar' },
  ],
  modules: coreServiceModules.map(module => ({
    ...module,
    // Override with synagogue-specific adaptations
    ...(module.id === 'member-faq-automation' && {
      title: 'Bilingual Member FAQ Automation',
      description: 'AI chatbot with Hebrew/English bilingual support, trained on synagogue policies, service times, lifecycle events, and Jewish lifecycle questions.',
      benefits: [
        'Answers service times and parking in Hebrew/English',
        'Provides lifecycle event information (Bar/Bat Mitzvah, etc.)',
        'Handles basic religious questions with rabbinic oversight',
        'Reduces administrative calls by 75%'
      ],
      priorityScore: 4.85,
      pricing: { setup: 1499, monthly: 119 },
      roiMetrics: {
        hoursSavedWeekly: '10-15',
        valueCreatedMonthly: '$1,000-1,500'
      }
    }),
    ...(module.id === 'communications-drafting' && {
      title: 'Shabbat-Observant Communications',
      description: 'AI assistant that drafts synagogue communications while respecting Shabbat observance, with Hebrew text integration and Jewish seasonal content.',
      benefits: [
        'Schedules communications for post-Shabbat delivery',
        'Integrates Torah portions and Jewish calendar',
        'Maintains appropriate religious tone and language',
        'Saves 4-6 hours weekly on bilingual content'
      ],
      priorityScore: 4.60,
      pricing: { setup: 1099, monthly: 99 },
      roiMetrics: {
        hoursSavedWeekly: '4-6',
        valueCreatedMonthly: '$500-750'
      }
    }),
    ...(module.id === 'volunteer-coordination' && {
      title: 'Torah Study & Event Coordination',
      description: 'Intelligent system for coordinating Torah study groups, lifecycle events, and synagogue activities with Jewish calendar integration.',
      benefits: [
        'Matches study partners by Hebrew proficiency',
        'Coordinates Bar/Bat Mitzvah preparation schedules',
        'Manages High Holy Day volunteer coordination',
        'Reduces event planning time by 65%'
      ],
      priorityScore: 4.15,
      pricing: { setup: 899, monthly: 79 },
      roiMetrics: {
        hoursSavedWeekly: '6-10',
        valueCreatedMonthly: '$750-1,250'
      }
    }),
    ...(module.id === 'content-archive-search' && {
      title: 'Rabbinic Teaching Archive Search',
      description: 'Semantic search through sermon library, Torah commentaries, and Jewish texts with AI-powered cross-referencing to traditional sources.',
      benefits: [
        'Search by Torah portion, Jewish concept, or theme',
        'Cross-reference with traditional commentaries',
        'Find related teachings across Jewish texts',
        'Saves 3-4 hours on research and preparation'
      ],
      priorityScore: 3.75,
      pricing: { setup: 699, monthly: 69 },
      roiMetrics: {
        hoursSavedWeekly: '3-4',
        valueCreatedMonthly: '$375-500'
      }
    })
  })),
  integrations: [
    'ShulCloud',
    'ChaiPoint', 
    'SiddurSoft',
    'Synagogue management platforms'
  ],
  testimonial: {
    quote: "The Hebrew/English FAQ system has been transformative. Members get instant answers about lifecycle events and religious questions in their preferred language, and our staff can focus on pastoral care and education instead of repetitive inquiries.",
    author: "Synagogue Administrator",
    role: "Conservative Congregation (450 families)"
  }
};

// Synagogue-specific cultural considerations and features
export const synagogueCulturalFeatures = {
  'member-faq-automation': {
    name: 'Bilingual Member FAQ Automation',
    culturalFeatures: [
      'Hebrew script support and translation',
      'Jewish calendar integration (Hebrew dates)',
      'Kosher/kashrut guidance and resources',
      'Lifecycle event coordination (Bar/Bat Mitzvah, weddings, etc.)',
      'Shabbat and holiday observance information',
      'Torah study group matching and scheduling'
    ],
    uniqueValue: 'First synagogue AI system with native Hebrew support and Jewish calendar integration'
  },
  'communications-drafting': {
    name: 'Shabbat-Observant Communications',
    culturalFeatures: [
      'Torah portion integration and weekly themes',
      'Hebrew text handling and formatting',
      'Jewish holiday awareness and seasonal content',
      'Rabbinic review workflow integration',
      'Post-Shabbat delivery scheduling',
      'Bilingual bulletin and newsletter generation'
    ],
    uniqueValue: 'Respects Shabbat observance while maintaining effective community communication'
  },
  'volunteer-coordination': {
    name: 'Torah Study & Event Coordination',
    culturalFeatures: [
      'Jewish calendar synchronization',
      'Torah study progress tracking',
      'Lifecycle event planning templates',
      'Hebrew proficiency-based matching',
      'High Holy Day volunteer management',
      'Minyan coordination and attendance tracking'
    ],
    uniqueValue: 'Designed specifically for Jewish community lifecycle and educational needs'
  },
  'content-archive-search': {
    name: 'Rabbinic Teaching Archive Search',
    culturalFeatures: [
      'Hebrew text search capabilities',
      'Jewish source cross-referencing',
      'Commentary integration (Rashi, Talmud, etc.)',
      'Torah portion correlation',
      'Jewish concept and theme tagging',
      'Traditional source citation formatting'
    ],
    uniqueValue: 'Deep integration with Jewish textual tradition and rabbinic scholarship'
  }
};
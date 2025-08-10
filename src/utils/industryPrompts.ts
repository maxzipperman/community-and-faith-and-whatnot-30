
export const industryPrompts: Record<string, { label: string; goals: string }> = {
  'faith-religious': {
    label: 'Faith & Religious',
    goals: `- Prioritize Sunday service times, location, parking, livestream, and children's programs on the homepage.
- Ensure online giving (donations/tithing) is prominent, trustworthy, and accessible on mobile.
- Provide clear paths for newcomers: what to expect, beliefs, small groups, and next steps.
- Accessibility: large font options, high contrast, keyboard navigation for older audiences.
- Optimize volunteer signups and event calendars (filters, upcoming highlights).`
  },
  'k12-ptas': {
    label: 'K-12 Schools & PTAs',
    goals: `- Make calendar, bell schedules, lunch menus, and announcements obvious on mobile.
- Ensure teacher directory and contact info are easy to find and filter.
- Improve PTA donation and membership flows (clear value props, quick checkout).
- Accessibility for students/parents with disabilities and translation options for multilingual families.
- Reduce clutter: simplify PDFs into HTML and ensure documents have titles and alt text.`
  },
  'youth-sports': {
    label: 'Youth Sports',
    goals: `- Make registration and tryout info impossible to miss (dates, fees, eligibility).
- Feature schedules, standings, and fields with maps and weather alerts.
- Streamline volunteer coaching signups and background check instructions.
- Safety and policies: concussion, weather, and emergency protocols linked everywhere relevant.
- Improve mobile performance: images, JS bloat, and font usage for on-the-go parents.`
  },
  'arts-culture': {
    label: 'Arts & Culture',
    goals: `- Emphasize upcoming events, tickets, memberships, and donations on the homepage.
- Improve event detail pages: dates, times, venue, accessibility statements, parking.
- Showcase programs and educational resources with strong visuals and captions.
- Accessibility for galleries and performances: ASL/CC info, seating maps, audio descriptions.
- Optimize media loading for image-heavy galleries (LCP and CLS).`
  },
  'parks-rec': {
    label: 'Parks & Recreation',
    goals: `- Focus on program registration, facility rentals, and field/court schedules.
- Highlight seasonal programs and safety alerts (closures, weather).
- Provide maps, trail conditions, and ADA accessibility details.
- Simplify fee schedules and age brackets; reduce PDF reliance in favor of searchable content.
- Improve search and filter for activities by age, location, and time.`
  },
  'community-nonprofits': {
    label: 'Community Centers & Nonprofits',
    goals: `- Make donation and volunteer CTAs prominent with clear impact statements.
- Ensure programs/services are easy to discover with eligibility and location info.
- Build trust with transparency: financials, leadership, impact metrics.
- Accessibility and language options; mobile-first layouts for underserved communities.
- Optimize storytelling, testimonials, and partnerships for credibility.`
  },
};

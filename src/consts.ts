// Central site configuration, edit these to update site-wide content.

export const SITE = {
  name: 'Yuse Lajiminmuhip',
  // Exec-first positioning. Builder credentials surface as evidence in About
  // and Highlights, not in headline or SEO-shaping signals.
  title: 'Yuse Lajiminmuhip | B2B Marketing & Communications Executive',
  tagline:
    'B2B marketing and communications executive. 15+ years across industrial manufacturing, publishing, and technology.',
  // Targets queries for the name + role + location. Avoids employer-brand
  // and employer-product keywords so the page does not compete with the
  // employer in SERPs.
  description:
    'Yuse Lajiminmuhip, B2B marketing and communications executive based in South Carolina. 15+ years across industrial manufacturing, publishing, and technology. Strategy, demand generation, outreach, and communications.',
  email: 'yusel@me.com',
  location: 'South Carolina',
  url: 'https://yuselajiminmuhip.com',
  twitterHandle: '@lajiminmuhip',
} as const;

export type SocialLink = { label: string; href: string };

export const SOCIALS: SocialLink[] = [
  { label: 'Email', href: `mailto:${SITE.email}` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuselajiminmuhip/' },
  { label: 'GitHub', href: 'https://github.com/ristlin' },
  { label: 'X', href: 'https://x.com/lajiminmuhip' },
  { label: 'Medium', href: 'https://medium.com/@yuselajiminmuhip' },
];

// In-page navigation (anchor links).
export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Highlights', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

// Skills grouped by category (from the CV).
export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Digital Marketing',
    items: [
      'Google Ads',
      'Programmatic Advertising',
      'SEO',
      'Google Analytics',
    ],
  },
  {
    category: 'CRM & Marketing Automation',
    items: ['HubSpot', 'Salesforce'],
  },
  {
    category: 'Data & Operations',
    items: [
      'Airtable',
      'ROI tracking & attribution',
      'Marketing budget management',
    ],
  },
  {
    category: 'Content & Creative',
    items: [
      'Video editing',
      'Multimedia production',
      'Case studies',
      'Brand management',
    ],
  },
  {
    category: 'Web Development & AI Tooling',
    items: [
      'Laravel',
      'Vue',
      'Stripe',
      'Claude Code',
      'AI-assisted workflows',
    ],
  },
  {
    category: 'Leadership & Communication',
    items: [
      'Team development',
      'Sales alignment',
      'Public speaking',
      'Policy advocacy',
    ],
  },
];

// Industry leadership roles & policy work (from the CV).
export const LEADERSHIP: { title: string; detail?: string }[] = [
  {
    title:
      'Chair, Joint Technical Committee 4 (JTC4) on Sustainability, FedIGS',
    detail:
      'Coordinating sustainability work across four international geo-engineering societies.',
  },
  {
    title:
      'Co-Chair, Sustainability Committee, International Geosynthetics Society (IGS)',
  },
  {
    title: 'Policy Advocacy, GMA Winter Lobby Days, Washington, DC',
    detail: 'Infrastructure policy work with congressional offices.',
  },
];

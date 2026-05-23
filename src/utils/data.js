/* ─── Projects ─── */
export const PROJECTS = [
  {
    id: 1,
    title: 'E2T Learning & Trading Management Platform',
    description:
      'Developed admin and teacher dashboards for an education management platform with role-based access control, student attendance tracking, study material management, and third-party trading data integration for real-time account and transaction monitoring.',
    image: null,
    tags: ['React', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    category: 'EdTech',
},
  // {
  //   id: 1,
  //   title: 'NexusAI Dashboard',
  //   description:
  //     'A real-time SaaS analytics platform with AI-powered insights, custom chart builders, and multi-workspace support. Handles 500k+ daily events.',
  //   image: null,
  //   tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Recharts'],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   featured: true,
  //   category: 'SaaS',
  // },
  // {
  //   id: 2,
  //   title: 'Shopify Storefront',
  //   description:
  //     'Headless e-commerce experience built on Next.js and Shopify Storefront API. Lighthouse score 98. Supports multi-currency and localisation.',
  //   image: null,
  //   tags: ['Next.js', 'Shopify API', 'Tailwind', 'Vercel'],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   featured: true,
  //   category: 'E-Commerce',
  // },
  {
    id: 2,
    title: 'CHATSAPPO AI Communication & Campaign Platform',
    description:
      'Developed a role-based platform with AI chatbot integration, enabling companies to manage employees, launch promotional campaigns, and deliver real-time advertisements and notifications. Implemented admin dashboards for company onboarding, plan management, and activity tracking.',
    image: null,
    tags: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'Twilio', 'OpenAI', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    category: 'Tool',
 },
  // {
  //   id: 3,
  //   title: 'DevCollab',
  //   description:
  //     'Real-time collaborative code editor with live presence, integrated AI suggestions, and version snapshots. Built with CRDTs for conflict-free editing.',
  //   image: null,
  //   tags: ['React', 'WebSockets', 'Yjs', 'Monaco', 'Redis'],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   featured: true,
  //   category: 'Tool',
  // },
  {
    id: 3,
    title: 'Nano Skool STEAM Education Platform',
    description:
      'Contributed to the development of a STEAM-based education platform by implementing secure and scalable features including multi-role authentication, JWT-based access control, RESTful APIs, and deployment workflows. Collaborated with clients and development teams to deliver interactive learning solutions.',
    image: null,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AWS', 'CI/CD'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    category: 'SaaS',
},
  // {
  //   id: 4,
  //   title: 'FinTrack Mobile',
  //   description:
  //     'Personal finance tracker with budget planning, expense categorisation, and smart spending forecasts. Cross-platform React Native app.',
  //   image: null,
  //   tags: ['React Native', 'Expo', 'Supabase', 'Victory Native'],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: false,
  //   category: 'Mobile',
  // },
  // {
  //   id: 5,
  //   title: 'CMS Headless API',
  //   description:
  //     'GraphQL-first headless CMS with role-based access, media processing pipeline, and webhook delivery. Deployed on AWS ECS.',
  //   image: null,
  //   tags: ['Node.js', 'GraphQL', 'Prisma', 'AWS', 'Docker'],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: false,
  //   category: 'Backend',
  // },
  // {
  //   id: 6,
  //   title: 'Portfolio Design System',
  //   description:
  //     'Open-source React component library with 40+ accessible components, dark mode, Storybook docs, and auto-published to npm.',
  //   image: null,
  //   tags: ['React', 'Storybook', 'Radix UI', 'Tailwind', 'npm'],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   featured: false,
  //   category: 'Open Source',
  // },
]

/* ─── Skills ─── */
export const SKILL_GROUPS = [
  {
    group: 'Frontend',
    icon: '⬡',
    color: 'primary',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 82 },
      { name: 'React Native', level: 75 },
    ],
  },
  {
    group: 'Backend',
    icon: '◈',
    color: 'secondary',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'GraphQL', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Prisma', level: 85 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    group: 'DevOps & Tools',
    icon: '◎',
    color: 'accent',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 72 },
      { name: 'CI/CD', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'Vercel / Netlify', level: 90 },
      { name: 'Linux', level: 75 },
    ],
  },
]

/* ─── Services ─── */
export const SERVICES = [
  {
    icon: '◈',
    title: 'Frontend Development',
    description:
      'Pixel-perfect React & Next.js applications with smooth animations, performance budgets, and WCAG accessibility compliance.',
    highlights: ['React / Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    icon: '⬡',
    title: 'Backend Engineering',
    description:
      'Scalable REST & GraphQL APIs, database design, auth systems, and cloud deployments that grow with your product.',
    highlights: ['Node.js / Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'AWS / Docker'],
  },
  {
    icon: '◎',
    title: 'UI/UX Design',
    description:
      'Design systems, component libraries, and high-fidelity prototypes that bridge the gap between design and engineering.',
    highlights: ['Design Systems', 'Figma', 'Prototyping', 'Accessibility'],
  },
  {
    icon: '⟡',
    title: 'Technical Consulting',
    description:
      'Architecture reviews, code audits, performance optimisation, and hands-on mentoring for growing engineering teams.',
    highlights: ['Code Audits', 'Performance', 'Team Mentoring', 'Architecture'],
  },
]

/* ─── Experience ─── */
export const EXPERIENCE = [
  {
    id: 1,
    role: 'MERN Stack Developer',
    company: 'Freelance / Contract',
    period: '2025 — Present',
    location: 'Remote',
    description:
      'Delivered end-to-end website development solutions, including custom WordPress themes and e-commerce platforms, for 10+ business clients.',
    highlights: ['Led migration to App Router, reducing TTFB by 40%', 'Built design system used by 6 squads', 'Mentored 3 junior engineers'],
    current: true,
  },
  {
    id: 2,
    role: 'MERN Stack Developer',
    company: 'Inciem Business Consultants Pvt Ltd',
    period: '2024 — 2025',
    location: 'Kochi, India',
    description:
      'Developed and maintained multiple scalable MERN stack applications including LMS dashboards, school management systems, and AI-powered chatbot platforms.',
    highlights: ['Built and maintained 20+ RESTful APIs.', 'Managed data workflows for 5,000+ students.', 'Reduced dashboard loading time by 35%.'],
    current: false,
  },
  {
    id: 3,
    role: 'ME(A)RN Stack Developer Intern',
    company: 'Luminar Technolab Pvt Ltd',
    period: '2023 — 2024',
    location: 'Kochi, India',
    description:
      'Built client websites, e-commerce stores, and custom WordPress themes. Delivered 10+ projects for clients across retail, hospitality, and media.',
    highlights: ['10+ client projects delivered', 'E-commerce, CMS, and brochure sites', 'First production TypeScript app'],
    current: false,
  },
]

/* ─── Testimonials ─── */
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Kim',
    role: 'CTO',
    company: 'NexusAI',
    avatar: 'SK',
    quote:
      "Alex is one of the best engineers I've worked with. He doesn't just write great code — he thinks deeply about product problems and always delivers solutions that are elegant, maintainable, and fast.",
  },
  {
    id: 2,
    name: "James O'Brien",
    role: 'Head of Product',
    company: 'Linear',
    avatar: 'JO',
    quote:
      "Working with Alex felt effortless. He took complex requirements, asked the right questions, and shipped a polished integration that our users absolutely love. Would hire again instantly.",
  },
  {
    id: 3,
    name: 'Priya Nair',
    role: 'Engineering Manager',
    company: 'Stripe',
    avatar: 'PN',
    quote:
      "Alex has a rare ability to balance engineering excellence with shipping velocity. His documentation and mentoring lifted the whole team. An asset to any engineering organisation.",
  },
]

/* ─── Blog Posts ─── */
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Performant React Components in 2025',
    excerpt:
      'Exploring modern patterns for optimizing React performance: memoization, code splitting, and the evolution of Server Components. Real-world strategies that reduced bundle size by 40%.',
    content: 'Full article content here...',
    date: '2025-05-08',
    readTime: 8,
    category: 'React',
    featured: true,
    slug: 'building-performant-react-components',
    tags: ['React', 'Performance', 'TypeScript'],
  },
  {
    id: 2,
    title: 'The Art of API Design: Building Developer-First Endpoints',
    excerpt:
      'Principles for designing REST and GraphQL APIs that are intuitive, well-documented, and a joy to integrate with. Featuring real examples from production systems.',
    content: 'Full article content here...',
    date: '2025-04-22',
    readTime: 12,
    category: 'Backend',
    featured: true,
    slug: 'api-design-best-practices',
    tags: ['API Design', 'GraphQL', 'Node.js'],
  },
  {
    id: 3,
    title: 'Dark Mode Implementation: More Than Just Colors',
    excerpt:
      'A deep dive into creating seamless dark mode experiences using CSS variables, context APIs, and localStorage. Includes accessibility considerations and transition strategies.',
    content: 'Full article content here...',
    date: '2025-04-10',
    readTime: 6,
    category: 'Frontend',
    featured: true,
    slug: 'dark-mode-implementation',
    tags: ['CSS', 'Dark Mode', 'UX'],
  },
  {
    id: 4,
    title: 'TypeScript: Type Safety at Scale',
    excerpt:
      'Lessons learned scaling TypeScript across a 50-person engineering team. Strategies for reducing boilerplate, creating reusable type patterns, and mentoring developers on type fundamentals.',
    content: 'Full article content here...',
    date: '2025-03-28',
    readTime: 10,
    category: 'TypeScript',
    featured: false,
    slug: 'typescript-at-scale',
    tags: ['TypeScript', 'Architecture', 'Tooling'],
  },
  {
    id: 5,
    title: 'Framer Motion Animations: Beyond Eye Candy',
    excerpt:
      'Using motion to improve user experience: page transitions, form feedback, and micro-interactions that feel responsive and intentional. Motion design patterns for accessibility.',
    content: 'Full article content here...',
    date: '2025-03-15',
    readTime: 7,
    category: 'Frontend',
    featured: false,
    slug: 'framer-motion-ux-patterns',
    tags: ['Animation', 'UX', 'Framer Motion'],
  },
  {
    id: 6,
    title: 'Database Indexing for Mortals: An Intuitive Guide',
    excerpt:
      'Demystifying database indexes: when to use them, common pitfalls, and how proper indexing can turn a slow query into a sub-millisecond response. PostgreSQL focus.',
    content: 'Full article content here...',
    date: '2025-02-28',
    readTime: 9,
    category: 'Backend',
    featured: false,
    slug: 'database-indexing-guide',
    tags: ['PostgreSQL', 'Performance', 'Database'],
  },
]

export const BLOG_CATEGORIES = ['All', 'React', 'Backend', 'Frontend', 'TypeScript']

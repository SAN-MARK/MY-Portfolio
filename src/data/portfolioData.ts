import { ProjectItem, StatItem, SkillCategory, ExperienceItem } from '../types';

export const PROFILE_DATA = {
  name: "SANJEEV M",
  role: "Creative Developer & Growth Strategist",
  subtitle: "Portfolio Hero 01",
  bio: "Building real projects. Growing authentic audiences. 3,387+ LinkedIn followers. CEO-recognized work across the tech ecosystem.",
  profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBcHea4EVeOy5Oi1PeoQ9zE9MubaqW755ib55W0LtHDvpPLCM30sabHjLATKo60OEllwzj0nT36frc_S8BubmsLjpXKSZ1EgKkbS7O93touy3doU7bIjGUg4YMjwgKfYDx_CtkTmkyBSTNfkh6UNenfzHYC0OjasdlWJmHapYi75GY0Qwcv0JxgWS5XOqWeV6p7OcTEp3bhR7qcBjQMhj_eNiWthw1-46ew4Edli81GzQFFzx4osBwGARzQRuzVAozvFvcjLkEyVYC",
  statsSummary: [
    { label: "3,387 FOLLOWERS" },
    { label: "CEO ENGAGEMENT" },
    { label: "7 MONTHS GROWTH" }
  ],
  email: "iamheresanjeev@gmail.com",
  phone: "+91 8668045519",
  linkedinUrl: "https://www.linkedin.com/in/sanjeeveditor2008/",
  githubUrl: "https://github.com/SAN-MARK",
  figmaUrl: "https://www.figma.com/files/team/1575329476930413989/recents-and-sharing?fuid=1575329474537283794",
  twitterUrl: "https://twitter.com",
};

export const STATS_DATA: StatItem[] = [
  {
    id: "linkedin",
    title: "LINKEDIN FOLLOWERS",
    icon: "trending_up",
    value: "3,387",
    subValue: "21.8/day",
    subLabel: "growth rate",
    accentColor: "pink"
  },
  {
    id: "recruiter",
    title: "RECRUITER SEARCHES/WEEK",
    icon: "person_search",
    value: "41+",
    subValue: "Active",
    subLabel: "hiring radar",
    accentColor: "cyan"
  },
  {
    id: "impressions",
    title: "WEEKLY IMPRESSIONS",
    icon: "visibility",
    value: "1,600+",
    subValue: "Real",
    subLabel: "engagement metrics",
    accentColor: "purple"
  },
  {
    id: "ceo",
    title: "RAPHAEL BUCK ENGAGEMENT",
    icon: "verified",
    value: "CEO",
    subValue: "McKinsey",
    subLabel: "Leader interaction",
    accentColor: "green"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pcas",
    title: "PCAS Student Portal",
    category: "Academic System",
    badge: "✓ LIVE",
    badgeType: "live",
    description: "A comprehensive academic management system designed for streamlined student and faculty interactions.",
    tags: ["FIGMA", "HTML", "CSS"],
    actionText: "FIGMA PROTOTYPE ↗",
    actionType: "case_study",
    accentColor: "pink",
    linkUrl: "https://www.figma.com/make/Kzm6FRCleCJH1x8ki2nAIy/SANJEEV-PRO-1?t=PcKM3UhXMhR6mgoh-6",
    details: {
      overview: "The PCAS Student Portal unifies academic course registration, attendance analytics, assignment tracking, and faculty communication into an intuitive single interface.",
      keyFeatures: [
        "Real-time attendance & grade percentage dashboard",
        "Faculty announcement channel with file downloads",
        "Syllabus tracker and exam timetable scheduler",
        "Role-based views for Students, Faculty, and Admin"
      ],
      techStack: ["Figma", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      impact: "Reduced student query response time by 45% across academic departments.",
      linkUrl: "https://www.figma.com/make/Kzm6FRCleCJH1x8ki2nAIy/SANJEEV-PRO-1?t=PcKM3UhXMhR6mgoh-6"
    }
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "E-Commerce",
    badge: "✓ LIVE",
    badgeType: "live",
    description: "Custom full-stack solo build featuring dynamic product routing, cart logic, and Dharakashan Cracker Store deployment.",
    tags: ["HTML", "CSS", "JS", "VERCEL"],
    actionText: "VISIT STORE ↗",
    actionType: "repo",
    accentColor: "cyan",
    linkUrl: "https://dharakashancrackerstore.vercel.app/",
    details: {
      overview: "Dharakashan Cracker Store - A lightweight, hyper-fast e-commerce shopfront designed for instant product selection and zero-latency cart processing.",
      keyFeatures: [
        "Dynamic filtering by product category, price, and seasonal offers",
        "Client-side persistent cart state with instant checkout preview",
        "Interactive product showcase gallery with high-res imagery",
        "Optimized mobile checkout flow deployed live on Vercel"
      ],
      techStack: ["JavaScript (ES6+)", "HTML5", "CSS Grid", "Tailwind", "Vercel"],
      impact: "Achieved high Lighthouse performance scores with instant online store accessibility.",
      linkUrl: "https://dharakashancrackerstore.vercel.app/"
    }
  },
  {
    id: "findback",
    title: "FindBack Web Startup",
    category: "Web Startup",
    badge: "✓ LIVE",
    badgeType: "live",
    description: "Hyperlocal drop-off hubs + web application returning lost valuables to owners fast. Integrated with Google Auth, 3-table database, interactive maps, and auto-deploy.",
    tags: ["REACT", "VERCEL", "MAPS", "DATABASE"],
    actionText: "VISIT FINDBACK ↗",
    actionType: "case_study",
    accentColor: "cyan",
    linkUrl: "https://findback-84.vercel.app/",
    details: {
      overview: "FindBack is a live web application connecting finders, neighborhood drop-off hubs, and item owners. Features Google Auth, 3 real database tables (Users, Found Items, Verification), and interactive satellite mapping centered in Chennai.",
      keyFeatures: [
        "Google Authentication & Role-Based Access Control (RBAC)",
        "Real-time 3-Table Database Persistence (Users, Found Items, Verification)",
        "Interactive Chennai operations map with Standard, Satellite & Terrain views",
        "24-hr Return SLA, Instant Finder Rewards, and Fraud-Proof Verification"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Google Auth", "Sheet.best / DB"],
      impact: "Live production web application deployed at findback-84.vercel.app with 24-hr SLA.",
      linkUrl: "https://findback-84.vercel.app/"
    }
  },
  {
    id: "video_reel",
    title: "Video Production Reel",
    category: "Media Production",
    badge: "50+ EDITS",
    badgeType: "edits",
    description: "Curated collection of high-impact YouTube edits, promotional reels, and commercial motion design.",
    tags: ["CAPCUT", "PREMIERE", "MOTION"],
    actionText: "WATCH REEL",
    actionType: "reel",
    accentColor: "green",
    details: {
      overview: "Over 50+ published video edits driving audience engagement, viral short-form clips, and corporate brand storytelling.",
      keyFeatures: [
        "Sound design & custom audio synth transitions",
        "Kinetic typography & subtitle animation styling",
        "Color grading optimized for OLED display saturation",
        "Pacing tailored to high-retention social algorithms"
      ],
      techStack: ["Adobe Premiere Pro", "CapCut Pro", "After Effects", "Motion Graphics"],
      impact: "Generated over 250,000 cumulative organic impressions across social channels."
    }
  }
];

export const FEATURED_PROJECT = {
  id: "victor_academy",
  badge: "▸ FEATURED PROJECT",
  title: "VECTOR ARTS ACADEMY (VVI)",
  subtitle: "Student & Campus Event Tracking App",
  figmaUrl: "https://www.figma.com/proto/Rs6ctoMQsLBJvjQPXk4Unp?node-id=0-1&t=cPjENYqQ66Twwfnb-6",
  figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRs6ctoMQsLBJvjQPXk4Unp%3Fnode-id%3D0-1%26t%3DcPjENYqQ66Twwfnb-6",
  description: "Complete campus event & student internship management application designed in Figma with 15+ interactive screens. Features VVI student login portal, roll-number verification, upcoming events directory, and instant pre-registration.",
  stats: [
    { label: "SCREENS", value: "15+" },
    { label: "TOOL", value: "FIGMA" },
    { label: "STATUS", value: "PROTOTYPE READY" }
  ],
  mockups: [
    {
      id: "screen1",
      title: "VVI Student Login Portal",
      description: "VFX Vector Institution onboarding portal with custom geometric vector accents, roll number credentials, and Google / LinkedIn / Microsoft SSO integration."
    },
    {
      id: "screen2",
      title: "Upcoming Events Directory",
      description: "Campus event portal featuring Sports Day, Brain Code Hackathon, and Teachers Day with instant pre-registration triggers."
    },
    {
      id: "screen3",
      title: "Event Pre-Registration Form",
      description: "High-conversion student registration workflow pre-filled with student credentials (Ruturaj, Roll VVI2024105, Computer Applications)."
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DESIGN",
    icon: "token",
    accentColor: "pink",
    strengthPercent: 98,
    skills: ["UI/UX", "Figma", "Wireframing", "Prototyping", "Design Systems", "Research"]
  },
  {
    title: "DEVELOPMENT",
    icon: "terminal",
    accentColor: "cyan",
    strengthPercent: 92,
    skills: ["HTML5", "CSS3", "JS", "React", "MERN Stack", "GitHub", "Responsive"]
  },
  {
    title: "CREATIVE",
    icon: "auto_awesome",
    accentColor: "purple",
    strengthPercent: 85,
    skills: ["Video Editing", "Content Creation", "Social Media", "Community", "Growth Strategy", "Communication"]
  }
];

export const TECHNICAL_ECOSYSTEM = {
  title: "Technical Ecosystem",
  description: "My approach merges high-performance engineering with intentional user psychology. Each stack is chosen for scalability and pixel-perfect rendering across the digital spectrum.",
  pills: ["D3.js", "Three.js", "TailwindCSS", "Node.js"],
  bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI4Sco404R_AHcmPg_MSfQ53R6RqrVfVkcjMB9rHXya9VReDFwZQBkperyLjON0I0i7WB44NFXos6XoqLW_qFEJnXLyguWoUpVszd4ZjVosfb3CKLuFRkCVK0RZBoT3_j1egovNyw1fgwfI8h_yDGscm5Y2qIJnxDNARWJhMNyphYNQnobLCCYDwTLD7HnVPkIz-HWLmWtnlzfSgFVJ7zGgoQiDq7VUPOGiqpPvrBPuXA92K0FkGWjMUWymh_5unvqs1XzeX_W2GAD"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "novitech",
    company: "NoviTech R&D",
    role: "Full Stack & UI/UX Intern",
    period: "Jun 2026 - Present",
    statusText: "🔨 IN PROGRESS",
    statusType: "in_progress",
    icon: "terminal",
    accentColor: "cyan",
    colSpan: "md:col-span-7",
    summary: "Immersed in cutting-edge R&D environments, bridging the gap between high-fidelity interface design and robust full-stack architecture.",
    points: [
      "Undergoing intensive training in **MERN Stack** development and advanced **UI/UX principles**.",
      "Architecting functional prototypes for internal product validation using React and Tailwind CSS.",
      "Collaborating with senior engineers to implement responsive designs and optimize component performance."
    ],
    tags: ["REACT", "NODE.JS", "FIGMA", "MONGODB"]
  },
  {
    id: "freelance",
    company: "Freelance Designer",
    role: "Independent Creative",
    period: "Jun 2026 - Present",
    statusText: "✓ ACTIVE",
    statusType: "active",
    icon: "palette",
    accentColor: "pink",
    colSpan: "md:col-span-5",
    summary: "Operating as an independent creative, delivering high-impact visual solutions for digital-first brands.",
    points: [
      "Successfully acquired high-ticket clients through strategic **LinkedIn outreach** and networking.",
      "Leading a complete **Portfolio Redesign** for a tech startup, focusing on minimalist neon aesthetics."
    ],
    link: "linkedin.com/in/neonprofessional"
  },
  {
    id: "marpu",
    company: "Marpu Foundation",
    role: "Marketing Intern",
    period: "Dec 2025 - Jan 2026",
    statusText: "✓ COMPLETED",
    statusType: "completed",
    icon: "campaign",
    accentColor: "purple",
    colSpan: "md:col-span-12",
    summary: "Driven marketing campaign execution and brand growth for non-profit social initiatives.",
    points: [
      "End-to-end **Social Media Management** across platforms.",
      "Content strategy and visual asset creation."
    ],
    achievement: {
      value: "35%",
      label: "INCREASE IN GLOBAL ENGAGEMENT METRICS",
      description: "Optimized post frequency and visual language to drive organic growth and community participation."
    }
  }
];

export const SOCIAL_ICONS = {
  linkedin: "https://lh3.googleusercontent.com/aida-public/AB6AXuCejDVRsJwihu-GtkXyil7cWgAAKKLiL5jrulpg8XD7M0MbvF552_RCvSpbWE9dwqCApb-Dl25RN_WPkQsPSCxbRUMyK7vckg3hHQY9oWpV7WJ-srIF0v2FHZi8YrIo5jLGZ0wpq8j1cmUJM56BOtGDLxC5d4KTJEo-mg1t39uknq1cFBk2ZpyxVsUGTYs39CekYyYsCuG9pesUBms7JnRQURkpJ44UIKdMg21Myxf3NDclkxvUuDmi3s3Dn2yB5AyL6x6XsSHTZg9Y",
  github: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL6gAiOITlEQau6RMS1qeig9ttXp-Gnl3JWsWewB739y4rXnAc5bZcIXcZ3lFSPdvT-fi5cA61JALRnsQBuo2yVdBdqo_mAxIml7AvuC4LpCv7IZLCS8nbVpDczILIjJdi1MH2154KD3EW2WXu1ZoAYt2UjNlkA405nK5rCl0IvW5Q9JhKNmSVhK_CiIQ1fTFaW5qEdphamMDA_OMJTK9dCLLEU1mNroG4y6xt-gbNVj055i9WOkGWuaLiTEAT8-A6YMtengoDj-vj",
  figma: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrHYtkqAgqGfI3pgble07U8xl6wRPSf9RsrLpoJjMpO_x646WjeFWlmIsiThDmMNVRRyxI5L6XRKaolFjFF-1N0uHdgiEFMe69Y6q79vZDUMy5laIPQ3jatKaEdvXXpZul96WmO3n0eIEQtlplXsRddQdtMYuEYAOCDabF-5LxjxVrDi3yPS_pSAu1bXvtzYFNjfS5_wBlv4j46HGWvp2koYeBOKyiLxCcZPjRzupu0sG7mfXRl91wMyu-6eXxGC42BULUPOEyjtU0"
};

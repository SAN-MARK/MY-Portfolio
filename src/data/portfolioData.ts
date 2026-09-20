import { ProjectItem, StatItem, SkillCategory, ExperienceItem } from '../types';

export const PROFILE_DATA = {
  name: "Sanjeev M",
  role: "Full Stack Developer & UI/UX Designer",
  subtitle: "Portfolio 2026",
  bio: "Founder of FindBack. 2nd Place at INNOVARA'26 Startup Tech Pitch. Building thoughtful digital products from first sketch to production — combining rigorous engineering with refined interface design.",
  profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBcHea4EVeOy5Oi1PeoQ9zE9MubaqW755ib55W0LtHDvpPLCM30sabHjLATKo60OEllwzj0nT36frc_S8BubmsLjpXKSZ1EgKkbS7O93touy3doU7bIjGUg4YMjwgKfYDx_CtkTmkyBSTNfkh6UNenfzHYC0OjasdlWJmHapYi75GY0Qwcv0JxgWS5XOqWeV6p7OcTEp3bhR7qcBjQMhj_eNiWthw1-46ew4Edli81GzQFFzx4osBwGARzQRuzVAozvFvcjLkEyVYC",
  statsSummary: [
    { label: "6+ LIVE PRODUCTION APPS" },
    { label: "40+ FIGMA SCREENS" },
    { label: "17+ TECHNICAL CERTIFICATIONS" },
    { label: "9 GITHUB REPOSITORIES" }
  ],
  email: "iamheresanjeev@gmail.com",
  phone: "+91 8668045519",
  linkedinUrl: "https://www.linkedin.com/in/sanjeeveditor2008/",
  youtubeUrl: "https://youtube.com/@unknownbcaguy?si=E3NTMf5Yutw_3yvh",
  githubUrl: "https://github.com/SAN-MARK",
  figmaUrl: "https://www.figma.com/files/team/1575329476930413989/recents-and-sharing?fuid=1575329474537283794",
  twitterUrl: "https://twitter.com",
};

export const STATS_DATA: StatItem[] = [
  {
    id: "live_apps",
    title: "LIVE DEPLOYED APPS",
    icon: "rocket_launch",
    value: "6+",
    subValue: "Production",
    subLabel: "web builds live",
    accentColor: "pink"
  },
  {
    id: "certifications",
    title: "TECHNICAL CERTIFICATIONS",
    icon: "workspace_premium",
    value: "17+",
    subValue: "Verified",
    subLabel: "Full Stack, GenAI, Python",
    accentColor: "cyan"
  },
  {
    id: "github_repos",
    title: "GITHUB REPOSITORIES",
    icon: "code",
    value: "9",
    subValue: "Public",
    subLabel: "repositories maintained",
    accentColor: "purple"
  },
  {
    id: "figma_screens",
    title: "FIGMA PROTOTYPE SCREENS",
    icon: "dashboard",
    value: "40+",
    subValue: "Interactive",
    subLabel: "UI/UX component systems",
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
    description: "Custom full-stack solo build featuring dynamic product routing, cart logic, and Dharakshan Cracker Store deployment.",
    tags: ["HTML", "CSS", "JS", "VERCEL"],
    actionText: "VISIT STORE ↗",
    actionType: "repo",
    accentColor: "cyan",
    linkUrl: "https://dharakashancrackerstore.vercel.app/",
    details: {
      overview: "Dharakshan Cracker Store - A lightweight, hyper-fast e-commerce shopfront designed for instant product selection and zero-latency cart processing.",
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
    description: "Hyperlocal drop-off hubs + web application returning lost valuables to owners fast. Live at findback-ai.run.app. 2nd Place — INNOVARA'26 Startup Tech Pitch. Built in 4 days.",
    tags: ["REACT", "VERCEL", "MAPS", "DATABASE", "AI"],
    actionText: "VISIT FINDBACK ↗",
    actionType: "case_study",
    accentColor: "cyan",
    linkUrl: "https://findback-331036023954.asia-southeast1.run.app/",
    details: {
      overview: "FindBack is a live web application connecting finders, neighborhood drop-off hubs, and item owners. Winner of 2nd Place at INNOVARA'26 Startup Tech Pitch. Built in 4 days with Google Auth, 3 real database tables, and interactive satellite mapping.",
      keyFeatures: [
        "Live at findback-ai.run.app with 24-hr return SLA",
        "2nd Place — INNOVARA'26 Startup Tech Pitch Award",
        "Built in 4 days using Supabase, Gemini AI, and React",
        "Interactive Chennai operations map with satellite view"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Google Auth", "Gemini AI"],
      impact: "Live production web application deployed at findback-ai.run.app with 24-hr SLA.",
      linkUrl: "https://findback-331036023954.asia-southeast1.run.app/"
    }
  }
];

export const CREATIVE_MEDIA_WORK = {
  id: "video_reel",
  title: "Video Production Reel",
  category: "Creative Media Production",
  badge: "50+ EDITS",
  badgeType: "edits",
  description: "Curated collection of high-impact YouTube edits, promotional reels, and commercial motion design created during media internships.",
  tags: ["CAPCUT", "PREMIERE", "MOTION GRAPHICS"],
  actionText: "WATCH REEL",
  accentColor: "purple",
  details: {
    overview: "Over 50+ published video edits driving audience engagement, viral short-form clips, and corporate brand storytelling.",
    keyFeatures: [
      "Sound design & custom audio synth transitions",
      "Kinetic typography & subtitle animation styling",
      "Color grading optimized for high-contrast mobile displays",
      "Pacing tailored to high-retention engagement"
    ],
    techStack: ["Adobe Premiere Pro", "CapCut Pro", "After Effects", "Motion Graphics"],
    impact: "Generated over 250,000 cumulative organic impressions across social channels."
  }
};

export const FEATURED_ACHIEVEMENT = {
  id: "innovara-2026-2nd-place",
  title: "INNOVARA'26 — 2nd Place",
  subtitle: "Startup Tech Pitch | Prince Shri Balaji Arts and Science College",
  description: "Won 2nd Place at the inter-collegiate Startup Tech Pitch. Competed against 3rd-year teams from multiple colleges with FindBack — a live full-stack lost & found network built in 4 days using Supabase, Gemini AI, and Next.js. Team: Trio Thunders (Sanjeev M, Babu K, Sheik Fareed Fahim).",
  date: "September 19, 2026",
  badge: "NEW ACHIEVEMENT",
  icon: "🏆",
  stats: [
    { label: "Position", value: "2nd Place" },
    { label: "Category", value: "Startup Tech Pitch" },
    { label: "Team", value: "Trio Thunders" }
  ],
  tags: ["Startup Pitch", "Live MVP", "Supabase", "Gemini AI"],
  link: "https://findback-331036023954.asia-southeast1.run.app/"
};

export const FEATURED_PROJECT = {
  id: "victor_academy",
  badge: "▸ FEATURED MISSION",
  title: "VECTOR ARTS ACADEMY (VVI)",
  subtitle: "Student & Campus Event Tracking App",
  figmaUrl: "https://www.figma.com/proto/Rs6ctoMQsLBJvjQPXk4Unp?node-id=0-1&t=cPjENYqQ66Twwfnb-6",
  figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRs6ctoMQsLBJvjQPXk4Unp%3Fnode-id%3D0-1%26t%3DcPjENYqQ66Twwfnb-6",
  description: "Complete campus event & student internship management application designed in Figma with 25+ interactive prototype screens. Features VVI student login portal, roll-number verification, upcoming events directory, and instant pre-registration.",
  stats: [
    { label: "SCREENS", value: "40+" },
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
      description: "High-conversion student registration workflow pre-filled with student credentials (Sanjeev M, Roll VVI2024105, Computer Applications)."
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DESIGN",
    icon: "token",
    accentColor: "pink",
    strengthPercent: 98,
    skills: ["UI/UX", "Figma", "Wireframing", "Prototyping", "Design Systems", "User Research"]
  },
  {
    title: "DEVELOPMENT",
    icon: "terminal",
    accentColor: "cyan",
    strengthPercent: 92,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "MERN Stack", "GitHub", "Responsive Design"]
  },
  {
    title: "CREATIVE & MEDIA",
    icon: "auto_awesome",
    accentColor: "purple",
    strengthPercent: 85,
    skills: ["Video Editing", "Content Strategy", "CapCut", "Premiere Pro", "Canva", "Communication"]
  }
];

export const TECHNICAL_ECOSYSTEM = {
  title: "Technical Ecosystem",
  description: "My approach merges high-performance engineering with intentional user psychology. Each stack is chosen for scalability and pixel-perfect rendering across the digital spectrum.",
  pills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Vercel"],
  bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI4Sco404R_AHcmPg_MSfQ53R6RqrVfVkcjMB9rHXya9VReDFwZQBkperyLjON0I0i7WB44NFXos6XoqLW_qFEJnXLyguWoUpVszd4ZjVosfb3CKLuFRkCVK0RZBoT3_j1egovNyw1fgwfI8h_yDGscm5Y2qIJnxDNARWJhMNyphYNQnobLCCYDwTLD7HnVPkIz-HWLmWtnlzfSgFVJ7zGgoQiDq7VUPOGiqpPvrBPuXA92K0FkGWjMUWymh_5unvqs1XzeX_W2GAD"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "novitech",
    company: "NoviTech R&D Pvt Ltd",
    role: "Full Stack & UI/UX Intern",
    period: "June 2018 – September 2018",
    type: "Internship, Remote",
    statusText: "COMPLETED",
    statusType: "completed",
    icon: "terminal",
    accentColor: "cyan",
    points: [
      "Immersed in cross-functional R&D work bridging high-fidelity interface design and full-stack architecture.",
      "Building functional prototypes for internal product validation using **React** and **Tailwind CSS**.",
      "Collaborating with senior engineers to implement responsive designs and optimize component performance."
    ],
    tags: ["UX", "UI/UX", "Full Stack"]
  },
  {
    id: "alfido",
    company: "Alfido Tech",
    role: "Frontend Developer",
    period: "Jul 2026 – Aug 2026 (2 mos)",
    type: "Internship, Remote",
    statusText: "COMPLETED",
    statusType: "completed",
    icon: "code",
    accentColor: "pink",
    points: [
      "Immersed in a dynamic internship focused on developing frontend development skills.",
      "Worked on front-end features with attention to UI/UX consistency."
    ],
    tags: ["Front-End Development", "UI/UX"]
  },
  {
    id: "dominos",
    company: "Domino's",
    role: "Guest Delight Associate",
    period: "Feb 2026 – May 2026 (4 mos)",
    type: "Part-time, On-site",
    location: "Chennai, Tamil Nadu, India",
    statusText: "COMPLETED",
    statusType: "completed",
    icon: "storefront",
    accentColor: "purple",
    points: [
      "Delivered efficient order taking, billing, and customer query resolution in a fast-paced setting.",
      "Maintained high hygiene and food safety standards for the store."
    ],
    tags: ["Sales Operations"]
  },
  {
    id: "marpu",
    company: "Marpu Foundation (India's Top NGO)",
    role: "Social Media Marketing Intern",
    period: "Dec 2025 – Jan 2026 (2 mos)",
    type: "Internship, Remote",
    statusText: "COMPLETED",
    statusType: "completed",
    icon: "campaign",
    accentColor: "cyan",
    points: [
      "Drove content strategy execution, poster design, and video editing for social initiatives.",
      "Created high-engagement video edits and graphic assets across social channels.",
      "Supported community reach through visual storytelling and campaign design."
    ],
    tags: ["NGO", "Video Editing"]
  },
  {
    id: "supermarket",
    company: "Local Supermarket",
    role: "Data Entry Specialist",
    period: "Apr 2025 – Jun 2025 (3 mos)",
    type: "Full-time, On-site",
    location: "Chennai, Tamil Nadu, India",
    statusText: "COMPLETED",
    statusType: "completed",
    icon: "table_chart",
    accentColor: "pink",
    points: [
      "Entered and maintained accurate customer data using **Microsoft Excel**.",
      "Managed purchase records and contact details for the store's customer database."
    ],
    tags: ["Customer Data"]
  }
];

export const SOCIAL_ICONS = {
  linkedin: "https://lh3.googleusercontent.com/aida-public/AB6AXuCejDVRsJwihu-GtkXyil7cWgAAKKLiL5jrulpg8XD7M0MbvF552_RCvSpbWE9dwqCApb-Dl25RN_WPkQsPSCxbRUMyK7vckg3hHQY9oWpV7WJ-srIF0v2FHZi8YrIo5jLGZ0wpq8j1cmUJM56BOtGDLxC5d4KTJEo-mg1t39uknq1cFBk2ZpyxVsUGTYs39CekYyYsCuG9pesUBms7JnRQURkpJ44UIKdMg21Myxf3NDclkxvUuDmi3s3Dn2yB5AyL6x6XsSHTZg9Y",
  github: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL6gAiOITlEQau6RMS1qeig9ttXp-Gnl3JWsWewB739y4rXnAc5bZcIXcZ3lFSPdvT-fi5cA61JALRnsQBuo2yVdBdqo_mAxIml7AvuC4LpCv7IZLCS8nbVpDczILIjJdi1MH2154KD3EW2WXu1ZoAYt2UjNlkA405nK5rCl0IvW5Q9JhKNmSVhK_CiIQ1fTFaW5qEdphamMDA_OMJTK9dCLLEU1mNroG4y6xt-gbNVj055i9WOkGWuaLiTEAT8-A6YMtengoDj-vj",
  figma: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrHYtkqAgqGfI3pgble07U8xl6wRPSf9RsrLpoJjMpO_x646WjeFWlmIsiThDmMNVRRyxI5L6XRKaolFjFF-1N0uHdgiEFMe69Y6q79vZDUMy5laIPQ3jatKaEdvXXpZul96WmO3n0eIEQtlplXsRddQdtMYuEYAOCDabF-5LxjxVrDi3yPS_pSAu1bXvtzYFNjfS5_wBlv4j46HGWvp2koYeBOKyiLxCcZPjRzupu0sG7mfXRl91wMyu-6eXxGC42BULUPOEyjtU0"
};

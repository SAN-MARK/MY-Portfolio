export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  badge: string;
  icon: string;
  stats: { label: string; value: string }[];
  tags: string[];
  link: string;
}

export const INNOVARA_ACHIEVEMENT: Achievement = {
  id: "innovara-2026-2nd-place",
  title: "INNOVARA'26 — 2nd Place",
  subtitle: "Startup Tech Pitch | Prince Shri Balaji Arts and Science College",
  description: "Won 2nd Place at the inter-collegiate Startup Tech Pitch. Competed against 3rd-year teams from multiple colleges with FindBack — a live full-stack lost & found network built in 4 days using Supabase, Gemini AI, and Next.js. Team: Trio Thunders (Sanjeev M, Babu K, Sheik Fareed Fahim).",
  date: "September 19, 2026",
  badge: "FEATURED RECOGNITION",
  icon: "🏆",
  stats: [
    { label: "Position", value: "2nd Place" },
    { label: "Category", value: "Startup Tech Pitch" },
    { label: "Team", value: "Trio Thunders" }
  ],
  tags: ["Startup Pitch", "Live MVP", "Supabase", "Gemini AI"],
  link: "https://findback-ai.run.app"
};

export const OTHER_ACHIEVEMENTS = [
  {
    id: "brain_code",
    number: "01",
    badge: "3RD PLACE",
    title: "Brain Code 2026 — Web Designing",
    host: "Prof. Dhanapalan College of Science & Management, Padur",
    description: "Secured 3rd position in the Web Designing tournament among inter-collegiate teams.",
    date: "21 January 2026",
    link: "https://drive.google.com/drive/folders/1EKwMpLZpJOSn6jwKefL8wYzjpnHLanHg?usp=drive_link"
  },
  {
    id: "coscian",
    number: "02",
    badge: "PARTICIPATION",
    title: "Technical Symposium — COSCIAN '26",
    host: "Department of Computer Science",
    description: "Active technical participant in competitive programming and web challenges.",
    date: "March 2026",
    link: "https://drive.google.com/drive/folders/1EKwMpLZpJOSn6jwKefL8wYzjpnHLanHg?usp=drive_link"
  },
  {
    id: "python_ml",
    number: "03",
    badge: "5-DAY WORKSHOP",
    title: "Code to Cognition: Python & ML",
    host: "PERI College x Approtech R&D Solutions",
    description: "Intensive hands-on workshop on Python programming and Machine Learning fundamentals.",
    date: "24–28 March 2026",
    link: "https://drive.google.com/drive/folders/1EKwMpLZpJOSn6jwKefL8wYzjpnHLanHg?usp=drive_link"
  }
];

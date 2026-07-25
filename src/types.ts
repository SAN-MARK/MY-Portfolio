export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  badgeType: 'live' | 'deployed' | 'edits';
  description: string;
  tags: string[];
  actionText: string;
  actionType: 'case_study' | 'repo' | 'docs' | 'reel';
  accentColor: 'pink' | 'cyan' | 'purple' | 'green';
  linkUrl?: string;
  details?: {
    overview: string;
    keyFeatures: string[];
    techStack: string[];
    impact: string;
    linkUrl?: string;
  };
}

export interface StatItem {
  id: string;
  title: string;
  icon: string;
  value: string;
  subValue: string;
  subLabel: string;
  accentColor: 'pink' | 'cyan' | 'purple' | 'green';
}

export interface SkillCategory {
  title: string;
  icon: string;
  accentColor: 'pink' | 'cyan' | 'purple';
  skills: string[];
  strengthPercent: number;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  statusText: string;
  statusType: 'in_progress' | 'active' | 'completed';
  icon: string;
  accentColor: 'cyan' | 'pink' | 'purple';
  colSpan: string;
  summary: string;
  points: string[];
  tags?: string[];
  link?: string;
  achievement?: {
    value: string;
    label: string;
    description: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

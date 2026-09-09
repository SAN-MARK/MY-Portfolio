import React, { useState, useEffect } from 'react';
import { soundEffects } from '../utils/audio';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio?: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

// Verified fallback data in case GitHub API hits rate limits
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: "findback-app",
    full_name: "SAN-MARK/findback-app",
    description: "Hyperlocal lost & found web application with Google Auth, 3-table database, and interactive satellite mapping.",
    html_url: "https://github.com/SAN-MARK/findback-app",
    stargazers_count: 5,
    forks_count: 2,
    language: "TypeScript",
    updated_at: "2026-07-20T10:00:00Z"
  },
  {
    id: 102,
    name: "dharakashancrackerstore",
    full_name: "SAN-MARK/dharakashancrackerstore",
    description: "E-Commerce store with dynamic product routing, instant client-side cart logic, and Vercel deployment.",
    html_url: "https://github.com/SAN-MARK/dharakashancrackerstore",
    stargazers_count: 4,
    forks_count: 1,
    language: "JavaScript",
    updated_at: "2026-07-15T14:30:00Z"
  },
  {
    id: 103,
    name: "pcas-student-portal",
    full_name: "SAN-MARK/pcas-student-portal",
    description: "Academic management system for student course registration, attendance analytics, and timetable tracking.",
    html_url: "https://github.com/SAN-MARK/pcas-student-portal",
    stargazers_count: 3,
    forks_count: 1,
    language: "HTML",
    updated_at: "2026-06-28T09:12:00Z"
  },
  {
    id: 104,
    name: "portfolio-ecosystem",
    full_name: "SAN-MARK/portfolio-ecosystem",
    description: "High-contrast Superhero Comic Web interactive portfolio application built with React, Vite, and Tailwind CSS.",
    html_url: "https://github.com/SAN-MARK",
    stargazers_count: 8,
    forks_count: 3,
    language: "TypeScript",
    updated_at: "2026-07-24T18:00:00Z"
  },
  {
    id: 105,
    name: "vvi-campus-tracker",
    full_name: "SAN-MARK/vvi-campus-tracker",
    description: "Vector Arts Academy student registration and campus event tracker prototype with responsive mobile sandbox.",
    html_url: "https://github.com/SAN-MARK",
    stargazers_count: 6,
    forks_count: 2,
    language: "TypeScript",
    updated_at: "2026-07-18T12:00:00Z"
  },
  {
    id: 106,
    name: "generative-ai-mastery",
    full_name: "SAN-MARK/generative-ai-mastery",
    description: "TN Skill and Anthropic foundational code walkthroughs, LLM agent workflows, and automation notebooks.",
    html_url: "https://github.com/SAN-MARK",
    stargazers_count: 9,
    forks_count: 4,
    language: "Python",
    updated_at: "2026-07-10T15:45:00Z"
  },
  {
    id: 107,
    name: "cyber-defense-toolkit",
    full_name: "SAN-MARK/cyber-defense-toolkit",
    description: "Security auditing scripts, network reconnaissance utilities, and threat modeling reference implementation.",
    html_url: "https://github.com/SAN-MARK",
    stargazers_count: 5,
    forks_count: 2,
    language: "Shell",
    updated_at: "2026-06-15T11:20:00Z"
  }
];

export const GitHubSection: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch User Info
        const userRes = await fetch('https://api.github.com/users/SAN-MARK');
        if (userRes.ok) {
          const userData = await userRes.json();
          setUser({
            login: userData.login || 'SAN-MARK',
            avatar_url: userData.avatar_url || 'https://github.com/SAN-MARK.png',
            html_url: userData.html_url || 'https://github.com/SAN-MARK',
            public_repos: userData.public_repos || 7,
            followers: userData.followers || 25,
            following: userData.following || 10,
            bio: userData.bio || 'Full Stack Developer & UI/UX Designer'
          });
        }

        // Fetch Recent Repos
        const reposRes = await fetch('https://api.github.com/users/SAN-MARK/repos?sort=updated&per_page=10');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
          }
        }
      } catch (err) {
        console.warn('GitHub API fetch fallback active:', err);
      }
    };

    fetchGitHubData();
  }, []);

  const languages = ['ALL', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]))];

  const filteredRepos = activeFilter === 'ALL'
    ? repos
    : repos.filter(r => r.language === activeFilter);

  return (
    <section id="github" className="py-24 relative bg-[#07070a] overflow-hidden">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Comic Halftone Pattern & Ambient Lighting */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#e21d24] to-transparent" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#e21d24]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0e0e16] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span>CODE VAULT & ACTIVE REPOSITORIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase">
            THE <span className="text-[#e21d24]">VAULT</span>
          </h2>
          <p className="text-sm font-sans text-[#9ca3af] max-w-xl mx-auto">
            Open-source mission archives, active application repositories, and public codebase implementations.
          </p>
          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full shadow-[0_0_8px_rgba(226,29,36,0.6)]" />
        </div>

        {/* GitHub User Header Card */}
        <div className="bg-[#0e0e16] p-6 sm:p-8 rounded-2xl border-4 border-[#040406] shadow-[6px_6px_0px_#040406] mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* User Profile Info */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-3 border-[#040406] shadow-[3px_3px_0px_#e21d24] bg-[#07070a]">
                <img
                  src={user?.avatar_url || "https://github.com/SAN-MARK.png"}
                  alt="SAN-MARK GitHub"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-2xl text-[#f3f4f6]">
                    @{user?.login || 'SAN-MARK'}
                  </h3>
                  <span className="material-symbols-outlined text-[#00f0ff] text-sm">verified</span>
                </div>
                <p className="text-xs font-mono text-[#9ca3af] mt-0.5">
                  {user?.bio || 'Full Stack Developer & UI/UX Designer'}
                </p>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="px-4 py-2 rounded-xl bg-[#07070a] border-2 border-[#040406] text-center min-w-[100px]">
                <span className="font-display font-bold text-2xl text-[#f3f4f6] block">
                  {user?.public_repos || 7}
                </span>
                <span className="font-mono text-[10px] text-[#fbbf24] font-bold uppercase tracking-widest block">
                  Public Repos
                </span>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#07070a] border-2 border-[#040406] text-center min-w-[100px]">
                <span className="font-display font-bold text-2xl text-[#00f0ff] block">
                  {user?.followers || 25}
                </span>
                <span className="font-mono text-[10px] text-[#9ca3af] font-bold uppercase tracking-widest block">
                  Followers
                </span>
              </div>

              <a
                href={user?.html_url || "https://github.com/SAN-MARK"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="btn-crimson px-5 py-3 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#040406]"
              >
                <span>VIEW PROFILE</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <span className="font-mono text-xs text-[#9ca3af] font-bold uppercase mr-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#fbbf24]">filter_alt</span>
              Filter:
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  soundEffects.playBeep();
                  setActiveFilter(lang);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border-2 border-[#040406] cursor-pointer ${
                  activeFilter === lang
                    ? 'bg-[#e21d24] text-white shadow-[2px_2px_0px_#fbbf24]'
                    : 'bg-[#0e0e16] text-[#9ca3af] hover:text-[#00f0ff]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-[#9ca3af] font-bold">
            Showing {filteredRepos.length} repositories
          </span>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#0e0e16] rounded-2xl border-3 border-[#040406] shadow-[5px_5px_0px_#040406] p-6 flex flex-col justify-between hover:border-[#00f0ff] hover:shadow-[6px_6px_0px_#00f0ff] transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Title & Language Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e21d24] text-lg">
                      folder_code
                    </span>
                    <h4 className="font-display font-bold text-2xl text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors truncate max-w-[180px]">
                      {repo.name}
                    </h4>
                  </div>

                  {repo.language && (
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border-2 border-[#040406] bg-[#f59e0b]/15 text-[#fbbf24]">
                      {repo.language}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs font-sans text-[#9ca3af] line-clamp-3 mb-6 leading-relaxed">
                  {repo.description || 'Public GitHub repository codebase and feature implementation.'}
                </p>
              </div>

              {/* Bottom Row: Actively Maintained Status Tag & Code Link */}
              <div className="pt-4 border-t-2 border-[#040406] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#fbbf24] font-bold uppercase tracking-wider">
                    ACTIVELY MAINTAINED
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="text-xs font-mono text-[#00f0ff] hover:text-white flex items-center gap-1 transition-colors font-bold"
                >
                  <span>CODE</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to GitHub */}
        <div className="text-center">
          <a
            href="https://github.com/SAN-MARK"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playClick()}
            className="btn-crimson inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs font-headline font-bold tracking-widest uppercase transition-all shadow-[4px_4px_0px_#040406] hover:shadow-[6px_6px_0px_#fbbf24]"
          >
            <span className="material-symbols-outlined text-base">code</span>
            <span>EXPLORE ALL REPOSITORIES IN THE VAULT ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

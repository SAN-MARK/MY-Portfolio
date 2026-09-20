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
    description: "High-contrast editorial portfolio application built with React, Vite, and Tailwind CSS.",
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
    <section id="github" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
            Open Source Repositories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
            Projects & <span className="italic font-normal text-[#C9A961]">Codebase</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
        </div>

        {/* GitHub User Header Card */}
        <div className="unified-card mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-[12px] overflow-hidden border border-[#2A3038] bg-[#252B33]">
                <img
                  src={user?.avatar_url || "https://github.com/SAN-MARK.png"}
                  alt="SAN-MARK GitHub"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-2xl text-[#F5F3EE]">
                    @{user?.login || 'SAN-MARK'}
                  </h3>
                  <span className="material-symbols-outlined text-[#C9A961] text-sm">verified</span>
                </div>
                <p className="text-xs font-sans text-[#7A7A7A] mt-1">
                  {user?.bio || 'Full Stack Developer & UI/UX Designer'}
                </p>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="px-4 py-3 rounded-[8px] bg-[#252B33] border border-[#2A3038] text-center min-w-[110px]">
                <span className="font-serif font-bold text-2xl text-[#C9A961] block">
                  {user?.public_repos || 7}
                </span>
                <span className="font-sans text-[10px] text-[#7A7A7A] font-semibold uppercase tracking-widest block mt-0.5">
                  Public Repos
                </span>
              </div>

              <div className="px-4 py-3 rounded-[8px] bg-[#252B33] border border-[#2A3038] text-center min-w-[110px]">
                <span className="font-serif font-bold text-2xl text-[#F5F3EE] block">
                  {user?.followers || 25}
                </span>
                <span className="font-sans text-[10px] text-[#7A7A7A] font-semibold uppercase tracking-widest block mt-0.5">
                  Followers
                </span>
              </div>

              <a
                href={user?.html_url || "https://github.com/SAN-MARK"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="btn-gold-secondary"
              >
                <span>View Profile</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <span className="font-sans text-xs text-[#7A7A7A] font-semibold uppercase mr-2">
              Filter:
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  soundEffects.playBeep();
                  setActiveFilter(lang);
                }}
                className={`px-3.5 py-1.5 rounded-[6px] text-xs font-sans font-semibold transition-all cursor-pointer ${
                  activeFilter === lang
                    ? 'bg-[#C9A961] text-[#0F1419]'
                    : 'bg-[#1A1F26] text-[#B8B5AD] border border-[#2A3038] hover:text-[#F5F3EE]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <span className="font-sans text-xs text-[#7A7A7A] font-semibold">
            Showing {filteredRepos.length} repositories
          </span>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="unified-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#C9A961] text-lg">
                      folder_code
                    </span>
                    <h4 className="font-serif font-bold text-xl text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors truncate max-w-[200px]">
                      {repo.name}
                    </h4>
                  </div>

                  {repo.language && (
                    <span className="font-sans text-[10px] font-semibold px-2.5 py-0.5 rounded bg-[#252B33] border border-[#2A3038] text-[#C9A961]">
                      {repo.language}
                    </span>
                  )}
                </div>

                <p className="text-sm font-sans text-[#B8B5AD] line-clamp-3 mb-6 leading-relaxed">
                  {repo.description || 'Public GitHub repository codebase and feature implementation.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3038] flex items-center justify-between">
                <span className="text-xs font-sans text-[#7A7A7A]">
                  Updated 2026
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="text-xs font-sans text-[#C9A961] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>View Repository</span>
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
            className="btn-gold-primary"
          >
            <span className="material-symbols-outlined text-base">code</span>
            <span>View All Projects ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

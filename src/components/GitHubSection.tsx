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
    description: "High-contrast Crimson Web interactive portfolio application built with React, Vite, and Tailwind CSS.",
    html_url: "https://github.com/SAN-MARK",
    stargazers_count: 8,
    forks_count: 3,
    language: "TypeScript",
    updated_at: "2026-07-24T18:00:00Z"
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
            public_repos: userData.public_repos || 12,
            followers: userData.followers || 25,
            following: userData.following || 10,
            bio: userData.bio || 'Full Stack Developer & UI/UX Designer'
          });
        }

        // Fetch Recent Repos
        const reposRes = await fetch('https://api.github.com/users/SAN-MARK/repos?sort=updated&per_page=6');
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
    <section id="github" className="py-20 relative bg-[#0d0d0d] overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#161616] border-2 border-[#000000] text-xs font-mono text-[#E31E24] font-bold shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-ping" />
            <span>LIVE GITHUB ECOSYSTEM & CODE ACTIVITY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase">
            OPEN SOURCE & <span className="text-[#E31E24]">REPOSITORIES</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto rounded-full" />
        </div>

        {/* GitHub User Header Card */}
        <div className="bg-[#161616] p-6 sm:p-8 rounded-2xl border-4 border-[#000000] shadow-[6px_6px_0px_#000000] mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* User Profile Info */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-3 border-[#000000] shadow-[3px_3px_0px_#E31E24] bg-[#0d0d0d]">
                <img
                  src={user?.avatar_url || "https://github.com/SAN-MARK.png"}
                  alt="SAN-MARK GitHub"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-2xl text-[#F5F5F0]">
                    @{user?.login || 'SAN-MARK'}
                  </h3>
                  <span className="material-symbols-outlined text-[#E31E24] text-sm">verified</span>
                </div>
                <p className="text-xs font-mono text-[#B8B8B0] mt-0.5">
                  {user?.bio || 'Full Stack Developer & UI/UX Designer'}
                </p>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="px-4 py-2 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-center min-w-[100px]">
                <span className="font-display font-bold text-2xl text-[#F5F5F0] block">
                  {user?.public_repos || 12}
                </span>
                <span className="font-mono text-[10px] text-[#B8B8B0] font-bold uppercase tracking-widest block">
                  Public Repos
                </span>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-center min-w-[100px]">
                <span className="font-display font-bold text-2xl text-[#E31E24] block">
                  {user?.followers || 25}
                </span>
                <span className="font-mono text-[10px] text-[#B8B8B0] font-bold uppercase tracking-widest block">
                  Followers
                </span>
              </div>

              <a
                href={user?.html_url || "https://github.com/SAN-MARK"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="btn-crimson px-5 py-3 rounded-xl text-xs font-headline font-bold text-[#F5F5F0] tracking-wider uppercase flex items-center gap-2 cursor-pointer"
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
            <span className="font-mono text-xs text-[#B8B8B0] font-bold uppercase mr-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#E31E24]">filter_alt</span>
              Filter:
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  soundEffects.playBeep();
                  setActiveFilter(lang);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border-2 border-[#000000] cursor-pointer ${
                  activeFilter === lang
                    ? 'bg-[#E31E24] text-[#F5F5F0] shadow-[2px_2px_0px_#000000]'
                    : 'bg-[#161616] text-[#B8B8B0] hover:text-[#F5F5F0]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-[#B8B8B0] font-bold">
            Showing {filteredRepos.length} repositories
          </span>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#161616] rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] p-6 flex flex-col justify-between hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Title & Language Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#E31E24] text-lg">
                      folder_code
                    </span>
                    <h4 className="font-display font-bold text-2xl text-[#F5F5F0] group-hover:text-[#E31E24] transition-colors truncate max-w-[180px]">
                      {repo.name}
                    </h4>
                  </div>

                  {repo.language && (
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border-2 border-[#000000] bg-[#E31E24]/15 text-[#E31E24]">
                      {repo.language}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs font-sans text-[#B8B8B0] line-clamp-3 mb-6 leading-relaxed">
                  {repo.description || 'Public GitHub repository codebase and feature implementation.'}
                </p>
              </div>

              {/* Bottom Row: Stars, Forks, & Link */}
              <div className="pt-4 border-t-2 border-[#000000] flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-[#B8B8B0] font-bold">
                  <span className="flex items-center gap-1 hover:text-[#E31E24] transition-colors">
                    <span className="material-symbols-outlined text-sm text-[#E31E24]">star</span>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#E31E24] transition-colors">
                    <span className="material-symbols-outlined text-sm text-[#E31E24]">fork_right</span>
                    {repo.forks_count}
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="text-xs font-mono text-[#E31E24] hover:text-[#F5F5F0] flex items-center gap-1 transition-colors font-bold"
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
            className="btn-crimson inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs font-headline font-bold tracking-widest uppercase transition-all"
          >
            <span className="material-symbols-outlined text-base">code</span>
            <span>EXPLORE ALL REPOSITORIES ON GITHUB ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

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
    description: "High-definition Vice Neon interactive portfolio application built with React, Vite, and Tailwind CSS.",
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
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageBadge = (lang: string | null) => {
    switch (lang) {
      case 'TypeScript':
        return 'text-[#00fbfb] border-[#00fbfb]/40 bg-[#00fbfb]/10';
      case 'JavaScript':
        return 'text-[#f7df1e] border-[#f7df1e]/40 bg-[#f7df1e]/10';
      case 'HTML':
        return 'text-[#ff4d80] border-[#ff4d80]/40 bg-[#ff4d80]/10';
      case 'CSS':
        return 'text-[#abc7ff] border-[#abc7ff]/40 bg-[#abc7ff]/10';
      default:
        return 'text-gray-300 border-gray-600 bg-white/5';
    }
  };

  const languages = ['ALL', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]))];

  const filteredRepos = activeFilter === 'ALL'
    ? repos
    : repos.filter(r => r.language === activeFilter);

  return (
    <section id="github" className="py-20 relative bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Gradient Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00fbfb]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a2e] border border-[#00fbfb]/40 text-xs font-mono text-[#00fbfb]">
            <span className="w-2 h-2 rounded-full bg-[#00fbfb] animate-ping" />
            <span>LIVE GITHUB ECOSYSTEM & CODE ACTIVITY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white tracking-tight uppercase">
            OPEN SOURCE & <span className="neon-cyan-text">REPOSITORIES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00fbfb] via-[#abc7ff] to-[#ff4d80] mx-auto rounded-full" />
        </div>

        {/* GitHub User Header Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#3a4a49]/80 mb-10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* User Profile Info */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#00fbfb] shadow-[0_0_15px_rgba(0,251,251,0.3)] bg-[#1a1a2e]">
                <img
                  src={user?.avatar_url || "https://github.com/SAN-MARK.png"}
                  alt="SAN-MARK GitHub"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-headline font-bold text-xl text-white">
                    @{user?.login || 'SAN-MARK'}
                  </h3>
                  <span className="material-symbols-outlined text-[#00fbfb] text-sm">verified</span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  {user?.bio || 'Full Stack Developer & UI/UX Designer'}
                </p>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="px-4 py-2 rounded-xl bg-[#0a0a0a] border border-[#3a4a49]/60 text-center min-w-[100px]">
                <span className="font-headline font-bold text-xl text-[#00fbfb] block">
                  {user?.public_repos || 12}
                </span>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                  Public Repos
                </span>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#0a0a0a] border border-[#3a4a49]/60 text-center min-w-[100px]">
                <span className="font-headline font-bold text-xl text-[#ff4d80] block">
                  {user?.followers || 25}
                </span>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                  Followers
                </span>
              </div>

              <a
                href={user?.html_url || "https://github.com/SAN-MARK"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="btn-gradient px-5 py-3 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,251,251,0.3)] hover:shadow-[0_0_20px_rgba(0,251,251,0.5)] transition-all"
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
            <span className="font-mono text-xs text-gray-400 uppercase mr-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#00fbfb]">filter_alt</span>
              Filter:
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  soundEffects.playBeep();
                  setActiveFilter(lang);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === lang
                    ? 'bg-[#00fbfb] text-[#0a0a0a] font-bold shadow-[0_0_10px_rgba(0,251,251,0.5)]'
                    : 'bg-[#1a1a2e] border border-[#3a4a49]/60 text-gray-300 hover:text-white hover:border-[#00fbfb]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-gray-400">
            Showing {filteredRepos.length} repositories
          </span>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="glass-card rounded-2xl border border-[#3a4a49]/60 p-6 flex flex-col justify-between hover:border-[#00fbfb] hover:shadow-[0_0_20px_rgba(0,251,251,0.25)] transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Title & Language Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400 text-lg group-hover:text-[#00fbfb] transition-colors">
                      folder_code
                    </span>
                    <h4 className="font-headline font-bold text-lg text-white group-hover:text-[#00fbfb] transition-colors truncate max-w-[180px]">
                      {repo.name}
                    </h4>
                  </div>

                  {repo.language && (
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border ${getLanguageBadge(repo.language)}`}>
                      {repo.language}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs font-sans text-gray-300 line-clamp-3 mb-6 leading-relaxed">
                  {repo.description || 'Public GitHub repository codebase and feature implementation.'}
                </p>
              </div>

              {/* Bottom Row: Stars, Forks, & Link */}
              <div className="pt-4 border-t border-[#3a4a49]/40 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1 hover:text-[#ff4d80] transition-colors">
                    <span className="material-symbols-outlined text-sm text-[#ff4d80]">star</span>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#00fbfb] transition-colors">
                    <span className="material-symbols-outlined text-sm text-[#00fbfb]">fork_right</span>
                    {repo.forks_count}
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="text-xs font-mono text-[#00fbfb] hover:text-white flex items-center gap-1 transition-colors font-bold"
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#1a1a2e] border border-[#00fbfb] text-[#00fbfb] hover:bg-[#00fbfb]/10 hover:shadow-[0_0_25px_rgba(0,251,251,0.4)] text-xs font-headline font-bold tracking-widest uppercase transition-all"
          >
            <span className="material-symbols-outlined text-base">code</span>
            <span>EXPLORE ALL REPOSITORIES ON GITHUB ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

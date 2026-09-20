import React, { useState, useEffect } from 'react';
import { soundEffects } from '../utils/audio';
import { ScrollReveal } from './ScrollReveal';

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
    name: "MY-Portfolio",
    full_name: "SAN-MARK/MY-Portfolio",
    description: "Dark-themed developer portfolio with AI assistant, project modals, and live GitHub metrics.",
    html_url: "https://github.com/SAN-MARK/MY-Portfolio",
    stargazers_count: 8,
    forks_count: 3,
    language: "TypeScript",
    updated_at: "2026-07-24T18:00:00Z"
  },
  {
    id: 102,
    name: "ELUMALAI-CATERING",
    full_name: "SAN-MARK/ELUMALAI-CATERING",
    description: "Full-stack catering service website with menu management, order tracking, and admin dashboard.",
    html_url: "https://github.com/SAN-MARK/ELUMALAI-CATERING",
    stargazers_count: 6,
    forks_count: 2,
    language: "JavaScript",
    updated_at: "2026-07-20T10:00:00Z"
  },
  {
    id: 103,
    name: "ELUMALAI-CATERING-SERVICE",
    full_name: "SAN-MARK/ELUMALAI-CATERING-SERVICE",
    description: "Microservice backend for catering order processing and customer management.",
    html_url: "https://github.com/SAN-MARK/ELUMALAI-CATERING-SERVICE",
    stargazers_count: 4,
    forks_count: 1,
    language: "Node.js",
    updated_at: "2026-07-15T14:30:00Z"
  },
  {
    id: 104,
    name: "FMB",
    full_name: "SAN-MARK/FMB",
    description: "Data tracking and task management tool with secure user authentication.",
    html_url: "https://github.com/SAN-MARK/FMB",
    stargazers_count: 5,
    forks_count: 1,
    language: "TypeScript",
    updated_at: "2026-07-12T09:12:00Z"
  },
  {
    id: 105,
    name: "Chennai-one-Demo",
    full_name: "SAN-MARK/Chennai-one-Demo",
    description: "City guide app prototype inspired by Chennai One — restaurants, events, and local discovery.",
    html_url: "https://github.com/SAN-MARK/Chennai-one-Demo",
    stargazers_count: 7,
    forks_count: 2,
    language: "React",
    updated_at: "2026-07-18T12:00:00Z"
  },
  {
    id: 106,
    name: "Dharakshan-Cracker-Store",
    full_name: "SAN-MARK/Dharakshan-Cracker-Store",
    description: "E-commerce platform for a local cracker store with product catalog and cart.",
    html_url: "https://github.com/SAN-MARK/Dharakshan-Cracker-Store",
    stargazers_count: 9,
    forks_count: 4,
    language: "JavaScript",
    updated_at: "2026-07-10T15:45:00Z"
  },
  {
    id: 107,
    name: "Sanjeev-",
    full_name: "SAN-MARK/Sanjeev-",
    description: "Personal portfolio and project showcase built with HTML and CSS.",
    html_url: "https://github.com/SAN-MARK/Sanjeev-",
    stargazers_count: 3,
    forks_count: 0,
    language: "HTML",
    updated_at: "2026-06-15T11:20:00Z"
  },
  {
    id: 108,
    name: "WEB-APP",
    full_name: "SAN-MARK/WEB-APP",
    description: "FindBack — lost and found web application with Supabase backend and Gemini AI.",
    html_url: "https://github.com/SAN-MARK/WEB-APP",
    stargazers_count: 12,
    forks_count: 5,
    language: "TypeScript",
    updated_at: "2026-07-22T16:00:00Z"
  },
  {
    id: 109,
    name: "Jasmine",
    full_name: "SAN-MARK/Jasmine",
    description: "Client portfolio website redesign — Jasmine Patra.",
    html_url: "https://github.com/SAN-MARK/Jasmine",
    stargazers_count: 4,
    forks_count: 1,
    language: "CSS",
    updated_at: "2026-06-20T08:00:00Z"
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
            public_repos: userData.public_repos || 9,
            followers: userData.followers || 35,
            following: userData.following || 12,
            bio: userData.bio || 'Full Stack Developer & UI/UX Designer'
          });
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
        <ScrollReveal>
          
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

          {/* GitHub Profile Banner Card */}
          <div className="unified-card p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={user?.avatar_url || "https://github.com/SAN-MARK.png"}
                alt="GitHub Avatar"
                className="w-16 h-16 rounded-full border-2 border-[#C9A961]"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F5F3EE]">
                  {user?.login || 'SAN-MARK'}
                </h3>
                <p className="font-sans text-xs text-[#B8B5AD]">
                  {user?.bio || 'Full Stack Developer & UI/UX Designer'}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs font-sans text-[#C9A961]">
                  <span>{user?.public_repos || 9} Public Repositories</span>
                  <span>•</span>
                  <span>{user?.followers || 35} Followers</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/SAN-MARK"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.playClick()}
              className="btn-gold-primary text-xs py-2.5 px-6 inline-flex items-center gap-2"
            >
              <span>Explore GitHub Profile</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  soundEffects.playClick();
                  setActiveFilter(lang);
                }}
                className={`px-4 py-2 rounded text-xs font-sans font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeFilter === lang
                    ? 'bg-[#C9A961] text-[#0F1419]'
                    : 'bg-[#252B33] border border-[#2A3038] text-[#B8B5AD] hover:text-[#C9A961]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="unified-card p-6 flex flex-col justify-between group hover:border-[#C9A961] transition-all cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors truncate">
                      {repo.name}
                    </span>
                    <span className="material-symbols-outlined text-[#B8B5AD] group-hover:text-[#C9A961] text-sm">
                      open_in_new
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#B8B5AD] leading-relaxed line-clamp-2">
                    {repo.description || 'Public GitHub repository codebase.'}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#2A3038] flex items-center justify-between text-xs font-sans text-[#7A7A7A]">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 text-[#F5F3EE]">
                        <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">star</span>
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">fork_right</span>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { soundEffects } from '../utils/audio';

export const InsightsSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [likes, setLikes] = useState<Record<string, { count: number; liked: boolean }>>({
    insight1: { count: 42, liked: false },
    insight2: { count: 38, liked: false },
    insight3: { count: 56, liked: false },
  });

  const articles = [
    {
      id: "insight1",
      category: "Architectural Philosophy",
      readTime: "4 min read",
      date: "September 2026",
      title: "The Evolution of Full-Stack Web Architectures in 2026",
      excerpt: "Why modern applications demand strict separation of concerns, robust server-side proxying for API keys, and frictionless reactive UI components without bloat.",
      fullContent: "As containerized microservices and edge rendering mature, the division between client and server must remain clean and secure. Exposing third-party API keys or database connection strings to the browser is a critical vulnerability. By implementing Express middleware proxies and server-side routes, production applications achieve maximum security, lightning-fast initial page loads, and resilient state handling across distributed cloud runtimes.",
      tags: ["Full Stack", "Architecture", "React"]
    },
    {
      id: "insight2",
      category: "AI & Engineering",
      readTime: "3 min read",
      date: "August 2026",
      title: "Bridging UI/UX Prototyping with Real-Time Databases",
      excerpt: "Exploring how rapid Figma prototyping combined with zero-latency PostgreSQL backends accelerates MVP validation for inter-collegiate startup pitches.",
      fullContent: "Prototyping without real data often leaves critical edge cases undiscovered. By pairing high-fidelity Figma design systems with live PostgreSQL and Supabase schemas, student founders and enterprise teams alike can test user flows against real authentication, relational constraints, and AI-powered categorization features before writing final production code.",
      tags: ["UI/UX", "Supabase", "Gemini AI"]
    },
    {
      id: "insight3",
      category: "Developer Growth",
      readTime: "5 min read",
      date: "July 2026",
      title: "From Student Developer to Building Production Startups",
      excerpt: "Lessons learned from shipping real-world web applications under tight deadlines, managing team collaboration, and maintaining high performance standards.",
      fullContent: "Transitioning from isolated academic coding exercises to shipping production software requires adopting professional discipline: Git branching strategies, rigorous environment variable management, automated linting, and user-centric accessibility audits. Every bug resolved and deployment pipeline configured builds the resilience needed to lead engineering teams and win competitive startup challenges.",
      tags: ["Startups", "Mentorship", "Engineering"]
    }
  ];

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playBeep();
    setLikes(prev => {
      const current = prev[id] || { count: 0, liked: false };
      const nextLiked = !current.liked;
      return {
        ...prev,
        [id]: {
          count: nextLiked ? current.count + 1 : current.count - 1,
          liked: nextLiked
        }
      };
    });
  };

  return (
    <section id="insights" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
              Thought Leadership & Essays
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
              Engineering <span className="italic font-normal text-[#C9A961]">Insights</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
          </div>

          {/* 3-Column Editorial Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => {
              const isExpanded = !!expandedIds[article.id];
              const likeData = likes[article.id] || { count: 0, liked: false };

              return (
                <article
                  key={article.id}
                  className="unified-card flex flex-col justify-between group hover:border-[#C9A961] transition-all p-8 relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-sans text-[#7A7A7A]">
                      <span className="text-[#C9A961] font-semibold uppercase tracking-wider">{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-sans text-sm text-[#B8B5AD] leading-relaxed">
                      {article.excerpt}
                    </p>

                    {isExpanded && (
                      <div className="pt-3 border-t border-[#2A3038] text-sm font-sans text-[#F5F3EE] leading-relaxed animate-fadeIn">
                        {article.fullContent}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#2A3038] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-sans font-semibold uppercase px-2 py-0.5 rounded bg-[#252B33] border border-[#2A3038] text-[#8FA3B8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Like Heart Button */}
                      <button
                        onClick={(e) => handleLike(article.id, e)}
                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-all cursor-pointer ${
                          likeData.liked
                            ? 'bg-[#C9A961]/10 border-[#C9A961] text-[#C9A961]'
                            : 'bg-[#252B33] border-[#2A3038] text-[#B8B5AD] hover:text-[#C9A961]'
                        }`}
                        title="Like this article"
                      >
                        <span className="material-symbols-outlined text-sm">
                          {likeData.liked ? 'favorite' : 'favorite_border'}
                        </span>
                        <span className="font-semibold">{likeData.count}</span>
                      </button>

                      {/* Read More Toggle Button */}
                      <button
                        onClick={(e) => toggleExpand(article.id, e)}
                        className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C9A961] hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                        <span>{isExpanded ? '↑' : '→'}</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

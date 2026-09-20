import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';
import { ScrollReveal } from './ScrollReveal';

export const LinkedInSection: React.FC = () => {
  const linkedinUrl = PROFILE_DATA.linkedinUrl || 'https://www.linkedin.com/in/sanjeeveditor2008/';

  const recentPosts = [
    {
      id: "post1",
      date: "September 19, 2026",
      category: "Hackathon Victory",
      title: "Won 2nd Place at INNOVARA'26 Startup Tech Pitch with FindBack!",
      excerpt: "Thrilled to share that our team Trio Thunders secured 2nd place among competing colleges. Built a live full-stack lost & found network with Supabase & Gemini AI in 4 days...",
      metrics: "342 Reactions • 48 Comments"
    },
    {
      id: "post2",
      date: "September 10, 2026",
      category: "Full-Stack Architecture",
      title: "Building Real-Time Maps & Auth in React & TypeScript",
      excerpt: "Deep dive into state synchronization and role-based access control when building production web applications for local municipalities...",
      metrics: "518 Reactions • 62 Comments"
    },
    {
      id: "post3",
      date: "August 28, 2026",
      category: "Student Milestone",
      title: "From Borrowed Laptop in 2013 to Full-Stack AI Developer",
      excerpt: "A reflection on how government tech schemes and relentless self-teaching transformed my journey into computer applications and software engineering...",
      metrics: "1.2K Reactions • 154 Comments"
    }
  ];

  return (
    <section id="linkedin" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          
          {/* Section Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
                Professional Activity & Feed
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F3EE] tracking-tight">
                LinkedIn <span className="italic font-normal text-[#C9A961]">Dispatch Stream</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#C9A961] mt-3" />
            </div>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.playClick()}
              className="btn-gold-secondary text-xs py-2.5 px-6 inline-flex items-center gap-2"
            >
              <span>Visit LinkedIn Profile</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          {/* Top Social Proof Banner Card */}
          <div className="unified-card p-6 sm:p-10 mb-8 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Stat Badge & Social Proof */}
              <div className="lg:col-span-4 flex flex-col items-start space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#252B33] border border-[#2A3038] text-xs font-sans text-[#C9A961] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                  <span>Network Reach // 5,000+</span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif font-bold text-5xl sm:text-6xl text-[#F5F3EE] tracking-tight">
                      5,000+
                    </span>
                    <span className="font-sans text-xs text-[#C9A961] font-semibold uppercase tracking-widest bg-[#252B33] px-2.5 py-1 rounded-[6px] border border-[#2A3038]">
                      Active
                    </span>
                  </div>
                  <span className="font-sans font-semibold text-sm sm:text-base text-[#B8B5AD] uppercase tracking-wider block mt-1">
                    Active Professional Followers & Connections
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 font-sans text-xs">
                  <span className="px-3 py-1 rounded-[6px] bg-[#252B33] border border-[#2A3038] text-[#C9A961] font-semibold">
                    ★ Top Student Voice
                  </span>
                  <span className="px-3 py-1 rounded-[6px] bg-[#252B33] border border-[#2A3038] text-[#8FA3B8] font-semibold">
                    ⚡ Full Stack Architect
                  </span>
                </div>
              </div>

              {/* Middle Column: Narrative Line */}
              <div className="lg:col-span-5 space-y-3 lg:border-l lg:border-[#2A3038] lg:pl-8">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#F5F3EE]">
                  Building in <span className="text-[#C9A961]">Public</span>
                </h3>

                <p className="text-sm font-sans text-[#F5F3EE] leading-relaxed font-medium">
                  &ldquo;Sharing engineering milestones, hackathon journeys, and tutorials on full-stack web development.&rdquo;
                </p>

                <p className="text-xs font-sans text-[#B8B5AD] leading-relaxed">
                  Connect with me to stay updated on live product launches, open-source repositories, and mentorship discussions for aspiring technologists.
                </p>
              </div>

              {/* Right Column: CTA Button */}
              <div className="lg:col-span-3 flex flex-col items-center justify-center gap-3">
                <a
                  id="linkedin_connect_cta_btn"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-gold-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                  </svg>
                  <span>Connect Now</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>

                <div className="text-[11px] font-sans text-[#7A7A7A] font-semibold text-center space-y-0.5">
                  <p>5,000+ Developers & Recruiters Connected</p>
                  <p className="text-[#C9A961]">Recruiter Searches: 41+ per week</p>
                </div>
              </div>

            </div>
          </div>

          {/* Professional Feed / Activity Summary 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="unified-card flex flex-col justify-between group hover:border-[#C9A961] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="text-[#C9A961] font-semibold uppercase tracking-wider">{post.category}</span>
                    <span className="text-[#7A7A7A]">{post.date}</span>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors leading-snug">
                    {post.title}
                  </h4>

                  <p className="font-sans text-xs text-[#B8B5AD] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2A3038] flex items-center justify-between text-[11px] font-sans text-[#7A7A7A]">
                  <span className="font-medium text-[#B8B5AD]">{post.metrics}</span>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A961] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Post</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

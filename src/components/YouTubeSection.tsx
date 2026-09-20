import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';
import { ScrollReveal } from './ScrollReveal';

export const YouTubeSection: React.FC = () => {
  const youtubeUrl = PROFILE_DATA.youtubeUrl || 'https://youtube.com/@unknownbcaguy?si=E3NTMf5Yutw_3yvh';
  const tags = ['#UnknownBcaGuy', '#GenAI', '#TamilNadu', '#BCAStudent'];

  const handleOpenChannel = () => {
    soundEffects.playClick();
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="youtube" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
              Educational Media & Outreach
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
              Unknown BCA Guy <span className="italic font-normal text-[#C9A961]">YouTube Channel</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
            <p className="text-base font-sans text-[#B8B5AD] max-w-2xl mt-4 leading-relaxed">
              Demystifying Generative AI & tech skills in plain language — no jargon, no gatekeeping. Recently won 2nd Place at INNOVARA'26 Startup Tech Pitch with FindBack — a live lost & found network built in 4 days. Sharing the entire journey on YouTube.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Story & Channel Identity Card */}
            <div
              id="youtube_channel_main_card"
              onClick={handleOpenChannel}
              className="lg:col-span-7 unified-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#2A3038] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[8px] bg-[#C9A961] text-[#0F1419] flex items-center justify-center shrink-0 font-bold">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-2xl text-[#F5F3EE]">
                        Unknown BCA Guy
                      </h3>
                      <span className="font-sans text-xs text-[#7A7A7A] block">
                        @unknownbcaguy • 2nd Year BCA Student
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-[6px] bg-[#252B33] border border-[#2A3038] font-sans text-xs text-[#C9A961] font-semibold uppercase tracking-wider">
                    YouTube Broadcast
                  </span>
                </div>

                <div className="space-y-4 text-sm font-sans text-[#B8B5AD] leading-relaxed">
                  <p className="border-l-2 border-[#C9A961] pl-3 py-0.5 text-[#F5F3EE]">
                    I&apos;m a second-year BCA student from Tamil Nadu, and this channel exists because most people learning Generative AI and tech skills don&apos;t need another expensive course — they need someone who just went through the struggle themselves.
                  </p>

                  <p>
                    In 2013, I didn&apos;t own a laptop — I learned by watching my cousin use one, made possible through a Tamil Nadu Government scheme. In December 2025, I got my own laptop for the first time. A few months later, I completed all three TN Skill Generative AI courses in just two days, and started teaching over 25 of my classmates.
                  </p>

                  <p>
                    Recently won 2nd Place at INNOVARA'26 Startup Tech Pitch with FindBack — a live lost & found network built in 4 days. Sharing the entire journey and tutorials on YouTube.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2A3038] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-[6px] bg-[#252B33] border border-[#2A3038] text-xs font-sans text-[#C9A961]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#C9A961]">
                  <span>Visit Channel</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Right Column: Video Broadcast Card & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="unified-card p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans text-[#C9A961] font-semibold uppercase tracking-widest mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
                    Featured Broadcast
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#F5F3EE] mb-3">
                    Building FindBack in 4 Days for INNOVARA'26
                  </h4>
                  <p className="font-sans text-xs text-[#B8B5AD] leading-relaxed">
                    Behind-the-scenes engineering breakdown of how we built a live full-stack lost & found network using Supabase, Gemini AI, and React.
                  </p>
                </div>

                <button
                  onClick={handleOpenChannel}
                  className="btn-gold-primary w-full mt-6 text-center flex items-center justify-center gap-2 text-xs"
                >
                  <span className="material-symbols-outlined text-base">play_arrow</span>
                  <span>Watch on YouTube</span>
                </button>
              </div>

              <div className="unified-card p-6 sm:p-8 flex flex-col justify-center text-center">
                <span className="font-serif text-3xl font-bold text-[#C9A961]">250K+</span>
                <span className="font-sans text-xs text-[#B8B5AD] uppercase tracking-wider mt-1">Cumulative Content Impressions</span>
              </div>
            </div>

          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

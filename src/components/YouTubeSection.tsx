import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

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
            Demystifying Generative AI & tech skills in plain language — no jargon, no gatekeeping.
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
                  This channel is a space to share what I learned in plain language, for students starting from zero, just like I did.
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
            <div className="unified-card p-5 flex-1 flex flex-col justify-between">
              <div>
                <div
                  style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}
                  className="rounded-[8px] overflow-hidden border border-[#2A3038] mb-4 bg-black"
                >
                  <iframe
                    src="https://www.youtube.com/embed/DeBerQylzaw?rel=0"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
                    allowFullScreen
                    scrolling="no"
                    allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                    referrerPolicy="strict-origin"
                    title="Unknown BCA Guy - Featured Broadcast"
                  />
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-xs text-[#C9A961] font-semibold uppercase tracking-wider block">
                    Featured Masterclass
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#F5F3EE] leading-snug">
                    Generative AI & Tech Skills for Everyone: From Zero Laptop to Certified
                  </h4>
                  <p className="text-xs font-sans text-[#B8B5AD] leading-relaxed">
                    Watch practical walkthroughs, TN Skill certification guides, and real student project tutorials by Sanjeev M.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-[#2A3038] text-center font-sans">
                <div className="p-2 rounded-[6px] bg-[#252B33] border border-[#2A3038]">
                  <span className="block text-[#F5F3EE] font-bold text-xs">25+</span>
                  <span className="text-[10px] text-[#7A7A7A] uppercase">Mentored</span>
                </div>
                <div className="p-2 rounded-[6px] bg-[#252B33] border border-[#2A3038]">
                  <span className="block text-[#C9A961] font-bold text-xs">3/3</span>
                  <span className="text-[10px] text-[#7A7A7A] uppercase">TN Certs</span>
                </div>
                <div className="p-2 rounded-[6px] bg-[#252B33] border border-[#2A3038]">
                  <span className="block text-[#F5F3EE] font-bold text-xs">100%</span>
                  <span className="text-[10px] text-[#7A7A7A] uppercase">Free</span>
                </div>
              </div>
            </div>

            <a
              id="youtube_subscribe_cta_btn"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.playClick()}
              className="btn-gold-primary w-full text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Subscribe on YouTube</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

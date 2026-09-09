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
    <section id="youtube" className="py-24 relative bg-[#07070a] overflow-hidden">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Comic Halftone Pattern & Ambient Lighting */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#e21d24]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#e21d24] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0e0e16] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#e21d24] animate-pulse"></span>
            <span>BROADCAST FREQUENCY & TEACHING MISSION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase">
            COMMS: <span className="text-[#e21d24]">TEACHING WHAT I LEARNED</span>
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#9ca3af] font-bold uppercase tracking-widest max-w-xl mx-auto">
            Demystifying Generative AI & tech skills in plain language — no jargon, no gatekeeping.
          </p>
          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full shadow-[0_0_8px_rgba(226,29,36,0.6)]" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Verbatim Story & Channel Identity Card */}
          <div
            id="youtube_channel_main_card"
            onClick={handleOpenChannel}
            className="lg:col-span-7 bg-[#0e0e16] rounded-2xl border-3 border-[#040406] shadow-[5px_5px_0px_#040406] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#00f0ff] hover:shadow-[6px_6px_0px_#00f0ff] group cursor-pointer relative"
          >
            {/* Top Bar: Channel Branding Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b-2 border-[#040406] mb-6">
                <div className="flex items-center gap-3">
                  {/* YouTube Red Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#e21d24] border-2 border-[#040406] shadow-[2px_2px_0px_#fbbf24] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-7 h-7 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f3f4f6] tracking-wide group-hover:text-[#00f0ff] transition-colors">
                        Unknown BCA Guy
                      </h3>
                      <span className="material-symbols-outlined text-sm text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">
                        open_in_new
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#9ca3af] font-bold block">
                      @unknownbcaguy • 2nd Year BCA Student
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-md bg-[#07070a] border-2 border-[#040406] font-mono text-[11px] text-[#fbbf24] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[1px_1px_0px_#040406]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e21d24] animate-ping" />
                  YOUTUBE COMMS
                </span>
              </div>

              {/* Verbatim About Text (Formatted in 3 short paragraphs) */}
              <div className="space-y-4 text-xs sm:text-sm font-sans text-[#9ca3af] leading-relaxed">
                <p className="border-l-2 border-[#e21d24] pl-3 py-0.5 text-[#f3f4f6]">
                  I'm a second-year BCA student from Tamil Nadu, and this channel exists because of a simple realization: most people learning Generative AI and tech skills don't need another expensive course — they need someone who just went through the struggle themselves.
                </p>

                <p>
                  In 2013, I didn't own a laptop — I learned by watching my cousin use one, made possible through a Tamil Nadu Government scheme. In December 2025, I got my own laptop for the first time. A few months later, I completed all three TN Skill Generative AI courses in just two days, and started teaching over 25 of my classmates — many of whom, like me back then, had no laptop and no technical background.
                </p>

                <p>
                  This channel is the next step: a space to share what I learned, in plain language, without jargon or gatekeeping — for students who are starting from zero, just like I did.
                </p>
              </div>
            </div>

            {/* Bottom Row: Tag Pills & Action Indicator */}
            <div className="pt-6 mt-6 border-t-2 border-[#040406] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#07070a] border border-[#040406] text-[11px] font-mono font-bold text-[#fbbf24] hover:border-[#00f0ff] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Clickable Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors">
                <span>VISIT CHANNEL</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Video Broadcast Card & Subscribe CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Video Broadcast Card */}
            <div
              id="youtube_video_thumbnail_card"
              className="bg-[#0e0e16] rounded-2xl border-3 border-[#040406] shadow-[5px_5px_0px_#040406] p-5 flex-1 flex flex-col justify-between transition-all duration-300 hover:border-[#e21d24] group"
            >
              <div>
                {/* Embedded YouTube Video Player */}
                <div
                  style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}
                  className="rounded-xl overflow-hidden border-2 border-[#040406] shadow-[3px_3px_0px_#040406] mb-4 bg-black"
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

                {/* Video Card Meta */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e21d24]" />
                    <span className="font-mono text-[11px] text-[#fbbf24] font-bold uppercase tracking-wider">
                      FEATURED PLAYLIST / MASTERCLASS
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-lg sm:text-xl text-[#f3f4f6] group-hover:text-[#e21d24] transition-colors leading-snug">
                    Generative AI & Tech Skills for Everyone: From Zero Laptop to Certified
                  </h4>
                  <p className="text-xs font-sans text-[#9ca3af] leading-relaxed">
                    Watch practical walkthroughs, TN Skill certification guides, and real student project tutorials by Sanjeev M.
                  </p>
                </div>
              </div>

              {/* Interactive Key Pillars */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t-2 border-[#040406] text-center font-mono">
                <div className="p-2 rounded-lg bg-[#07070a] border border-[#040406]">
                  <span className="block text-[#f3f4f6] font-bold text-xs">25+</span>
                  <span className="text-[9px] text-[#9ca3af] uppercase">Students Mentored</span>
                </div>
                <div className="p-2 rounded-lg bg-[#07070a] border border-[#040406]">
                  <span className="block text-[#fbbf24] font-bold text-xs">3/3</span>
                  <span className="text-[9px] text-[#9ca3af] uppercase">TN Skill Certs</span>
                </div>
                <div className="p-2 rounded-lg bg-[#07070a] border border-[#040406]">
                  <span className="block text-[#00f0ff] font-bold text-xs">100%</span>
                  <span className="text-[9px] text-[#9ca3af] uppercase">Free Learning</span>
                </div>
              </div>
            </div>

            {/* Prominent "Subscribe on YouTube" CTA Button */}
            <a
              id="youtube_subscribe_cta_btn"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.playClick()}
              className="btn-crimson w-full py-4 rounded-xl text-xs sm:text-sm font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-[4px_4px_0px_#040406] hover:shadow-[6px_6px_0px_#fbbf24] transition-all"
            >
              {/* YouTube Play Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>SUBSCRIBE ON YOUTUBE</span>
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

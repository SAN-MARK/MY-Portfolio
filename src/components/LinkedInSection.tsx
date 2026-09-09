import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const LinkedInSection: React.FC = () => {
  const linkedinUrl = PROFILE_DATA.linkedinUrl || 'https://www.linkedin.com/in/sanjeeveditor2008/';

  return (
    <section id="linkedin" className="py-12 relative bg-[#07070a] overflow-hidden">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Halftone Pattern Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Social Proof Strip Card */}
        <div className="comic-card rounded-2xl border-4 border-[#040406] shadow-[6px_6px_0px_#040406] p-6 sm:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_#00f0ff]">
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Stat Badge & Social Proof */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-4">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07070a] border-2 border-[#040406] text-xs font-mono text-[#00f0ff] font-bold shadow-[2px_2px_0px_#040406]">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                <span>ALLIED COALITION // LINKEDIN</span>
              </div>

              {/* Bold Stat: 4,800+ Followers */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl sm:text-6xl text-[#f3f4f6] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    4,800+
                  </span>
                  <span className="font-mono text-xs text-[#fbbf24] font-bold uppercase tracking-widest bg-[#07070a] px-2.5 py-1 rounded border-2 border-[#040406] shadow-[2px_2px_0px_#040406]">
                    TACTICAL
                  </span>
                </div>
                <span className="font-headline font-bold text-sm sm:text-base text-[#9ca3af] uppercase tracking-wider block mt-1">
                  Active Alliances & Followers
                </span>
              </div>

              {/* Micro-pills */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-[#07070a] border-2 border-[#040406] text-[#fbbf24] font-bold shadow-[1px_1px_0px_#040406]">
                  ⭐ Top Student Voice
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#07070a] border-2 border-[#040406] text-[#00f0ff] font-bold shadow-[1px_1px_0px_#040406]">
                  🚀 Tech Architect
                </span>
              </div>
            </div>

            {/* Middle Column: Narrative Line & Community Focus */}
            <div className="lg:col-span-5 space-y-3 lg:border-l-2 lg:border-[#040406] lg:pl-8">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f3f4f6] uppercase">
                Connect on <span className="text-[#00f0ff]">LinkedIn</span>
              </h3>

              <p className="text-sm font-sans text-[#f3f4f6] leading-relaxed font-medium">
                "Building in public — Gen AI, dev architectures, and high-impact student growth chronicles."
              </p>

              <p className="text-xs font-sans text-[#9ca3af] leading-relaxed">
                Follow my dispatch stream as I document full-stack systems, Generative AI breakthroughs, real hackathon victories, and actionable roadmaps for student developers starting from zero.
              </p>
            </div>

            {/* Right Column: CTA Button */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <a
                id="linkedin_connect_cta_btn"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-full py-4 px-6 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white border-3 border-[#040406] shadow-[4px_4px_0px_#040406] hover:shadow-[5px_5px_0px_#00f0ff] text-xs font-headline font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                {/* LinkedIn SVG Icon */}
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
                <span>CONNECT ON LINKEDIN</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                  open_in_new
                </span>
              </a>

              <span className="text-[10px] font-mono text-[#9ca3af] font-bold text-center">
                4.8K+ Developers & Recruiters Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

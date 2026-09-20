import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const LinkedInSection: React.FC = () => {
  const linkedinUrl = PROFILE_DATA.linkedinUrl || 'https://www.linkedin.com/in/sanjeeveditor2008/';

  return (
    <section id="linkedin" className="py-16 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Social Proof Strip Card */}
        <div className="unified-card p-6 sm:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Stat Badge & Social Proof */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#252B33] border border-[#2A3038] text-xs font-sans text-[#C9A961] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                <span>Professional Network // LinkedIn</span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-5xl sm:text-6xl text-[#F5F3EE] tracking-tight">
                    4,800+
                  </span>
                  <span className="font-sans text-xs text-[#C9A961] font-semibold uppercase tracking-widest bg-[#252B33] px-2.5 py-1 rounded-[6px] border border-[#2A3038]">
                    Active
                  </span>
                </div>
                <span className="font-sans font-semibold text-sm sm:text-base text-[#B8B5AD] uppercase tracking-wider block mt-1">
                  Professional Followers & Connections
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
                Connect on <span className="text-[#C9A961]">LinkedIn</span>
              </h3>

              <p className="text-sm font-sans text-[#F5F3EE] leading-relaxed font-medium">
                &ldquo;Building in public — Gen AI, dev architectures, and high-impact student growth chronicles.&rdquo;
              </p>

              <p className="text-xs font-sans text-[#B8B5AD] leading-relaxed">
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
                className="btn-gold-primary w-full text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
                <span>Connect on LinkedIn</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>

              <span className="text-[11px] font-sans text-[#7A7A7A] font-semibold text-center">
                4.8K+ Developers & Recruiters Connected
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';
import { downloadResumeFile } from '../utils/resume';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenHireModal: () => void;
  onOpenAiModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenHireModal,
  onOpenAiModal,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-36 pb-24 flex items-center justify-center bg-[#0F1419] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
            
            {/* Small Overline */}
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold">
              Portfolio — 2026
            </span>

            {/* Name & Role */}
            <div className="space-y-4">
              <h1 className="font-serif italic font-bold text-6xl sm:text-8xl text-[#F5F3EE] tracking-tight leading-[1.05]">
                Sanjeev M
              </h1>
              <p className="font-sans font-medium text-xl sm:text-2xl text-[#B8B5AD] tracking-normal">
                {PROFILE_DATA.role}
              </p>
            </div>

            {/* Tagline */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#B8B5AD] max-w-xl leading-relaxed">
              &ldquo;Building thoughtful digital products from first sketch to production, combining rigorous engineering with refined interface design.&rdquo;
            </p>

            {/* Stats Bar */}
            <div className="w-full py-4 px-6 rounded-[8px] bg-[#1A1F26] border border-[#2A3038] flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-[#B8B5AD]">
              {PROFILE_DATA.statsSummary.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                  <span className="font-semibold tracking-wider text-[#F5F3EE]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero_explore_work_btn"
                onClick={() => {
                  soundEffects.playClick();
                  onExploreWork();
                }}
                className="btn-gold-primary"
              >
                View Work
              </button>

              <button
                id="hero_download_resume_btn"
                onClick={() => downloadResumeFile()}
                className="btn-gold-secondary"
              >
                Download Resume
              </button>

              <button
                id="hero_ask_ai_btn"
                onClick={() => {
                  soundEffects.playBeep();
                  onOpenAiModal();
                }}
                className="btn-gold-secondary border-dashed"
              >
                <span className="material-symbols-outlined text-sm">smart_toy</span>
                <span>Ask AI Twin</span>
              </button>
            </div>

          </div>

          {/* Right Column: Rectangular Portrait (4:5 Aspect Ratio) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-[16px] overflow-hidden border border-[#2A3038] bg-[#1A1F26] shadow-xl">
                <img
                  src={PROFILE_DATA.profileImage}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1A1F26] border border-[#2A3038] p-6 rounded-[8px] shadow-2xl hidden sm:block max-w-xs">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C9A961] block font-semibold mb-1">
                  Based in Chennai
                </span>
                <p className="font-serif text-sm font-medium text-[#F5F3EE]">
                  Specializing in Full Stack Architecture & AI Systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

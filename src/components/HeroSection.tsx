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
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Ambient Radial Gradient Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#ff4d80]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#00fbfb]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Profile Photo with Glowing Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* Outer Glowing Pulsing Ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#ff4d80] via-[#bc13fe] to-[#00fbfb] opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-[#0a0a0a] border-2 border-[#ff4d80] shadow-[0_0_30px_rgba(255,77,128,0.5)] overflow-hidden">
                <img
                  src={PROFILE_DATA.profileImage}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover rounded-full filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Growth Badge */}
              <div className="absolute -bottom-3 right-2 sm:right-6 bg-[#1a1a2e]/90 border border-[#00fbfb] rounded-full px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,251,251,0.4)] flex items-center gap-2 animate-float">
                <span className="material-symbols-outlined text-[#00fbfb] text-base">
                  trending_up
                </span>
                <span className="font-mono text-xs text-[#00fbfb] font-bold">
                  +21.8 / day growth
                </span>
              </div>

              {/* Status Dot */}
              <div className="absolute top-4 left-4 bg-[#1a1a2e]/90 border border-[#ff4d80] rounded-full px-3 py-1 backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00dddd] animate-ping" />
                <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Header Tracking Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#ff4d80]/10 border border-[#ff4d80]/40 text-[#ff4d80] font-mono text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d80]"></span>
              <span>{PROFILE_DATA.subtitle}</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tight text-white uppercase leading-none">
                <span className="neon-pink-text block">{PROFILE_DATA.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-headline font-semibold text-[#00fbfb] tracking-wide neon-cyan-text">
                {PROFILE_DATA.role}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-sans">
              Building real projects. Growing authentic audiences.{' '}
              <strong className="text-white font-semibold underline decoration-[#ff4d80] decoration-2 underline-offset-4">
                3,387+ LinkedIn followers.
              </strong>{' '}
              CEO-recognized work across the tech ecosystem.
            </p>

            {/* Stats Summary Bar */}
            <div className="w-full py-3 px-4 rounded-xl bg-[#1a1a2e]/80 border border-[#3a4a49]/60 backdrop-blur-md flex flex-wrap items-center justify-between sm:justify-start gap-y-2 text-xs font-mono text-gray-300">
              {PROFILE_DATA.statsSummary.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00fbfb] text-sm">
                      verified
                    </span>
                    <span className="font-bold text-white tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  {idx < PROFILE_DATA.statsSummary.length - 1 && (
                    <span className="hidden sm:inline-block stat-divider" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Explore Work */}
              <button
                id="hero_explore_work_btn"
                onClick={() => {
                  soundEffects.playClick();
                  onExploreWork();
                }}
                className="btn-gradient px-6 py-3.5 rounded-xl text-sm font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto"
              >
                <span>EXPLORE WORK</span>
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </button>

              {/* Ask AI Twin */}
              <button
                id="hero_ask_ai_btn"
                onClick={() => {
                  soundEffects.playBeep();
                  onOpenAiModal();
                }}
                className="px-5 py-3.5 rounded-xl bg-[#1a1a2e] border border-[#00fbfb] text-[#00fbfb] hover:bg-[#00fbfb]/10 hover:shadow-[0_0_20px_rgba(0,251,251,0.4)] text-sm font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-base animate-pulse">smart_toy</span>
                <span>ASK AI TWIN</span>
              </button>

              {/* Download Resume Button */}
              <button
                id="hero_download_resume_btn"
                onClick={() => {
                  downloadResumeFile();
                }}
                className="px-5 py-3.5 rounded-xl bg-[#1a1a2e] border border-[#ff4d80] text-[#ff4d80] hover:bg-[#ff4d80]/10 hover:shadow-[0_0_20px_rgba(255,77,128,0.4)] text-sm font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all w-full sm:w-auto relative group overflow-hidden"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d80]"></span>
                </span>
                <span className="material-symbols-outlined text-base">download</span>
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* Get In Touch */}
              <button
                id="hero_get_in_touch_btn"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenHireModal();
                }}
                className="px-5 py-3.5 rounded-xl bg-transparent border border-[#3a4a49] hover:border-[#ff4d80] text-gray-300 hover:text-white text-sm font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
              >
                <span>GET IN TOUCH</span>
                <span className="material-symbols-outlined text-base">mail</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            id="hero_scroll_indicator_btn"
            onClick={onExploreWork}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#00fbfb] transition-colors group focus:outline-none"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400 group-hover:text-[#00fbfb]">
              SCROLL FOR MORE
            </span>
            <span className="material-symbols-outlined text-lg animate-bounce text-[#00fbfb]">
              expand_more
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

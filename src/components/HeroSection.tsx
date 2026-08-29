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
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0a0a0f] bg-web-threads overflow-hidden"
    >
      {/* Halftone Dot Overlay Shading in Corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-halftone-dots opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-halftone-dots opacity-20 pointer-events-none" />

      {/* Indigo Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#6366f1]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Profile Photo with Ink Border & Indigo Glow */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* Outer Indigo Offset Shadow Ring */}
              <div className="absolute -inset-2 bg-[#6366f1] rounded-full opacity-90 blur-sm group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />

              {/* Profile Image Container with 4px Ink Black Border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-[#12121a] border-4 border-[#050508] shadow-[6px_6px_0px_#050508] overflow-hidden">
                <img
                  src={PROFILE_DATA.profileImage}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover rounded-full filter contrast-125 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -bottom-3 right-2 sm:right-6 bg-[#12121a] border-2 border-[#050508] rounded-lg px-4 py-1.5 shadow-[4px_4px_0px_#6366f1] flex items-center gap-2 animate-float">
                <span className="material-symbols-outlined text-[#6366f1] text-base">
                  terminal
                </span>
                <span className="font-mono text-xs text-[#e5e5ea] font-bold tracking-wider">
                  3 LIVE APPS DEPLOYED
                </span>
              </div>

              {/* Status Dot */}
              <div className="absolute top-4 left-4 bg-[#12121a] border-2 border-[#050508] rounded-lg px-3 py-1 shadow-[3px_3px_0px_#6366f1] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1] animate-ping" />
                <span className="font-mono text-[10px] text-[#e5e5ea] font-bold tracking-widest uppercase">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Header Tracking Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#6366f1]/15 border-2 border-[#050508] text-[#6366f1] font-mono text-xs font-bold tracking-widest uppercase shadow-[3px_3px_0px_#050508]">
              <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
              <span>{PROFILE_DATA.subtitle}</span>
            </div>

            {/* Main Name Heading - Huge Condensed Typography */}
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black tracking-normal text-[#e5e5ea] uppercase leading-none">
                SANJEEV <span className="text-[#6366f1]">M</span>
              </h1>
              <p className="text-xl sm:text-3xl font-headline font-bold text-[#e5e5ea] tracking-wide uppercase">
                {PROFILE_DATA.role}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#94949e] max-w-2xl leading-relaxed font-sans">
              Building full-stack web apps and interfaces — from{' '}
              <strong className="text-[#e5e5ea] font-bold underline decoration-[#6366f1] decoration-2 underline-offset-4">
                Figma prototype
              </strong>{' '}
              to live deployed product in production.
            </p>

            {/* Stats Summary Bar */}
            <div className="w-full py-3 px-4 rounded-xl bg-[#12121a] border-2 border-[#050508] shadow-[4px_4px_0px_#050508] flex flex-wrap items-center justify-between sm:justify-start gap-y-2 text-xs font-mono text-[#94949e]">
              {PROFILE_DATA.statsSummary.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#6366f1] text-base">
                      verified
                    </span>
                    <span className="font-bold text-[#e5e5ea] tracking-wider">
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
              
              {/* Explore Work with Impact Burst Shape Behind */}
              <div className="impact-burst-wrapper w-full sm:w-auto">
                <div className="impact-burst-bg" />
                <button
                  id="hero_explore_work_btn"
                  onClick={() => {
                    soundEffects.playClick();
                    onExploreWork();
                  }}
                  className="btn-crimson px-7 py-3.5 rounded-xl text-sm font-headline font-bold text-[#e5e5ea] tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto relative z-10"
                >
                  <span>EXPLORE WORK</span>
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                </button>
              </div>

              {/* Ask AI Twin */}
              <button
                id="hero_ask_ai_btn"
                onClick={() => {
                  soundEffects.playBeep();
                  onOpenAiModal();
                }}
                className="px-5 py-3.5 rounded-xl bg-[#12121a] border-2 border-[#050508] shadow-[4px_4px_0px_#6366f1] text-[#e5e5ea] hover:bg-[#6366f1]/10 text-sm font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all w-full sm:w-auto cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-[#6366f1] animate-pulse">smart_toy</span>
                <span>ASK AI TWIN</span>
              </button>

              {/* Download Resume Button */}
              <button
                id="hero_download_resume_btn"
                onClick={() => {
                  downloadResumeFile();
                }}
                className="px-5 py-3.5 rounded-xl bg-[#12121a] border-2 border-[#050508] shadow-[4px_4px_0px_#050508] text-[#e5e5ea] hover:border-[#6366f1] hover:shadow-[4px_4px_0px_#6366f1] text-sm font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all w-full sm:w-auto cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366f1]"></span>
                </span>
                <span className="material-symbols-outlined text-base text-[#6366f1]">download</span>
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* Get In Touch */}
              <button
                id="hero_get_in_touch_btn"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenHireModal();
                }}
                className="px-5 py-3.5 rounded-xl bg-transparent border-2 border-[#1e1e2d] hover:border-[#6366f1] text-[#94949e] hover:text-[#e5e5ea] text-sm font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all w-full sm:w-auto cursor-pointer"
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
            className="flex flex-col items-center gap-2 text-[#94949e] hover:text-[#6366f1] transition-colors group focus:outline-none cursor-pointer"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#94949e] group-hover:text-[#6366f1]">
              SCROLL FOR MORE
            </span>
            <span className="material-symbols-outlined text-lg animate-bounce text-[#6366f1]">
              expand_more
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

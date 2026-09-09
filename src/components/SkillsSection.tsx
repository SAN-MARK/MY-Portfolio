import React, { useState } from 'react';
import { SKILL_CATEGORIES, TECHNICAL_ECOSYSTEM } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative bg-[#07070a]">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Background Halftone Dots */}
      <div className="absolute inset-0 bg-halftone-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
            <span>ARSENAL // COMBAT-READY TECH MATRIX</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            THE <span className="crimson-text">ARSENAL</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full shadow-[0_0_10px_rgba(226,29,36,0.6)]" />
        </div>

        {/* 3 Skill Category Comic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              id={`skill_card_${cat.title.toLowerCase()}`}
              className="comic-card rounded-2xl border-3 border-[#040406] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Halftone Top Corner Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-halftone-dots opacity-15 pointer-events-none" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl p-2 rounded-xl bg-[#07070a] border-2 border-[#040406] text-[#fbbf24] shadow-[2px_2px_0px_#040406] group-hover:text-[#00f0ff] transition-colors">
                      {cat.icon}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-[#f3f4f6] tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-[#07070a] border-2 border-[#040406] text-[#e21d24] shadow-[2px_2px_0px_#040406]">
                    {cat.title === 'DEVELOPMENT' ? 'CORE SUITE' : cat.title === 'DESIGN' ? 'PRIMARY SUITE' : 'CREATIVE OPS'}
                  </span>
                </div>

                {/* Skills Pill List */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] text-[#9ca3af] uppercase tracking-widest block font-bold">
                    Primary Weaponry & Tech:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => {
                          soundEffects.playBeep();
                          setSelectedSkill(skill);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#07070a] border-2 border-[#040406] text-xs font-mono font-bold text-[#f3f4f6] hover:text-[#040406] hover:bg-[#00f0ff] hover:border-[#00f0ff] transition-all cursor-pointer shadow-[2px_2px_0px_#040406]"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Ecosystem Workspace Showcase Banner */}
        <div className="bg-[#0f0f18] rounded-2xl border-4 border-[#040406] shadow-[6px_6px_0px_#fbbf24] overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 z-10 bg-[#0f0f18]">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#e21d24] uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-[#e21d24] animate-pulse"></span>
                <span>WAR ROOM // ARCHITECTURAL ECOSYSTEM</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#f3f4f6]">
                {TECHNICAL_ECOSYSTEM.title}
              </h3>

              <p className="text-[#9ca3af] font-sans text-sm leading-relaxed max-w-xl">
                {TECHNICAL_ECOSYSTEM.description}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {TECHNICAL_ECOSYSTEM.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-xl bg-[#07070a] border-2 border-[#040406] shadow-[3px_3px_0px_#040406] text-xs font-mono font-bold text-[#fbbf24]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[280px]">
              <img
                src={TECHNICAL_ECOSYSTEM.bgImage}
                alt="Workspace Engineering"
                className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f18] via-transparent to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f18] via-transparent to-transparent lg:hidden block" />
            </div>

          </div>
        </div>

      </div>

      {/* Selected Skill Toast Popup */}
      {selectedSkill && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f0f18] p-4 rounded-xl border-3 border-[#040406] shadow-[6px_6px_0px_#fbbf24] flex items-center gap-4 animate-fadeIn">
          <span className="material-symbols-outlined text-[#fbbf24] text-xl">bolt</span>
          <div>
            <span className="font-mono text-xs text-[#00f0ff] font-bold block">{selectedSkill}</span>
            <span className="text-[11px] text-[#9ca3af] font-sans">Certified battle-ready in production deployments.</span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="p-1 rounded-md hover:bg-[#07070a] text-[#9ca3af] hover:text-[#f3f4f6] cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </section>
  );
};

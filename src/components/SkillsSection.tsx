import React, { useState } from 'react';
import { SKILL_CATEGORIES, TECHNICAL_ECOSYSTEM } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative bg-[#0d0d0d]">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#161616] border-2 border-[#000000] text-xs font-mono text-[#E31E24] font-bold shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span>CORE COMPETENCIES & TECH STACK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase">
            SKILLS & <span className="text-[#E31E24]">EXPERTISE</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto rounded-full" />
        </div>

        {/* 3 Skill Category Comic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              id={`skill_card_${cat.title.toLowerCase()}`}
              className="bg-[#161616] rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] hover:-translate-y-1 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl p-2 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-[#E31E24]">
                      {cat.icon}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-[#F5F5F0] tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-[#0d0d0d] border-2 border-[#000000] text-[#E31E24]">
                    {cat.title === 'DEVELOPMENT' ? 'CORE STACK' : cat.title === 'DESIGN' ? 'PRIMARY STACK' : 'MEDIA & CREATIVE'}
                  </span>
                </div>

                {/* Skills Pill List */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] text-[#B8B8B0] uppercase tracking-widest block font-bold">
                    Tools & Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => {
                          soundEffects.playBeep();
                          setSelectedSkill(skill);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#0d0d0d] border-2 border-[#000000] text-xs font-mono font-bold text-[#F5F5F0] hover:text-[#E31E24] hover:border-[#E31E24] transition-all cursor-pointer shadow-[2px_2px_0px_#000000]"
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
        <div className="bg-[#161616] rounded-2xl border-4 border-[#000000] shadow-[6px_6px_0px_#000000] overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 z-10 bg-[#161616]">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E31E24] uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                <span>ARCHITECTURAL ECOSYSTEM</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F5F0]">
                {TECHNICAL_ECOSYSTEM.title}
              </h3>

              <p className="text-[#B8B8B0] font-sans text-sm leading-relaxed max-w-xl">
                {TECHNICAL_ECOSYSTEM.description}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {TECHNICAL_ECOSYSTEM.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] shadow-[3px_3px_0px_#000000] text-xs font-mono font-bold text-[#E31E24]"
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
                className="w-full h-full object-cover filter contrast-110 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-transparent to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent lg:hidden block" />
            </div>

          </div>
        </div>

      </div>

      {/* Selected Skill Toast Popup */}
      {selectedSkill && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] p-4 rounded-xl border-3 border-[#000000] shadow-[6px_6px_0px_#E31E24] flex items-center gap-4 animate-fadeIn">
          <span className="material-symbols-outlined text-[#E31E24] text-xl">auto_awesome</span>
          <div>
            <span className="font-mono text-xs text-[#E31E24] font-bold block">{selectedSkill}</span>
            <span className="text-[11px] text-[#B8B8B0] font-sans">Proficient in production deployment and design workflows.</span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="p-1 rounded-md hover:bg-[#0d0d0d] text-[#B8B8B0] hover:text-[#F5F5F0] cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </section>
  );
};

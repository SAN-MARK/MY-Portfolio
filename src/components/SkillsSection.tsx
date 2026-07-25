import React, { useState } from 'react';
import { SKILL_CATEGORIES, TECHNICAL_ECOSYSTEM } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getAccentColorStyle = (color: 'pink' | 'cyan' | 'purple') => {
    switch (color) {
      case 'pink':
        return {
          text: 'text-[#ff4d80]',
          border: 'border-[#ff4d80]/40',
          bgBar: 'bg-[#ff4d80]',
          glow: 'hover:border-[#ff4d80] hover:shadow-[0_0_20px_rgba(255,77,128,0.3)]',
        };
      case 'cyan':
        return {
          text: 'text-[#00fbfb]',
          border: 'border-[#00fbfb]/40',
          bgBar: 'bg-[#00fbfb]',
          glow: 'hover:border-[#00fbfb] hover:shadow-[0_0_20px_rgba(0,251,251,0.3)]',
        };
      case 'purple':
        return {
          text: 'text-[#abc7ff]',
          border: 'border-[#abc7ff]/40',
          bgBar: 'bg-[#abc7ff]',
          glow: 'hover:border-[#abc7ff] hover:shadow-[0_0_20px_rgba(171,199,255,0.3)]',
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#0a0a0a]">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00fbfb]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a2e] border border-[#3a4a49] text-xs font-mono text-[#abc7ff]">
            <span className="w-2 h-2 rounded-full bg-[#abc7ff] animate-pulse"></span>
            <span>CORE COMPETENCIES & TECH STACK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white tracking-tight uppercase">
            SKILLS & <span className="neon-purple-text">EXPERTISE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff4d80] via-[#abc7ff] to-[#00fbfb] mx-auto rounded-full" />
        </div>

        {/* 3 Skill Category Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((cat) => {
            const styles = getAccentColorStyle(cat.accentColor);
            return (
              <div
                key={cat.title}
                id={`skill_card_${cat.title.toLowerCase()}`}
                className={`glass-card rounded-2xl border border-[#3a4a49]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${styles.glow}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-2xl p-2 rounded-xl bg-[#0a0a0a] border ${styles.border} ${styles.text}`}>
                        {cat.icon}
                      </span>
                      <h3 className="font-headline font-bold text-2xl text-white tracking-wide">
                        {cat.title}
                      </h3>
                    </div>

                    <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-[#0a0a0a] border ${styles.border} ${styles.text}`}>
                      {cat.title === 'DEVELOPMENT' ? 'CORE STACK' : cat.title === 'DESIGN' ? 'PRIMARY STACK' : 'MEDIA & CREATIVE'}
                    </span>
                  </div>

                  {/* Skills Pill List */}
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
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
                          className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-[#3a4a49]/60 text-xs font-mono text-gray-200 hover:text-white hover:border-[#00fbfb] transition-all cursor-pointer"
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Ecosystem Workspace Showcase Banner */}
        <div className="glass-card rounded-2xl border border-[#3a4a49]/80 overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 z-10 bg-[#1a1a2e]/90 backdrop-blur-md">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00fbfb] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#00fbfb]"></span>
                <span>ARCHITECTURAL ECOSYSTEM</span>
              </div>

              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white">
                {TECHNICAL_ECOSYSTEM.title}
              </h3>

              <p className="text-gray-300 font-sans text-sm leading-relaxed max-w-xl">
                {TECHNICAL_ECOSYSTEM.description}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {TECHNICAL_ECOSYSTEM.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-xl bg-[#0a0a0a] border border-[#00fbfb]/50 text-xs font-mono font-semibold text-[#00fbfb] shadow-[0_0_10px_rgba(0,251,251,0.2)]"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-transparent to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent lg:hidden block" />
            </div>

          </div>
        </div>

      </div>

      {/* Selected Skill Toast Popup */}
      {selectedSkill && (
        <div className="fixed bottom-6 right-6 z-50 glass-card p-4 rounded-xl border border-[#00fbfb] shadow-2xl flex items-center gap-4 animate-fadeIn">
          <span className="material-symbols-outlined text-[#00fbfb] text-xl">auto_awesome</span>
          <div>
            <span className="font-mono text-xs text-[#00fbfb] font-bold block">{selectedSkill}</span>
            <span className="text-[11px] text-gray-300 font-sans">Proficient in production deployment and design workflows.</span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="p-1 rounded-md hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </section>
  );
};

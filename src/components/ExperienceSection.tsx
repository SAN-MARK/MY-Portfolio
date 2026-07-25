import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  const getStatusStyle = (type: string) => {
    switch (type) {
      case 'in_progress':
        return 'bg-[#00fbfb]/10 text-[#00fbfb] border-[#00fbfb]/40';
      case 'active':
        return 'bg-[#ff4d80]/10 text-[#ff4d80] border-[#ff4d80]/40';
      case 'completed':
        return 'bg-[#abc7ff]/10 text-[#abc7ff] border-[#abc7ff]/40';
      default:
        return 'bg-gray-800 text-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20 relative bg-[#0a0a0a]">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d80]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a2e] border border-[#3a4a49] text-xs font-mono text-[#ff4d80]">
            <span className="w-2 h-2 rounded-full bg-[#ff4d80] animate-pulse"></span>
            <span>CAREER MILESTONES & INTERNSHIPS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white tracking-tight uppercase">
            WORK <span className="neon-pink-text">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff4d80] to-[#00fbfb] mx-auto rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              id={`exp_card_${exp.id}`}
              className={`glass-card rounded-2xl border border-[#3a4a49]/60 p-6 sm:p-8 flex flex-col justify-between ${exp.colSpan} hover:border-[#00fbfb] transition-all duration-300 group`}
            >
              <div>
                {/* Header Row: Company, Role & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="font-mono text-xs text-[#00fbfb] uppercase tracking-wider block font-semibold">
                      {exp.company}
                    </span>
                    <h3 className="font-headline font-bold text-2xl text-white group-hover:text-[#ff4d80] transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border ${getStatusStyle(
                        exp.statusType
                      )}`}
                    >
                      {exp.statusText}
                    </span>
                    <span className="font-mono text-[11px] text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 font-sans text-sm leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-gray-300 font-sans">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#00fbfb] text-base mt-0.5 shrink-0">
                        arrow_right
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-white font-semibold">$1</strong>') }} />
                    </li>
                  ))}
                </ul>

                {/* Optional Achievement Callout Banner (Marpu) */}
                {exp.achievement && (
                  <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#ff4d80]/40 flex items-center gap-4 my-4">
                    <div className="font-headline font-black text-3xl text-[#ff4d80]">
                      {exp.achievement.value}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-white font-bold block uppercase">
                        {exp.achievement.label}
                      </span>
                      <span className="text-[11px] text-gray-400 font-sans">
                        {exp.achievement.description}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags or Link */}
              <div className="pt-4 border-t border-[#3a4a49]/40 flex flex-wrap items-center justify-between gap-2">
                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#0a0a0a] border border-[#3a4a49]/60 text-[10px] font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {exp.link && (
                  <a
                    href={`https://${exp.link}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundEffects.playClick()}
                    className="font-mono text-xs text-[#00fbfb] hover:underline flex items-center gap-1"
                  >
                    <span>{exp.link}</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

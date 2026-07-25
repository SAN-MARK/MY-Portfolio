import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#0d0d0d]">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#161616] border-2 border-[#000000] text-xs font-mono text-[#E31E24] font-bold shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span>CAREER MILESTONES & INTERNSHIPS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase">
            WORK <span className="text-[#E31E24]">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              id={`exp_card_${exp.id}`}
              className={`bg-[#161616] rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] p-6 sm:p-8 flex flex-col justify-between ${exp.colSpan} hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] transition-all duration-300 group hover:-translate-y-1`}
            >
              <div>
                {/* Header Row: Company, Role & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="font-mono text-xs text-[#E31E24] uppercase tracking-wider block font-bold">
                      {exp.company}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-[#F5F5F0] group-hover:text-[#E31E24] transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full border-2 border-[#000000] bg-[#E31E24]/15 text-[#E31E24]">
                      {exp.statusText}
                    </span>
                    <span className="font-mono text-[11px] text-[#B8B8B0] font-bold">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-[#B8B8B0] font-sans text-sm leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#B8B8B0] font-sans">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#E31E24] text-base mt-0.5 shrink-0">
                        arrow_right
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-[#F5F5F0] font-bold">$1</strong>') }} />
                    </li>
                  ))}
                </ul>

                {/* Optional Achievement Callout Banner */}
                {exp.achievement && (
                  <div className="p-4 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] flex items-center gap-4 my-4 shadow-[3px_3px_0px_#000000]">
                    <div className="font-display font-black text-4xl text-[#E31E24]">
                      {exp.achievement.value}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#F5F5F0] font-bold block uppercase">
                        {exp.achievement.label}
                      </span>
                      <span className="text-[11px] text-[#B8B8B0] font-sans">
                        {exp.achievement.description}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags or Link */}
              <div className="pt-4 border-t-2 border-[#000000] flex flex-wrap items-center justify-between gap-2">
                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#0d0d0d] border-2 border-[#000000] text-[10px] font-mono font-bold text-[#F5F5F0]"
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
                    className="font-mono text-xs text-[#E31E24] hover:text-[#F5F5F0] flex items-center gap-1 font-bold"
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

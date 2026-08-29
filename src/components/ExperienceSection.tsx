import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#0a0a0f]">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12121a] border-2 border-[#050508] text-xs font-mono text-[#6366f1] font-bold shadow-[2px_2px_0px_#050508]">
            <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse"></span>
            <span>CAREER MILESTONES & INTERNSHIPS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#e5e5ea] tracking-wider uppercase">
            WORK <span className="text-[#6366f1]">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#6366f1] mx-auto rounded-full" />
        </div>

        {/* 2-Column Responsive Card Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERIENCE_DATA.map((exp, index) => {
            const isLatest = exp.statusType === 'in_progress';
            return (
              <div
                key={exp.id}
                id={`exp_card_${exp.id}`}
                className={`bg-[#12121a] rounded-2xl border-3 border-[#050508] shadow-[5px_5px_0px_#050508] p-6 sm:p-8 flex flex-col justify-between hover:border-[#6366f1] hover:shadow-[6px_6px_0px_#6366f1] transition-all duration-300 group hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Header Row: Company, Role & Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-[#6366f1] uppercase tracking-wider font-bold">
                          {exp.company}
                        </span>
                        {exp.type && (
                          <>
                            <span className="text-[#050508] font-bold">•</span>
                            <span className="font-mono text-[11px] text-[#94949e] font-bold">
                              {exp.type}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#e5e5ea] group-hover:text-[#6366f1] transition-colors leading-tight">
                        {exp.role}
                      </h3>

                      {exp.location && (
                        <div className="flex items-center gap-1 text-xs font-mono text-[#94949e] pt-0.5">
                          <span className="material-symbols-outlined text-sm text-[#6366f1]">location_on</span>
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0">
                      <span
                        className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border-2 border-[#050508] shadow-[2px_2px_0px_#050508] tracking-wider uppercase flex items-center gap-1.5 ${
                          isLatest
                            ? 'bg-[#6366f1] text-[#e5e5ea]'
                            : 'bg-[#6366f1]/15 text-[#6366f1]'
                        }`}
                      >
                        {isLatest && <span className="w-1.5 h-1.5 rounded-full bg-[#e5e5ea] animate-ping" />}
                        <span>{exp.statusText}</span>
                      </span>

                      <span className="font-mono text-[11px] text-[#94949e] font-bold">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary (if present) */}
                  {exp.summary && (
                    <p className="text-[#94949e] font-sans text-sm leading-relaxed mb-4">
                      {exp.summary}
                    </p>
                  )}

                  {/* Bullet Points with Indigo Arrow */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#94949e] font-sans">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#6366f1] text-base mt-0.5 shrink-0 font-bold">
                          arrow_right
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: pt.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong className="text-[#e5e5ea] font-bold">$1</strong>'
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags & Links Bar */}
                <div className="pt-4 border-t-2 border-[#050508] flex flex-wrap items-center justify-between gap-2 mt-auto">
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#0a0a0f] border-2 border-[#050508] text-[10px] font-mono font-bold text-[#e5e5ea] shadow-[2px_2px_0px_#050508]"
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
                      className="font-mono text-xs text-[#6366f1] hover:text-[#e5e5ea] flex items-center gap-1 font-bold ml-auto"
                    >
                      <span>{exp.link}</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

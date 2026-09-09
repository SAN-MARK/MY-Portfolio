import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#07070a]">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Halftone Overlay Background */}
      <div className="absolute inset-0 bg-halftone-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
            <span>MISSION LOG // FIELD RECORD & CADENCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            MISSION <span className="crimson-text">LOG</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full shadow-[0_0_10px_rgba(226,29,36,0.6)]" />
        </div>

        {/* 2-Column Responsive Card Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERIENCE_DATA.map((exp, index) => {
            const isLatest = exp.statusType === 'in_progress';
            return (
              <div
                key={exp.id}
                id={`exp_card_${exp.id}`}
                className={`comic-card rounded-2xl border-3 border-[#040406] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Subtle Halftone Background Accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-halftone-dots opacity-15 pointer-events-none" />

                <div className="relative z-10">
                  {/* Header Row: Company, Role & Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-[#fbbf24] uppercase tracking-wider font-bold">
                          {exp.company}
                        </span>
                        {exp.type && (
                          <>
                            <span className="text-[#040406] font-bold">•</span>
                            <span className="font-mono text-[11px] text-[#9ca3af] font-bold">
                              {exp.type}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors leading-tight">
                        {exp.role}
                      </h3>

                      {exp.location && (
                        <div className="flex items-center gap-1 text-xs font-mono text-[#9ca3af] pt-0.5">
                          <span className="material-symbols-outlined text-sm text-[#e21d24]">location_on</span>
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0">
                      <span
                        className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border-2 border-[#040406] shadow-[2px_2px_0px_#040406] tracking-wider uppercase flex items-center gap-1.5 ${
                          isLatest
                            ? 'bg-[#e21d24] text-white shadow-[2px_2px_0px_#fbbf24]'
                            : 'bg-[#07070a] text-[#fbbf24]'
                        }`}
                      >
                        {isLatest && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                        <span>{exp.statusText}</span>
                      </span>

                      <span className="font-mono text-[11px] text-[#9ca3af] font-bold">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary (if present) */}
                  {exp.summary && (
                    <p className="text-[#9ca3af] font-sans text-sm leading-relaxed mb-4">
                      {exp.summary}
                    </p>
                  )}

                  {/* Bullet Points with Crimson Arrow */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#9ca3af] font-sans">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#e21d24] text-base mt-0.5 shrink-0 font-bold">
                          arrow_right
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: pt.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong className="text-[#f3f4f6] font-bold">$1</strong>'
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags & Links Bar */}
                <div className="pt-4 border-t-2 border-[#040406] flex flex-wrap items-center justify-between gap-2 mt-auto relative z-10">
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#07070a] border-2 border-[#040406] text-[10px] font-mono font-bold text-[#f3f4f6] shadow-[2px_2px_0px_#040406]"
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
                      className="font-mono text-xs text-[#00f0ff] hover:text-[#fbbf24] flex items-center gap-1 font-bold ml-auto transition-colors"
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

import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
            Career Progression
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
            Professional <span className="italic font-normal text-[#C9A961]">Experience</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#2A3038] ml-4 sm:ml-8 space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C9A961] border-2 border-[#0F1419] group-hover:scale-125 transition-transform" />

              <div className="unified-card p-6 sm:p-8">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#C9A961] font-semibold">
                    {exp.role}
                  </span>
                  <span className="font-sans text-xs text-[#7A7A7A]">
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F5F3EE] mb-3">
                  {exp.company}
                  {exp.location && <span className="font-sans text-sm text-[#7A7A7A] font-normal ml-2">({exp.location})</span>}
                </h3>

                {exp.summary && (
                  <p className="font-sans text-sm text-[#B8B5AD] mb-4 leading-relaxed">
                    {exp.summary}
                  </p>
                )}

                <ul className="space-y-2 text-sm text-[#B8B5AD] font-sans">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C9A961] font-bold mt-0.5">—</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: pt.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong className="text-[#F5F3EE] font-semibold">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-[#2A3038]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-[6px] bg-[#252B33] text-[#B8B5AD] font-sans text-[11px] font-medium border border-[#2A3038]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

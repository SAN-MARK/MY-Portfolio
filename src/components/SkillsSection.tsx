import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
            Expertise & Capabilities
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
            Skills & <span className="italic font-normal text-[#C9A961]">Tools</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="unified-card flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#F5F3EE] mb-6 pb-4 border-b border-[#2A3038]">
                  {cat.title}
                </h3>

                <ul className="space-y-3 font-sans text-sm text-[#B8B5AD]">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                      <span className="font-medium text-[#F5F3EE]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-8 border-t border-[#2A3038] font-sans text-xs uppercase tracking-wider text-[#7A7A7A]">
                Production Tested
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { soundEffects } from '../utils/audio';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenHireModal: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'FIGMA', 'HTML/CSS', 'REACT'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FIGMA') return project.tags.includes('FIGMA');
    if (activeFilter === 'HTML/CSS') return project.tags.includes('HTML') || project.tags.includes('CSS');
    if (activeFilter === 'REACT') return project.tags.includes('REACT');
    return true;
  });

  return (
    <section id="work" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
              Portfolio & Production
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
              Selected <span className="italic font-normal text-[#C9A961]">Work</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#1A1F26] p-1.5 rounded-[8px] border border-[#2A3038]">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEffects.playClick();
                  setActiveFilter(cat);
                }}
                className={`px-4 py-2 rounded-[6px] font-sans text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#C9A961] text-[#0F1419]'
                    : 'text-[#B8B5AD] hover:text-[#F5F3EE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Vertical List */}
        <div className="border-t border-[#2A3038]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project_card_${project.id}`}
              onClick={() => {
                soundEffects.playClick();
                onSelectProject(project);
              }}
              className="group py-8 px-6 sm:px-8 border-b border-[#2A3038] transition-colors duration-300 hover:bg-[#1A1F26] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C9A961] font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[#2A3038]">•</span>
                  <span className="font-sans text-xs text-[#7A7A7A]">2026</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors">
                  {project.title}
                </h3>

                <p className="font-sans text-base text-[#B8B5AD] leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Row: Tech Stack & Live Status */}
                <div className="flex flex-wrap items-center gap-4 pt-2 font-sans text-xs">
                  <div className="flex items-center gap-2 text-[#7A7A7A]">
                    <span className="material-symbols-outlined text-sm text-[#C9A961]">code</span>
                    <span>Stack:</span>
                    <span className="text-[#F5F3EE] font-medium">{project.tags.join(' • ')}</span>
                  </div>

                  <div className="flex items-center gap-2 pl-4 border-l border-[#2A3038]">
                    <span className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
                    <span className="text-[#C9A961] font-semibold uppercase tracking-wider text-[11px]">
                      Live & Verified
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 shrink-0">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C9A961] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

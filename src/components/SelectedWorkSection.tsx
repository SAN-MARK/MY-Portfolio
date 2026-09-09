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
  onOpenHireModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = ['ALL', 'FIGMA', 'HTML/CSS', 'NODE.JS', 'REACT'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FIGMA') return project.tags.includes('FIGMA');
    if (activeFilter === 'HTML/CSS') return project.tags.includes('HTML') || project.tags.includes('CSS');
    if (activeFilter === 'NODE.JS') return project.tags.includes('NODE.JS') || project.tags.includes('EXPRESS');
    if (activeFilter === 'REACT') return project.tags.includes('REACT');

    return true;
  });

  return (
    <section id="work" className="py-20 relative bg-[#07070a]">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#e21d24] font-bold shadow-[2px_2px_0px_#040406] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e21d24] animate-pulse"></span>
              <span>MISSIONS COMPLETED // PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              MISSIONS <span className="crimson-text">COMPLETED</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#e21d24] mt-3 rounded-full shadow-[0_0_10px_rgba(226,29,36,0.5)]" />
          </div>

          {/* Filter Tabs & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9ca3af] text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="Scan arsenal by tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#f3f4f6] placeholder-[#9ca3af] focus:outline-none focus:border-[#00f0ff] shadow-[2px_2px_0px_#040406]"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-[#0f0f18] p-1.5 rounded-xl border-2 border-[#040406] overflow-x-auto shadow-[3px_3px_0px_#040406]">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveFilter(cat);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-[#e21d24] text-white border border-[#040406] shadow-[2px_2px_0px_#fbbf24]'
                      : 'text-[#9ca3af] hover:text-[#00f0ff]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project_card_${project.id}`}
              className="comic-card rounded-2xl border-3 border-[#040406] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Halftone Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-halftone-dots opacity-15 pointer-events-none" />

              <div className="relative z-10">
                {/* Header Row: Category & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#fbbf24] uppercase tracking-wider font-bold">
                    {project.category}
                  </span>

                  <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full border-2 border-[#040406] bg-[#e21d24]/15 text-[#e21d24] shadow-[2px_2px_0px_#040406]">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#f3f4f6] mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#9ca3af] text-sm font-sans leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#07070a] border-2 border-[#040406] text-[11px] font-mono font-bold text-[#f3f4f6] group-hover:border-[#e21d24] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-[#040406] flex flex-col sm:flex-row items-center gap-2 relative z-10">
                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEffects.playClick();
                    }}
                    className="w-full sm:flex-1 py-3 rounded-xl btn-crimson text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>
                      {project.id === 'pcas'
                        ? 'FIGMA BLUEPRINT ↗'
                        : project.id === 'ecommerce'
                        ? 'VISIT STORE ↗'
                        : project.id === 'findback'
                        ? 'VISIT FINDBACK ↗'
                        : project.actionText}
                    </span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                )}
                <button
                  id={`project_action_${project.id}`}
                  onClick={() => {
                    soundEffects.playClick();
                    onSelectProject(project);
                  }}
                  className="w-full sm:flex-1 bg-[#07070a] hover:bg-[#00f0ff] hover:text-[#040406] py-3 rounded-xl border-2 border-[#040406] text-xs font-headline font-bold text-[#f3f4f6] uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-[3px_3px_0px_#040406]"
                >
                  <span>{project.linkUrl ? 'MISSION BRIEF' : project.actionText}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversation Box */}
        <div className="bg-[#0f0f18] rounded-2xl border-4 border-[#040406] shadow-[6px_6px_0px_#fbbf24] p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1 z-10">
            <h4 className="font-headline font-bold text-2xl text-[#f3f4f6]">
              Have a high-stakes mission or design challenge in mind?
            </h4>
            <p className="text-xs font-mono text-[#9ca3af]">
              Available for full-stack builds, Figma prototyping, and digital product acceleration.
            </p>
          </div>

          <button
            id="work_start_conversation_btn"
            onClick={() => {
              soundEffects.playClick();
              onOpenHireModal();
            }}
            className="btn-crimson px-6 py-3.5 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase whitespace-nowrap z-10 flex items-center gap-2 cursor-pointer"
          >
            <span>INITIATE COMMS</span>
            <span className="material-symbols-outlined text-sm">bolt</span>
          </button>
        </div>

      </div>
    </section>
  );
};

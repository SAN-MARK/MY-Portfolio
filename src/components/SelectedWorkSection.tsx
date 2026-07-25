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

  const filterCategories = ['ALL', 'FIGMA', 'HTML/CSS', 'NODE.JS', 'VIDEO'];

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
    if (activeFilter === 'VIDEO') return project.tags.includes('CAPCUT') || project.tags.includes('PREMIERE');

    return true;
  });

  const getBadgeStyle = (type: ProjectItem['badgeType']) => {
    switch (type) {
      case 'live':
        return 'bg-[#00dddd]/10 text-[#00dddd] border-[#00dddd]/40';
      case 'deployed':
        return 'bg-[#abc7ff]/10 text-[#abc7ff] border-[#abc7ff]/40';
      case 'edits':
        return 'bg-[#ff4d80]/10 text-[#ff4d80] border-[#ff4d80]/40';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  const getAccentBorderClass = (color: ProjectItem['accentColor']) => {
    switch (color) {
      case 'pink':
        return 'hover:border-[#ff4d80] hover:shadow-[0_0_25px_rgba(255,77,128,0.3)]';
      case 'cyan':
        return 'hover:border-[#00fbfb] hover:shadow-[0_0_25px_rgba(0,251,251,0.3)]';
      case 'purple':
        return 'hover:border-[#abc7ff] hover:shadow-[0_0_25px_rgba(171,199,255,0.3)]';
      case 'green':
        return 'hover:border-[#00dddd] hover:shadow-[0_0_25px_rgba(0,221,221,0.3)]';
    }
  };

  return (
    <section id="work" className="py-20 relative bg-[#0a0a0a]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a2e] border border-[#ff4d80]/40 text-xs font-mono text-[#ff4d80] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d80]"></span>
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white tracking-tight uppercase">
              SELECTED <span className="neon-cyan-text">WORK</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00fbfb] to-[#ff4d80] mt-3 rounded-full" />
          </div>

          {/* Filter Tabs & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="Filter by tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 rounded-xl bg-[#1a1a2e] border border-[#3a4a49] text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#00fbfb]"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-[#1a1a2e]/80 p-1 rounded-xl border border-[#3a4a49]/60 overflow-x-auto">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveFilter(cat);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                    activeFilter === cat
                      ? 'bg-[#00fbfb]/20 text-[#00fbfb] border border-[#00fbfb]/50'
                      : 'text-gray-400 hover:text-white'
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
              className={`glass-card rounded-2xl border border-[#3a4a49]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${getAccentBorderClass(
                project.accentColor
              )} group`}
            >
              <div>
                {/* Header Row: Category & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#00fbfb] uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>

                  <span
                    className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border ${getBadgeStyle(
                      project.badgeType
                    )}`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-[#ff4d80] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm font-sans leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#0a0a0a] border border-[#3a4a49]/60 text-[11px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#3a4a49]/40 flex flex-col sm:flex-row items-center gap-2">
                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEffects.playClick();
                    }}
                    className="w-full sm:flex-1 py-3 rounded-xl btn-gradient text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[#00fbfb]/30"
                  >
                    <span>
                      {project.id === 'pcas'
                        ? 'FIGMA PROTOTYPE ↗'
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
                  className={`w-full ${project.linkUrl ? 'sm:flex-1 bg-[#1a1a2e]' : 'w-full bg-[#1a1a2e]'} hover:bg-[#ff4d80] py-3 rounded-xl border border-[#3a4a49] hover:border-[#ff4d80] text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-[0_0_15px_rgba(255,77,128,0.4)]`}
                >
                  <span>{project.linkUrl ? 'CASE STUDY' : project.actionText}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversation Box */}
        <div className="glass-card rounded-2xl border border-[#00fbfb]/40 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1 z-10">
            <h4 className="font-headline font-bold text-xl text-white">
              Have a custom project or design requirement in mind?
            </h4>
            <p className="text-xs font-mono text-gray-400">
              Available for full-stack builds, Figma prototyping, and digital growth contracts.
            </p>
          </div>

          <button
            id="work_start_conversation_btn"
            onClick={() => {
              soundEffects.playClick();
              onOpenHireModal();
            }}
            className="btn-gradient px-6 py-3.5 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase whitespace-nowrap z-10 flex items-center gap-2 cursor-pointer"
          >
            <span>START A CONVERSATION</span>
            <span className="material-symbols-outlined text-sm">chat</span>
          </button>
        </div>

      </div>
    </section>
  );
};

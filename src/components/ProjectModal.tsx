import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { FEATURED_PROJECT } from '../data/portfolioData';
import { VVIAppScreen } from './VVIAppScreen';
import { soundEffects } from '../utils/audio';

interface ProjectModalProps {
  project: ProjectItem | null;
  isVictorPrototype?: boolean;
  initialMockupIndex?: number;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isVictorPrototype,
  initialMockupIndex = 0,
  onClose,
}) => {
  const [activeMockupIdx, setActiveMockupIdx] = useState<number>(initialMockupIndex);
  const [viewMode, setViewMode] = useState<'app' | 'figma'>('app');

  if (!project && !isVictorPrototype) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div className="bg-[#12121a] max-w-4xl w-full p-6 sm:p-8 rounded-2xl border-4 border-[#050508] relative shadow-[8px_8px_0px_#6366f1] space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] text-[#94949e] hover:text-[#e5e5ea] z-20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {isVictorPrototype ? (
          /* Vector Arts Academy / VVI Prototype Interactive Viewer */
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#6366f1] uppercase tracking-widest block font-bold">
                ▸ FEATURED PROTOTYPE AUDIT
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#e5e5ea]">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="text-xs text-[#94949e] font-sans">
                15+ Figma Screens • Interactive Student & Campus Event Management Architecture
              </p>
            </div>

            {/* View Mode Toggle: App Screen vs Figma Embed */}
            <div className="flex items-center justify-between border-b-2 border-[#050508] pb-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                {FEATURED_PROJECT.mockups.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundEffects.playClick();
                      setViewMode('app');
                      setActiveMockupIdx(idx);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap border-2 border-[#050508] cursor-pointer ${
                      viewMode === 'app' && activeMockupIdx === idx
                        ? 'bg-[#6366f1] text-[#e5e5ea] shadow-[2px_2px_0px_#050508]'
                        : 'bg-[#0a0a0f] text-[#94949e] hover:text-[#e5e5ea]'
                    }`}
                  >
                    Screen 0{idx + 1}: {m.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode(viewMode === 'app' ? 'figma' : 'app')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border-2 border-[#050508] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewMode === 'figma'
                      ? 'bg-[#6366f1] text-[#e5e5ea] shadow-[2px_2px_0px_#050508]'
                      : 'bg-[#0a0a0f] text-[#e5e5ea]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">integration_instructions</span>
                  <span>{viewMode === 'figma' ? 'Show App UI' : 'Embed Figma'}</span>
                </button>
              </div>
            </div>

            {/* Stage Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Phone App / Embedded Prototype */}
              <div className="md:col-span-6 bg-[#0a0a0f] p-2 rounded-2xl border-3 border-[#050508] shadow-[4px_4px_0px_#050508] mx-auto overflow-hidden flex items-center justify-center w-full min-h-[460px]">
                {viewMode === 'figma' ? (
                  <iframe
                    className="w-full h-[460px] rounded-xl border-0"
                    src={FEATURED_PROJECT.figmaEmbedUrl}
                    allowFullScreen
                    title="Figma Prototype Embed"
                  />
                ) : (
                  <VVIAppScreen
                    screenIndex={activeMockupIdx}
                    onSelectScreen={(idx) => setActiveMockupIdx(idx)}
                  />
                )}
              </div>

              {/* Specs & Mechanics */}
              <div className="md:col-span-6 space-y-4 text-left">
                <h3 className="font-headline font-bold text-xl text-[#e5e5ea]">
                  0{activeMockupIdx + 1}. {FEATURED_PROJECT.mockups[activeMockupIdx].title}
                </h3>
                <p className="text-xs text-[#94949e] font-sans leading-relaxed">
                  {FEATURED_PROJECT.mockups[activeMockupIdx].description}
                </p>

                <div className="p-4 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] shadow-[3px_3px_0px_#050508] space-y-2 text-xs font-mono">
                  <div className="text-[#6366f1] font-bold">Key UX Mechanics:</div>
                  <ul className="space-y-1.5 text-[#94949e] list-disc list-inside text-[11px]">
                    <li>Authentic yellow geometric vector branding (`#facc15`)</li>
                    <li>Student roll number SSO authentication (VVI2024105)</li>
                    <li>Campus events pre-registration (Sports Day, Hackathons)</li>
                    <li>Responsive mobile viewport mapping for native feeling</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={FEATURED_PROJECT.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEffects.playClick()}
                    className="btn-crimson w-full py-3.5 rounded-xl text-xs font-headline font-bold text-[#e5e5ea] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>OPEN FIGMA PROTOTYPE ↗</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : project ? (
          /* Standard Selected Work Case Study */
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#6366f1] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[#050508]">•</span>
                <span className="font-mono text-xs text-[#e5e5ea] font-bold">{project.badge}</span>
              </div>

              <h2 className="font-display font-black text-4xl text-[#e5e5ea]">
                {project.title}
              </h2>
            </div>

            <p className="text-sm text-[#94949e] font-sans leading-relaxed">
              {project.details?.overview || project.description}
            </p>

            {/* Key Features */}
            {project.details?.keyFeatures && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs text-[#6366f1] uppercase tracking-wider font-bold">
                  Key System Modules:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.details.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] text-xs font-sans text-[#94949e] flex items-start gap-2 shadow-[2px_2px_0px_#050508]">
                      <span className="material-symbols-outlined text-[#6366f1] text-sm shrink-0">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Metric */}
            {project.details?.impact && (
              <div className="p-4 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] shadow-[3px_3px_0px_#6366f1] space-y-1">
                <span className="font-mono text-[10px] text-[#6366f1] uppercase tracking-widest block font-bold">
                  SYSTEM IMPACT AUDIT
                </span>
                <p className="text-xs text-[#e5e5ea] font-sans font-medium">
                  {project.details.impact}
                </p>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#94949e] uppercase tracking-widest block font-bold">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#0a0a0f] border-2 border-[#050508] text-xs font-mono font-bold text-[#e5e5ea]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#050508] flex flex-col sm:flex-row items-center justify-between gap-3">
              {(project.linkUrl || project.details?.linkUrl) ? (
                <a
                  href={project.linkUrl || project.details?.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-crimson w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-headline font-bold text-[#e5e5ea] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {project.id === 'pcas'
                      ? 'OPEN FIGMA PROTOTYPE ↗'
                      : project.id === 'ecommerce'
                      ? 'VISIT E-COMMERCE STORE ↗'
                      : 'LAUNCH LIVE SITE ↗'}
                  </span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              ) : <div />}
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] hover:border-[#6366f1] text-xs font-headline font-bold text-[#e5e5ea] uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_#050508]"
              >
                CLOSE AUDIT
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
};

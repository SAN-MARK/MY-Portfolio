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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#0e0e16] max-w-4xl w-full p-6 sm:p-8 rounded-2xl border-4 border-[#040406] relative shadow-[8px_8px_0px_#fbbf24] space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#07070a] border-2 border-[#040406] text-[#9ca3af] hover:text-[#00f0ff] z-20 cursor-pointer shadow-[2px_2px_0px_#040406]"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {isVictorPrototype ? (
          /* Vector Arts Academy / VVI Prototype Interactive Viewer */
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#fbbf24] uppercase tracking-widest block font-bold">
                ▸ SIGNATURE MISSION // TACTICAL BLUEPRINT
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#f3f4f6]">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="text-xs text-[#9ca3af] font-sans">
                15+ Screens • Interactive Student & Campus Event Management Architecture
              </p>
            </div>

            {/* View Mode Toggle: App Screen vs Figma Embed */}
            <div className="flex items-center justify-between border-b-2 border-[#040406] pb-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                {FEATURED_PROJECT.mockups.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundEffects.playClick();
                      setViewMode('app');
                      setActiveMockupIdx(idx);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap border-2 border-[#040406] cursor-pointer ${
                      viewMode === 'app' && activeMockupIdx === idx
                        ? 'bg-[#e21d24] text-white shadow-[2px_2px_0px_#fbbf24]'
                        : 'bg-[#07070a] text-[#9ca3af] hover:text-[#00f0ff]'
                    }`}
                  >
                    Screen 0{idx + 1}: {m.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode(viewMode === 'app' ? 'figma' : 'app')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border-2 border-[#040406] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewMode === 'figma'
                      ? 'bg-[#e21d24] text-white shadow-[2px_2px_0px_#fbbf24]'
                      : 'bg-[#07070a] text-[#f3f4f6] hover:text-[#00f0ff]'
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
              <div className="md:col-span-6 bg-[#07070a] p-2 rounded-2xl border-3 border-[#040406] shadow-[4px_4px_0px_#040406] mx-auto overflow-hidden flex items-center justify-center w-full min-h-[460px]">
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
                <h3 className="font-headline font-bold text-xl text-[#f3f4f6]">
                  0{activeMockupIdx + 1}. {FEATURED_PROJECT.mockups[activeMockupIdx].title}
                </h3>
                <p className="text-xs text-[#9ca3af] font-sans leading-relaxed">
                  {FEATURED_PROJECT.mockups[activeMockupIdx].description}
                </p>

                <div className="p-4 rounded-xl bg-[#07070a] border-2 border-[#040406] shadow-[3px_3px_0px_#040406] space-y-2 text-xs font-mono">
                  <div className="text-[#fbbf24] font-bold">Key UX Mechanics:</div>
                  <ul className="space-y-1.5 text-[#9ca3af] list-disc list-inside text-[11px]">
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
                    className="btn-crimson w-full py-3.5 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#040406] hover:shadow-[5px_5px_0px_#fbbf24]"
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
                <span className="font-mono text-xs text-[#fbbf24] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[#040406]">•</span>
                <span className="font-mono text-xs text-[#f3f4f6] font-bold">{project.badge}</span>
              </div>

              <h2 className="font-display font-black text-4xl text-[#f3f4f6]">
                {project.title}
              </h2>
            </div>

            <p className="text-sm text-[#9ca3af] font-sans leading-relaxed">
              {project.details?.overview || project.description}
            </p>

            {/* Key Features */}
            {project.details?.keyFeatures && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs text-[#fbbf24] uppercase tracking-wider font-bold">
                  Key System Modules:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.details.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs font-sans text-[#9ca3af] flex items-start gap-2 shadow-[2px_2px_0px_#040406]">
                      <span className="material-symbols-outlined text-[#e21d24] text-sm shrink-0">
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
              <div className="p-4 rounded-xl bg-[#07070a] border-2 border-[#040406] shadow-[3px_3px_0px_#fbbf24] space-y-1">
                <span className="font-mono text-[10px] text-[#fbbf24] uppercase tracking-widest block font-bold">
                  MISSION IMPACT AUDIT
                </span>
                <p className="text-xs text-[#f3f4f6] font-sans font-medium">
                  {project.details.impact}
                </p>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#9ca3af] uppercase tracking-widest block font-bold">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#07070a] border-2 border-[#040406] text-xs font-mono font-bold text-[#f3f4f6] shadow-[2px_2px_0px_#040406]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#040406] flex flex-col sm:flex-row items-center justify-between gap-3">
              {(project.linkUrl || project.details?.linkUrl) ? (
                <a
                  href={project.linkUrl || project.details?.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-crimson w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#040406] hover:shadow-[5px_5px_0px_#fbbf24]"
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
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] hover:border-[#00f0ff] text-xs font-headline font-bold text-[#f3f4f6] uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_#040406]"
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

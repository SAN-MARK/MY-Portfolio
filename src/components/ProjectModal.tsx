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
      <div className="glass-card max-w-4xl w-full p-6 sm:p-8 rounded-2xl border border-[#00fbfb] relative shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-gray-400 hover:text-white z-20"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {isVictorPrototype ? (
          /* Vector Arts Academy / VVI Prototype Interactive Viewer */
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#ff4d80] uppercase tracking-widest block font-bold">
                ▸ FEATURED PROTOTYPE AUDIT
              </span>
              <h2 className="font-headline font-black text-2xl sm:text-3xl text-white">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="text-xs text-gray-300 font-sans">
                15+ Figma Screens • Interactive Student & Campus Event Management Architecture
              </p>
            </div>

            {/* View Mode Toggle: App Screen vs Figma Embed */}
            <div className="flex items-center justify-between border-b border-[#3a4a49]/60 pb-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                {FEATURED_PROJECT.mockups.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundEffects.playClick();
                      setViewMode('app');
                      setActiveMockupIdx(idx);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap border ${
                      viewMode === 'app' && activeMockupIdx === idx
                        ? 'bg-[#00fbfb]/20 text-[#00fbfb] border-[#00fbfb]'
                        : 'bg-[#1a1a2e] text-gray-400 border-[#3a4a49] hover:text-white'
                    }`}
                  >
                    Screen 0{idx + 1}: {m.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode(viewMode === 'app' ? 'figma' : 'app')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all flex items-center gap-1 ${
                    viewMode === 'figma'
                      ? 'bg-[#ff4d80]/20 text-[#ff4d80] border-[#ff4d80]'
                      : 'bg-[#1a1a2e] text-gray-300 border-[#3a4a49]'
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
              <div className="md:col-span-6 bg-[#0a0a0a] p-2 rounded-2xl border border-[#00fbfb]/40 mx-auto overflow-hidden flex items-center justify-center w-full min-h-[460px]">
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
                <h3 className="font-headline font-bold text-xl text-white">
                  0{activeMockupIdx + 1}. {FEATURED_PROJECT.mockups[activeMockupIdx].title}
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {FEATURED_PROJECT.mockups[activeMockupIdx].description}
                </p>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] space-y-2 text-xs font-mono">
                  <div className="text-[#00fbfb] font-bold">Key UX Mechanics:</div>
                  <ul className="space-y-1.5 text-gray-300 list-disc list-inside text-[11px]">
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
                    className="btn-gradient w-full py-3.5 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[#00fbfb]/30"
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
                <span className="font-mono text-xs text-[#00fbfb] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="font-mono text-xs text-[#ff4d80]">{project.badge}</span>
              </div>

              <h2 className="font-headline font-black text-3xl text-white">
                {project.title}
              </h2>
            </div>

            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              {project.details?.overview || project.description}
            </p>

            {/* Key Features */}
            {project.details?.keyFeatures && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs text-[#00fbfb] uppercase tracking-wider font-bold">
                  Key System Modules:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.details.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0a0a0a] border border-[#3a4a49]/60 text-xs font-sans text-gray-300 flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#ff4d80] text-sm shrink-0">
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
              <div className="p-4 rounded-xl bg-[#ff4d80]/10 border border-[#ff4d80]/50 space-y-1">
                <span className="font-mono text-[10px] text-[#ff4d80] uppercase tracking-widest block font-bold">
                  SYSTEM IMPACT AUDIT
                </span>
                <p className="text-xs text-white font-sans font-medium">
                  {project.details.impact}
                </p>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#0a0a0a] border border-[#3a4a49] text-xs font-mono text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#3a4a49]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              {(project.linkUrl || project.details?.linkUrl) ? (
                <a
                  href={project.linkUrl || project.details?.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-gradient w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[#00fbfb]/30"
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
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1a1a2e] border border-[#3a4a49] hover:border-[#00fbfb] text-xs font-headline font-bold text-white uppercase tracking-wider"
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

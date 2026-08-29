import React, { useState } from 'react';
import { FEATURED_PROJECT } from '../data/portfolioData';
import { VVIAppScreen } from './VVIAppScreen';
import { soundEffects } from '../utils/audio';

interface FeaturedProjectSectionProps {
  onOpenPrototypeModal: (mockupIndex?: number) => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({
  onOpenPrototypeModal,
}) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  return (
    <section id="featured" className="py-24 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#6366f1]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Copy */}
          <div className="lg:col-span-6 relative pl-6 border-l-4 border-[#6366f1] space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#6366f1] tracking-widest uppercase font-bold bg-[#12121a] px-3 py-1 rounded border-2 border-[#050508]">
              <span>{FEATURED_PROJECT.badge}</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-6xl font-display font-black text-[#e5e5ea] tracking-wider uppercase leading-none">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="text-lg sm:text-2xl font-headline font-bold text-[#6366f1] mt-2">
                {FEATURED_PROJECT.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#94949e] font-sans text-base leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y-2 border-[#050508]">
              {FEATURED_PROJECT.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-[10px] text-[#94949e] uppercase tracking-widest block font-bold">
                    {stat.label}
                  </span>
                  <span className="font-display font-bold text-2xl text-[#e5e5ea] block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Screen Selector Pills */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#94949e] uppercase tracking-wider block font-bold">
                Select Screen Preview:
              </span>
              <div className="flex flex-wrap gap-2">
                {FEATURED_PROJECT.mockups.map((mockup, idx) => (
                  <button
                    key={mockup.id}
                    onClick={() => {
                      soundEffects.playClick();
                      setActiveScreenIndex(idx);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border-2 border-[#050508] cursor-pointer ${
                      activeScreenIndex === idx
                        ? 'bg-[#6366f1] text-[#e5e5ea] shadow-[2px_2px_0px_#050508]'
                        : 'bg-[#12121a] text-[#94949e] hover:text-[#e5e5ea]'
                    }`}
                  >
                    0{idx + 1}. {mockup.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={FEATURED_PROJECT.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="btn-crimson w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-headline font-bold text-[#e5e5ea] tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <span>FIGMA PROTOTYPE ↗</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>

              <button
                id="featured_view_prototype_btn"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenPrototypeModal(activeScreenIndex);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#12121a] hover:bg-[#6366f1] border-2 border-[#050508] hover:border-[#6366f1] text-xs font-headline font-bold text-[#e5e5ea] tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[3px_3px_0px_#050508]"
              >
                <span>INTERACTIVE VIEWER</span>
                <span className="material-symbols-outlined text-base">fullscreen</span>
              </button>
            </div>

          </div>

          {/* Right Column: Authentic Phone Screen Component */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Phone Screen Display Container */}
            <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
              <VVIAppScreen
                screenIndex={activeScreenIndex}
                onSelectScreen={(idx) => {
                  soundEffects.playClick();
                  setActiveScreenIndex(idx);
                }}
              />

              {/* Active Screen Info Badge */}
              <div className="w-full max-w-[320px] bg-[#12121a] border-3 border-[#050508] shadow-[4px_4px_0px_#6366f1] p-3.5 rounded-2xl text-left mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#6366f1] uppercase tracking-wider block font-bold">
                    0{activeScreenIndex + 1}. {FEATURED_PROJECT.mockups[activeScreenIndex].title}
                  </span>
                  <button
                    onClick={() => onOpenPrototypeModal(activeScreenIndex)}
                    className="p-1 rounded-lg bg-[#0a0a0f] border-2 border-[#050508] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors cursor-pointer"
                    title="Fullscreen Mode"
                  >
                    <span className="material-symbols-outlined text-sm block">zoom_in</span>
                  </button>
                </div>
                <p className="text-[11px] text-[#94949e] font-sans mt-1">
                  {FEATURED_PROJECT.mockups[activeScreenIndex].description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

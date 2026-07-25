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
    <section id="featured" className="py-24 relative bg-[#0d0d0d] overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E31E24]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E31E24]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Copy */}
          <div className="lg:col-span-6 relative pl-6 border-l-4 border-[#E31E24] space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E31E24] tracking-widest uppercase font-bold bg-[#161616] px-3 py-1 rounded border-2 border-[#000000]">
              <span>{FEATURED_PROJECT.badge}</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase leading-none">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="text-lg sm:text-2xl font-headline font-bold text-[#E31E24] mt-2">
                {FEATURED_PROJECT.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#B8B8B0] font-sans text-base leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y-2 border-[#000000]">
              {FEATURED_PROJECT.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-[10px] text-[#B8B8B0] uppercase tracking-widest block font-bold">
                    {stat.label}
                  </span>
                  <span className="font-display font-bold text-2xl text-[#F5F5F0] block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Screen Selector Pills */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#B8B8B0] uppercase tracking-wider block font-bold">
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border-2 border-[#000000] cursor-pointer ${
                      activeScreenIndex === idx
                        ? 'bg-[#E31E24] text-[#F5F5F0] shadow-[2px_2px_0px_#000000]'
                        : 'bg-[#161616] text-[#B8B8B0] hover:text-[#F5F5F0]'
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
                className="btn-crimson w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-headline font-bold text-[#F5F5F0] tracking-wider uppercase flex items-center justify-center gap-2"
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#161616] hover:bg-[#E31E24] border-2 border-[#000000] hover:border-[#E31E24] text-xs font-headline font-bold text-[#F5F5F0] tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[3px_3px_0px_#000000]"
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
              <div className="w-full max-w-[320px] bg-[#161616] border-3 border-[#000000] shadow-[4px_4px_0px_#E31E24] p-3.5 rounded-2xl text-left mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#E31E24] uppercase tracking-wider block font-bold">
                    0{activeScreenIndex + 1}. {FEATURED_PROJECT.mockups[activeScreenIndex].title}
                  </span>
                  <button
                    onClick={() => onOpenPrototypeModal(activeScreenIndex)}
                    className="p-1 rounded-lg bg-[#0d0d0d] border-2 border-[#000000] text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-colors cursor-pointer"
                    title="Fullscreen Mode"
                  >
                    <span className="material-symbols-outlined text-sm block">zoom_in</span>
                  </button>
                </div>
                <p className="text-[11px] text-[#B8B8B0] font-sans mt-1">
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

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
    <section id="featured" className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00fbfb]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff4d80]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Copy */}
          <div className="lg:col-span-6 relative pl-6 border-l-4 border-[#00fbfb] space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00fbfb] tracking-widest uppercase font-bold">
              <span>{FEATURED_PROJECT.badge}</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-headline font-black text-white tracking-tight uppercase leading-tight">
                <span className="neon-pink-text">{FEATURED_PROJECT.title}</span>
              </h2>
              <p className="text-lg sm:text-xl font-headline font-semibold text-[#00fbfb] mt-1">
                {FEATURED_PROJECT.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 font-sans text-base leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#3a4a49]/60">
              {FEATURED_PROJECT.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                    {stat.label}
                  </span>
                  <span className="font-headline font-bold text-lg text-white block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Screen Selector Pills */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block">
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                      activeScreenIndex === idx
                        ? 'bg-[#00fbfb]/20 text-[#00fbfb] border-[#00fbfb]'
                        : 'bg-[#1a1a2e] text-gray-400 border-[#3a4a49] hover:text-white'
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
                className="btn-gradient w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-[#00fbfb]/30"
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1a1a2e] hover:bg-[#ff4d80] border border-[#3a4a49] hover:border-[#ff4d80] text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
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
              <div className="w-full max-w-[320px] bg-[#1a1a2e]/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#00fbfb]/50 text-left mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#00fbfb] uppercase tracking-wider block font-bold">
                    0{activeScreenIndex + 1}. {FEATURED_PROJECT.mockups[activeScreenIndex].title}
                  </span>
                  <button
                    onClick={() => onOpenPrototypeModal(activeScreenIndex)}
                    className="p-1 rounded-lg bg-[#0a0a0a] border border-[#00fbfb]/60 text-[#00fbfb] hover:bg-[#00fbfb] hover:text-black transition-colors"
                    title="Fullscreen Mode"
                  >
                    <span className="material-symbols-outlined text-sm block">zoom_in</span>
                  </button>
                </div>
                <p className="text-[11px] text-gray-300 font-sans mt-1">
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

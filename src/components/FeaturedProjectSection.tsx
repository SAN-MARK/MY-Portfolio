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
    <section id="featured" className="py-24 relative bg-[#0F1419] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Copy */}
          <div className="lg:col-span-6 relative pl-6 border-l-2 border-[#C9A961] space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 font-sans text-xs text-[#C9A961] tracking-widest uppercase font-semibold bg-[#1A1F26] px-3 py-1 rounded border border-[#2A3038]">
              <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
              <span>Featured Project</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#F5F3EE] tracking-tight leading-tight">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="font-sans font-semibold text-lg sm:text-xl text-[#C9A961] mt-2">
                {FEATURED_PROJECT.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#B8B5AD] font-sans text-base leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#2A3038]">
              {FEATURED_PROJECT.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-sans text-[11px] text-[#7A7A7A] uppercase tracking-widest block font-semibold">
                    {stat.label}
                  </span>
                  <span className="font-serif font-bold text-2xl text-[#C9A961] block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Screen Selector Pills */}
            <div className="space-y-2">
              <span className="font-sans text-xs text-[#B8B5AD] uppercase tracking-wider block font-semibold">
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
                    className={`px-3.5 py-2 rounded-[6px] text-xs font-sans font-semibold transition-all border cursor-pointer ${
                      activeScreenIndex === idx
                        ? 'bg-[#C9A961] text-[#0F1419] border-[#C9A961]'
                        : 'bg-[#1A1F26] text-[#B8B5AD] border-[#2A3038] hover:text-[#F5F3EE]'
                    }`}
                  >
                    0{idx + 1}. {mockup.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={FEATURED_PROJECT.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="btn-gold-primary w-full sm:w-auto"
              >
                <span>Figma Blueprint</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>

              <button
                id="featured_view_prototype_btn"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenPrototypeModal(activeScreenIndex);
                }}
                className="btn-gold-secondary w-full sm:w-auto"
              >
                <span>Interactive Viewer</span>
                <span className="material-symbols-outlined text-base">fullscreen</span>
              </button>
            </div>

          </div>

          {/* Right Column: Phone Screen Component */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
              <VVIAppScreen
                screenIndex={activeScreenIndex}
                onSelectScreen={(idx) => {
                  soundEffects.playClick();
                  setActiveScreenIndex(idx);
                }}
              />

              {/* Active Screen Info Badge */}
              <div className="w-full max-w-[320px] bg-[#1A1F26] border border-[#2A3038] p-4 rounded-[8px] text-left mt-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-[#C9A961] uppercase tracking-wider block font-semibold">
                    0{activeScreenIndex + 1}. {FEATURED_PROJECT.mockups[activeScreenIndex].title}
                  </span>
                  <button
                    onClick={() => onOpenPrototypeModal(activeScreenIndex)}
                    className="p-1.5 rounded bg-[#252B33] border border-[#2A3038] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F1419] transition-colors cursor-pointer"
                    title="Fullscreen Mode"
                  >
                    <span className="material-symbols-outlined text-sm block">zoom_in</span>
                  </button>
                </div>
                <p className="text-xs text-[#B8B5AD] font-sans mt-1.5">
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

import React, { useState } from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { StatItem } from '../types';
import { soundEffects } from '../utils/audio';

export const ByTheNumbersSection: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);

  return (
    <section id="numbers" className="py-20 relative bg-[#0d0d0d]">
      {/* Halftone Overlay Background */}
      <div className="absolute inset-0 bg-halftone-dots opacity-20 pointer-events-none" />

      {/* Decorative Red Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#161616] border-2 border-[#000000] text-xs font-mono text-[#E31E24] font-bold shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span>VERIFIABLE TECHNICAL METRICS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase">
            BY THE <span className="text-[#E31E24]">NUMBERS</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto rounded-full" />
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              id={`stat_card_${stat.id}`}
              onClick={() => {
                soundEffects.playClick();
                setSelectedStat(stat);
              }}
              className="bg-[#161616] p-6 rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] flex flex-col justify-between cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] group"
            >
              {/* Top Row: Icon & Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-2xl p-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-[#E31E24]">
                  {stat.icon}
                </span>

                <span className="font-mono text-[10px] text-[#F5F5F0] font-bold uppercase tracking-widest bg-[#0d0d0d] px-2.5 py-1 rounded-md border-2 border-[#000000]">
                  VERIFIED
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline font-bold text-xs text-[#B8B8B0] uppercase tracking-wider mb-2">
                {stat.title}
              </h3>

              {/* Main Stat Value */}
              <div className="mb-4">
                <span className="font-display font-black text-5xl sm:text-6xl tracking-tight block text-[#F5F5F0] group-hover:text-[#E31E24] transition-colors">
                  {stat.value}
                </span>
              </div>

              {/* Bottom Sub-label */}
              <div className="pt-3 border-t-2 border-[#000000] flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#F5F5F0]">{stat.subValue}</span>
                <span className="text-[#B8B8B0]">{stat.subLabel}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Stat Detail Modal */}
      {selectedStat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#161616] max-w-md w-full p-6 rounded-2xl border-4 border-[#000000] shadow-[8px_8px_0px_#E31E24] relative space-y-6">
            <button
              onClick={() => setSelectedStat(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0d0d0d] border-2 border-[#000000] text-[#B8B8B0] hover:text-[#F5F5F0] cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#E31E24]">
                {selectedStat.icon}
              </span>
              <div>
                <h3 className="font-headline font-bold text-xl text-[#F5F5F0] uppercase">
                  {selectedStat.title}
                </h3>
                <p className="font-mono text-xs text-[#E31E24] font-bold">Verified Growth Audit</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[#B8B8B0] text-xs font-mono">Current Total</span>
                <span className="font-display font-black text-4xl text-[#E31E24]">
                  {selectedStat.value}
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t-2 border-[#000000] text-xs font-mono">
                <span className="text-[#B8B8B0]">Daily Trajectory</span>
                <span className="text-[#F5F5F0] font-bold">{selectedStat.subValue} ({selectedStat.subLabel})</span>
              </div>
            </div>

            <p className="text-xs text-[#B8B8B0] font-sans leading-relaxed">
              This metric reflects authentic, organic performance and activity across engineering projects, repositories, and UI systems.
            </p>

            <button
              onClick={() => setSelectedStat(null)}
              className="w-full py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] text-xs font-headline font-bold text-[#F5F5F0] uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_#000000]"
            >
              CLOSE AUDIT
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

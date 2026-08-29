import React, { useState } from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { StatItem } from '../types';
import { soundEffects } from '../utils/audio';

export const ByTheNumbersSection: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);

  return (
    <section id="numbers" className="py-20 relative bg-[#0a0a0f]">
      {/* Halftone Overlay Background */}
      <div className="absolute inset-0 bg-halftone-dots opacity-20 pointer-events-none" />

      {/* Decorative Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12121a] border-2 border-[#050508] text-xs font-mono text-[#6366f1] font-bold shadow-[2px_2px_0px_#050508]">
            <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse"></span>
            <span>VERIFIABLE TECHNICAL METRICS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#e5e5ea] tracking-wider uppercase">
            BY THE <span className="text-[#6366f1]">NUMBERS</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#6366f1] mx-auto rounded-full" />
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
              className="bg-[#12121a] p-6 rounded-2xl border-3 border-[#050508] shadow-[5px_5px_0px_#050508] flex flex-col justify-between cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:border-[#6366f1] hover:shadow-[6px_6px_0px_#6366f1] group"
            >
              {/* Top Row: Icon & Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-2xl p-2.5 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] text-[#6366f1]">
                  {stat.icon}
                </span>

                <span className="font-mono text-[10px] text-[#e5e5ea] font-bold uppercase tracking-widest bg-[#0a0a0f] px-2.5 py-1 rounded-md border-2 border-[#050508]">
                  VERIFIED
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline font-bold text-xs text-[#94949e] uppercase tracking-wider mb-2">
                {stat.title}
              </h3>

              {/* Main Stat Value */}
              <div className="mb-4">
                <span className="font-display font-black text-5xl sm:text-6xl tracking-tight block text-[#e5e5ea] group-hover:text-[#6366f1] transition-colors">
                  {stat.value}
                </span>
              </div>

              {/* Bottom Sub-label */}
              <div className="pt-3 border-t-2 border-[#050508] flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#e5e5ea]">{stat.subValue}</span>
                <span className="text-[#94949e]">{stat.subLabel}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Stat Detail Modal */}
      {selectedStat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#12121a] max-w-md w-full p-6 rounded-2xl border-4 border-[#050508] shadow-[8px_8px_0px_#6366f1] relative space-y-6">
            <button
              onClick={() => setSelectedStat(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0a0a0f] border-2 border-[#050508] text-[#94949e] hover:text-[#e5e5ea] cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#6366f1]">
                {selectedStat.icon}
              </span>
              <div>
                <h3 className="font-headline font-bold text-xl text-[#e5e5ea] uppercase">
                  {selectedStat.title}
                </h3>
                <p className="font-mono text-xs text-[#6366f1] font-bold">Verified Growth Audit</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[#94949e] text-xs font-mono">Current Total</span>
                <span className="font-display font-black text-4xl text-[#6366f1]">
                  {selectedStat.value}
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t-2 border-[#050508] text-xs font-mono">
                <span className="text-[#94949e]">Daily Trajectory</span>
                <span className="text-[#e5e5ea] font-bold">{selectedStat.subValue} ({selectedStat.subLabel})</span>
              </div>
            </div>

            <p className="text-xs text-[#94949e] font-sans leading-relaxed">
              This metric reflects authentic, organic performance and activity across engineering projects, repositories, and UI systems.
            </p>

            <button
              onClick={() => setSelectedStat(null)}
              className="w-full py-2.5 rounded-xl bg-[#0a0a0f] border-2 border-[#050508] hover:border-[#6366f1] text-xs font-headline font-bold text-[#e5e5ea] uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_#050508]"
            >
              CLOSE AUDIT
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

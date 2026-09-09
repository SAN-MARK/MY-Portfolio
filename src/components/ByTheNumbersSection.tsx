import React, { useState } from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { StatItem } from '../types';
import { soundEffects } from '../utils/audio';

export const ByTheNumbersSection: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);

  return (
    <section id="numbers" className="py-20 relative bg-[#07070a]">
      {/* Halftone Dot Overlay Background */}
      <div className="absolute inset-0 bg-halftone-gold opacity-15 pointer-events-none" />

      {/* Comic Panel Divider Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
            <span>POWER STATS // BATTLE-TESTED METRICS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            POWER <span className="crimson-text">STATS</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full shadow-[0_0_10px_rgba(226,29,36,0.6)]" />
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
              className="comic-card p-6 rounded-2xl border-3 border-[#040406] flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle Halftone Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-halftone-dots opacity-20 pointer-events-none" />

              {/* Top Row: Icon & Label */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="material-symbols-outlined text-2xl p-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-[#fbbf24] shadow-[2px_2px_0px_#040406] group-hover:text-[#00f0ff] group-hover:border-[#00f0ff] transition-colors">
                  {stat.icon}
                </span>

                <span className="font-mono text-[10px] text-[#f3f4f6] font-bold uppercase tracking-widest bg-[#07070a] px-2.5 py-1 rounded-md border-2 border-[#040406] flex items-center gap-1 shadow-[2px_2px_0px_#040406]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                  VERIFIED
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline font-bold text-xs text-[#9ca3af] uppercase tracking-wider mb-2 relative z-10">
                {stat.title}
              </h3>

              {/* Main Stat Value with Gold Emphasis */}
              <div className="mb-4 relative z-10">
                <span className="font-display font-black text-5xl sm:text-6xl tracking-tight block text-[#fbbf24] group-hover:text-[#00f0ff] transition-colors">
                  {stat.value}
                </span>
              </div>

              {/* Bottom Sub-label */}
              <div className="pt-3 border-t-2 border-[#040406] flex items-center justify-between text-xs font-mono relative z-10">
                <span className="font-bold text-[#f3f4f6]">{stat.subValue}</span>
                <span className="text-[#9ca3af]">{stat.subLabel}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Stat Detail Modal */}
      {selectedStat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0f0f18] max-w-md w-full p-6 rounded-2xl border-4 border-[#040406] shadow-[8px_8px_0px_#fbbf24] relative space-y-6">
            <button
              onClick={() => setSelectedStat(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#07070a] border-2 border-[#040406] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#e21d24] cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#fbbf24]">
                {selectedStat.icon}
              </span>
              <div>
                <h3 className="font-headline font-bold text-xl text-[#f3f4f6] uppercase">
                  {selectedStat.title}
                </h3>
                <p className="font-mono text-xs text-[#e21d24] font-bold">Verified Mission Audit</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#07070a] border-2 border-[#040406] space-y-3 shadow-[3px_3px_0px_#040406]">
              <div className="flex items-baseline justify-between">
                <span className="text-[#9ca3af] text-xs font-mono">Current Total</span>
                <span className="font-display font-black text-4xl text-[#fbbf24]">
                  {selectedStat.value}
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t-2 border-[#040406] text-xs font-mono">
                <span className="text-[#9ca3af]">Deployment Trajectory</span>
                <span className="text-[#f3f4f6] font-bold">{selectedStat.subValue} ({selectedStat.subLabel})</span>
              </div>
            </div>

            <p className="text-xs text-[#9ca3af] font-sans leading-relaxed">
              This metric reflects authentic, production-grade performance across active client repositories, design systems, and software engineering missions.
            </p>

            <button
              onClick={() => setSelectedStat(null)}
              className="w-full btn-crimson py-2.5 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider cursor-pointer"
            >
              CLOSE AUDIT
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

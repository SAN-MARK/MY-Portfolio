import React, { useState } from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { StatItem } from '../types';
import { soundEffects } from '../utils/audio';

export const ByTheNumbersSection: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);

  const getBorderGlowClass = (accent: StatItem['accentColor']) => {
    switch (accent) {
      case 'pink':
        return 'hover:border-[#ff4d80] hover:shadow-[0_0_20px_rgba(255,77,128,0.4)]';
      case 'cyan':
        return 'hover:border-[#00fbfb] hover:shadow-[0_0_20px_rgba(0,251,251,0.4)]';
      case 'purple':
        return 'hover:border-[#abc7ff] hover:shadow-[0_0_20px_rgba(171,199,255,0.4)]';
      case 'green':
        return 'hover:border-[#00dddd] hover:shadow-[0_0_20px_rgba(0,221,221,0.4)]';
      default:
        return 'hover:border-[#00fbfb]';
    }
  };

  const getAccentTextColor = (accent: StatItem['accentColor']) => {
    switch (accent) {
      case 'pink':
        return 'text-[#ff4d80]';
      case 'cyan':
        return 'text-[#00fbfb]';
      case 'purple':
        return 'text-[#abc7ff]';
      case 'green':
        return 'text-[#00dddd]';
      default:
        return 'text-white';
    }
  };

  return (
    <section id="numbers" className="py-20 relative bg-[#0a0a0a]">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d80]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a2e] border border-[#3a4a49] text-xs font-mono text-[#00fbfb]">
            <span className="w-2 h-2 rounded-full bg-[#00fbfb] animate-pulse"></span>
            <span>VERIFIABLE TECHNICAL METRICS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white tracking-tight uppercase">
            BY THE <span className="neon-pink-text">NUMBERS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff4d80] to-[#00fbfb] mx-auto rounded-full" />
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
              className={`glass-card p-6 rounded-2xl border border-[#3a4a49]/60 flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 group ${getBorderGlowClass(
                stat.accentColor
              )}`}
            >
              {/* Top Row: Icon & Label */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`material-symbols-outlined text-2xl p-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49]/60 ${getAccentTextColor(
                    stat.accentColor
                  )}`}
                >
                  {stat.icon}
                </span>

                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest bg-[#0a0a0a] px-2.5 py-1 rounded-md border border-[#3a4a49]/40">
                  VERIFIED
                </span>
              </div>

              {/* Title */}
              <h3 className="font-mono text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
                {stat.title}
              </h3>

              {/* Main Stat Value */}
              <div className="mb-4">
                <span
                  className={`font-headline font-black text-4xl sm:text-5xl tracking-tight block ${getAccentTextColor(
                    stat.accentColor
                  )}`}
                >
                  {stat.value}
                </span>
              </div>

              {/* Bottom Sub-label */}
              <div className="pt-3 border-t border-[#3a4a49]/40 flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-white">{stat.subValue}</span>
                <span className="text-gray-400">{stat.subLabel}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Stat Detail Modal */}
      {selectedStat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-md w-full p-6 rounded-2xl border border-[#ff4d80] relative space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedStat(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0a0a0a] border border-[#3a4a49] text-gray-400 hover:text-white"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-3">
              <span className={`material-symbols-outlined text-3xl ${getAccentTextColor(selectedStat.accentColor)}`}>
                {selectedStat.icon}
              </span>
              <div>
                <h3 className="font-headline font-bold text-lg text-white uppercase">
                  {selectedStat.title}
                </h3>
                <p className="font-mono text-xs text-gray-400">Verified Growth Audit</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#3a4a49]/60 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-gray-400 text-xs font-mono">Current Total</span>
                <span className={`font-headline font-bold text-3xl ${getAccentTextColor(selectedStat.accentColor)}`}>
                  {selectedStat.value}
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t border-[#3a4a49]/40 text-xs font-mono">
                <span className="text-gray-400">Daily Trajectory</span>
                <span className="text-white font-semibold">{selectedStat.subValue} ({selectedStat.subLabel})</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              This metric reflects authentic, organic audience growth across professional networks and tech leadership circles over the past 7 months.
            </p>

            <button
              onClick={() => setSelectedStat(null)}
              className="w-full py-2.5 rounded-xl bg-[#1a1a2e] border border-[#3a4a49] hover:border-[#ff4d80] text-xs font-headline font-bold text-white uppercase tracking-wider"
            >
              CLOSE AUDIT
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

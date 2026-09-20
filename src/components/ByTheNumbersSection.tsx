import React from 'react';
import { STATS_DATA } from '../data/portfolioData';
import { PullQuote } from './PullQuote';

export const ByTheNumbersSection: React.FC = () => {
  return (
    <section id="numbers" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
            About & Key Metrics
          </span>
          <h2 className="font-serif font-bold text-[#F5F3EE] tracking-tight">
            Impact <span className="italic font-normal text-[#C9A961]">By Numbers</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="unified-card flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#C9A961] font-semibold block">
                  {stat.title}
                </span>
                <span className="font-serif font-bold text-5xl text-[#C9A961] block">
                  {stat.value}
                </span>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2A3038] flex items-center justify-between text-xs font-sans text-[#7A7A7A]">
                <span className="font-semibold text-[#B8B5AD]">{stat.subValue}</span>
                <span>{stat.subLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated PullQuote Component */}
        <PullQuote
          quote="From starting with zero tech background and borrowing a laptop in 2013 under a TN Govt scheme, to building full-stack AI networks and mentoring 25+ peers — engineering is about democratizing access."
          author="Sanjeev M, BCA Student & Full-Stack Developer"
        />

      </div>
    </section>
  );
};

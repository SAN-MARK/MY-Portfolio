import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    soundEffects.playClick();
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block">
            Direct Inquiry
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#F5F3EE] tracking-tight leading-tight">
            Let&apos;s build something <span className="italic font-normal text-[#C9A961]">meaningful.</span>
          </h2>
          <p className="font-sans text-base text-[#B8B5AD] max-w-xl mx-auto leading-relaxed pt-2">
            Available for full-stack engineering roles, design consultations, and high-impact product development.
          </p>
        </div>

        {/* Large Email Link */}
        <div className="py-6">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="font-serif italic text-3xl sm:text-5xl text-[#C9A961] hover:text-[#F5F3EE] transition-colors underline decoration-1 underline-offset-8"
          >
            {PROFILE_DATA.email}
          </a>
          <button
            onClick={copyEmail}
            className="block mx-auto mt-4 font-sans text-xs uppercase tracking-wider text-[#7A7A7A] hover:text-[#F5F3EE] transition-colors cursor-pointer"
          >
            {copied ? '✓ Copied to clipboard' : 'Click to copy email address'}
          </button>
        </div>

        {/* Direct Links Row */}
        <div className="pt-8 border-t border-[#2A3038] flex flex-wrap items-center justify-center gap-8 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#B8B5AD]">
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A961] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A961] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={PROFILE_DATA.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A961] transition-colors"
          >
            YouTube ↗
          </a>
          <a
            href={`tel:${PROFILE_DATA.phone}`}
            className="hover:text-[#C9A961] transition-colors"
          >
            Phone ↗
          </a>
        </div>

      </div>
    </section>
  );
};

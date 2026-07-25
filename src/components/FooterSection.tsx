import React, { useState } from 'react';
import { soundEffects } from '../utils/audio';
import { downloadResumeFile } from '../utils/resume';

export const FooterSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const scrollTo = (id: string) => {
    soundEffects.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(0);

    downloadResumeFile(
      (prog) => setDownloadProgress(prog),
      () => {
        setTimeout(() => {
          setIsDownloading(false);
          setDownloadProgress(0);
        }, 1200);
      }
    );
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#3a4a49]/60 pt-12 pb-8 overflow-hidden">
      {/* Top Thin Neon Cyan Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00fbfb] to-transparent shadow-[0_0_8px_#00fbfb]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Terminal Indicator & Resume Download */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left flex-wrap">
            <div>
              <span className="font-headline font-bold text-xl text-white tracking-wider">
                SANJEEV M
              </span>
              <span className="font-mono text-[10px] text-[#00fbfb] block tracking-widest uppercase">
                CREATIVE DEVELOPER PORTFOLIO
              </span>
            </div>

            {/* Build Status Terminal Box */}
            <div className="px-3 py-1.5 rounded-lg bg-[#1a1a2e] border border-[#00fbfb]/50 text-[11px] font-mono text-[#00fbfb] flex items-center gap-2 shadow-[0_0_10px_rgba(0,251,251,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00fbfb] animate-pulse" />
              <span>BUILD_SUCCESSFUL: 2026_VERSION_v.9.0</span>
            </div>

            {/* Neon Download Resume CTA Button */}
            <button
              id="footer_download_resume_btn"
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="relative px-3.5 py-1.5 rounded-lg bg-[#1a1a2e] border border-[#ff4d80]/70 hover:border-[#ff4d80] text-[#ff4d80] hover:bg-[#ff4d80]/10 text-xs font-mono transition-all duration-200 flex items-center gap-2 shadow-[0_0_12px_rgba(255,77,128,0.3)] hover:shadow-[0_0_18px_rgba(255,77,128,0.6)] cursor-pointer overflow-hidden"
              title="Download Sanjeev M's Official Resume"
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDownloading ? 'bg-[#00fbfb]' : 'bg-[#ff4d80]'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDownloading ? 'bg-[#00fbfb]' : 'bg-[#ff4d80]'}`}></span>
              </span>

              <span className="material-symbols-outlined text-sm text-[#ff4d80]">
                {isDownloading ? 'downloading' : 'download'}
              </span>

              <span className="font-bold tracking-wider uppercase">
                {isDownloading ? `RESUME ${downloadProgress}%` : 'DOWNLOAD RESUME'}
              </span>

              {isDownloading && (
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#00fbfb] transition-all duration-150 shadow-[0_0_6px_#00fbfb]"
                  style={{ width: `${downloadProgress}%` }}
                />
              )}
            </button>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-gray-400">
            <button onClick={() => scrollTo('hero')} className="hover:text-[#ff4d80] transition-colors">
              HERO
            </button>
            <button onClick={() => scrollTo('numbers')} className="hover:text-[#00fbfb] transition-colors">
              METRICS
            </button>
            <button onClick={() => scrollTo('work')} className="hover:text-[#ff4d80] transition-colors">
              WORK
            </button>
            <button onClick={() => scrollTo('featured')} className="hover:text-[#00fbfb] transition-colors">
              FEATURED
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-[#abc7ff] transition-colors">
              SKILLS
            </button>
            <button onClick={() => scrollTo('experience')} className="hover:text-[#00dddd] transition-colors">
              EXP
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#ff4d80] transition-colors">
              CONTACT
            </button>
          </nav>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#3a4a49]/40 w-full" />

        {/* Bottom Credits & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© 2026 Sanjeev M. All rights reserved.</p>

          <p className="flex items-center gap-2">
            <span>Designed & Built by</span>
            <span className="text-[#00fbfb] font-bold">SANJEEV M</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">PORTFOLIO_ECOSYSTEM_V1.0</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

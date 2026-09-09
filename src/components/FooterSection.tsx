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
    <footer className="relative bg-[#07070a] border-t-3 border-[#040406] pt-12 pb-8 overflow-hidden">
      {/* Top Accent Comic Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Terminal Indicator & Resume Download */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left flex-wrap">
            <div>
              <span className="font-display font-bold text-2xl text-[#f3f4f6] tracking-wider uppercase">
                SANJEEV M
              </span>
              <span className="font-mono text-[10px] text-[#fbbf24] font-bold block tracking-widest uppercase">
                CREATIVE DEVELOPER PORTFOLIO
              </span>
            </div>

            {/* Build Status Terminal Box */}
            <div className="px-3 py-1.5 rounded-lg bg-[#0f0f18] border-2 border-[#040406] text-[11px] font-mono text-[#f3f4f6] font-bold flex items-center gap-2 shadow-[2px_2px_0px_#040406]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>SUPERHERO_COMIC_GRID_V1.0</span>
            </div>

            {/* Download Resume CTA Button */}
            <button
              id="footer_download_resume_btn"
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="btn-crimson relative px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer overflow-hidden text-white"
              title="Download Sanjeev M's Official Resume"
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDownloading ? 'bg-[#00f0ff]' : 'bg-[#00f0ff]'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]`}></span>
              </span>

              <span className="material-symbols-outlined text-sm text-[#fbbf24]">
                {isDownloading ? 'downloading' : 'download'}
              </span>

              <span className="font-bold tracking-wider uppercase">
                {isDownloading ? `RESUME ${downloadProgress}%` : 'DOWNLOAD RESUME'}
              </span>

              {isDownloading && (
                <div
                  className="absolute bottom-0 left-0 h-[3px] bg-[#00f0ff] transition-all duration-150"
                  style={{ width: `${downloadProgress}%` }}
                />
              )}
            </button>
          </div>

          {/* Synchronized Quick Links matching Top Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs font-bold text-[#9ca3af]">
            <button onClick={() => scrollTo('hero')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              ORIGIN
            </button>
            <button onClick={() => scrollTo('numbers')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              POWER STATS
            </button>
            <button onClick={() => scrollTo('work')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              MISSIONS
            </button>
            <button onClick={() => scrollTo('featured')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              SIGNATURE
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              ARSENAL
            </button>
            <button onClick={() => scrollTo('courses')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              TRAINING ARC
            </button>
            <button onClick={() => scrollTo('github')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              THE VAULT
            </button>
            <button onClick={() => scrollTo('achievements')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              VICTORIES
            </button>
            <button onClick={() => scrollTo('experience')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
              MISSION LOG
            </button>
            <button onClick={() => scrollTo('youtube')} className="hover:text-[#e21d24] transition-colors cursor-pointer flex items-center gap-1">
              COMMS
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#fbbf24] transition-colors cursor-pointer">
              ASSEMBLE
            </button>
          </nav>

        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#040406] w-full" />

        {/* Bottom Credits & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#9ca3af] font-bold gap-4">
          <p>© 2026 Sanjeev M. All rights reserved.</p>

          <p className="flex items-center gap-2">
            <span>Designed & Built by</span>
            <span className="text-[#e21d24] font-bold">SANJEEV M</span>
            <span className="text-[#040406]">|</span>
            <span className="text-[#fbbf24]">SUPERHERO_COMIC_EDITION</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

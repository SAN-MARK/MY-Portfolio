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
    <footer className="relative bg-[#0d0d0d] border-t-3 border-[#000000] pt-12 pb-8 overflow-hidden">
      {/* Top Red Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E31E24]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Terminal Indicator & Resume Download */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left flex-wrap">
            <div>
              <span className="font-display font-bold text-2xl text-[#F5F5F0] tracking-wider uppercase">
                SANJEEV M
              </span>
              <span className="font-mono text-[10px] text-[#E31E24] font-bold block tracking-widest uppercase">
                CREATIVE DEVELOPER PORTFOLIO
              </span>
            </div>

            {/* Build Status Terminal Box */}
            <div className="px-3 py-1.5 rounded-lg bg-[#161616] border-2 border-[#000000] text-[11px] font-mono text-[#F5F5F0] font-bold flex items-center gap-2 shadow-[2px_2px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
              <span>BUILD_SUCCESSFUL: CRIMSON_WEB_V9.0</span>
            </div>

            {/* Download Resume CTA Button */}
            <button
              id="footer_download_resume_btn"
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="btn-crimson relative px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer overflow-hidden text-[#F5F5F0]"
              title="Download Sanjeev M's Official Resume"
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDownloading ? 'bg-[#F5F5F0]' : 'bg-[#F5F5F0]'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-[#F5F5F0]`}></span>
              </span>

              <span className="material-symbols-outlined text-sm text-[#F5F5F0]">
                {isDownloading ? 'downloading' : 'download'}
              </span>

              <span className="font-bold tracking-wider uppercase">
                {isDownloading ? `RESUME ${downloadProgress}%` : 'DOWNLOAD RESUME'}
              </span>

              {isDownloading && (
                <div
                  className="absolute bottom-0 left-0 h-[3px] bg-[#F5F5F0] transition-all duration-150"
                  style={{ width: `${downloadProgress}%` }}
                />
              )}
            </button>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs font-bold text-[#B8B8B0]">
            <button onClick={() => scrollTo('hero')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              HERO
            </button>
            <button onClick={() => scrollTo('numbers')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              METRICS
            </button>
            <button onClick={() => scrollTo('work')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              WORK
            </button>
            <button onClick={() => scrollTo('featured')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              FEATURED
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              SKILLS
            </button>
            <button onClick={() => scrollTo('courses')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              COURSES
            </button>
            <button onClick={() => scrollTo('achievements')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              ACHIEVEMENTS
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#E31E24] transition-colors cursor-pointer">
              CONTACT
            </button>
          </nav>

        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#000000] w-full" />

        {/* Bottom Credits & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#B8B8B0] font-bold gap-4">
          <p>© 2026 Sanjeev M. All rights reserved.</p>

          <p className="flex items-center gap-2">
            <span>Designed & Built by</span>
            <span className="text-[#E31E24] font-bold">SANJEEV M</span>
            <span className="text-[#000000]">|</span>
            <span className="text-[#F5F5F0]">CRIMSON_WEB_V1.0</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { soundEffects } from '../utils/audio';
import { downloadResumeFile } from '../utils/resume';

interface NavbarProps {
  activeSection: string;
  onOpenHireModal: () => void;
  onOpenAiModal: () => void;
  scanlinesEnabled: boolean;
  onToggleScanlines: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenHireModal,
  onOpenAiModal,
  scanlinesEnabled,
  onToggleScanlines,
  soundEnabled,
  onToggleSound,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloadingResume, setIsDownloadingResume] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    if (isDownloadingResume) return;
    setIsDownloadingResume(true);
    setDownloadProgress(0);

    downloadResumeFile(
      (prog) => setDownloadProgress(prog),
      () => {
        setTimeout(() => {
          setIsDownloadingResume(false);
          setDownloadProgress(0);
        }, 1200);
      }
    );
  };

  const navLinks = [
    { id: 'hero', label: 'HERO', num: '01' },
    { id: 'numbers', label: 'METRICS', num: '02' },
    { id: 'work', label: 'WORK', num: '03' },
    { id: 'featured', label: 'FEATURED', num: '04' },
    { id: 'skills', label: 'SKILLS', num: '05' },
    { id: 'github', label: 'GITHUB', num: '06' },
    { id: 'courses', label: 'COURSES', num: '08' },
    { id: 'achievements', label: 'ACHIEVEMENTS', num: '09' },
    { id: 'experience', label: 'EXP', num: '07' },
    { id: 'contact', label: 'CONTACT', num: '10' },
  ];

  const scrollToSection = (id: string) => {
    soundEffects.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main_nav_header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#3a4a49]/50 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav_brand_logo_btn"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff4d80] to-[#00fbfb] p-[1px] shadow-[0_0_10px_rgba(255,77,128,0.5)]">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center font-headline font-bold text-sm text-white">
                S
              </div>
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00fbfb] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00fbfb]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-headline font-bold text-lg tracking-wider text-white group-hover:text-[#00fbfb] transition-colors">
              SANJEEV M
            </span>
            <span className="font-mono text-[10px] text-[#00fbfb]/80 tracking-widest uppercase">
              CREATIVE DEVELOPER
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#1a1a2e]/60 border border-[#3a4a49]/40 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav_link_${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#ff4d80]/20 text-[#ff4d80] border border-[#ff4d80]/50 shadow-[0_0_10px_rgba(255,77,128,0.3)]'
                    : 'text-[#e1e3e4]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-[9px] opacity-60">{link.num}.</span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Controls & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Ask AI Twin Button */}
          <button
            id="nav_ai_twin_btn"
            onClick={() => {
              soundEffects.playBeep();
              onOpenAiModal();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1a2e] border border-[#00fbfb]/40 text-[#00fbfb] hover:bg-[#00fbfb]/10 hover:border-[#00fbfb] text-xs font-mono transition-all duration-200 group"
            title="Ask Sanjeev's AI Twin"
          >
            <span className="material-symbols-outlined text-sm animate-pulse text-[#00fbfb]">
              smart_toy
            </span>
            <span className="tracking-wide">AI TWIN</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            id="nav_scanlines_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              onToggleScanlines();
            }}
            className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
              scanlinesEnabled
                ? 'bg-[#ff4d80]/20 border-[#ff4d80] text-[#ff4d80]'
                : 'bg-[#1a1a2e] border-[#3a4a49] text-gray-400 hover:text-white'
            }`}
            title={scanlinesEnabled ? 'Scanlines Enabled' : 'Scanlines Disabled'}
          >
            <span className="material-symbols-outlined text-sm block">
              {scanlinesEnabled ? 'grid_on' : 'grid_off'}
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            id="nav_sound_toggle_btn"
            onClick={() => {
              onToggleSound();
            }}
            className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
              soundEnabled
                ? 'bg-[#00fbfb]/20 border-[#00fbfb] text-[#00fbfb]'
                : 'bg-[#1a1a2e] border-[#3a4a49] text-gray-400 hover:text-white'
            }`}
            title={soundEnabled ? 'Audio Effects On' : 'Audio Muted'}
          >
            <span className="material-symbols-outlined text-sm block">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Download Resume Button with Neon Indicator */}
          <button
            id="nav_download_resume_btn"
            onClick={handleDownloadResume}
            disabled={isDownloadingResume}
            className="relative px-3.5 py-1.5 rounded-lg bg-[#1a1a2e] border border-[#00fbfb]/60 hover:border-[#00fbfb] text-[#00fbfb] hover:bg-[#00fbfb]/10 text-xs font-mono transition-all duration-200 flex items-center gap-2 shadow-[0_0_12px_rgba(0,251,251,0.25)] hover:shadow-[0_0_18px_rgba(0,251,251,0.5)] group overflow-hidden"
            title="Download Sanjeev M's Resume (PDF/TXT)"
          >
            {/* Neon Indicator Dot */}
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDownloadingResume ? 'bg-[#ff4d80]' : 'bg-[#00fbfb]'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isDownloadingResume ? 'bg-[#ff4d80]' : 'bg-[#00fbfb]'}`}></span>
            </span>

            <span className="material-symbols-outlined text-sm text-[#00fbfb]">
              {isDownloadingResume ? 'downloading' : 'description'}
            </span>

            <span className="font-bold tracking-wider uppercase">
              {isDownloadingResume ? `${downloadProgress}%` : 'RESUME'}
            </span>

            {/* Neon Progress Overlay Bar */}
            {isDownloadingResume && (
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-[#ff4d80] transition-all duration-150 shadow-[0_0_6px_#ff4d80]"
                style={{ width: `${downloadProgress}%` }}
              />
            )}
          </button>

          {/* Hire Me CTA */}
          <button
            id="nav_hire_me_btn"
            onClick={() => {
              soundEffects.playClick();
              onOpenHireModal();
            }}
            className="btn-gradient px-4 py-2 rounded-lg text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center gap-2 cursor-pointer"
          >
            <span>HIRE ME</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile_ai_btn"
            onClick={onOpenAiModal}
            className="p-2 rounded-lg bg-[#1a1a2e] border border-[#00fbfb]/50 text-[#00fbfb]"
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
          </button>

          <button
            id="mobile_menu_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-[#1a1a2e] border border-[#3a4a49] text-white focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#3a4a49] px-4 py-6 mt-3 space-y-4 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile_nav_link_${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`p-3 rounded-lg text-left text-xs font-mono border flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#ff4d80]/20 border-[#ff4d80] text-[#ff4d80]'
                    : 'bg-[#1a1a2e]/80 border-[#3a4a49] text-gray-300'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-gray-500">{link.num}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#3a4a49]/60 flex flex-col gap-2">
            <button
              id="mobile_download_resume_btn"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
              className="w-full py-2.5 rounded-lg bg-[#1a1a2e] border border-[#00fbfb] text-xs font-mono text-[#00fbfb] flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,251,251,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00fbfb] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00fbfb]"></span>
              </span>
              <span className="material-symbols-outlined text-sm">description</span>
              <span className="font-bold tracking-wider">DOWNLOAD RESUME</span>
            </button>

            <div className="flex items-center justify-between gap-2">
              <button
                id="mobile_scanline_toggle"
                onClick={onToggleScanlines}
                className="flex-1 py-2 rounded-lg bg-[#1a1a2e] border border-[#3a4a49] text-xs font-mono text-gray-300 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  {scanlinesEnabled ? 'grid_on' : 'grid_off'}
                </span>
                <span>Scanlines</span>
              </button>

              <button
                id="mobile_hire_cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="flex-1 btn-gradient py-2 rounded-lg text-xs font-headline font-bold text-white text-center"
              >
                HIRE ME →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

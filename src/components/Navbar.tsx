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
    { id: 'hero', label: 'ORIGIN', num: '01' },
    { id: 'numbers', label: 'POWER STATS', num: '02' },
    { id: 'work', label: 'MISSIONS', num: '03' },
    { id: 'featured', label: 'SIGNATURE', num: '04' },
    { id: 'skills', label: 'ARSENAL', num: '05' },
    { id: 'courses', label: 'TRAINING ARC', num: '06' },
    { id: 'github', label: 'THE VAULT', num: '07' },
    { id: 'achievements', label: 'VICTORIES', num: '08' },
    { id: 'experience', label: 'MISSION LOG', num: '09' },
    { id: 'youtube', label: 'COMMS', num: '10' },
    { id: 'contact', label: 'ASSEMBLE', num: '11' },
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
          ? 'bg-[#07070a]/95 backdrop-blur-md border-b-2 border-[#040406] py-3 shadow-[0_4px_16px_rgba(0,0,0,0.9)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav_brand_logo_btn"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-[#e21d24] border-2 border-[#040406] shadow-[2px_2px_0px_#fbbf24] flex items-center justify-center font-display font-black text-lg text-white group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors">
              SANJEEV M
            </span>
            <span className="font-mono text-[10px] text-[#fbbf24] font-bold tracking-widest uppercase">
              CREATIVE DEVELOPER
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#0f0f18] border-2 border-[#040406] rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#040406]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav_link_${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-[#e21d24] text-white font-bold border border-[#040406] shadow-[2px_2px_0px_#fbbf24]'
                    : 'text-[#9ca3af] hover:text-[#00f0ff] hover:bg-[#00f0ff]/10'
                }`}
              >
                <span className="text-[9px] opacity-70">{link.num}.</span>
                <span className="tracking-wide uppercase font-bold">{link.label}</span>
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
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f0f18] border-2 border-[#040406] shadow-[2px_2px_0px_#040406] text-[#f3f4f6] hover:border-[#00f0ff] hover:text-[#00f0ff] text-xs font-mono transition-all duration-200 cursor-pointer"
            title="Ask Sanjeev's AI Twin"
          >
            <span className="material-symbols-outlined text-sm animate-pulse text-[#fbbf24]">
              smart_toy
            </span>
            <span className="tracking-wide font-bold">AI TWIN</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            id="nav_scanlines_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              onToggleScanlines();
            }}
            className={`p-1.5 rounded-lg border-2 border-[#040406] text-xs font-mono transition-all cursor-pointer ${
              scanlinesEnabled
                ? 'bg-[#e21d24] text-white shadow-[2px_2px_0px_#040406]'
                : 'bg-[#0f0f18] text-[#9ca3af] hover:text-[#f3f4f6]'
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
            className={`p-1.5 rounded-lg border-2 border-[#040406] text-xs font-mono transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-[#f59e0b] text-[#040406] font-bold shadow-[2px_2px_0px_#040406]'
                : 'bg-[#0f0f18] text-[#9ca3af] hover:text-[#f3f4f6]'
            }`}
            title={soundEnabled ? 'Audio Effects On' : 'Audio Muted'}
          >
            <span className="material-symbols-outlined text-sm block">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Download Resume Button */}
          <button
            id="nav_download_resume_btn"
            onClick={handleDownloadResume}
            disabled={isDownloadingResume}
            className="relative px-3.5 py-1.5 rounded-lg bg-[#0f0f18] border-2 border-[#040406] shadow-[2px_2px_0px_#e21d24] text-[#f3f4f6] hover:border-[#00f0ff] hover:text-[#00f0ff] text-xs font-mono transition-all duration-200 flex items-center gap-2 overflow-hidden cursor-pointer"
            title="Download Sanjeev M's Resume (PDF/TXT)"
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]`}></span>
            </span>

            <span className="material-symbols-outlined text-sm text-[#fbbf24]">
              {isDownloadingResume ? 'downloading' : 'description'}
            </span>

            <span className="font-bold tracking-wider uppercase">
              {isDownloadingResume ? `${downloadProgress}%` : 'RESUME'}
            </span>

            {isDownloadingResume && (
              <div
                className="absolute bottom-0 left-0 h-[3px] bg-[#00f0ff] transition-all duration-150"
                style={{ width: `${downloadProgress}%` }}
              />
            )}
          </button>

          {/* Recruit Me CTA */}
          <button
            id="nav_hire_me_btn"
            onClick={() => {
              soundEffects.playClick();
              onOpenHireModal();
            }}
            className="btn-crimson px-4 py-2 rounded-lg text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center gap-2 cursor-pointer"
          >
            <span>RECRUIT ME</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile_ai_btn"
            onClick={onOpenAiModal}
            className="p-2 rounded-lg bg-[#0f0f18] border-2 border-[#040406] text-[#fbbf24]"
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
          </button>

          <button
            id="mobile_menu_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-[#0f0f18] border-2 border-[#040406] text-[#f3f4f6] focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07070a]/98 border-b-4 border-[#040406] px-4 py-6 mt-3 space-y-4 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile_nav_link_${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`p-3 rounded-lg text-left text-xs font-mono border-2 flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#e21d24] border-[#040406] text-white font-bold shadow-[2px_2px_0px_#fbbf24]'
                    : 'bg-[#0f0f18] border-[#040406] text-[#9ca3af]'
                }`}
              >
                <span className="uppercase">{link.label}</span>
                <span className="text-[10px] opacity-70">{link.num}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t-2 border-[#040406] flex flex-col gap-2">
            <button
              id="mobile_download_resume_btn"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
              className="w-full py-2.5 rounded-lg bg-[#0f0f18] border-2 border-[#040406] shadow-[2px_2px_0px_#e21d24] text-xs font-mono text-[#f3f4f6] flex items-center justify-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
              </span>
              <span className="material-symbols-outlined text-sm text-[#fbbf24]">description</span>
              <span className="font-bold tracking-wider">DOWNLOAD RESUME</span>
            </button>

            <div className="flex items-center justify-between gap-2">
              <button
                id="mobile_scanline_toggle"
                onClick={onToggleScanlines}
                className="flex-1 py-2 rounded-lg bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#9ca3af] flex items-center justify-center gap-2"
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
                className="flex-1 btn-crimson py-2 rounded-lg text-xs font-headline font-bold text-white text-center"
              >
                RECRUIT ME →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

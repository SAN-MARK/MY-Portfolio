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
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenHireModal,
  onOpenAiModal,
  isLightMode,
  onToggleTheme,
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
    { id: 'hero', label: 'Home' },
    { id: 'numbers', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'github', label: 'Projects' },
    { id: 'courses', label: 'Certifications' },
    { id: 'achievements', label: 'Recognition' },
    { id: 'contact', label: 'Contact' },
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
          ? 'bg-[#0F1419]/95 backdrop-blur-md border-b border-[#2A3038] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          id="nav_brand_logo_btn"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
        >
          <span className="font-serif font-bold text-xl tracking-tight text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors">
            Sanjeev M
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav_link_${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-xs uppercase tracking-[0.15em] font-medium transition-colors relative py-1 cursor-pointer group ${
                  isActive ? 'text-[#C9A961]' : 'text-[#B8B5AD] hover:text-[#F5F3EE]'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A961] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Controls & CTA */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            id="theme_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              onToggleTheme();
            }}
            className="p-2 rounded border border-[#2A3038] hover:border-[#C9A961] text-[#B8B5AD] hover:text-[#C9A961] transition-colors cursor-pointer flex items-center justify-center"
            title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            <span className="material-symbols-outlined text-base">
              {isLightMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* AI Twin Button */}
          <button
            id="nav_ai_twin_btn"
            onClick={() => {
              soundEffects.playBeep();
              onOpenAiModal();
            }}
            className="font-sans text-xs uppercase tracking-wider font-semibold text-[#B8B5AD] hover:text-[#C9A961] transition-colors flex items-center gap-1.5 cursor-pointer px-3 py-2 rounded border border-[#2A3038] hover:border-[#C9A961]"
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            <span>AI Twin</span>
          </button>

          {/* Download Resume */}
          <button
            id="nav_download_resume_btn"
            onClick={handleDownloadResume}
            disabled={isDownloadingResume}
            className="btn-gold-secondary px-4 py-2 text-xs"
          >
            {isDownloadingResume ? `Downloading ${downloadProgress}%` : 'Resume'}
          </button>

          {/* Contact CTA ("Start a Project") */}
          <button
            id="nav_hire_me_btn"
            onClick={() => {
              soundEffects.playClick();
              onOpenHireModal();
            }}
            className="btn-gold-primary px-4 py-2 text-xs"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            id="mobile_theme_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              onToggleTheme();
            }}
            className="p-2 text-[#F5F3EE] focus:outline-none cursor-pointer"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl block">
              {isLightMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
          <button
            id="mobile_menu_toggle_btn"
            onClick={() => {
              soundEffects.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-[#F5F3EE] focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1A1F26] border-b border-[#2A3038] px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-serif text-lg font-medium text-[#F5F3EE] hover:text-[#C9A961] py-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A3038] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiModal();
              }}
              className="w-full py-3 rounded bg-[#252B33] border border-[#2A3038] text-[#F5F3EE] font-sans text-xs font-semibold uppercase tracking-wider"
            >
              AI Twin Assistant
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
              className="w-full py-3 btn-gold-secondary text-xs"
            >
              Download Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="w-full py-3 btn-gold-primary text-xs"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ByTheNumbersSection } from './components/ByTheNumbersSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { FeaturedProjectSection } from './components/FeaturedProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { CoursesSection } from './components/CoursesSection';
import { GitHubSection } from './components/GitHubSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialSection } from './components/TestimonialSection';
import { YouTubeSection } from './components/YouTubeSection';
import { LinkedInSection } from './components/LinkedInSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { HireMeModal } from './components/HireMeModal';
import { ProjectModal } from './components/ProjectModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { CustomCursor } from './components/CustomCursor';
import { SEO } from './components/SEO';
import { ProjectItem } from './types';
import { soundEffects } from './utils/audio';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVictorModal, setIsVictorModal] = useState(false);
  const [initialVictorMockupIdx, setInitialVictorMockupIdx] = useState(0);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Active section scroll observer
  useEffect(() => {
    const sectionIds = ['hero', 'numbers', 'work', 'featured', 'skills', 'courses', 'github', 'achievements', 'experience', 'testimonial', 'youtube', 'linkedin', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      soundEffects.startBGM();
      soundEffects.playBeep();
    } else {
      soundEffects.stopBGM();
    }
  };

  const handleOpenVictorPrototype = (mockupIdx = 0) => {
    setSelectedProject(null);
    setInitialVictorMockupIdx(mockupIdx);
    setIsVictorModal(true);
  };

  return (
    <div className={`min-h-screen bg-[#0F1419] text-[#F5F3EE] relative selection:bg-[#C9A961] selection:text-[#0F1419] ${scanlinesEnabled ? 'scanlines-overlay' : ''}`}>
      {/* Dynamic SEO & Open Graph Meta Tags */}
      <SEO />

      {/* Custom Cursor Follower */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenHireModal={() => setHireModalOpen(true)}
        onOpenAiModal={() => setAiModalOpen(true)}
        scanlinesEnabled={scanlinesEnabled}
        onToggleScanlines={() => setScanlinesEnabled(!scanlinesEnabled)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Sections Stack with .section-divider rhythms */}
      <main className="relative">
        <HeroSection
          onExploreWork={() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenHireModal={() => setHireModalOpen(true)}
          onOpenAiModal={() => setAiModalOpen(true)}
        />

        <div className="section-divider" />
        <ByTheNumbersSection />

        <div className="section-divider" />
        <SelectedWorkSection
          onSelectProject={(proj) => {
            setIsVictorModal(false);
            setSelectedProject(proj);
          }}
          onOpenHireModal={() => setHireModalOpen(true)}
        />

        <div className="section-divider" />
        <FeaturedProjectSection
          onOpenPrototypeModal={handleOpenVictorPrototype}
        />

        <div className="section-divider" />
        <SkillsSection />

        <div className="section-divider" />
        <CoursesSection />

        <div className="section-divider" />
        <GitHubSection />

        <div className="section-divider" />
        <AchievementsSection />

        <div className="section-divider" />
        <ExperienceSection />

        <div className="section-divider" />
        <TestimonialSection />

        <div className="section-divider" />
        <YouTubeSection />

        <div className="section-divider" />
        <LinkedInSection />

        <div className="section-divider" />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Modals & Dialogs */}
      <HireMeModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        isVictorPrototype={isVictorModal}
        initialMockupIndex={initialVictorMockupIdx}
        onClose={() => {
          setSelectedProject(null);
          setIsVictorModal(false);
        }}
      />

      <AiAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

      {/* Floating Ask AI Twin Quick Trigger Button at bottom-right */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => {
            soundEffects.playBeep();
            setAiModalOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1F26] border border-[#2A3038] text-[#C9A961] shadow-xl backdrop-blur-md hover:scale-105 transition-all text-xs font-sans group cursor-pointer"
        >
          <span className="material-symbols-outlined text-base animate-pulse">smart_toy</span>
          <span className="font-bold">Ask AI Twin</span>
        </button>
      </div>
    </div>
  );
}

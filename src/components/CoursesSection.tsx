import React, { useState } from 'react';
import { soundEffects } from '../utils/audio';

interface CourseItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  certCode?: string;
  linkUrl?: string;
}

interface CourseCategory {
  id: string;
  name: string;
  accent: string; // hex string for border/badge accent
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  icon: string;
  courses: CourseItem[];
}

export const CoursesSection: React.FC = () => {
  const driveLink = "https://drive.google.com/drive/folders/1cphJK6Im1XAPBAsx3ExQRRh3z4jlQAoy?usp=drive_link";

  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories: CourseCategory[] = [
    {
      id: "ai_automation",
      name: "AI & Automation",
      accent: "#2dd4d0",
      badgeBg: "bg-[#2dd4d0]/10",
      badgeBorder: "border-[#2dd4d0]/40",
      badgeText: "text-[#2dd4d0]",
      icon: "smart_toy",
      courses: [
        {
          id: "c1",
          title: "AI Fluency Framework & Foundations",
          issuer: "Anthropic",
          date: "2026",
          badge: "FOUNDATIONAL",
          linkUrl: driveLink
        },
        {
          id: "c2",
          title: "Claude Code in Action",
          issuer: "Anthropic",
          date: "2026",
          badge: "VERIFIED",
          linkUrl: driveLink
        },
        {
          id: "c3",
          title: "Digital Skills: Artificial Intelligence",
          issuer: "Accenture",
          date: "2026",
          badge: "99% SCORE",
          linkUrl: driveLink
        },
        {
          id: "c4",
          title: "AI for Beginners",
          issuer: "HP LIFE",
          date: "2026",
          badge: "COMPLETED",
          linkUrl: driveLink
        },
        {
          id: "c5",
          title: "AI for Business Professionals",
          issuer: "HP LIFE",
          date: "2026",
          badge: "COMPLETED",
          linkUrl: driveLink
        },
        {
          id: "c6",
          title: "n8n No-Code AI Agent Builder",
          issuer: "Simplilearn",
          date: "2026",
          badge: "NO-CODE AI",
          linkUrl: driveLink
        },
        {
          id: "c7",
          title: "Generative AI Mastermind",
          issuer: "Outskill",
          date: "2026",
          badge: "MASTERMIND",
          linkUrl: driveLink
        }
      ]
    },
    {
      id: "design",
      name: "Design & UX",
      accent: "#ff2d78",
      badgeBg: "bg-[#ff2d78]/10",
      badgeBorder: "border-[#ff2d78]/40",
      badgeText: "text-[#ff2d78]",
      icon: "palette",
      courses: [
        {
          id: "c8",
          title: "Intro to Graphic Design + Basics of UI/UX",
          issuer: "Novitech R&D / Professional Cert",
          date: "2026",
          certCode: "CERT #9763980",
          linkUrl: driveLink
        },
        {
          id: "c9",
          title: "Intro to UI/UX Design",
          issuer: "Professional Cert",
          date: "2026",
          certCode: "CERT #APPAB9DFUF",
          linkUrl: driveLink
        }
      ]
    },
    {
      id: "data_business",
      name: "Data & Business",
      accent: "#a855f7",
      badgeBg: "bg-[#a855f7]/10",
      badgeBorder: "border-[#a855f7]/40",
      badgeText: "text-[#a855f7]",
      icon: "analytics",
      courses: [
        {
          id: "c10",
          title: "Data Science & Analytics",
          issuer: "HP LIFE",
          date: "2026",
          badge: "COMPLETED",
          linkUrl: driveLink
        },
        {
          id: "c11",
          title: "CX for Business Success",
          issuer: "HP LIFE",
          date: "2026",
          badge: "COMPLETED",
          linkUrl: driveLink
        },
        {
          id: "c12",
          title: "Digital Skills: Web Analytics",
          issuer: "Accenture",
          date: "2026",
          badge: "93% SCORE",
          linkUrl: driveLink
        },
        {
          id: "c13",
          title: "Digital Skills: Social Media",
          issuer: "Accenture",
          date: "2026",
          badge: "97% SCORE",
          linkUrl: driveLink
        }
      ]
    },
    {
      id: "security_cloud",
      name: "Security & Cloud",
      accent: "#f5a623",
      badgeBg: "bg-[#f5a623]/10",
      badgeBorder: "border-[#f5a623]/40",
      badgeText: "text-[#f5a623]",
      icon: "security",
      courses: [
        {
          id: "c14",
          title: "Introduction to Cyber Security",
          issuer: "Open University (Accredited by IISP & NCSC)",
          date: "2026",
          badge: "92% SCORE",
          linkUrl: driveLink
        },
        {
          id: "c15",
          title: "Introduction to Cybercrime",
          issuer: "Professional Cert",
          date: "2026",
          certCode: "CERT #9757831",
          linkUrl: driveLink
        },
        {
          id: "c16",
          title: "Introduction to Cloud Computing",
          issuer: "Professional Cert",
          date: "2026",
          certCode: "CERT #9757853",
          linkUrl: driveLink
        }
      ]
    }
  ];

  const totalCoursesCount = categories.reduce((acc, cat) => acc + cat.courses.length, 0);

  return (
    <section id="courses" className="py-24 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2dd4d0]/40 to-transparent" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#2dd4d0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#ff2d78]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12121a] border border-[#2dd4d0]/40 text-xs font-mono text-[#2dd4d0] shadow-[0_0_12px_rgba(45,212,208,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#2dd4d0] animate-pulse" />
            <span>● 2026 LEARNING LOG</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white tracking-tight uppercase">
            COURSES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4d0] via-[#ff2d78] to-[#a855f7]">CERTIFICATIONS</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {totalCoursesCount} courses completed in 2026 across AI, full-stack development, design, data, and security — self-directed learning alongside internship work.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#2dd4d0] via-[#ff2d78] to-[#f5a623] mx-auto rounded-full mt-2" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => {
              soundEffects.playBeep();
              setActiveCategory('ALL');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeCategory === 'ALL'
                ? 'bg-[#2dd4d0] text-[#0a0a0a] font-bold shadow-[0_0_15px_rgba(45,212,208,0.4)]'
                : 'bg-[#12121a] border border-[#24242f] text-gray-300 hover:text-white hover:border-[#2dd4d0]'
            }`}
          >
            ALL COURSES ({totalCoursesCount})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEffects.playBeep();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#12121a] text-white font-bold border'
                  : 'bg-[#12121a] border border-[#24242f] text-gray-400 hover:text-white'
              }`}
              style={{
                borderColor: activeCategory === cat.id ? cat.accent : undefined,
                boxShadow: activeCategory === cat.id ? `0 0 15px ${cat.accent}40` : undefined
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accent }} />
              <span>{cat.name.toUpperCase()} ({cat.courses.length})</span>
            </button>
          ))}
        </div>

        {/* Categories & Cards Grid */}
        <div className="space-y-12">
          {categories
            .filter((cat) => activeCategory === 'ALL' || activeCategory === cat.id)
            .map((cat) => (
              <div key={cat.id} className="space-y-6">
                
                {/* Category Header Bar with Left Colored Border */}
                <div
                  className="flex items-center justify-between pl-4 py-2 border-l-4 rounded-r-xl bg-[#12121a]/60 border-[#24242f]"
                  style={{ borderLeftColor: cat.accent }}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl" style={{ color: cat.accent }}>
                      {cat.icon}
                    </span>
                    <h3 className="font-headline font-bold text-xl text-white tracking-wider uppercase">
                      {cat.name}
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-gray-400 pr-4">
                    {cat.courses.length} Certified {cat.courses.length === 1 ? 'Module' : 'Modules'}
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.courses.map((course) => (
                    <a
                      key={course.id}
                      href={course.linkUrl || driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundEffects.playClick()}
                      className="bg-[#12121a] border border-[#24242f] hover:border-[#ff2d78] rounded-[14px] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,45,120,0.25)] group cursor-pointer"
                    >
                      <div className="space-y-4">
                        
                        {/* Top Badge & Code */}
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold tracking-wider uppercase ${cat.badgeBg} ${cat.badgeBorder} ${cat.badgeText}`}>
                            {course.badge || 'VERIFIED'}
                          </span>

                          {course.certCode && (
                            <span className="font-mono text-[10px] text-gray-400 bg-[#0a0a0f] px-2 py-0.5 rounded border border-[#24242f]">
                              {course.certCode}
                            </span>
                          )}
                        </div>

                        {/* Title & Issuer */}
                        <div>
                          <h4 className="font-headline font-bold text-base text-white group-hover:text-[#2dd4d0] transition-colors leading-snug">
                            {course.title}
                          </h4>
                          <p className="font-mono text-xs text-gray-400 mt-1.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-gray-500">domain</span>
                            {course.issuer}
                          </p>
                        </div>

                      </div>

                      {/* Bottom Footer: Date & Drive Link */}
                      <div className="pt-4 mt-6 border-t border-[#24242f] flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-gray-500">calendar_today</span>
                          Issued: {course.date}
                        </span>

                        <span className="text-[#2dd4d0] group-hover:text-white flex items-center gap-1 font-bold transition-colors">
                          <span>VERIFY</span>
                          <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

              </div>
            ))}
        </div>

        {/* Global Verification Footer Button */}
        <div className="mt-16 text-center">
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playClick()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#12121a] border border-[#2dd4d0] text-[#2dd4d0] hover:bg-[#2dd4d0]/10 hover:shadow-[0_0_25px_rgba(45,212,208,0.4)] text-xs font-headline font-bold tracking-widest uppercase transition-all"
          >
            <span className="material-symbols-outlined text-base">verified</span>
            <span>VIEW ALL 17 CERTIFICATE DOCUMENTS ON GOOGLE DRIVE ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

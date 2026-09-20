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
        },
        {
          id: "c17",
          title: "Generative AI Professional Specialization",
          issuer: "Tamil Nadu Skill Development / Naan Mudhalvan",
          date: "2026",
          badge: "STATE CERTIFIED",
          linkUrl: driveLink
        }
      ]
    },
    {
      id: "design",
      name: "Design & UX",
      icon: "palette",
      courses: [
        {
          id: "c8",
          title: "Intro to Graphic Design + Basics of UI/UX",
          issuer: "Novitech R&D",
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
      icon: "security",
      courses: [
        {
          id: "c14",
          title: "Introduction to Cyber Security",
          issuer: "Open University (IISP & NCSC)",
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
    <section id="courses" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
            Professional Credentials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
            Certifications & <span className="italic font-normal text-[#C9A961]">Training</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
          <p className="text-base font-sans text-[#B8B5AD] max-w-3xl mt-4 leading-relaxed">
            {totalCoursesCount} accredited certifications completed in 2026 across Generative AI, Full-Stack Architecture, UI/UX Design, and Cyber Systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => {
              soundEffects.playBeep();
              setActiveCategory('ALL');
            }}
            className={`px-4 py-2 rounded-[6px] text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'ALL'
                ? 'bg-[#C9A961] text-[#0F1419]'
                : 'bg-[#1A1F26] text-[#B8B5AD] border border-[#2A3038] hover:text-[#F5F3EE]'
            }`}
          >
            All Modules ({totalCoursesCount})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEffects.playBeep();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-[6px] text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#C9A961] text-[#0F1419]'
                  : 'bg-[#1A1F26] text-[#B8B5AD] border border-[#2A3038] hover:text-[#F5F3EE]'
              }`}
            >
              <span>{cat.name} ({cat.courses.length})</span>
            </button>
          ))}
        </div>

        {/* Categories & Cards Grid */}
        <div className="space-y-12">
          {categories
            .filter((cat) => activeCategory === 'ALL' || activeCategory === cat.id)
            .map((cat) => (
              <div key={cat.id} className="space-y-6">
                
                {/* Category Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#C9A961]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-[#C9A961]">
                      {cat.icon}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#F5F3EE]">
                      {cat.name}
                    </h3>
                  </div>

                  <span className="font-sans text-xs text-[#7A7A7A] uppercase tracking-wider">
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
                      className="unified-card flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="space-y-4">
                        
                        {/* Top Badge & Code */}
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded bg-[#252B33] border border-[#2A3038] text-[10px] font-sans font-semibold tracking-wider uppercase text-[#C9A961]">
                            {course.badge || 'VERIFIED'}
                          </span>

                          {course.certCode && (
                            <span className="font-sans text-[10px] text-[#B8B5AD] bg-[#252B33] px-2 py-0.5 rounded border border-[#2A3038]">
                              {course.certCode}
                            </span>
                          )}
                        </div>

                        {/* Title & Issuer */}
                        <div>
                          <h4 className="font-serif font-bold text-lg text-[#F5F3EE] group-hover:text-[#C9A961] transition-colors leading-snug">
                            {course.title}
                          </h4>
                          <p className="font-sans text-xs text-[#7A7A7A] mt-2 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-[#C9A961]">domain</span>
                            {course.issuer}
                          </p>
                        </div>

                      </div>

                      {/* Bottom Footer: Date & Link */}
                      <div className="pt-4 mt-6 border-t border-[#2A3038] flex items-center justify-between text-xs font-sans text-[#7A7A7A]">
                        <span>Issued: {course.date}</span>

                        <span className="text-[#C9A961] group-hover:underline flex items-center gap-1 font-semibold">
                          <span>View Credential</span>
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
            className="btn-gold-primary"
          >
            <span className="material-symbols-outlined text-base">verified</span>
            <span>View All Certifications ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

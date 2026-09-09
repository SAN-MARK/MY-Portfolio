import React from 'react';
import { soundEffects } from '../utils/audio';

export const AchievementsSection: React.FC = () => {
  const googleDriveFolder = "https://drive.google.com/drive/folders/1EKwMpLZpJOSn6jwKefL8wYzjpnHLanHg?usp=drive_link";

  const eventCards = [
    {
      id: "coscian",
      badge: "PARTICIPATION",
      title: "Technical Symposium — COSCIAN '26",
      host: "Hindustan College of Arts & Science, Chennai",
      description: "Actively participated in the technical symposium organized by the School of Computational Studies.",
      meta: "06 February 2026 · Representing PERI College",
      icon: "school"
    },
    {
      id: "devxplores",
      badge: "QUIZ EVENT — BEST AWARD",
      title: "DEVXPLORES 2K26",
      host: "Mohamed Sathak College of Arts & Science",
      description: "Participated in the Quiz event at the National Level InterCollegiate Symposium, hosted by the PG Department of Computer Science in association with IQAC.",
      meta: "11 March 2026",
      icon: "quiz"
    },
    {
      id: "python_ml",
      badge: "5-DAY WORKSHOP",
      title: "Code to Cognition: Python & Machine Learning",
      host: "PERI College x Approtech R&D Solutions Pvt. Ltd.",
      description: "Completed an intensive 5-day hands-on workshop on Python programming and Machine Learning fundamentals, conducted by Approtech R&D Solutions in association with PERI College's IQAC cell.",
      meta: "24–28 March 2026",
      icon: "terminal"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#07070a] overflow-hidden">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Comic Halftone Pattern & Ambient Lighting */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#e21d24] to-transparent" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#e21d24]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0e0e16] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#e21d24] animate-pulse" />
            <span>● TOURNAMENT VICTORIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase">
            VICTORIES & <span className="text-[#fbbf24]">MEDALS</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
            Competing, learning, and representing PERI College at inter-collegiate symposiums and technical tournaments across Chennai.
          </p>

          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full mt-2 shadow-[0_0_8px_rgba(226,29,36,0.6)]" />
        </div>

        {/* ── HERO ACHIEVEMENT CARD (Top Win) ── */}
        <div className="mb-14">
          <div className="bg-[#0e0e16] border-4 border-[#040406] shadow-[6px_6px_0px_#fbbf24] hover:border-[#00f0ff] rounded-[16px] p-6 sm:p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group">
            
            {/* Top Crimson Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#e21d24] via-[#fbbf24] to-[#e21d24]" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              {/* Left Column: Trophy Icon & Details */}
              <div className="space-y-4 max-w-3xl">
                
                {/* Badge Header */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#e21d24] text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 border-2 border-[#040406] shadow-[2px_2px_0px_#fbbf24]">
                    <span>🏆 3RD PLACE — WEB DESIGNING PODIUM</span>
                  </span>

                  <span className="font-mono text-xs text-[#9ca3af] font-bold">
                    PADUR, CHENNAI
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors flex items-center gap-3">
                    <span>Brain Code 2026</span>
                    <span className="material-symbols-outlined text-3xl text-[#fbbf24]">emoji_events</span>
                  </h3>
                  <p className="font-mono text-sm text-[#fbbf24] mt-1 font-bold">
                    Prof. Dhanapalan College of Science & Management
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#9ca3af] leading-relaxed">
                  Secured 3rd position in the Web Designing category at Brain Code 2026, an inter-collegiate tournament held at Prof. Dhanapalan College of Science and Management, Padur, Chennai.
                </p>

                {/* Meta Row */}
                <div className="pt-3 border-t-2 border-[#040406] flex flex-wrap items-center gap-4 text-xs font-mono text-[#9ca3af] font-bold">
                  <span className="flex items-center gap-1.5 text-[#f3f4f6]">
                    <span className="material-symbols-outlined text-sm text-[#e21d24]">calendar_today</span>
                    Awarded: 21 January 2026
                  </span>
                  <span className="hidden sm:inline text-[#374151]">|</span>
                  <span className="flex items-center gap-1.5 text-[#f3f4f6]">
                    <span className="material-symbols-outlined text-sm text-[#fbbf24]">account_balance</span>
                    Representing: PERI College of Arts & Science
                  </span>
                </div>

              </div>

              {/* Right Column: Verified Certificate Link CTA */}
              <div className="w-full lg:w-auto flex flex-col items-stretch lg:items-end justify-center gap-3 shrink-0">
                <a
                  href={googleDriveFolder}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-crimson px-6 py-4 rounded-xl text-white font-headline font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer shadow-[3px_3px_0px_#040406] hover:shadow-[5px_5px_0px_#fbbf24]"
                >
                  <span className="material-symbols-outlined text-base text-[#fbbf24]">verified</span>
                  <span>VIEW CERTIFICATE ON DRIVE ↗</span>
                </a>
                <span className="font-mono text-[10px] text-[#9ca3af] font-bold text-center lg:text-right">
                  Official Award Verification & Certificate
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* ── OFF-CAMPUS EVENTS & WORKSHOPS (3-Card Grid) ── */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between border-b-2 border-[#040406] pb-4">
            <h3 className="font-display font-bold text-2xl text-[#f3f4f6] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e21d24]">groups</span>
              <span>Off-Campus Expeditions & Tactical Workshops</span>
            </h3>
            <span className="font-mono text-xs text-[#9ca3af] font-bold">
              3 Events Participated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#0e0e16] border-3 border-[#040406] shadow-[4px_4px_0px_#040406] hover:border-[#00f0ff] hover:shadow-[6px_6px_0px_#00f0ff] rounded-[14px] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#f59e0b]/15 border-2 border-[#040406] text-[#fbbf24] font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
                      {card.badge}
                    </span>
                    <span className="material-symbols-outlined text-[#e21d24] text-lg">
                      {card.icon}
                    </span>
                  </div>

                  {/* Title & Host */}
                  <div>
                    <h4 className="font-headline font-bold text-lg text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors leading-snug">
                      {card.title}
                    </h4>
                    <p className="font-mono text-xs text-[#9ca3af] mt-1 font-bold">
                      {card.host}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#9ca3af] leading-relaxed">
                    {card.description}
                  </p>

                </div>

                {/* Bottom Meta */}
                <div className="pt-4 mt-6 border-t-2 border-[#040406] flex items-center justify-between text-[11px] font-mono text-[#9ca3af]">
                  <span className="font-bold">{card.meta}</span>
                  <a
                    href={googleDriveFolder}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEffects.playClick()}
                    className="text-[#00f0ff] hover:text-white transition-colors flex items-center gap-0.5"
                    title="View Certificate"
                  >
                    <span className="material-symbols-outlined text-xs">description</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Drive Folder CTA Banner */}
        <div className="mt-12 text-center pt-6">
          <a
            href={googleDriveFolder}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playClick()}
            className="btn-crimson inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white text-xs font-headline font-bold tracking-widest uppercase transition-all shadow-[4px_4px_0px_#040406] hover:shadow-[6px_6px_0px_#fbbf24]"
          >
            <span className="material-symbols-outlined text-base text-[#fbbf24]">folder_shared</span>
            <span>VIEW ALL EVENT CERTIFICATES & PROOF (GOOGLE DRIVE) ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

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
    <section id="achievements" className="py-24 relative bg-[#0d0d0d] overflow-hidden">
      {/* Decorative Subtle Accent Grid & Lighting */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#E31E24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#161616] border-2 border-[#000000] text-xs font-mono text-[#E31E24] font-bold shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
            <span>● BEYOND THE CLASSROOM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase">
            ACHIEVEMENTS & <span className="text-[#E31E24]">CAMPUS EVENTS</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#B8B8B0] max-w-2xl mx-auto leading-relaxed">
            Competing, learning, and representing PERI College at inter-collegiate symposiums and workshops across Chennai.
          </p>

          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto rounded-full mt-2" />
        </div>

        {/* ── HERO ACHIEVEMENT CARD (Top Win) ── */}
        <div className="mb-14">
          <div className="bg-[#161616] border-4 border-[#000000] shadow-[6px_6px_0px_#E31E24] hover:border-[#E31E24] rounded-[14px] p-6 sm:p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group">
            
            {/* Top Crimson Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E31E24]" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              {/* Left Column: Trophy Icon & Details */}
              <div className="space-y-4 max-w-3xl">
                
                {/* Badge Header */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#E31E24] text-[#F5F5F0] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 border-2 border-[#000000] shadow-[2px_2px_0px_#000000]">
                    <span>🏆 3RD PLACE — WEB DESIGNING</span>
                  </span>

                  <span className="font-mono text-xs text-[#B8B8B0] font-bold">
                    PADUR, CHENNAI
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl text-[#F5F5F0] group-hover:text-[#E31E24] transition-colors flex items-center gap-3">
                    <span>Brain Code 2026</span>
                    <span className="material-symbols-outlined text-3xl text-[#E31E24]">emoji_events</span>
                  </h3>
                  <p className="font-mono text-sm text-[#E31E24] mt-1 font-bold">
                    Prof. Dhanapalan College of Science & Management
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#B8B8B0] leading-relaxed">
                  Secured 3rd position in the Web Designing category at Brain Code 2026, an inter-collegiate competition held at Prof. Dhanapalan College of Science and Management, Padur, Chennai.
                </p>

                {/* Meta Row */}
                <div className="pt-3 border-t-2 border-[#000000] flex flex-wrap items-center gap-4 text-xs font-mono text-[#B8B8B0] font-bold">
                  <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                    <span className="material-symbols-outlined text-sm text-[#E31E24]">calendar_today</span>
                    Awarded: 21 January 2026
                  </span>
                  <span className="hidden sm:inline text-[#000000]">|</span>
                  <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                    <span className="material-symbols-outlined text-sm text-[#E31E24]">account_balance</span>
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
                  className="btn-crimson px-6 py-4 rounded-xl text-[#F5F5F0] font-headline font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>VIEW CERTIFICATE ON DRIVE ↗</span>
                </a>
                <span className="font-mono text-[10px] text-[#B8B8B0] font-bold text-center lg:text-right">
                  Official Award Verification & Certificate
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* ── OFF-CAMPUS EVENTS & WORKSHOPS (3-Card Grid) ── */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between border-b-2 border-[#000000] pb-4">
            <h3 className="font-display font-bold text-2xl text-[#F5F5F0] uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-[#E31E24]">groups</span>
              <span>Off-Campus Events & Workshops</span>
            </h3>
            <span className="font-mono text-xs text-[#B8B8B0] font-bold">
              3 Events Participated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#161616] border-3 border-[#000000] shadow-[4px_4px_0px_#000000] hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] rounded-[14px] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#E31E24]/15 border-2 border-[#000000] text-[#E31E24] font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                      {card.badge}
                    </span>
                    <span className="material-symbols-outlined text-[#E31E24] text-lg">
                      {card.icon}
                    </span>
                  </div>

                  {/* Title & Host */}
                  <div>
                    <h4 className="font-headline font-bold text-lg text-[#F5F5F0] group-hover:text-[#E31E24] transition-colors leading-snug">
                      {card.title}
                    </h4>
                    <p className="font-mono text-xs text-[#B8B8B0] mt-1 font-bold">
                      {card.host}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#B8B8B0] leading-relaxed">
                    {card.description}
                  </p>

                </div>

                {/* Bottom Meta */}
                <div className="pt-4 mt-6 border-t-2 border-[#000000] flex items-center justify-between text-[11px] font-mono text-[#B8B8B0]">
                  <span className="font-bold">{card.meta}</span>
                  <a
                    href={googleDriveFolder}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEffects.playClick()}
                    className="text-[#E31E24] hover:text-[#F5F5F0] transition-colors flex items-center gap-0.5"
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
            className="btn-crimson inline-flex items-center gap-3 px-8 py-4 rounded-xl text-[#F5F5F0] text-xs font-headline font-bold tracking-widest uppercase transition-all"
          >
            <span className="material-symbols-outlined text-base">folder_shared</span>
            <span>VIEW ALL EVENT CERTIFICATES & PROOF (GOOGLE DRIVE) ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

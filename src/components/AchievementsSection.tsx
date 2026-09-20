import React from 'react';
import { soundEffects } from '../utils/audio';
import { INNOVARA_ACHIEVEMENT, OTHER_ACHIEVEMENTS } from '../data/achievements';

export const AchievementsSection: React.FC = () => {
  const googleDriveFolder = "https://drive.google.com/drive/folders/1EKwMpLZpJOSn6jwKefL8wYzjpnHLanHg?usp=drive_link";

  return (
    <section id="achievements" className="py-24 bg-[#0F1419] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
            Awards & Recognition
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
            Honors & <span className="italic font-normal text-[#C9A961]">Achievements</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A961] mt-4" />
        </div>

        {/* Featured Achievement Card (INNOVARA'26) */}
        <div className="mb-12">
          <div className="unified-card p-8 sm:p-12 relative overflow-hidden">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              <div className="space-y-6 max-w-3xl">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-[6px] bg-[#252B33] text-[#C9A961] border border-[#2A3038] font-sans text-xs font-semibold tracking-wider uppercase">
                    {INNOVARA_ACHIEVEMENT.badge}
                  </span>
                  <span className="font-sans text-xs text-[#7A7A7A] font-medium">
                    {INNOVARA_ACHIEVEMENT.date}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F3EE] leading-tight">
                    {INNOVARA_ACHIEVEMENT.title}
                  </h3>
                  <p className="font-sans text-sm text-[#C9A961] mt-1.5 font-semibold">
                    {INNOVARA_ACHIEVEMENT.subtitle}
                  </p>
                </div>

                <p className="font-sans text-base text-[#B8B5AD] leading-relaxed">
                  {INNOVARA_ACHIEVEMENT.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {INNOVARA_ACHIEVEMENT.stats.map((st, idx) => (
                    <div key={idx} className="bg-[#252B33] border border-[#2A3038] p-4 rounded-[8px]">
                      <span className="block font-sans text-[11px] text-[#7A7A7A] uppercase tracking-wider">{st.label}</span>
                      <span className="block font-serif font-bold text-lg sm:text-xl text-[#C9A961] mt-0.5">{st.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {INNOVARA_ACHIEVEMENT.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-[6px] bg-[#252B33] text-[#B8B5AD] font-sans text-xs font-medium border border-[#2A3038]">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* CTAs */}
              <div className="w-full lg:w-auto flex flex-col items-stretch lg:items-end justify-center gap-3 shrink-0">
                <a
                  href={INNOVARA_ACHIEVEMENT.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-gold-primary text-center"
                >
                  Launch FindBack ↗
                </a>
                <a
                  href={googleDriveFolder}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="btn-gold-secondary text-center"
                >
                  View Certificates ↗
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Other Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="unified-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#7A7A7A]">
                    {item.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#252B33] text-[#C9A961] font-sans text-[11px] font-semibold tracking-wider uppercase border border-[#2A3038]">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-[#F5F3EE] leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#7A7A7A] mt-1 font-medium">
                    {item.host}
                  </p>
                </div>

                <p className="font-sans text-sm text-[#B8B5AD] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2A3038] flex items-center justify-between text-xs font-sans text-[#7A7A7A]">
                <span>{item.date}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="text-[#C9A961] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Verify ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#0F1419] border-t border-[#2A3038] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans text-xs text-[#7A7A7A]">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-serif font-bold text-[#F5F3EE] text-sm">
            Sanjeev M — Founder of FindBack | 2nd Place INNOVARA'26 | Full Stack Developer & UI/UX Designer
          </span>
          <span className="text-[#7A7A7A]">© 2026. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 uppercase tracking-wider font-semibold text-[#B8B5AD] shrink-0">
          <a href={PROFILE_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A961] transition-colors">
            LinkedIn
          </a>
          <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A961] transition-colors">
            GitHub
          </a>
          <a href={PROFILE_DATA.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A961] transition-colors">
            YouTube
          </a>
        </div>

      </div>
    </footer>
  );
};

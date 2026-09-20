import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="mentor-recognition" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
              Endorsement & Feedback
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F3EE] tracking-tight">
              Mentor <span className="italic font-normal text-[#C9A961]">Recognition</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A961] mx-auto mt-4" />
          </div>

          {/* Mentor Quote Card */}
          <div className="unified-card p-8 sm:p-12 relative overflow-hidden text-center max-w-3xl mx-auto border-[#2A3038] hover:border-[#C9A961] transition-all">
            <div className="absolute top-6 left-8 font-serif text-6xl text-[#C9A961]/20 select-none">
              &ldquo;
            </div>

            <div className="relative z-10 space-y-6">
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#F5F3EE] leading-relaxed">
                &ldquo;Really happy Sanjeev, your implementation done the magic, keep doing more, all the best 💯🔥&rdquo;
              </p>

              <div className="pt-6 border-t border-[#2A3038] flex flex-col items-center justify-center space-y-2">
                <span className="font-sans font-bold text-base text-[#F5F3EE] tracking-wide">
                  Bharani
                </span>
                <span className="font-sans text-xs text-[#C9A961] font-semibold uppercase tracking-wider">
                  Internship Mentor — NoviTech R&D Pvt Ltd
                </span>
                <p className="font-sans text-xs text-[#B8B5AD] max-w-lg mt-1">
                  Received after winning 2nd Place at INNOVARA'26 with FindBack — the project inspired by a problem statement discussed during NoviTech's team meeting.
                </p>
              </div>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

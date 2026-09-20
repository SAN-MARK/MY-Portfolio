import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonial" className="py-24 bg-[#0F1419] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block mb-2">
              Endorsement & Mentorship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F3EE] tracking-tight">
              Mentor <span className="italic font-normal text-[#C9A961]">Perspective</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A961] mt-3" />
          </div>

          {/* Editorial Testimonial Card */}
          <div className="unified-card relative p-8 sm:p-14 overflow-hidden">
            
            {/* Large Champagne Gold Quotation Mark */}
            <div className="absolute -top-6 left-6 font-serif text-[140px] text-[#C9A961]/15 leading-none pointer-events-none select-none">
              &ldquo;
            </div>

            <div className="relative z-10 space-y-8">
              <blockquote className="font-['Cormorant_Garamond',serif] italic font-normal text-2xl sm:text-3xl text-[#F5F3EE] leading-relaxed max-w-3xl">
                &ldquo;Sanjeev demonstrates an extraordinary aptitude for full-stack engineering and product design. Building FindBack and leading peer workshops across our institution highlights his dedication to both rigorous technical execution and community mentorship.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-[#2A3038]">
                <div className="w-12 h-12 rounded-[8px] bg-[#252B33] border border-[#2A3038] flex items-center justify-center font-serif font-bold text-[#C9A961] text-lg">
                  PB
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#F5F3EE]">
                    Faculty & Tech Mentor
                  </h4>
                  <p className="font-sans text-xs text-[#7A7A7A]">
                    Prince Shri Balaji Arts and Science College & Tech Community
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};


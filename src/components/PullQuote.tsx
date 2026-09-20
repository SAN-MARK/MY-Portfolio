import React from 'react';

interface PullQuoteProps {
  quote: string;
  author: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({ quote, author }) => {
  return (
    <div className="unified-card relative p-8 sm:p-12 overflow-hidden my-8">
      {/* Large Gold Quotation Mark */}
      <div className="absolute top-2 left-6 font-serif text-[120px] text-[#C9A961]/15 leading-none pointer-events-none select-none">
        &ldquo;
      </div>
      <div className="relative z-10 space-y-4">
        <p className="font-serif italic font-normal text-xl sm:text-2xl text-[#F5F3EE] leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold">
          — {author}
        </p>
      </div>
    </div>
  );
};

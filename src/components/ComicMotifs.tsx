import React from 'react';

/**
 * Comic Panel Gutter Divider
 * Features angled edges and subtle drop shadows mimicking comic book panel gutters
 */
export const ComicPanelDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full py-4 overflow-hidden pointer-events-none ${className}`}>
    <div className="h-[4px] w-full bg-[#040406] shadow-[0_2px_0px_rgba(226,29,36,0.35)] relative">
      <div className="absolute right-12 -top-1 w-8 h-2 bg-[#f59e0b] -skew-x-12" />
      <div className="absolute left-16 -bottom-1 w-12 h-2 bg-[#00f0ff] -skew-x-12" />
    </div>
  </div>
);

/**
 * Geometric Comic Starburst / Impact Burst Shape
 */
export const ComicStarburst: React.FC<{
  size?: number;
  className?: string;
  color?: string;
}> = ({ size = 48, className = '', color = '#f59e0b' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`inline-block select-none ${className}`}
    fill={color}
  >
    <polygon points="50,0 63,18 85,6 82,28 100,35 88,53 98,72 77,76 73,98 53,86 35,98 32,77 10,77 17,55 0,42 18,28 11,9 33,16" />
  </svg>
);

/**
 * Comic Shield / Hexagon Badge Frame
 */
export const ComicShieldBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'gold' | 'crimson' | 'blue';
  className?: string;
}> = ({ children, variant = 'gold', className = '' }) => {
  const borderColors = {
    gold: 'border-[#f59e0b] text-[#fbbf24] shadow-[0_0_12px_rgba(245,158,11,0.3)]',
    crimson: 'border-[#e21d24] text-[#e21d24] shadow-[0_0_12px_rgba(226,29,36,0.35)]',
    blue: 'border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.3)]',
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-[#0e0e16] border-2 ${borderColors[variant]} font-mono text-xs font-bold uppercase tracking-wider relative ${className}`}
      style={{
        clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
      }}
    >
      {children}
    </div>
  );
};

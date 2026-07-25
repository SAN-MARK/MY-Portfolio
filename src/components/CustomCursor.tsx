import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.onclick !== null ||
          target.closest('button') ||
          target.closest('a'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      {/* Outer Cyan Ring */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0) scale(${
            isPointer ? 1.5 : 1
          })`,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border transition-all duration-150 ${
            isPointer
              ? 'border-[#ff4d80] bg-[#ff4d80]/20 shadow-[0_0_15px_#ff4d80]'
              : 'border-[#00fbfb] bg-transparent shadow-[0_0_10px_#00fbfb]'
          }`}
        />
      </div>

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#fff]" />
      </div>
    </>
  );
};

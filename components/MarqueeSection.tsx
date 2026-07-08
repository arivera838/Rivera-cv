'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { portfolioData } from '@/lib/data';

export default function MarqueeSection() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;

      // Adjusting the multiplier for text scroll speed
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.5;
      setScrollOffset(newOffset);
    };

    const loop = () => {
      if (lastScrollY !== window.scrollY) {
        lastScrollY = window.scrollY;
        handleScroll();
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    handleScroll();
    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Row 1: Core Skills (Big Outline Text)
  const coreSkills = [
    "REACT NATIVE", "AWS SERVERLESS", "CLEAN ARCH", "NEXT.JS", "FULL STACK ENGINEER", "MICROFRONTENDS"
  ];

  // Row 2: Stats (Solid Text with accents)
  const stats = data.stats.map(s => `${s.value} ${s.label.toUpperCase()}`);

  // Create an infinitely long-looking array
  const repeatArray = (arr: string[]) => [...arr, ...arr, ...arr, ...arr, ...arr, ...arr];

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-20 sm:pt-24 md:pt-32 pb-16 overflow-hidden flex flex-col gap-6 sm:gap-10">
      {/* Row 1: moves RIGHT */}
      <div
        className="flex gap-8 sm:gap-16 whitespace-nowrap min-w-max"
        style={{
          transform: `translate3d(${scrollOffset - 1500}px, 0, 0)`,
          willChange: 'transform'
        }}
      >
        {repeatArray(coreSkills).map((item, idx) => (
          <div key={`row1-${idx}`} className="flex items-center gap-8 sm:gap-16">
            <span className="text-[clamp(3rem,8vw,120px)] font-black uppercase leading-none tracking-tight text-transparent" style={{ WebkitTextStroke: '2px #D7E2EA' }}>
              {item}
            </span>
            <span className="text-[#D7E2EA] text-[clamp(2rem,5vw,80px)] font-black">*</span>
          </div>
        ))}
      </div>

      {/* Row 2: moves LEFT */}
      <div
        className="flex gap-8 sm:gap-16 whitespace-nowrap min-w-max"
        style={{
          transform: `translate3d(${-(scrollOffset - 0)}px, 0, 0)`,
          willChange: 'transform'
        }}
      >
        {repeatArray(stats).map((item, idx) => (
          <div key={`row2-${idx}`} className="flex items-center gap-8 sm:gap-16">
            <span className="text-[clamp(2.5rem,6vw,90px)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
              {item}
            </span>
            <span className="text-transparent text-[clamp(2rem,5vw,80px)] font-black" style={{ WebkitTextStroke: '2px #D7E2EA' }}>—</span>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { portfolioData } from '@/lib/data.js';
import { useLanguage } from './LanguageProvider';
export default function AboutSection() {
  const { lang } = useLanguage();
  const textContent = portfolioData[lang].personalInfo.bio;
  const data = portfolioData[lang];
  const ui = data.ui;
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">

      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="hidden md:block absolute top-[4%] left-[4%] w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon icon" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="hidden md:block absolute bottom-[8%] left-[10%] w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D object" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="hidden md:block absolute top-[4%] right-[4%] w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego icon" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="hidden md:block absolute bottom-[8%] right-[10%] w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D group" className="w-full h-auto" />
      </FadeIn>
      {/* Content */}
      <div className="flex flex-col items-center z-10 w-full max-w-7xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16">
            {ui.aboutMeTitle}
          </h2>
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={textContent}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px] text-[clamp(1rem,1.8vw,1.25rem)]"
          />
          <FadeIn delay={0.2} y={30}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

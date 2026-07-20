'use client';

import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function HeroSection() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const info = data.personalInfo;
  const ui = data.ui;
  const firstName = info.name.split(' ')[0].toLowerCase();

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip px-6 sm:px-8 md:px-10">
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between items-center pt-6 md:pt-8 w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {[
            { id: 'about', label: ui.navAbout },
            { id: 'experience', label: ui.navExperience },
            { id: 'projects', label: ui.navProjects },
            { id: 'contact', label: ui.navContact }
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:opacity-70 transition-opacity duration-200">
              {item.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center relative">
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden flex justify-center mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            {ui.heroGreeting} <br /> {firstName}
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="/avatar.png"
              alt="Portrait"
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[300px] sm:max-w-[300px] md:max-w-[300px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            {info.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

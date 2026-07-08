'use client';
import React from 'react';
import FadeIn from './FadeIn';
import { Mail, Linkedin, MessageCircle, Github } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { portfolioData } from '@/lib/data';
export default function ContactSection() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;
  const info = data.personalInfo;
  return (
    <section id="contact" className="bg-[#0C0C0C] relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,10vw,160px)] mb-12 sm:mb-16 md:mb-20 leading-none">
          {ui.contactHeading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={30} className="w-full max-w-4xl">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-14">
          <a href={`mailto:${info.email}`} className="group flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">Email</span>
          </a>

          <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">LinkedIn</span>
          </a>
          <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">WhatsApp</span>
          </a>
          <a href={info.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
              <Github className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">GitHub</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

'use client';
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { motion, AnimatePresence } from 'framer-motion';
export default function ServicesSection() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;
  const experiences = data.experience;
  return (
    <section id="experience" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn delay={0} y={40}>
        <h2 className="font-black uppercase text-center text-[clamp(2.5rem,10vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          {ui.expTitle}
        </h2>
      </FadeIn>
      <div className="max-w-5xl mx-auto flex flex-col">
        {experiences.map((exp, idx) => (
          <ExperienceItem
            key={exp.id}
            exp={exp}
            idx={idx}
            isLast={idx === experiences.length - 1}
            ui={ui}
          />
        ))}
      </div>
    </section>
  );
}
function ExperienceItem({ exp, idx, isLast, ui }: { exp: any, idx: number, isLast: boolean, ui: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const num = (idx + 1).toString().padStart(2, '0');
  return (
    <FadeIn delay={idx * 0.1} y={30}>
      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 ${!isLast ? 'border-b border-[#0c0c0c26]' : ''}`}>
        <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none min-w-[80px] sm:min-w-[120px] md:min-w-[160px]">
          {num}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 w-full">
          <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
            {exp.role}
          </h3>
          <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
            <strong>{exp.company} | {exp.period}</strong>
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-2 sm:pt-4 flex flex-col gap-4">
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.4vw,1.15rem)] opacity-80">
                    {exp.description}
                  </p>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech: string) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-[#0c0c0c10] rounded-full text-[#0C0C0C] font-medium border border-[#0c0c0c20]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start mt-2 px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white transition-colors duration-300"
          >
            {isExpanded ? ui.expHideDetails : ui.expViewDetails}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

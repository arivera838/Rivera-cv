'use client';
import React from 'react';
import FadeIn from './FadeIn';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { motion } from 'framer-motion';
export default function SkillsSection() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;
  const skills = data.skills;
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  return (
    <section id="skills" className="bg-[#0C0C0C] relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          {ui.skillsTitle || "HABILIDADES"}
        </h2>
      </FadeIn>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
        {Object.entries(groupedSkills).map(([category, catSkills], catIdx) => (
          <FadeIn key={category} delay={catIdx * 0.15} y={30} className="flex flex-col gap-6">
            <h3 className="font-medium text-[#D7E2EA] uppercase tracking-widest text-lg sm:text-xl border-b border-[#D7E2EA]/20 pb-4">
              {category}
            </h3>
            <div className="flex flex-col gap-6">
              {catSkills.map((skill, skillIdx) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[#D7E2EA] font-light text-sm sm:text-base tracking-wide">
                      {skill.name}
                    </span>
                    <span className="text-[#D7E2EA]/60 font-light text-xs tracking-wider">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-[#D7E2EA]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #18011F 0%, #B600A8 50%, #BE4C00 100%)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "50px" }}
                      transition={{ delay: 0.1 + (skillIdx * 0.1), duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
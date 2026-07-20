'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import FadeIn from './FadeIn';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;
  const projects = data.projects;
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          {ui.projTitle}
        </h2>
      </FadeIn>
      <div ref={containerRef} className="relative flex flex-col items-center">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              totalCards={projects.length}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}
function ProjectCard({ project, index, totalCards, progress }: { project: any, index: number, totalCards: number, progress: any }) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const range = [index * (1 / totalCards), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  const num = (index + 1).toString().padStart(2, '0');
  return (
    <div className="h-[85vh] w-full max-w-6xl flex items-center justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div
        style={{ scale }}
        className="w-full h-full max-h-[800px] bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-hidden transform-gpu"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span className="font-black text-[clamp(3rem,8vw,100px)] leading-none text-[#D7E2EA]">
              {num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 text-sm uppercase tracking-widest mb-1">
                {project.type}
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-[clamp(1.2rem,2.5vw,2.5rem)] uppercase leading-none">
                {project.title}
              </h3>
            </div>
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
        </div>
        {/* Bottom Row / Images */}
        <div className="flex-1 flex gap-4 sm:gap-6 w-full min-h-0">
          <div className="w-[40%] flex flex-col gap-4 sm:gap-6">
            <img
              src={project.image}
              alt={`${project.title} left top`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <div className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 bg-white/5 border border-white/10 flex flex-col justify-center gap-2" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <p className="text-sm md:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.slice(0, 4).map((tech: string) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-full text-[#D7E2EA]">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <img
              src={project.image}
              alt={`${project.title} right`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
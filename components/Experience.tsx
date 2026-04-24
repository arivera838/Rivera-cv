'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;

  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="w-12 h-1 bg-primary mb-4"></div>
        <h2 className="text-xs font-mono text-primary mb-2 uppercase tracking-tighter">[03] {ui.expTitle}</h2>
        <p className="text-3xl font-bold text-foreground mb-2 tracking-tighter">{ui.expSubtitle}</p>
        <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">{ui.expDesc}</p>
      </motion.div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {data.experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-sm border border-border bg-surface-alt shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
               <Briefcase size={12} className="text-muted-foreground" />
            </div>
            
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-sm glass-panel group-hover:border-primary/50 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                <h3 className="font-bold text-lg text-foreground uppercase">{exp.role}</h3>
                <span className="font-mono text-[10px] tracking-widest text-primary">{exp.period}</span>
              </div>
              <h4 className="text-muted-foreground text-[10px] font-mono tracking-widest mb-4 uppercase">{exp.company}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-mono">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-background border border-border text-[9px] font-mono hover:text-foreground transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

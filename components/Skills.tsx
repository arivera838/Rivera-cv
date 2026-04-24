'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function Skills() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;

  // Group skills by category
  const categories = Array.from(new Set(data.skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 border-b border-border pb-6"
      >
        <div className="w-12 h-1 bg-primary mb-4"></div>
        <h2 className="text-xs font-mono text-primary mb-2 uppercase tracking-tighter">[02.5] TECH_SKILLS</h2>
        <p className="text-3xl md:text-5xl font-light tracking-tighter text-foreground uppercase">{ui.skillsTitle || (lang === 'es' ? 'Habilidades Técnicas' : 'Core Proficiencies')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface border border-border p-8 rounded-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-6 pb-2 border-b border-border">{category}</h3>
            <div className="space-y-6">
              {data.skills.filter(s => s.category === category).map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-zinc-300 font-bold tracking-wide">{skill.name}</span>
                    <span className="text-[9px] text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-surface-alt overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

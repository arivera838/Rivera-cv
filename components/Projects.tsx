'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;
  const [filter, setFilter] = useState(ui.projAll);
  
  // Extract all unique technologies for the filter
  const allTechs = Array.from(new Set(data.projects.flatMap(p => p.technologies)));
  const filters = [ui.projAll, ...allTechs.slice(0, 5)];

  const filteredProjects = data.projects.filter(p => 
    filter === ui.projAll || p.technologies.includes(filter) || p.type === filter
  );

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pb-2 border-b border-border">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="w-12 h-1 bg-primary mb-4"></div>
          <h2 className="text-xs font-mono text-primary mb-2 uppercase tracking-tighter">[04] {ui.projTitle}</h2>
          <p className="text-3xl font-bold text-foreground tracking-tighter mb-2">{ui.projSubtitle}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] font-mono uppercase tracking-widest hover:text-zinc-400 cursor-pointer pb-1 ${filter === f ? 'text-primary border-b border-primary' : 'text-muted-foreground'}`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group bg-surface border border-border rounded-sm overflow-hidden flex flex-col hover:border-primary/40 transition-colors relative"
            >
              {/* Image Section */}
              <div className="w-full h-48 relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <Image
                  src={project.image || "https://picsum.photos/seed/tech/600/400"}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                    ID: {project.id} | {project.type}
                  </span>
                  <div className="flex gap-3 text-muted-foreground">
                    <a href={project.link} className="hover:text-primary transition-colors"><Github size={16} /></a>
                    <a href={project.link} className="hover:text-primary transition-colors"><ExternalLink size={16} /></a>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-xs font-mono text-muted-foreground mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                
                <div className="p-3 bg-surface-alt border-l-2 border-primary mb-6">
                  <p className="text-[10px] font-mono text-zinc-400 italic">
                    {project.results}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-surface-alt text-[8px] font-mono border border-border uppercase tracking-widest text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

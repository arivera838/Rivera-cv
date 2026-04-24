'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { Target, Server, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;

  const icons = [<Server key={1} />, <Target key={2} />, <ShieldCheck key={3} />];

  return (
    <section id="dashboard" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="w-12 h-1 bg-primary mb-4"></div>
        <h2 className="text-xs font-mono text-primary mb-2 uppercase tracking-tighter">[02] {ui.dashTitle}</h2>
        <p className="text-3xl md:text-4xl font-light tracking-tighter text-foreground mb-2">{ui.dashSubtitle}</p>
        <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">{ui.dashDesc}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.stats.map((stat, idx) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-sm flex flex-col justify-center relative hover:border-primary/50 transition-colors"
          >
            <span className="text-muted-foreground font-mono text-[9px] uppercase tracking-widest mb-2">
              {stat.label}
            </span>
            <span className="text-3xl font-light text-foreground">{stat.value}</span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1a1a1a]">
              <div className="w-1/2 h-full bg-primary opacity-50"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full mt-10"
      >
        <h3 className="text-[9px] font-mono text-primary uppercase tracking-widest mb-6 border-b border-border pb-2">{ui.dashGraphTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.achievements.map((ach, idx) => (
            <motion.div 
              key={ach.id} 
              className="bg-surface border border-border p-6 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-primary mb-4 opacity-80">
                {icons[idx % icons.length]}
              </div>
              <h4 className="text-foreground font-bold mb-2 uppercase tracking-wide text-sm">{ach.title}</h4>
              <p className="text-zinc-400 text-xs font-mono leading-relaxed">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

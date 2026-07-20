'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;

  return (
    <section id="blog" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex justify-between items-end border-b border-border pb-4"
      >
        <div>
          <h2 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-tighter">[05] {ui.blogTitle}</h2>
          <p className="text-3xl font-bold text-foreground tracking-tighter">{ui.blogSubtitle}</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          {ui.blogViewAll} <ArrowUpRight size={14} />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group block p-5 glass-panel rounded-sm hover:-translate-y-1 transition-all cursor-pointer border border-border hover:border-primary/50"
          >
            <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground tracking-widest uppercase mb-4 border-b border-border pb-2">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            
            <h3 className="text-sm font-bold mb-3 text-zinc-400 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted-foreground text-[11px] font-mono leading-relaxed mb-6">
              {post.summary}
            </p>
            
            <div className="flex items-center text-[10px] uppercase font-mono tracking-widest text-primary gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Read Article <ArrowUpRight size={12} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 md:hidden flex justify-center">
        <button className="bg-surface-alt border border-border px-6 py-3 text-[10px] rounded-sm font-bold tracking-widest hover:border-primary transition-all flex items-center gap-2 uppercase text-zinc-400">
          {ui.blogViewAll}
        </button>
      </div>
    </section>
  );
}

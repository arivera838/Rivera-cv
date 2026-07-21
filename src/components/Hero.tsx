'use client';

import { motion } from 'motion/react';
import { Download, Terminal, ChevronDown } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function Hero() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* 3D Banner Background */}
      <div className="absolute inset-0 z-0 perspective-[1000px]">
        <motion.div
          initial={{ scale: 1.1, rotateX: 5 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ backgroundImage: "url('https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/banner.jpeg')" }}
          className="absolute inset-x-[-5%] inset-y-[-5%] w-[110%] h-[110%] bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-30 origin-center"
        />
        {/* Futuristic inner shadow and overlays */}
        <div className="absolute inset-0 bg-background/60 dark:bg-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

        {/* Inner glow effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.9)] dark:shadow-[inset_0_0_200px_rgba(0,0,0,1)] z-10 pointer-events-none" />

        {/* Holographic frame */}
        <div className="absolute inset-4 md:inset-8 border border-primary/30 dark:border-primary/20 rounded-md shadow-[inset_0_0_50px_rgba(0,112,243,0.05)] dark:shadow-[inset_0_0_50px_rgba(0,240,255,0.05)] z-10 pointer-events-none" />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-10" />
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 border-t-2 border-r-2 border-primary/50 z-10" />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 border-b-2 border-l-2 border-primary/50 z-10" />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-10" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-primary-glow rounded-full blur-[150px] opacity-20 pointer-events-none z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="max-w-4xl mx-auto text-center z-20"
      >
        <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-8 rounded-sm bg-surface-alt border border-border text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
          <div className="w-2 h-2 rounded-none bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span>{ui.heroSystemStatus}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground uppercase">
          {data.personalInfo.name} <br />
          <span className="text-primary text-3xl md:text-5xl mt-2 block tracking-widest">
            {data.personalInfo.title}
          </span>
        </h1>

        <p className="text-sm md:text-base font-mono tracking-wide text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed uppercase">
          {data.personalInfo.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <a href="#projects" className="bg-primary text-white dark:text-black font-bold text-[10px] px-8 py-3 rounded-sm uppercase tracking-widest hover:bg-black dark:hover:bg-white transition-colors">
            {ui.heroInitBtn}
          </a>

          <button className="bg-surface-alt border border-border px-8 py-3 text-[10px] rounded-sm font-bold tracking-widest hover:border-primary transition-all flex items-center gap-2 uppercase text-foreground">
            <Download size={14} />
            {ui.heroDownloadPdf}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground animate-bounce"
      >
        <span className="text-xs font-mono mb-2 uppercase tracking-widest text-primary">{ui.heroScroll}</span>
        <ChevronDown size={20} className="text-primary" />
      </motion.div>
    </section>
  );
}

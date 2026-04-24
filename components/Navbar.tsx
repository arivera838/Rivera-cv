'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { portfolioData } from '@/lib/data';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { logCustomEvent } from '@/lib/firebase';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const ui = portfolioData[lang].ui;
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  const handleNavigation = (section: string) => {
    logCustomEvent('navigate_section', { section });
  };
  
  return (
    <nav className="relative z-50 p-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-transparent border-b border-border pb-4 mx-6 mt-6">
      <div className="flex flex-col mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
          ANDRES RIVERA <span className="hidden md:inline text-primary text-sm font-mono ml-2 uppercase">/ SR. SOFTWARE ENGINEER</span>
        </h1>
        <p className="text-[10px] text-muted-foreground font-mono mt-1 tracking-widest hidden md:block">
          SYSTEM_ROOT: /DEV/PORTFOLIO
        </p>
      </div>
      <div className="flex items-center gap-4 md:gap-6 font-mono text-xs font-semibold tracking-widest text-muted-foreground">
        <button 
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="hover:text-primary transition-colors border border-border p-1.5 rounded-sm"
          title="Toggle Theme"
        >
          <Sun className="h-3.5 w-3.5 hidden dark:block" />
          <Moon className="h-3.5 w-3.5 block dark:hidden" />
        </button>
        <button onClick={toggleLang} className="hover:text-primary transition-colors uppercase border border-border px-2 py-1 rounded-sm text-[10px]">
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <a href="#projects" onClick={() => handleNavigation('projects')} className="hover:text-primary transition-colors uppercase">{ui.navProjects}</a>
        <a href="#experience" onClick={() => handleNavigation('experience')} className="hover:text-primary transition-colors uppercase">{ui.navArchives}</a>
        <a href="#blog" onClick={() => handleNavigation('blog')} className="hover:text-primary transition-colors uppercase">{ui.navInsights}</a>
      </div>
    </nav>
  );
}

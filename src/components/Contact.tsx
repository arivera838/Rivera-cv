'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { logCustomEvent } from '@/lib/firebase';

export default function Contact() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  const ui = data.ui;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    logCustomEvent('contact_form_submit', {
      name_length: formData.name.length,
      message_length: formData.message.length
    });
    // Simulate sending
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleLinkClick = (type: string) => {
    logCustomEvent('contact_link_click', { type });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-border mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-1 bg-primary mb-4"></div>
          <h2 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-tighter">[06] {ui.contactTitle}</h2>
          <p className="text-3xl font-bold text-foreground mb-6 tracking-tighter">{ui.contactSubtitle}</p>

          <div className="space-y-6">
            <a href={`mailto:${data.personalInfo.email}`} onClick={() => handleLinkClick('email')} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group tracking-widest text-[10px] font-mono">
              <div className="w-10 h-10 rounded-sm bg-surface-alt border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail size={16} />
              </div>
              <span>{data.personalInfo.email}</span>
            </a>
            
            <div className="flex items-center gap-3 pt-4">
              <a href={data.personalInfo.github} onClick={() => handleLinkClick('github')} className="w-10 h-10 rounded-sm bg-surface-alt border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white transition-all">
                <Github size={16} />
              </a>
              <a href={data.personalInfo.linkedin} onClick={() => handleLinkClick('linkedin')} className="w-10 h-10 rounded-sm bg-surface-alt border border-border flex items-center justify-center text-muted-foreground hover:text-[#0077B5] hover:border-[#0077B5] transition-all">
                <Linkedin size={16} />
              </a>
              <a href={data.personalInfo.whatsapp} onClick={() => handleLinkClick('whatsapp')} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="w-10 h-10 rounded-sm bg-surface-alt border border-border flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 rounded-sm relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10 w-full">
            <div>
              <label htmlFor="name" className="block text-[9px] font-mono text-muted-foreground tracking-widest uppercase mb-1">{ui.contactName}</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border p-3 text-[10px] font-mono focus:outline-none focus:border-primary rounded-sm transition-all focus:ring-1 focus:ring-primary/20 placeholder:text-zinc-700"
                placeholder={ui.contactPlaceholderName}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[9px] font-mono text-muted-foreground tracking-widest uppercase mb-1">{ui.contactEmail}</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border p-3 text-[10px] font-mono focus:outline-none focus:border-primary rounded-sm transition-all focus:ring-1 focus:ring-primary/20 placeholder:text-zinc-700"
                placeholder={ui.contactPlaceholderEmail}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[9px] font-mono text-muted-foreground tracking-widest uppercase mb-1">{ui.contactMessage}</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-border p-3 text-[10px] font-mono focus:outline-none focus:border-primary rounded-sm transition-all focus:ring-1 focus:ring-primary/20 resize-none placeholder:text-zinc-700"
                placeholder={ui.contactPlaceholderMessage}
              />
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-primary text-black font-bold text-[10px] py-3 rounded-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 mt-2"
            >
              {status === 'idle' ? (
                <>{ui.contactSend} <Send size={14} /></>
              ) : status === 'sending' ? (
                ui.contactSending
              ) : (
                ui.contactSent
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

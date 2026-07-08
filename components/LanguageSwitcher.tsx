'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-6 right-6 md:top-8 md:right-10 z-50 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-2 text-xs hover:bg-[#D7E2EA]/10 transition-colors"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}

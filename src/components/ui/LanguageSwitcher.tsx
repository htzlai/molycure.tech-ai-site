'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-white/5 p-1">
      <button
        onClick={() => setLanguage('zh')}
        className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
          language === 'zh'
            ? 'text-white'
            : 'text-[var(--color-text-muted)] hover:text-white'
        }`}
      >
        {language === 'zh' && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 rounded-md bg-gradient-primary"
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">中文</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
          language === 'en'
            ? 'text-white'
            : 'text-[var(--color-text-muted)] hover:text-white'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 rounded-md bg-gradient-primary"
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">English</span>
      </button>
    </div>
  );
}

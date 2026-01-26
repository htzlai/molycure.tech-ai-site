'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Language as LangType, type Translations } from '@/lib/translations';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 默认使用中文，客户端会立即更新
  const [language, setLanguageState] = useState<Language>('zh');
  const [mounted, setMounted] = useState(false);

  // 从 localStorage 读取语言设置，如果没有则根据浏览器语言设置
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage === 'zh' ? 'zh-CN' : 'en';
    } else {
      // 检测浏览器语言
      const browserLang = navigator.language.toLowerCase();
      const detectedLang: Language = browserLang.startsWith('zh') ? 'zh' : 'en';
      setLanguageState(detectedLang);
      document.documentElement.lang = detectedLang === 'zh' ? 'zh-CN' : 'en';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  };

  // 始终提供 Context，即使在服务端渲染时也使用默认值
  // 这样可以避免 hydration 不匹配的问题
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  showSelector: boolean;
  setShowSelector: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  showSelector: false,
  setShowSelector: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('pg-language') as Language | null;
    if (saved && ['es', 'en', 'pt'].includes(saved)) {
      setLanguageState(saved);
    } else {
      setShowSelector(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pg-language', lang);
    setShowSelector(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, showSelector, setShowSelector }}>
      {children}
    </LanguageContext.Provider>
  );
};

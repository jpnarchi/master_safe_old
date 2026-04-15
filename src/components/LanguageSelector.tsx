import React from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages: { code: Language; label: string; native: string; flag: string }[] = [
  { code: 'pt', label: 'Portuguese', native: 'Português', flag: '/flags/BR.webp' },
  { code: 'en', label: 'English',    native: 'English',   flag: '/flags/US.svg' },
  { code: 'es', label: 'Spanish',    native: 'Español',   flag: '/flags/ES.svg' },
];

const LanguageSelector: React.FC = () => {
  const { language, showSelector, setLanguage, setShowSelector } = useLanguage();

  if (!showSelector) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-2xl"
        style={{ border: '1px solid rgba(0,0,0,0.08)' }}
      >
        {/* Close button — only visible when a language was already chosen */}
        {language && (
          <button
            onClick={() => setShowSelector(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/shared/logos/LogoPGPRODUCTSPGBLUE.webp"
            alt="PG Glass Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Headline */}
        <h2 className="mb-1 text-center text-2xl font-bold text-[#05204B] font-montserrat">
          Select your language
        </h2>
        <p className="mb-8 text-center text-sm text-gray-500 font-montserrat">
          Seleccione su idioma &nbsp;/&nbsp; Selecione seu idioma
        </p>

        {/* Language buttons */}
        <div className="flex flex-col gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); toast.success(`Language changed to ${lang.native}`); }}
              className={`flex items-center gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-[#05204B]/30 ${
                language === lang.code
                  ? 'border-[#05204B] bg-[#05204B]/5'
                  : 'border-gray-100 bg-gray-50 hover:border-[#05204B] hover:bg-[#05204B]/5'
              }`}
            >
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-base font-bold text-[#05204B] font-montserrat">{lang.native}</p>
                <p className="text-xs text-gray-400 font-montserrat">{lang.label}</p>
              </div>
              {language === lang.code && (
                <span className="ml-auto text-xs font-bold text-[#05204B] font-montserrat">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-gray-400 font-montserrat">
          You can change this at any time
        </p>
      </div>
    </div>
  );
};

export default LanguageSelector;

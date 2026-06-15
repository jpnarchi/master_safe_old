
import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages: { code: Language; flag: string; label: string; native: string }[] = [
  { code: 'es', flag: '/flags/ES.svg', label: 'ES', native: 'Español' },
  { code: 'en', flag: '/flags/US.svg', label: 'EN', native: 'English' },
  { code: 'pt', flag: '/flags/BR.webp', label: 'PT', native: 'Português' },
];

const ft = {
  description: {
    es: 'Líder en la producción de vidrios blindados con estándares de calidad internacional.',
    en: 'A leader in the production of armored glass, built to international quality standards.',
    pt: 'Líder na produção de vidros blindados com padrões internacionais de qualidade.',
  },
  products: {
    es: 'Productos',
    en: 'Products',
    pt: 'Produtos',
  },
  standards: {
    es: 'Estándares',
    en: 'Standards',
    pt: 'Padrões',
  },
  contact: {
    es: 'Contacto',
    en: 'Contact',
    pt: 'Contato',
  },
  rights: {
    es: 'Todos los derechos reservados.',
    en: 'All rights reserved.',
    pt: 'Todos os direitos reservados.',
  },
  privacy: {
    es: 'Política de Privacidad',
    en: 'Privacy Policy',
    pt: 'Política de Privacidade',
  },
  terms: {
    es: 'Términos y Condiciones',
    en: 'Terms & Conditions',
    pt: 'Termos e Condições',
  },
  langLabel: {
    es: 'Idioma / Language:',
    en: 'Language / Idioma:',
    pt: 'Idioma / Language:',
  },
};

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const T = (obj: { es: string; en: string; pt: string }) => obj[language];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.parentElement?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className="bg-pgnavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img
              src="/about/8edefffc-7a49-492b-acc8-65267634f930.webp"
              alt="PG Products Logo"
              className="h-12 mb-4"
            />
            <p className="text-white/70 mb-4">
              {T(ft.description)}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">{T(ft.products)}</h3>
            <ul className="space-y-2">
              {["NEU", "GlassGuard", "SteelGlass", "SuperSlim", "ULTRA"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h3 className="text-lg font-bold mb-4">{T(ft.standards)}</h3>
            <ul className="space-y-2 text-white/70">
              <li>NIJ 0108.01</li>
              <li>ABNT NBR 15000</li>
              <li>CEN 1063</li>
              <li>NATO STANAG 4569</li>
              <li>NOM 142 SCFI 2000</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{T(ft.contact)}</h3>
            <p className="text-white/70 mb-2">www.pgproducts.com.br</p>
            <p className="text-white/70 mb-2">info@pgproducts.com.br</p>
            <p className="text-white/70 mb-2">+52 55 1234 5678</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} PG Products. {T(ft.rights)}
          </p>

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium border border-white/30 text-white hover:border-white transition-colors font-montserrat"
            >
              <div className="h-5 w-5 overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={currentLang.flag}
                  alt={currentLang.label}
                  className="h-full w-full object-cover"
                />
              </div>
              <span>{currentLang.label}</span>
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute bottom-full mb-2 right-0 min-w-[160px] rounded-lg border border-white/20 bg-pgnavy shadow-xl overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setDropdownOpen(false);
                      toast.success(lang.code === 'es' ? 'Idioma: Español' : lang.code === 'en' ? 'Language: English' : 'Idioma: Português');
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm font-montserrat transition-colors ${
                      language === lang.code
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="h-6 w-6 overflow-hidden rounded-full flex-shrink-0">
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span>{lang.native}</span>
                    {language === lang.code && (
                      <span className="ml-auto text-white font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{T(ft.privacy)}</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{T(ft.terms)}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

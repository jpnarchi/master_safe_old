
import { ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
];

const ft = {
  description: {
    es: 'Líder en la producción de vidrio blindado premium con tecnología europea y estándares de calidad internacional.',
    en: 'Leader in the production of premium armored glass with European technology and international quality standards.',
    pt: 'Líder na produção de vidro blindado premium com tecnologia europeia e padrões internacionais de qualidade.',
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

  return (
    <footer className="bg-pgnavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img
              src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
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

          {/* Language switcher */}
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs font-montserrat">{T(ft.langLabel)}</span>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    toast.success(lang.code === 'es' ? 'Idioma: Español' : lang.code === 'en' ? 'Language: English' : 'Idioma: Português');
                  }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium border transition-colors font-montserrat ${
                    language === lang.code
                      ? 'border-white bg-white text-pgnavy'
                      : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                  }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
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

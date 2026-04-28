import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '../contexts/LanguageContext';

const dt = {
  heroTitle: { es: "Conoce más de PG Products", en: "Learn more about PG Products", pt: "Conheça mais sobre PG Products" },
  heroDesc: {
    es: "Nuestros productos conservan una identidad que nos permite ofrecer ademas de seguridad, calidad total, es así como poseemos un ADN propio PG que traslada características diferenciadas en cada aspecto.",
    en: "Our products maintain an identity that allows us to offer, in addition to security, total quality. This is how we possess our own PG DNA that transfers differentiated characteristics in every aspect.",
    pt: "Nossos produtos conservam uma identidade que nos permite oferecer além de segurança, qualidade total. É assim que possuímos um DNA PG próprio que transfere características diferenciadas em cada aspecto."
  },
  feat1Title: { es: "Ingeniería Balística Innovadora", en: "Innovative Ballistic Engineering", pt: "Engenharia Balística Inovadora" },
  feat1Desc: { es: "Creamos formulas de cristal blindado de avanzada", en: "We create advanced armored glass formulas", pt: "Criamos fórmulas avançadas de vidro blindado" },
  feat2Title: { es: "Geometria Estable", en: "Stable Geometry", pt: "Geometria Estável" },
  feat2Desc: { es: "Producción bajo procesos de ingeniería 3D y CAD CAM de ultima generación.", en: "Production under 3D engineering and latest generation CAD CAM processes.", pt: "Produção sob processos de engenharia 3D e CAD CAM de última geração." },
  feat3Title: { es: "Estética Única", en: "Unique Aesthetics", pt: "Estética Única" },
  feat3Desc: { es: "Acabados de alta calidad acordes a las exigencias y evolución de los mercados.", en: "High quality finishes in line with market demands and evolution.", pt: "Acabamentos de alta qualidade de acordo com as exigências e evolução dos mercados." },
  feat4Title: { es: "Óptica Destacable", en: "Outstanding Optics", pt: "Óptica Destacável" },
  feat4Desc: { es: "Consistente a las reglas internacionales.", en: "Consistent with international rules.", pt: "Consistente com as regras internacionais." },
  formulacionTitle: { es: "Formulación PG", en: "PG Formulation", pt: "Formulação PG" },
  formulacionDesc: {
    es: "La composición del vidrio permite que el proyectil al impacto disminuya su fuerza y el policarbonato absorba su energía cinética y se detenga quedando encapsulado y evitando así cualquier esquirla al interior del vehículo.",
    en: "The glass composition allows the projectile on impact to reduce its force and the polycarbonate absorbs its kinetic energy and stops, remaining encapsulated, thus avoiding any fragments inside the vehicle.",
    pt: "A composição do vidro permite que o projétil ao impacto diminua sua força e o policarbonato absorva sua energia cinética e pare, ficando encapsulado, evitando assim qualquer estilhaço no interior do veículo."
  },
  rdTitle: { es: "Producto, Ingenieria & Desarrollo", en: "Product, Engineering & Development", pt: "Produto, Engenharia & Desenvolvimento" },
  rdDesc: {
    es: "En PG Products contamos con un equipo humano capacitado y experimentado en investigación y desarrollo de producto que adelanta diseño continuo de soluciones a nivel de formulación balística, nuevos materiales, mejora de procesos y composiciones para aplicaciones especiales, ademas proyectos en conjunto con reconocidos institutos y universidades.",
    en: "At PG Products we have a trained and experienced human team in product research and development that advances continuous design of solutions at the level of ballistic formulation, new materials, process improvement and compositions for special applications, as well as joint projects with renowned institutes and universities.",
    pt: "Na PG Products contamos com uma equipe capacitada e experiente em pesquisa e desenvolvimento de produto que avança no design contínuo de soluções em nível de formulação balística, novos materiais, melhoria de processos e composições para aplicações especiais, além de projetos em conjunto com renomados institutos e universidades."
  },
  portfolioTitle: { es: "Portafolio de Productos", en: "Product Portfolio", pt: "Portfólio de Produtos" },
  portfolioDesc: {
    es: "Hemos desarrollado BRG para más de 300 modelos vigentes de vehículos en todos los niveles de acuerdo a normas locales e internacionales con especificaciones y adaptaciones para aplicaciones automotriz & militar. Ademas del portafolio proveemos soluciones particulares a los mercados con nuestros productos de linea",
    en: "We have developed BRG for more than 300 current vehicle models at all levels according to local and international standards with specifications and adaptations for automotive & military applications. In addition to the portfolio we provide particular solutions to markets with our line products",
    pt: "Desenvolvemos BRG para mais de 300 modelos vigentes de veículos em todos os níveis de acordo com normas locais e internacionais com especificações e adaptações para aplicações automotiva & militar. Além do portfólio fornecemos soluções particulares aos mercados com nossos produtos de linha"
  },
  learnMore: { es: "Conocer más", en: "Learn more", pt: "Saiba mais" },
  formTitle: { es: "Protegemos tu seguridad", en: "We Protect Your Security", pt: "Protegemos sua segurança" },
  formSubtitle: {
    es: "Confía en la experiencia y calidad de un líder en seguridad automotriz.",
    en: "Trust the experience and quality of a leader in automotive security.",
    pt: "Confie na experiência e qualidade de um líder em segurança automotiva."
  },
  labelEmail: { es: "Email", en: "Email", pt: "Email" },
  labelName: { es: "Nombre", en: "Name", pt: "Nome" },
  labelMessage: { es: "Mensaje", en: "Message", pt: "Mensagem" },
  btnClose: { es: "Cerrar", en: "Close", pt: "Fechar" },
  btnSend: { es: "Enviar", en: "Send", pt: "Enviar" },
};

const getProductCards = (lang: 'es' | 'en' | 'pt') => [
  {
    title: "GlassGuard",
    img: "/Glassguard_card.webp",
    logo: "/shared/logos/new-card-logoPG-GlassGuard.svg",
    description: { es: "Vidrio premium de resistencia balística certificada", en: "Premium glass with certified ballistic resistance", pt: "Vidro premium de resistência balística certificada" }[lang],
    link: "/glassguard"
  },
  {
    title: "SuperSlim",
    img: "/Superslim_card.webp",
    logo: "/shared/logos/new-card-logo-PG-Superslim.svg",
    description: { es: "Vidrio balístico premium: más delgado, liviano y duradero", en: "Premium Ballistic Glass: Thinner, lightweight and more durable", pt: "Vidro balístico premium: mais fino, leve e durável" }[lang],
    link: "/superslim"
  },
  {
    title: "SteelGlass",
    img: "/Steelglass_card.webp",
    logo: "/shared/logos/new-card-logo-PG-SteelGlass.svg",
    description: { es: "Vidrio balístico premium con marco de acero", en: "Premium Ballistic Glass with Steel Frame", pt: "Vidro balístico premium com estrutura de aço" }[lang],
    link: "/steelglass"
  },
  {
    title: "PG NEU",
    img: "/Neu_card.webp",
    logo: "/shared/logos/PG Neu.svg",
    description: { es: "Vidrio balístico premium con resistencia extraordinaria", en: "Premium ballistic glass with remarkable resistance", pt: "Vidro balístico premium com resistência notável" }[lang],
    link: "/neu"
  },
  {
    title: "PG ULTRA",
    img: "/Ultra_card.webp",
    logo: "/shared/logos/PG Ultra.svg",
    description: { es: "Vidrio balístico premium: más delgado, liviano y duradero", en: "Premium Ballistic Glass: Thinner, lightweight and more durable", pt: "Vidro balístico premium: mais fino, leve e durável" }[lang],
    link: "/ultra"
  }
];

const PGDNAPage = () => {
  const { language } = useLanguage();
  const lang = language as 'es' | 'en' | 'pt';
  const T = (obj: { es: string; en: string; pt: string }) => obj[lang];
  const allProductCards = getProductCards(lang);

  const formulacionImg: Record<string, string> = {
    es: '/home/Vidrio-FORMULACION-PG ES.webp',
    en: '/home/Vidrio-FORMULACION PG-EN.webp',
    pt: '/home/Vidrio-FORMULACION-PG-PT.webp',
  };

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [productApi, setProductApi] = useState<any>(null);
  const [portfolioSlide, setPortfolioSlide] = useState(0);
  const [portfolioVisible, setPortfolioVisible] = useState(true);

  const portfolioImages = Array.from({ length: 13 }, (_, i) => `/pg-dna/Portafolio_Productos-${i + 1}.webp`);

  const heroSlides = [
    {
      title: T(dt.heroTitle),
      description: T(dt.heroDesc),
      image: "/about/hero_about_pg_glass@2x.webp"
    }
  ];

  useEffect(() => {
    if (!productApi) return;
    const onSelect = () => { setCurrentProductSlide(productApi.selectedScrollSnap()); };
    productApi.on('select', onSelect);
    onSelect();
    return () => { productApi.off('select', onSelect); };
  }, [productApi]);

  useEffect(() => {
    if (!productApi) return;
    const interval = setInterval(() => {
      if (productApi.canScrollNext()) { productApi.scrollNext(); } else { productApi.scrollTo(0); }
    }, 4000);
    return () => clearInterval(interval);
  }, [productApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioVisible(false);
      setTimeout(() => {
        setPortfolioSlide(prev => (prev + 1) % portfolioImages.length);
        setPortfolioVisible(true);
      }, 350);
    }, 7000);
    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroSlides[currentHeroSlide].image} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-pgnavy/80 via-pgnavy/70 to-pgnavy/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {heroSlides[currentHeroSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {heroSlides[currentHeroSlide].description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentHeroSlide(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all ${currentHeroSlide === index ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* ADN PG Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex items-center justify-center">
              <img src="/about/Adn_pg@2x.webp" alt="ADN PG Visualization" className="w-auto h-auto max-w-full" />
            </div>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img src="/shared/icons/bullet_ico 1.svg" alt="Ballistic Engineering Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">{T(dt.feat1Title)}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{T(dt.feat1Desc)}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img src="/shared/icons/geometry_ico 1.svg" alt="Stable Geometry Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">{T(dt.feat2Title)}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{T(dt.feat2Desc)}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img src="/shared/icons/finish_ico 1.svg" alt="Unique Aesthetics Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">{T(dt.feat3Title)}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{T(dt.feat3Desc)}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img src="/shared/icons/optics_ico 1.svg" alt="Outstanding Optics Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">{T(dt.feat4Title)}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{T(dt.feat4Desc)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulación PG Section */}
      <section className="relative">
        <img src={formulacionImg[language]} alt="Formulación PG" className="w-full h-auto" style={{ WebkitMaskImage: 'radial-gradient(ellipse 81% 81% at center, black 48%, transparent 88%)', maskImage: 'radial-gradient(ellipse 81% 81% at center, black 48%, transparent 88%)' }} />
        <div className="absolute left-0 right-0 p-8 md:p-16" style={{ bottom: '-21%' }}>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-6">{T(dt.formulacionTitle)}</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{T(dt.formulacionDesc)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Producto, Ingeniería & Desarrollo Section */}
      <section className="py-20 bg-white mt-56">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pgnavy mb-6">{T(dt.rdTitle)}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <img src="/about/RnD_image@2x.webp" alt="Product Development" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">{T(dt.rdDesc)}</p>
            </div>
          </div>
          <div className="flex justify-center mt-12 space-x-3">
            {[0, 1, 2].map((index) => (
              <button key={index} onClick={() => setCurrentProductSlide(index)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${currentProductSlide === index ? 'bg-pgblue' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio de Productos Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pgnavy mb-6">{T(dt.portfolioTitle)}</h2>
          <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-12 leading-relaxed">{T(dt.portfolioDesc)}</p>

          {/* Single-image carousel */}
          <div className="max-w-[920px] mx-auto">
            <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
              <img
                src={portfolioImages[portfolioSlide]}
                alt={`Portfolio ${portfolioSlide + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-350 ${portfolioVisible ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact/bg_form_contact@2x.webp" alt="Contact Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-pgnavy/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{T(dt.formTitle)}</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">{T(dt.formSubtitle)}</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">{T(dt.labelEmail)}</label>
                <Input type="email" placeholder={T(dt.labelEmail)} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white" />
              </div>
              <div>
                <label className="text-white text-sm mb-2 block">{T(dt.labelName)}</label>
                <Input type="text" placeholder={T(dt.labelName)} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white" />
              </div>
              <div>
                <label className="text-white text-sm mb-2 block">{T(dt.labelMessage)}</label>
                <Textarea placeholder={T(dt.labelMessage)} rows={4} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white resize-none" />
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-pgnavy">{T(dt.btnClose)}</Button>
                <Button className="flex-1 bg-pgblue hover:bg-pgblue/90 text-white">{T(dt.btnSend)}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGDNAPage;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollObserver from '../utils/ScrollObserver';
import { useLanguage } from '../contexts/LanguageContext';

const getTimelineData = (lang: 'es' | 'en' | 'pt') => [
  {
    year: 1998,
    title: { es: "Se Funda PG Products Barueri (SP)", en: "PG Products Barueri (SP) Founded", pt: "Fundação da PG Products Barueri (SP)" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Inicio de operaciones en São Paulo, Brasil. Establecimiento de la primera planta de producción con tecnología de vanguardia para el mercado brasileño.", en: "Start of operations in São Paulo, Brazil. Establishment of the first production plant with cutting-edge technology for the Brazilian market.", pt: "Início das operações em São Paulo, Brasil. Estabelecimento da primeira planta de produção com tecnologia de ponta para o mercado brasileiro." }[lang]
  },
  {
    year: 2000,
    title: { es: "Expansión Regional", en: "Regional Expansion", pt: "Expansão Regional" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Crecimiento en el mercado latinoamericano con nuevos clientes y certificaciones.", en: "Growth in the Latin American market with new clients and certifications.", pt: "Crescimento no mercado latino-americano com novos clientes e certificações." }[lang]
  },
  {
    year: 2004,
    title: { es: "Miembro Fundador Brasil", en: "Founding Member Brazil", pt: "Membro Fundador Brasil" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Participación activa en la industria brasileña como miembro fundador de la asociación de blindadores del país.", en: "Active participation in the Brazilian industry as a founding member of the country's armoring association.", pt: "Participação ativa na indústria brasileira como membro fundador da associação de blindadores do país." }[lang]
  },
  {
    year: 2006,
    title: { es: "Certificación NATO STANAG I y II", en: "NATO STANAG I and II Certification", pt: "Certificação NATO STANAG I e II" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Obtención de certificación militar de alta seguridad bajo los estándares internacionales NATO STANAG niveles I y II.", en: "Obtaining high-security military certification under the international NATO STANAG standards levels I and II.", pt: "Obtenção de certificação militar de alta segurança sob os padrões internacionais NATO STANAG níveis I e II." }[lang]
  },
  {
    year: 2009,
    title: { es: "Planta México en Toluca", en: "Mexico Plant in Toluca", pt: "Planta México em Toluca" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Expansión internacional con la apertura de la planta no.3 PG Products México en Toluca, fortaleciendo presencia en Norteamérica.", en: "International expansion with the opening of plant no.3 PG Products Mexico in Toluca, strengthening presence in North America.", pt: "Expansão internacional com a abertura da planta nº 3 PG Products México em Toluca, fortalecendo a presença na América do Norte." }[lang]
  },
  {
    year: 2012,
    title: { es: "Certificado BRG Brasil", en: "BRG Brazil Certification", pt: "Certificado BRG Brasil" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Certificación nacional brasileña ABNT NBR 15000, consolidando el liderazgo en el mercado de blindaje nacional.", en: "Brazilian national certification ABNT NBR 15000, consolidating leadership in the national armoring market.", pt: "Certificação nacional brasileira ABNT NBR 15000, consolidando a liderança no mercado nacional de blindagem." }[lang]
  },
  {
    year: 2015,
    title: { es: "Exportación Internacional", en: "International Export", pt: "Exportação Internacional" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Inicio de exportaciones a Argentina, Francia e Israel, expandiendo la presencia global de PG Products.", en: "Start of exports to Argentina, France and Israel, expanding the global presence of PG Products.", pt: "Início de exportações para Argentina, França e Israel, expandindo a presença global da PG Products." }[lang]
  },
  {
    year: 2019,
    title: { es: "QMS ISO 9001:2015", en: "QMS ISO 9001:2015", pt: "QMS ISO 9001:2015" }[lang],
    image: "/lovable-uploads/tchelao05_RJ.jpg",
    description: { es: "Actualización de certificaciones ISO 9001:2015, manteniendo los más altos estándares.", en: "Update of ISO 9001:2015 certifications, maintaining the highest standards.", pt: "Atualização das certificações ISO 9001:2015, mantendo os mais altos padrões." }[lang]
  }
];

const TimelineCarousel = () => {
  const { language } = useLanguage();
  const lang = language as 'es' | 'en' | 'pt';
  const timelineData = getTimelineData(lang);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = timelineData[currentIndex];

  const getVisibleYears = () => {
    const visibleCount = 8;
    const years = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % timelineData.length;
      years.push(timelineData[index].year);
    }
    return years;
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg mb-8">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-[200px] sm:h-[270px] md:h-[334px] object-cover"
          />
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-pgnavy"></div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 flex-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={goToPrevious}
                  className="text-pgnavy hover:text-pgblue transition-colors p-1"
                  aria-label="Previous year"
                >
                  <ChevronLeft size={32} />
                </button>

                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pgnavy">
                  {currentItem.year}
                </div>

                <button
                  onClick={goToNext}
                  className="text-pgnavy hover:text-pgblue transition-colors p-1"
                  aria-label="Next year"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="pt-2 flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-auto">
              {getVisibleYears().slice(1).map((year, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg md:text-xl font-light text-gray-400 mb-2">
                    {year}
                  </div>
                  <div className="w-px h-3 bg-gray-400 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ht = {
  companyTitle: { es: "PG Products como compañía", en: "PG Products as a Company", pt: "PG Products como empresa" },
  companyP1: {
    es: "Fundada en 1998 en São Paulo, PG Products® es uno de los líderes mundiales en la fabricación de cristales de protección balística con diversas aplicaciones. Ha creado la tecnología patentada SteelGlass®, un cristal laminado blindado con inserción de acero inoxidable.",
    en: "Founded in 1998 in São Paulo, PG Products® is one of the world leaders in the manufacture of ballistic protection glass with various applications. It has created the patented SteelGlass® technology, an armored laminated glass with stainless steel insertion.",
    pt: "Fundada em 1998 em São Paulo, a PG Products® é uma das líderes mundiais na fabricação de vidros de proteção balística com diversas aplicações. Criou a tecnologia patenteada SteelGlass®, um vidro laminado blindado com inserção de aço inoxidável."
  },
  companyP2: {
    es: "En 2007, la empresa pasó a formar parte del selecto grupo de cuatro proveedores globales de vidrios blindados para automóviles de los principales fabricantes alemanes. En 2008 inauguró su planta de fabricación en Norteamérica, en la ciudad de Toluca, México, para satisfacer la demanda local y la de los fabricantes alemanes.",
    en: "In 2007, the company became part of the select group of four global suppliers of armored glass for automobiles from major German manufacturers. In 2008, it opened its manufacturing plant in North America, in the city of Toluca, Mexico, to meet local demand and that of German manufacturers.",
    pt: "Em 2007, a empresa passou a fazer parte do seleto grupo de quatro fornecedores globais de vidros blindados para automóveis dos principais fabricantes alemães. Em 2008, inaugurou sua planta de fabricação na América do Norte, na cidade de Toluca, México, para atender à demanda local e à dos fabricantes alemães."
  },
  companyP3: {
    es: "Actualmente, la empresa cuenta con una completa cartera de soluciones en vidrios blindados y ha alcanzado un alto nivel en tecnología, investigando y desarrollando nuevos materiales, procesos y sistemas, y atiende, además de los segmentos automovilístico y militar, proyectos para la industria aeronáutica, naval y arquitectónica.",
    en: "Currently, the company has a complete portfolio of armored glass solutions and has reached a high level in technology, researching and developing new materials, processes and systems, serving, in addition to the automotive and military segments, projects for the aeronautical, naval and architectural industry.",
    pt: "Atualmente, a empresa conta com um portfólio completo de soluções em vidros blindados e alcançou um alto nível em tecnologia, pesquisando e desenvolvendo novos materiais, processos e sistemas, e atende, além dos segmentos automotivo e militar, projetos para a indústria aeronáutica, naval e arquitetônica."
  },
  companyP4: {
    es: "Para satisfacer las demandas y exigencias del mercado global, la empresa cuenta con una fábrica de vidrios blindados en São Paulo, en el municipio de Cotia, uno de los principales polos industriales de la capital. Diseñada con un layout que favorece una alta eficiencia en los flujos internos y en el consumo de energía, la planta de 6.200 m² está situada a 3 km de la Rodoanel, una importante vía de distribución de la producción industrial del estado de São Paulo. En el continente americano, ubicada en la ciudad de Toluca, PG Products® cuenta con otra fábrica, PG México, creada para satisfacer las demandas locales y de los fabricantes europeos.",
    en: "To meet the demands and requirements of the global market, the company has an armored glass factory in São Paulo, in the municipality of Cotia, one of the main industrial hubs of the capital. Designed with a layout that favors high efficiency in internal flows and energy consumption, the 6,200 m² plant is located 3 km from Rodoanel, an important distribution route for industrial production in the state of São Paulo. On the American continent, located in the city of Toluca, PG Products® has another factory, PG Mexico, created to meet local demands and those of European manufacturers.",
    pt: "Para atender às demandas e exigências do mercado global, a empresa conta com uma fábrica de vidros blindados em São Paulo, no município de Cotia, um dos principais polos industriais da capital. Projetada com um layout que favorece alta eficiência nos fluxos internos e no consumo de energia, a planta de 6.200 m² está situada a 3 km do Rodoanel, uma importante via de distribuição da produção industrial do estado de São Paulo. No continente americano, localizada na cidade de Toluca, a PG Products® conta com outra fábrica, a PG México, criada para atender às demandas locais e dos fabricantes europeus."
  },
  companyP5: {
    es: "La calidad de los cristales balísticos de PG Products® se somete a rigurosas pruebas para cumplir con los requisitos de los clientes, siguiendo las normas y certificaciones nacionales e internacionales. Todos los productos que se comercializan reciben un código de seguimiento, un identificador único, que permite acceder a toda la información sobre su fabricación, desarrollada previamente de acuerdo con las especificaciones de seguridad de cada nivel de blindaje.",
    en: "The quality of PG Products® ballistic glass is subjected to rigorous testing to meet customer requirements, following national and international standards and certifications. All marketed products receive a tracking code, a unique identifier, that allows access to all information about their manufacture, previously developed according to the security specifications of each armoring level.",
    pt: "A qualidade dos vidros balísticos da PG Products® é submetida a rigorosos testes para atender aos requisitos dos clientes, seguindo normas e certificações nacionais e internacionais. Todos os produtos comercializados recebem um código de rastreamento, um identificador único, que permite acessar todas as informações sobre sua fabricação, desenvolvida previamente de acordo com as especificações de segurança de cada nível de blindagem."
  },
  plantsTitle: { es: "Nuestras Plantas de Producción", en: "Our Production Plants", pt: "Nossas Plantas de Produção" },
  plantsSubtitle: {
    es: "Innovación que une continentes, precisión que define nuestra excelencia.",
    en: "Innovation that unites continents, precision that defines our excellence.",
    pt: "Inovação que une continentes, precisão que define nossa excelência."
  },
  plantsDesc: {
    es: "En PG Products desarrollamos nuestras soluciones balísticas desde dos centros estratégicos de producción: México y Brasil. Ambas plantas integran laboratorios de I+D, líneas automatizadas de laminación y control de calidad bajo normas ISO 9001:2015 y NIJ Level III-A/III.",
    en: "At PG Products we develop our ballistic solutions from two strategic production centers: Mexico and Brazil. Both plants integrate R&D laboratories, automated lamination lines and quality control under ISO 9001:2015 and NIJ Level III-A/III standards.",
    pt: "Na PG Products desenvolvemos nossas soluções balísticas a partir de dois centros estratégicos de produção: México e Brasil. Ambas as plantas integram laboratórios de P&D, linhas automatizadas de laminação e controle de qualidade sob normas ISO 9001:2015 e NIJ Level III-A/III."
  },
  mexicoDesc: {
    es: "Centro de producción y ensayos balísticos para el mercado norte y centroamericano. Tecnología avanzada, manufactura certificada y soporte técnico especializado.",
    en: "Production and ballistic testing center for the North and Central American market. Advanced technology, certified manufacturing and specialized technical support.",
    pt: "Centro de produção e ensaios balísticos para o mercado norte e centro-americano. Tecnologia avançada, manufatura certificada e suporte técnico especializado."
  },
  brasilDesc: {
    es: "Sede principal y laboratorio de innovación. Investigación, ingeniería multicapa y control de calidad de última generación.",
    en: "Headquarters and innovation laboratory. Research, multilayer engineering and state-of-the-art quality control.",
    pt: "Sede principal e laboratório de inovação. Pesquisa, engenharia multicamada e controle de qualidade de última geração."
  },
  peopleTitle: { es: "Nuestra gente", en: "Our People", pt: "Nossa Equipe" },
  peopleP1: {
    es: "En PG Products, creemos que la verdadera fortaleza de nuestra compañía no está solo en la tecnología, sino en las personas que la hacen posible.",
    en: "At PG Products, we believe that the true strength of our company lies not only in technology, but in the people who make it possible.",
    pt: "Na PG Products, acreditamos que a verdadeira força da nossa empresa não está apenas na tecnologia, mas nas pessoas que a tornam possível."
  },
  peopleP2: {
    es: "Desde ingenieros y técnicos especializados hasta diseñadores y personal operativo, todos compartimos un mismo propósito: proteger vidas a través de la excelencia. Su conocimiento, precisión y sentido de responsabilidad son el reflejo del ADN PG Products: innovación, calidad y confianza.",
    en: "From specialized engineers and technicians to designers and operational staff, we all share the same purpose: protecting lives through excellence. Their knowledge, precision and sense of responsibility reflect the PG Products DNA: innovation, quality and trust.",
    pt: "De engenheiros e técnicos especializados a designers e equipe operacional, todos compartilhamos o mesmo propósito: proteger vidas por meio da excelência. Seu conhecimento, precisão e senso de responsabilidade são o reflexo do DNA PG Products: inovação, qualidade e confiança."
  },
  journeyTitle: { es: "Nuestro Recorrido", en: "Our Journey", pt: "Nossa Trajetória" },
  journeySubtitle: {
    es: "Un viaje de dedicación, innovación continua y compromiso con la excelencia",
    en: "A journey of dedication, continuous innovation and commitment to excellence",
    pt: "Uma jornada de dedicação, inovação contínua e compromisso com a excelência"
  },
  downloadsTitle: { es: "Archivos para descargar", en: "Files to Download", pt: "Arquivos para Download" },
  download1: { es: "Brochure de productos PG Products", en: "PG Products Product Brochure", pt: "Catálogo de produtos PG Products" },
  download2: { es: "Descargue nuestro último informe anual", en: "Download our latest annual report", pt: "Baixe nosso último relatório anual" },
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

const HistoriaPage = () => {
  useScrollObserver();
  const { language } = useLanguage();
  const lang = language as 'es' | 'en' | 'pt';
  const T = (obj: { es: string; en: string; pt: string }) => obj[lang];
  const [currentSlide, setCurrentSlide] = useState(0);
  const peopleImagesCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % peopleImagesCount);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const plantMxImages = ['/ourplantmx_1.jpg', '/ourplantmx_2.jpg', '/ourplantmx_3.jpg'];
  const [currentMxSlide, setCurrentMxSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMxSlide((prev) => (prev + 1) % plantMxImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const plantBrImages = ['/ourplantbr_1.jpg', '/ourplantbr_2.jpg', '/ourplantbr_3.jpg'];
  const [currentBrSlide, setCurrentBrSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrSlide((prev) => (prev + 1) % plantBrImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src="/header_about_2026.png"
          alt="PG Products as a Company"
          className="w-full h-auto"
        />
      </section>

      {/* PG Products como compañía Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 md:p-12 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-8">
              {T(ht.companyTitle)}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {T(ht.companyP1)}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              {T(ht.companyP2)}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              {T(ht.companyP3)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {T(ht.companyP4)}
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {T(ht.companyP5)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Plantas de Producción Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-6">
              {T(ht.plantsTitle)}
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              {T(ht.plantsSubtitle)}
            </p>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              {T(ht.plantsDesc)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Brasil */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src={plantBrImages[currentBrSlide]}
                  alt="Brasil Plant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pgnavy/80"></div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-3xl font-bold text-pgnavy mb-4">Brasil</h3>
                <p className="text-gray-700 leading-relaxed">
                  {T(ht.brasilDesc)}
                </p>
              </div>
            </div>

            {/* Card México */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src={plantMxImages[currentMxSlide]}
                  alt="Mexico Plant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pgnavy/80"></div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-3xl font-bold text-pgnavy mb-4">México</h3>
                <p className="text-gray-700 leading-relaxed">
                  {T(ht.mexicoDesc)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Gente Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pgnavy mb-16">
            {T(ht.peopleTitle)}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {(() => {
                const peopleImages = [
                  '/ourpeople_1.jpg',
                  '/ourpeople_2.jpeg',
                  '/ourpeople_3.jpg',
                  '/ourpeople_4.jpg',
                ];
                return (
                  <>
                    <img
                      src={peopleImages[currentSlide]}
                      alt={`Our People ${currentSlide + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="flex justify-center mt-6 gap-3">
                      {peopleImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3.5 h-3.5 rounded-full transition-all ${
                            currentSlide === index ? 'bg-pgblue' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {T(ht.peopleP1)}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {T(ht.peopleP2)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Recorrido Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="w-full">
          <div className="text-center mb-12 px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-4">
              {T(ht.journeyTitle)}
            </h2>
            <p className="text-lg md:text-xl text-pgnavy/70 max-w-3xl mx-auto">
              {T(ht.journeySubtitle)}
            </p>
          </div>

          <TimelineCarousel />
        </div>
      </section>

      {/* Archivos para descargar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-12">
            {T(ht.downloadsTitle)}
          </h2>

          <div className="space-y-8">
            <div className="flex items-center justify-between border-t border-gray-300 pt-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-pgnavy">
                  {T(ht.download1)}
                </h3>
              </div>
              <button className="flex items-center justify-center w-16 h-16 bg-pgblue hover:bg-pgblue/90 rounded-lg transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-gray-300 pt-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-pgnavy">
                  {T(ht.download2)}
                </h3>
              </div>
              <button className="flex items-center justify-center w-16 h-16 bg-pgblue hover:bg-pgblue/90 rounded-lg transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-300 pt-2"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg_form_contact@2x.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pgnavy/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {T(ht.formTitle)}
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                {T(ht.formSubtitle)}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">{T(ht.labelEmail)}</label>
                <input
                  type="email"
                  placeholder={T(ht.labelEmail)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white rounded-lg"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">{T(ht.labelName)}</label>
                <input
                  type="text"
                  placeholder={T(ht.labelName)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white rounded-lg"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">{T(ht.labelMessage)}</label>
                <textarea
                  placeholder={T(ht.labelMessage)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white rounded-lg resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-pgnavy rounded-lg transition-colors">
                  {T(ht.btnClose)}
                </button>
                <button className="flex-1 px-6 py-3 bg-pgblue hover:bg-pgblue/90 text-white rounded-lg transition-colors">
                  {T(ht.btnSend)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoriaPage;

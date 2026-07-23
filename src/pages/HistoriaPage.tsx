import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollObserver from '../utils/ScrollObserver';
import { useLanguage } from '../contexts/LanguageContext';

const getTimelineData = (lang: 'es' | 'en' | 'pt') => [
  {
    year: 1998,
    title: { es: "Fundación en Barueri (SP)", en: "Founded in Barueri (SP)", pt: "Fundação em Barueri (SP)" }[lang],
    image: "/about/1998.webp",
    description: { es: "PG Products fue fundada en Barueri, São Paulo, Brasil.", en: "PG Products was founded in Barueri, São Paulo, Brazil.", pt: "A PG Products foi fundada em Barueri, São Paulo, Brasil." }[lang]
  },
  {
    year: 1999,
    title: { es: "Patente SteelGlass®", en: "SteelGlass® Patent", pt: "Patente SteelGlass®" }[lang],
    image: "/about/1999.webp",
    description: { es: "Patente otorgada para el vidrio blindado SteelGlass® con inserción de acero (MU7902225-1).", en: "Patent granted for SteelGlass® armored glass with steel insert (MU7902225-1).", pt: "Patente concedida para o vidro blindado SteelGlass® com inserção de aço (MU7902225-1)." }[lang]
  },
  {
    year: 2004,
    title: { es: "Reconocimiento de BMW Group", en: "BMW Group Recognition", pt: "Reconhecimento da BMW Group" }[lang],
    image: "/about/2004.webp",
    description: { es: "BMW Group reconoce la calidad y el desempeño comprobado de PG SteelGlass®.", en: "BMW Group recognizes the quality and proven performance of PG SteelGlass®.", pt: "BMW Group reconhece a qualidade e o desempenho comprovado do PG SteelGlass®." }[lang]
  },
  {
    year: 2005,
    title: { es: "Nueva Planta en Cotia", en: "New Plant in Cotia", pt: "Nova Planta em Cotia" }[lang],
    image: "/about/2005.webp",
    description: { es: "Cotia, São Paulo, Brasil (DOT #812).", en: "Cotia, São Paulo, Brazil (DOT #812).", pt: "Cotia, São Paulo, Brasil (DOT #812)." }[lang]
  },
  {
    year: 2006,
    title: { es: "Certificación NATO STANAG 4569", en: "NATO STANAG 4569 Certification", pt: "Certificação NATO STANAG 4569" }[lang],
    image: "/about/2006.webp",
    description: { es: "Certificación otorgada por Beschussamt Mellrichstadt bajo los niveles 1 y 2 de la norma NATO STANAG 4569.", en: "Certification granted by Beschussamt Mellrichstadt under NATO STANAG 4569 Levels 1 and 2.", pt: "Certificação concedida pelo Beschussamt Mellrichstadt nos níveis 1 e 2 da norma NATO STANAG 4569." }[lang]
  },
  {
    year: 2007,
    title: { es: "Primer contrato de suministro para BMW", en: "First supply contract for BMW", pt: "Primeiro contrato de fornecimento para a BMW" }[lang],
    image: "/about/2007.webp",
    description: { es: "Conquista del primer contrato OEM para el suministro de vidrios blindados originales (BRG) para el BMW X5 E70 (VR4). Certificación del Sistema de Gestión de la Calidad bajo ISO 9001:2000 por TÜV SÜD. Conquista del segundo contrato OEM de suministro para el BMW X5 Security Plus (AK47).", en: "Award of the first OEM contract to supply original ballistic glass (BRG) for the BMW X5 E70 (VR4). Quality Management System certified under ISO 9001:2000 by TÜV SÜD. Award of the second OEM supply contract for the BMW X5 Security Plus (AK47).", pt: "Conquista do primeiro contrato OEM para o fornecimento de vidros blindados originais (BRG) para o BMW X5 E70 (VR4). Certificação do Sistema de Gestão da Qualidade sob a ISO 9001:2000 pelo TÜV SÜD. Conquista do segundo contrato de fornecimento OEM para a BMW X5 Security Plus (AK47)." }[lang]
  },
  {
    year: 2008,
    title: { es: "Suministro en serie para BMW", en: "Series supply for BMW", pt: "Fornecimento em Série para BMW" }[lang],
    image: "/about/2008.webp",
    description: { es: "Inicio del suministro en serie (SOP) de vidrios blindados (BRG) para la línea de montaje del BMW X5 Security en México. Solicitud de patente del acristalamiento balístico Monoblock® (PI 0804803-7).", en: "Start of series supply (SOP) of ballistic glass (BRG) for the BMW X5 Security assembly line in Mexico. Patent filing for Monoblock® ballistic glazing (PI 0804803-7).", pt: "Início do fornecimento em série (SOP) de vidros blindados (BRG) para a linha de montagem da BMW X5 Security no México. Pedido de patente do envidraçamento balístico Monoblock® (PI 0804803-7)." }[lang]
  },
  {
    year: 2009,
    title: { es: "Inauguración de la fábrica PG México (DOT #920)", en: "Opening of PG Mexico plant (DOT #920)", pt: "Inauguração da Fábrica PG México (DOT #920)" }[lang],
    image: "/about/2009.webp",
    description: { es: "Inicio del suministro en serie (SOP) de vidrios blindados originales (OEM) para el BMW X5 Security Plus (AK47). Conquista del primer contrato de suministro para la Industria de Defensa: lanzador de cohetes ASTROS II de AVIBRAS. Equipa a las Fuerzas Armadas de Brasil, Catar, Indonesia y Malasia.", en: "Start of series supply (SOP) of original armored glass (OEM) for the BMW X5 Security Plus (AK47). Award of the first supply contract for the Defense Industry: AVIBRAS ASTROS II rocket launcher. Equipped the Armed Forces of Brazil, Qatar, Indonesia, and Malaysia.", pt: "Início do fornecimento em série (SOP) de vidros blindados originais (OEM) para o BMW X5 Security Plus (AK47). Conquista do primeiro contrato de fornecimento para a Indústria de Defesa: lançador de foguetes ASTROS II da AVIBRAS. Equipa as Forças Armadas do Brasil, Catar, Indonésia e Malásia." }[lang]
  },
  {
    year: 2010,
    title: { es: "Certificación ISO 9001:2008", en: "ISO 9001:2008 Certification", pt: "Certificação ISO 9001:2008" }[lang],
    image: "/about/2010.webp",
    description: { es: "PG México obtiene la certificación ISO 9001:2008 por TÜV SÜD.", en: "PG Mexico obtains ISO 9001:2008 certification by TÜV SÜD.", pt: "A PG México obtém a certificação ISO 9001:2008 pela TÜV SÜD." }[lang]
  },
  {
    year: 2011,
    title: { es: "Norma ABNT NBR 15000", en: "ABNT NBR 15000 Standard", pt: "Norma ABNT NBR 15000" }[lang],
    image: "/about/2011.webp",
    description: { es: "Contribución fundamental a la revisión de la norma brasileña ABNT NBR 15000 para vidrios blindados.", en: "Fundamental contribution to the revision of the Brazilian ballistic-resistant glass standard ABNT NBR 15000.", pt: "Contribuição fundamental para a revisão da norma brasileira ABNT NBR 15000 para vidros blindados." }[lang]
  },
  {
    year: 2013,
    title: { es: "Tercer contrato OEM con automotriz alemana", en: "Third OEM contract with German automaker", pt: "Terceiro contrato (OEM) com montadora alemã" }[lang],
    image: "/about/2013.webp",
    description: { es: "Suministro de vidrios blindados (OEM) para BMW X5 F15 (VR4 y VR6).", en: "Supply of armored glass (OEM) for BMW X5 F15 (VR4 and VR6).", pt: "Fornecimento de vidros blindados (OEM) para BMW X5 F15 (VR4 e VR6)." }[lang]
  },
  {
    year: 2014,
    title: { es: "Expansión a Nuevos Mercados", en: "Expansion into New Markets", pt: "Expansão para Novos Mercados" }[lang],
    image: "/about/2014.webp",
    description: { es: "Inicio de las exportaciones a Argentina, Francia e Italia. Por tercera vez, expositor en el Salón Internacional del Automóvil de São Paulo, Brasil.", en: "Beginning of exports to Argentina, France, and Italy. For the third time, exhibitor at the São Paulo International Auto Show, Brazil.", pt: "Início das exportações para Argentina, França e Itália. Pela 3a. vez, expositor no Salão Internacional do Automóvel de São Paulo, Brasil." }[lang]
  },
  {
    year: 2017,
    title: { es: "Innovación y Certificación ISO 9001:2015", en: "Innovation and ISO 9001:2015 Certification", pt: "Inovação e Certificação ISO 9001:2015" }[lang],
    image: "/about/2017.webp",
    description: { es: "Según la norma de la Policía Alemana, presentación en el Salón del Automóvil de Frankfurt (IAA) del vidrio antivandalismo con espesor de 11 mm. Certificación ISO 9001:2015 para los Sistemas de Gestión de la Calidad PG Products en Brasil y México.", en: "According to the German Police standard, presentation at the Frankfurt Motor Show (IAA) of the 11 mm anti-vandal glass. ISO 9001:2015 certification for PG Products Quality Management Systems in Brazil and Mexico.", pt: "Conforme norma da Polícia Alemã, apresentação no Salão do Automóvel de Frankfurt (IAA) do vidro antivandalismo com espessura de 11mm. Certificação ISO 9001:2015 para os Sistemas de Gestão da Qualidade PG Products no Brasil e no México." }[lang]
  },
  {
    year: 2020,
    title: { es: "Certificación IATF 16949", en: "IATF 16949 Certification", pt: "Certificação IATF 16949" }[lang],
    image: "/about/2020.webp",
    description: { es: "PG México obtiene certificación bajo IATF 16949, exclusiva para proveedores OEM.", en: "PG Mexico obtains certification under IATF 16949, exclusive to OEM suppliers.", pt: "A PG México obtém certificação sob a IATF 16949, exclusiva para fornecedores (OEM)." }[lang]
  },
  {
    year: 2022,
    title: { es: "Suministro para fuerzas policiales", en: "Supply for police forces", pt: "Fornecimento para forças policiais" }[lang],
    image: "/about/2022.webp",
    description: { es: "Suministro de vidrios blindados para fuerzas policiales (OSOP). Suministro de vidrios blindados para Fuerzas Especiales de Policía bajo la norma NBR 15000 Nivel III.", en: "Supply of armored glass for police forces (OSOP). Supply of armored glass for Police Special Forces under NBR 15000 Level III.", pt: "Fornecimento de vidros blindados para forças policiais (OSOP). Fornecimento de vidros blindados para Forças Especiais de Polícia sob a norma NBR 15000 Nível III." }[lang]
  },
  {
    year: 2023,
    title: { es: "Patente ERV", en: "ERV Patent", pt: "Patente ERV" }[lang],
    image: "/about/2023.webp",
    description: { es: "Patente concedida para sistemas de acristalamiento para vehículos resistentes a explosiones (ERV: Explosive Resistant Vehicle).", en: "Patent granted for glazing systems for vehicles resistant to explosions (ERV: Explosive Resistant Vehicle).", pt: "Patente concedida para sistemas de envidraçamento para veículos resistentes a explosões (ERV: Explosive Resistant Vehicle)." }[lang]
  },
  {
    year: 2024,
    title: { es: "Audi Security", en: "Audi Security", pt: "Audi Security" }[lang],
    image: "/about/2023.webp",
    description: { es: "Evolución del portafolio de soluciones blindadas de alta especificación para plataformas premium.", en: "Evolution of the portfolio of high-specification armored solutions for premium platforms.", pt: "Evolução do portfólio de soluções blindadas de alta especificação para plataformas premium." }[lang]
  },
  {
    year: 2025,
    title: { es: "Patente concedida en México", en: "Patent granted in Mexico", pt: "Patente concedida no México" }[lang],
    image: "/about/RnD_image@2x.webp",
    description: { es: "Patente concedida en México referente al inserto PBI con pernos.", en: "Patent granted in Mexico related to the PBI insert with studs.", pt: "Patente concedida no México, referente ao inserto do PBI com prisioneiros." }[lang]
  },
  {
    year: 2026,
    title: { es: "Patente concedida en Brasil", en: "Patent granted in Brazil", pt: "Patente concedida no Brasil" }[lang],
    image: "/about/RnD_image@2x.webp",
    description: { es: "Patente concedida en Brasil referente al inserto PBI con pernos.", en: "Patent granted in Brazil related to the PBI insert with studs.", pt: "Patente concedida no Brasil, referente ao inserto do PBI com prisioneiros." }[lang]
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left side - Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={goToPrevious}
                  className="text-pgnavy hover:text-pgblue transition-colors p-1"
                  aria-label="Previous year"
                >
                  <ChevronLeft size={32} />
                </button>

                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-pgnavy">
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

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {currentItem.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            <div className="relative mt-8 pt-4">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-pgnavy"></div>
              <div className="flex justify-between gap-4 overflow-x-auto pb-4">
                {getVisibleYears().slice(1).map((year, index) => (
                  <div key={index} className="text-center flex-shrink-0">
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
    </div>
  );
};

const ht = {
  companyTitle: { es: "PG Products® como compañía", en: "PG Products® as a Company", pt: "PG Products® como empresa" },
  companyP1: {
    es: "Fundada en Brasil en 1998, PG Products® es una de las compañías líderes en el desarrollo y fabricación de vidrios de protección balística para múltiples aplicaciones. Su trayectoria de innovación dio origen a la tecnología patentada SteelGlass®, una solución de cristal laminado blindado con inserción de acero inoxidable.",
    en: "Founded in Brazil in 1998, PG Products® is a global leader in the development and manufacturing of ballistic glass solutions for a wide range of applications. Its commitment to innovation led to the creation of the patented SteelGlass® technology, a laminated armored glass solution with a stainless-steel insert.",
    pt: "Fundada no Brasil em 1998, a PG Products® é uma das empresas líderes no desenvolvimento e na fabricação de vidros de proteção balística para diversas aplicações. Sua trajetória de inovação resultou na tecnologia patenteada SteelGlass®, uma solução de vidro laminado blindado com inserção de aço inoxidável."
  },
  companyP2: {
    es: "Como proveedor global de la industria automotriz, PG Products® forma parte de una selecta red de fabricantes que abastecen a marcas internacionales de primer nivel. Con operaciones en Brasil y México, la compañía atiende mercados estratégicos en las Américas y Europa.",
    en: "As a trusted supplier to the automotive industry, PG Products® is part of a select group of manufacturers serving leading international vehicle brands. With operations in Brazil and Mexico, the company supports strategic markets across the Americas and Europe.",
    pt: "Como fornecedora global da indústria automotiva, a PG Products® integra um seleto grupo de fabricantes que atendem marcas internacionais de referência. Com operações no Brasil e no México, a empresa atende mercados estratégicos nas Américas e na Europa."
  },
  companyP3: {
    es: "Actualmente, PG Products® ofrece un portafolio integral de soluciones en vidrio blindado, respaldado por investigación continua, desarrollo tecnológico y altos estándares de calidad. Sus productos y sistemas están presentes en los sectores automotriz, militar, aeronáutico, naval y arquitectónico.",
    en: "Today, PG Products® offers a comprehensive portfolio of ballistic glass solutions backed by continuous research, technological innovation, and rigorous quality standards. Its products and systems serve the automotive, military, aerospace, marine, and architectural sectors worldwide.",
    pt: "Atualmente, a PG Products® oferece um portfólio completo de soluções em vidros blindados, respaldado por pesquisa contínua, desenvolvimento tecnológico e elevados padrões de qualidade. Seus produtos e sistemas estão presentes nos setores automotivo, militar, aeronáutico, naval e arquitetônico."
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
  plantsTitle: { es: "Fábricas", en: "Factories", pt: "Fábricas" },
  plantsSubtitle: {
    es: "Innovación que une continentes, precisión que define nuestra excelencia.",
    en: "Innovation that unites continents, precision that defines our excellence.",
    pt: "Inovação que une continentes, precisão que define nossa excelência."
  },
  plantsDesc: {
    es: "En PG Products® desarrollamos soluciones balísticas a partir de dos centros estratégicos, Brasil y México. Ambas plantas integran laboratorios de investigación y desarrollo, líneas automatizadas y Sistemas de Gestión de la Calidad (SGQ) certificados bajo la norma ISO 9001.",
    en: "At PG Products® we develop ballistic solutions from two strategic centers, Brazil and Mexico. Both plants integrate research and development laboratories, automated lines, and Quality Management Systems (QMS) certified under ISO 9001.",
    pt: "Na PG Products® desenvolvemos soluções balísticas a partir de dois centros estratégicos, Brasil e México. Ambas as plantas integram laboratórios de pesquisa e desenvolvimento, linhas automatizadas e os Sistemas de Gestão da Qualidade (SGQ) certificados sob a norma ISO 9001."
  },
  mexicoDesc: {
    es: "Actuamos en desarrollo, ensayos balísticos y fabricación. Nuestra estructura robusta une tecnología de punta y soporte técnico especializado para atender las demandas más exigentes del mercado.",
    en: "We operate in development, ballistic testing, and manufacturing. Our robust structure combines cutting-edge technology and specialized technical support to meet the market's most demanding requirements.",
    pt: "Atuamos no desenvolvimento, ensaios balísticos e fabricação. Nossa estrutura robusta une tecnologia de ponta e suporte técnico especializado para atender às demandas mais exigentes do mercado."
  },
  brasilDesc: {
    es: "Combinamos tecnología de punta, procesos certificados internacionales y soporte técnico especializado para garantizar la máxima seguridad y confiabilidad en cada proyecto.",
    en: "We combine cutting-edge technology, internationally certified processes, and specialized technical support to ensure maximum safety and reliability in every project.",
    pt: "Combinamos tecnologia de ponta, processos certificados internacionais e suporte técnico especializado para garantir a máxima segurança e confiabilidade em cada projeto."
  },
  peopleTitle: { es: "Equipo PG", en: "Team PG", pt: "Equipe PG" },
  peopleP1: {
    es: "Más que tecnología, la verdadera fuerza de PG Products® está en las personas.",
    en: "More than technology, the true strength of PG Products® lies in its people.",
    pt: "Mais do que tecnologia, a verdadeira força da PG Products® está nas pessoas."
  },
  peopleP2: {
    es: "El equipo formado por ingenieros, técnicos especializados y profesionales operativos trabaja unido por un único propósito: proteger vidas con excelencia. El conocimiento técnico, la precisión y el sentido de responsabilidad de cada uno moldean el ADN de PG Products®: innovación, calidad y confianza.",
    en: "The team of engineers, specialized technicians, and operational professionals works together with a single purpose: protecting lives with excellence. The technical knowledge, precision, and sense of responsibility of each person shape PG Products®' DNA: innovation, quality, and trust.",
    pt: "A equipe formada por engenheiros, técnicos especializados e profissionais operacionais trabalha unida por um único propósito: Proteger vidas com excelência. É o conhecimento técnico, a precisão e o senso de responsabilidade de cada um que moldam o DNA da PG Products®: inovação, qualidade e confiança."
  },
  journeyTitle: { es: "Trayectoria", en: "Journey", pt: "Trajetória" },
  journeySubtitle: {
    es: "Un viaje de dedicación, innovación continua y compromiso con la excelencia",
    en: "A journey of dedication, continuous innovation and commitment to excellence",
    pt: "Uma jornada de dedicação, inovação contínua e compromisso com a excelência"
  },
  downloadsTitle: { es: "Archivos para descargar", en: "Files to Download", pt: "Arquivos para Download" },
  download1: { es: "Carta patente SteelGlass®", en: "SteelGlass® Patent Letter", pt: "Carta patente SteelGlass®" },
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

  const plantMxImages = ['/about/ourplantmx_1.webp', '/about/ourplantmx_2.webp', '/about/ourplantmx_3.webp'];
  const [currentMxSlide, setCurrentMxSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMxSlide((prev) => (prev + 1) % plantMxImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const plantBrImages = ['/about/IMG_4473.webp', '/about/ourplantbr-1.webp', '/about/ourplantbr-2.webp'];
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
      <section className="relative w-full h-[75vh]">
        <img
          src="/about/finalheroaboutuspage.webp"
          alt="PG Products® as a Company"
          className="w-full h-full object-cover"
        />
      </section>

      {/* PG Products® como compañía Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 md:p-12 shadow-lg text-center">
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
                  '/about/ourpeople_1.webp',
                  '/about/ourpeople_2.webp',
                  '/about/ourpeople_3.webp',
                  '/about/ourpeople_4.webp',
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
              <a
                href="/downloads/Carta-Patente-PG-Products.pdf"
                download
                className="flex items-center justify-center w-16 h-16 bg-pgblue hover:bg-pgblue/90 rounded-lg transition-colors"
                aria-label={T(ht.download1)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="border-t border-gray-300 pt-2"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoriaPage;

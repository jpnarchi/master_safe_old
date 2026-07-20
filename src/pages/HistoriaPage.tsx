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
    description: { es: "Patente otorgada para el vidrio blindado SteelGlass® con inserción de acero integrada (MU7902225-1), concedida en 2012.", en: "Patent granted for SteelGlass® armored glass with integrated steel insert (MU7902225-1), awarded in 2012.", pt: "Patente concedida para o vidro blindado SteelGlass® com inserção de aço integrada (MU7902225-1), concedida em 2012." }[lang]
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
    description: { es: "Nueva planta en Cotia, São Paulo, Brasil (DOT #812).", en: "New manufacturing facility in Cotia, São Paulo, Brazil (DOT #812).", pt: "Nova unidade em Cotia, São Paulo, Brasil (DOT #812)." }[lang]
  },
  {
    year: 2006,
    title: { es: "Certificación NATO STANAG 4569", en: "NATO STANAG 4569 Certification", pt: "Certificação NATO STANAG 4569" }[lang],
    image: "/about/2006.webp",
    description: { es: "Certificación otorgada por Beschussamt Mellrichstadt bajo los niveles 1 y 2 de la norma NATO STANAG 4569.", en: "Certification granted by Beschussamt Mellrichstadt under NATO STANAG 4569 Levels 1 and 2.", pt: "Certificação concedida pelo Beschussamt Mellrichstadt nos níveis 1 e 2 da norma NATO STANAG 4569." }[lang]
  },
  {
    year: 2007,
    title: { es: "Primer Contrato OEM con BMW", en: "First OEM Contract with BMW", pt: "Primeiro Contrato OEM com a BMW" }[lang],
    image: "/about/2007.webp",
    description: { es: "PG Brasil obtiene su primer contrato OEM para el suministro de vidrios blindados originales (BRG) para el BMW X5 E70 (VR4), certifica su Sistema de Gestión de Calidad bajo la norma ISO 9001:2000 por TÜV SÜD, y obtiene un segundo contrato OEM para soluciones de protección balística nivel NIJ III-A.", en: "PG Brazil secures its first OEM contract to supply original ballistic-resistant glass (BRG) for the BMW X5 E70 (VR4), certifies its Quality Management System under ISO 9001:2000 by TÜV SÜD, and secures a second OEM contract for NIJ Level III-A ballistic protection solutions.", pt: "A PG Brasil conquista seu primeiro contrato OEM para o fornecimento de vidros blindados originais (BRG) para o BMW X5 E70 (VR4), certifica seu Sistema de Gestão da Qualidade conforme a norma ISO 9001:2000 pela TÜV SÜD, e conquista um segundo contrato OEM para soluções de proteção balística nível NIJ III-A." }[lang]
  },
  {
    year: 2008,
    title: { es: "Planta de Ensamblaje en Toluca", en: "Assembly Plant in Toluca", pt: "Planta de Montagem em Toluca" }[lang],
    image: "/about/2008.webp",
    description: { es: "Inicio de producción en serie (SOP) de conjuntos de vidrio blindado (BRG) para el BMW X5 E70 (VR4) destinados a la línea de ensamblaje en México, solicitud de patente para el acristalamiento blindado Monoblock® (PI 0804803-7), y puesta en marcha de la planta de ensamblaje en Toluca, México, en solo nueve meses desde los planos de ingeniería, en cumplimiento de los requisitos de contenido local de BMW.", en: "Start of Production (SOP) of ballistic-resistant glass (BRG) assemblies for the BMW X5 E70 (VR4) assembly line in Mexico, a patent filed for the Monoblock® ballistic glazing technology (PI 0804803-7), and the commissioning of the assembly plant in Toluca, Mexico, in just nine months from engineering drawings to operation, meeting BMW's local content requirements.", pt: "Início da produção em série (SOP) de conjuntos de vidros blindados (BRG) para o BMW X5 E70 (VR4) destinados à linha de montagem no México, pedido de patente para a tecnologia de envidraçamento blindado Monoblock® (PI 0804803-7), e a colocação em operação da planta de montagem em Toluca, México, em apenas nove meses a partir dos desenhos de engenharia, atendendo aos requisitos de conteúdo local da BMW." }[lang]
  },
  {
    year: 2009,
    title: { es: "Producción en PG México", en: "Production at PG Mexico", pt: "Produção na PG México" }[lang],
    image: "/about/2009.webp",
    description: { es: "Inicio de producción en serie (SOP) de conjuntos de vidrio blindado original (BRG) para el BMW X5 E70 (VR6) desde la planta de PG México (DOT #920), y para el lanzacohetes ASTROS II de AVIBRAS, en servicio con las Fuerzas Armadas de Brasil, Indonesia, Malasia y Catar, así como para vehículos Unimog utilizados en misiones de paz de las Naciones Unidas.", en: "Start of Production (SOP) of original ballistic-resistant glass (BRG) assemblies for the BMW X5 E70 (VR6) at the PG Mexico facility (DOT #920), and for the AVIBRAS ASTROS II Rocket Launcher, deployed by the Armed Forces of Brazil, Indonesia, Malaysia, and Qatar, as well as for Unimog vehicles used in United Nations peacekeeping missions.", pt: "Início da produção em série (SOP) de conjuntos de vidros blindados originais (BRG) para o BMW X5 E70 (VR6) na planta da PG México (DOT #920), e para o lançador de foguetes ASTROS II da AVIBRAS, em operação nas Forças Armadas do Brasil, Indonésia, Malásia e Catar, bem como para veículos Unimog utilizados em missões de paz das Nações Unidas." }[lang]
  },
  {
    year: 2010,
    title: { es: "Certificación ISO 9001:2008", en: "ISO 9001:2008 Certification", pt: "Certificação ISO 9001:2008" }[lang],
    image: "/about/2010.webp",
    description: { es: "PG México obtiene la certificación ISO 9001:2008 de TÜV SÜD.", en: "PG Mexico obtains ISO 9001:2008 certification from TÜV SÜD.", pt: "A PG México obtém a certificação ISO 9001:2008 da TÜV SÜD." }[lang]
  },
  {
    year: 2011,
    title: { es: "Norma ABNT NBR 15000", en: "ABNT NBR 15000 Standard", pt: "Norma ABNT NBR 15000" }[lang],
    image: "/about/2011.webp",
    description: { es: "Contribución activa a la revisión de la norma brasileña ABNT NBR 15000 para vidrios blindados.", en: "Key contributor to the revision of the Brazilian ballistic-resistant glass standard ABNT NBR 15000.", pt: "Contribuição ativa para a revisão da norma brasileira ABNT NBR 15000 para vidros blindados." }[lang]
  },
  {
    year: 2013,
    title: { es: "Tercer Contrato OEM con BMW", en: "Third OEM Contract with BMW", pt: "Terceiro Contrato OEM com a BMW" }[lang],
    image: "/about/2013.webp",
    description: { es: "PG obtiene su tercer contrato OEM para el BMW X5 F15 (VR4 y VR6).", en: "PG secures its third OEM contract for the BMW X5 F15 (VR4 and VR6).", pt: "A PG conquista seu terceiro contrato OEM para o BMW X5 F15 (VR4 e VR6)." }[lang]
  },
  {
    year: 2014,
    title: { es: "Expansión a Nuevos Mercados", en: "Expansion into New Markets", pt: "Expansão para Novos Mercados" }[lang],
    image: "/about/2014.webp",
    description: { es: "Inicio de exportaciones a Francia, Italia y Argentina, y participación como expositor en el 28.º Salón Internacional del Automóvil de São Paulo, Brasil.", en: "Launch of exports to France, Italy, and Argentina, and participation as an exhibitor at the 28th São Paulo International Auto Show, Brazil.", pt: "Início das exportações para França, Itália e Argentina, e participação como expositora no 28º Salão Internacional do Automóvel de São Paulo, Brasil." }[lang]
  },
  {
    year: 2017,
    title: { es: "Innovación y Certificación ISO 9001:2015", en: "Innovation and ISO 9001:2015 Certification", pt: "Inovação e Certificação ISO 9001:2015" }[lang],
    image: "/about/2017.webp",
    description: { es: "Desarrollo de una solución laminada antivandalismo de 11 mm de espesor conforme a los estándares de la Policía Alemana, presentada en la IAA Frankfurt en el stand de Indikar, y certificación del Sistema de Gestión de Calidad bajo la norma ISO 9001:2015 para las plantas de PG Brasil y PG México.", en: "Development of an 11 mm anti-vandal laminate in compliance with German Police standards, showcased at IAA Frankfurt in the Indikar booth, and ISO 9001:2015 certification achieved for the PG Brazil and PG Mexico plants.", pt: "Desenvolvimento de uma solução laminada antivandalismo com 11 mm de espessura, conforme os padrões da Polícia Alemã, apresentada na IAA Frankfurt no estande da Indikar, e certificação do Sistema de Gestão da Qualidade conforme a norma ISO 9001:2015 para as plantas da PG Brasil e PG México." }[lang]
  },
  {
    year: 2020,
    title: { es: "Certificación IATF 16949", en: "IATF 16949 Certification", pt: "Certificação IATF 16949" }[lang],
    image: "/about/2020.webp",
    description: { es: "PG México obtiene la certificación IATF 16949.", en: "PG Mexico achieves IATF 16949 certification.", pt: "A PG México obtém a certificação IATF 16949." }[lang]
  },
  {
    year: 2022,
    title: { es: "Soluciones Balísticas ZEUS-Mike", en: "ZEUS-Mike Ballistic Solutions", pt: "Soluções Balísticas ZEUS-Mike" }[lang],
    image: "/about/2022.webp",
    description: { es: "Suministro de soluciones balísticas para Fuerzas Especiales de Policía conforme a la norma NATO STANAG 4569 Nivel I (Turquía) – ZEUS-Mike.", en: "Supply of ballistic protection solutions for Police Special Forces in compliance with NATO STANAG 4569 Level I (Turkey) – ZEUS-Mike.", pt: "Fornecimento de soluções balísticas para Forças Especiais de Polícia sob a norma NATO STANAG 4569 Nível I (Turquia) – ZEUS-Mike." }[lang]
  },
  {
    year: 2023,
    title: { es: "Patente ERV", en: "ERV Patent", pt: "Patente ERV" }[lang],
    image: "/about/2023.webp",
    description: { es: "Patente concedida para sistemas de acristalamiento para vehículos resistentes a explosiones (ERV).", en: "Patent granted for glazing systems for Explosive Resistant Vehicles (ERV).", pt: "Patente concedida para sistemas de envidraçamento para veículos resistentes a explosões (ERV)." }[lang]
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
    es: "Como proveedor global de la industria automotriz, PG Products® forma parte de una selecta red de fabricantes que abastecen a marcas internacionales de primer nivel. Con operaciones en Brasil y México, la compañía atiende mercados estratégicos en América y el resto del mundo.",
    en: "As a trusted supplier to the automotive industry, PG Products® is part of a select group of manufacturers serving leading international vehicle brands. With operations in Brazil and Mexico, the company supports strategic markets across the Americas and beyond.",
    pt: "Como fornecedora global da indústria automotiva, a PG Products® integra um seleto grupo de fabricantes que atendem marcas internacionais de referência. Com operações no Brasil e no México, a empresa atende mercados estratégicos nas Américas e em outras regiões do mundo."
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
  plantsTitle: { es: "Nuestras Fábricas", en: "Our Factories", pt: "Nossas Fábricas" },
  plantsSubtitle: {
    es: "Innovación que une continentes, precisión que define nuestra excelencia.",
    en: "Innovation that unites continents, precision that defines our excellence.",
    pt: "Inovação que une continentes, precisão que define nossa excelência."
  },
  plantsDesc: {
    es: "En PG Products® desarrollamos nuestras soluciones balísticas desde dos centros estratégicos de producción: Brasil y México. Ambas plantas integran laboratorios de I+D, líneas automatizadas de laminación y un Sistema de Gestión de Calidad (SGQ) certificado bajo normas ISO 9001:2015.",
    en: "At PG Products® we develop our ballistic solutions from two strategic production centers: Brazil and Mexico. Both plants integrate R&D laboratories, automated lamination lines and a Quality Management System (QMS) certified under ISO 9001:2015 standards.",
    pt: "Na PG Products® desenvolvemos nossas soluções balísticas a partir de dois centros estratégicos de produção: Brasil e México. Ambas as plantas integram laboratórios de P&D, linhas automatizadas de laminação e um Sistema de Gestão da Qualidade (SGQ) certificado pelas normas ISO 9001:2015."
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
  peopleTitle: { es: "Equipo PG", en: "Team PG", pt: "Equipe PG" },
  peopleP1: {
    es: "En PG Products®, creemos que la verdadera fortaleza de nuestra compañía no está solo en la tecnología, sino en las personas que la hacen posible.",
    en: "At PG Products®, we believe that the true strength of our company lies not only in technology, but in the people who make it possible.",
    pt: "Na PG Products®, acreditamos que a verdadeira força da nossa empresa não está apenas na tecnologia, mas nas pessoas que a tornam possível."
  },
  peopleP2: {
    es: "Desde ingenieros y técnicos especializados hasta diseñadores y personal operativo, todos compartimos un mismo propósito: proteger vidas a través de la excelencia. Su conocimiento, precisión y sentido de responsabilidad son el reflejo del ADN PG Products®: innovación, calidad y confianza.",
    en: "From specialized engineers and technicians to designers and operational staff, we all share the same purpose: protecting lives through excellence. Their knowledge, precision and sense of responsibility reflect the PG Products® DNA: innovation, quality and trust.",
    pt: "De engenheiros e técnicos especializados a designers e equipe operacional, todos compartilhamos o mesmo propósito: proteger vidas por meio da excelência. Seu conhecimento, precisão e senso de responsabilidade são o reflexo do DNA PG Products®: inovação, qualidade e confiança."
  },
  journeyTitle: { es: "Nuestro Recorrido", en: "Our Journey", pt: "Nossa Trajetória" },
  journeySubtitle: {
    es: "Un viaje de dedicación, innovación continua y compromiso con la excelencia",
    en: "A journey of dedication, continuous innovation and commitment to excellence",
    pt: "Uma jornada de dedicação, inovação contínua e compromisso com a excelência"
  },
  downloadsTitle: { es: "Archivos para descargar", en: "Files to Download", pt: "Arquivos para Download" },
  download1: { es: "Catálogo de Productos", en: "Products Catalogue", pt: "Catálogo de Produtos" },
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

  const plantBrImages = ['/about/ourplantbr-1.webp', '/about/ourplantbr-2.webp', '/about/ourplantbr-3.webp'];
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

      <Footer />
    </div>
  );
};

export default HistoriaPage;

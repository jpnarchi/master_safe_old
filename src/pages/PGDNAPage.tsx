import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Product cards data
const allProductCards = [
  {
    title: "GlassGuard",
    img: "/Glassguard_card.png",
    logo: "/new-card-logoPG-GlassGuard.svg",
    description: "Vidrio premium de resistencia balística certificada",
    link: "/glassguard"
  },
  {
    title: "SuperSlim",
    img: "/Superslim_card.png",
    logo: "/new-card-logo-PG-Superslim.svg",
    description: "Premium Ballistic Glass: Thinner, lightweight and more durable",
    link: "/superslim"
  },
  {
    title: "SteelGlass",
    img: "/Steelglass_card.png",
    logo: "/new-card-logo-PG-SteelGlass.svg",
    description: "Premium Ballistic Glass with Steel Frame",
    link: "/steelglass"
  },
  {
    title: "PG NEU",
    img: "/Neu_card.png",
    logo: "/PG Neu.svg",
    description: "Premium ballistic glass with remarkable resistance",
    link: "/neu"
  },
  {
    title: "PG ULTRA",
    img: "/Ultra_card.png",
    logo: "/PG Ultra.svg",
    description: "Premium Ballistic Glass: Thinner, lightweight and more durable",
    link: "/ultra"
  }
];

const PGDNAPage = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [productApi, setProductApi] = useState<any>(null);

  const heroSlides = [
    {
      title: "Conoce más de PG Glass",
      description: "Nuestros productos conservan una identidad que nos permite ofrecer ademas de seguridad, calidad total, es así como poseemos un ADN propio PG que traslada características diferenciadas en cada aspecto.",
      image: "/lovable-uploads/hero_about_pg_glass@2x.png"
    }
  ];

  // Carousel product dots sync
  useEffect(() => {
    if (!productApi) return;

    const onSelect = () => {
      setCurrentProductSlide(productApi.selectedScrollSnap());
    };

    productApi.on('select', onSelect);
    onSelect();

    return () => {
      productApi.off('select', onSelect);
    };
  }, [productApi]);

  // Auto-play for product carousel
  useEffect(() => {
    if (!productApi) return;

    const interval = setInterval(() => {
      if (productApi.canScrollNext()) {
        productApi.scrollNext();
      } else {
        productApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [productApi]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentHeroSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
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

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                currentHeroSlide === index ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ADN PG Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - ADN PG Image */}
            <div className="flex items-center justify-center">
              <img
                src="/lovable-uploads/Adn_pg@2x.png"
                alt="ADN PG Visualization"
                className="w-auto h-auto max-w-full"
              />
            </div>

            {/* Right side - Features */}
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src="/bullet_ico 1.svg"
                    alt="Ballistic Engineering Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">
                    Ingeniería Balística Innovadora
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Creamos formulas de cristal blindado de avanzada
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src="/geometry_ico 1.svg"
                    alt="Stable Geometry Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">
                    Geometria Estable
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Producción bajo procesos de ingeniería 3D y CAD CAM de ultima generación.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src="/finish_ico 1.svg"
                    alt="Unique Aesthetics Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">
                    Estética Única
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Acabados de alta calidad acordes a las exigencias y evolución de los mercados.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src="/optics_ico 1.svg"
                    alt="Outstanding Optics Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-3">
                    Óptica Destacable
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Consistente a las reglas internacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulación PG Section */}
      <section className="relative overflow-hidden">
        <img
          src="/lovable-uploads/bg_formulacion_pg@2x.png"
          alt="Formulación PG"
          className="w-full h-auto"
        />

        {/* Text Overlay - Bottom Left */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-6">
                Formulación PG
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                La composición del vidrio permite que el proyectil al impacto disminuya su fuerza
                y el policarbonato absorba su energía cinética y se detenga quedando encapsulado
                y evitando así cualquier esquirla al interior del vehículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Producto, Ingeniería & Desarrollo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pgnavy mb-6">
            Producto, Ingenieria & Desarrollo
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <img
                src="/RnD_image@2x.png"
                alt="Product Development"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                En PG Products contamos con un equipo humano capacitado y experimentado en
                investigación y desarrollo de producto que adelanta diseño continuo de soluciones
                a nivel de formulación balística, nuevos materiales, mejora de procesos y composiciones
                para aplicaciones especiales, ademas proyectos en conjunto con reconocidos institutos
                y universidades.
              </p>
            </div>
          </div>

          {/* Slider Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentProductSlide(index)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  currentProductSlide === index ? 'bg-pgblue' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio de Productos Section - Carousel */}
      <section className="w-full bg-white py-12 md:py-16 relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pgnavy mb-6">
            Portafolio de Productos
          </h2>

          <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-16 leading-relaxed">
            Hemos desarrollado BRG para más de 300 modelos vigentes de vehículos en todos los niveles
            de acuerdo a normas locales e internacionales con especificaciones y adaptaciones para
            aplicaciones automotriz & militar. Ademas del portafolio proveemos soluciones particulares
            a los mercados con nuestros productos de linea
          </p>

          <Carousel
            setApi={setProductApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {allProductCards.map((card, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div
                        className="relative overflow-hidden flex flex-col p-6"
                        style={{
                          backgroundImage: `url(${card.img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: '38px',
                          height: '600px'
                        }}
                      >
                        {/* Center section with logo and text */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
                          <img
                            src={card.logo}
                            alt={card.title}
                            className="max-w-[280px] w-full h-auto mb-6"
                          />
                          <p className="text-lg font-medium leading-relaxed">
                            {card.description}
                          </p>
                        </div>

                        {/* Button at bottom */}
                        <div className="text-center mt-auto mb-4">
                          <Link
                            to={card.link}
                            className="inline-flex items-center rounded-xl px-8 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
                          >
                            Conocer más
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {allProductCards.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentProductSlide === index ? 'bg-pgnavy scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => productApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Protegemos tu seguridad */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg_form_contact@2x.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pgnavy/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Protegemos tu seguridad
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Confía en la experiencia y calidad de un líder en seguridad automotriz.
              </p>
            </div>

            {/* Right side - Form */}
            <div className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Nombre</label>
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Mensaje</label>
                <Textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white resize-none"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-white text-white hover:bg-white hover:text-pgnavy"
                >
                  Cerrar
                </Button>
                <Button
                  className="flex-1 bg-pgblue hover:bg-pgblue/90 text-white"
                >
                  Enviar
                </Button>
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

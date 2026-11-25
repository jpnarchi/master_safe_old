import React from 'react';
import { Shield, Car, Gauge, AppWindow as Window, Wrench, Lock } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Puertas',
    description: 'Protegidas con secciones contra impactos de 45° y 90° a base de aramida de 13 capas y acero balístico en contra chapas.'
  },
  {
    icon: Car,
    title: 'Postes',
    description: 'Reforzados con placas de acero las cuales se colocan a medida de cada vehículo, permitiendo su adaptabilidad y que el vehículo conserve originalidad.'
  },
  {
    icon: Gauge,
    title: 'Run flats',
    description: 'Un neumático Run Flat es un neumático reforzado que permite seguir rodando durante una cierta distancia (80 km) y a una cierta velocidad (80 km/h).'
  },
  {
    icon: Window,
    title: 'Cristales',
    description: 'Utilizamos el mejor cristal blindado a nivel mundial, PG PRODUCTS con su tecnología SUPER SLIM, GLASS GUARD Y STEEL GLASS.'
  },
  {
    icon: Wrench,
    title: 'Radiador',
    description: 'Placa de acero balistico que permite recibir impactos y no comprometer el radiador.'
  },
  {
    icon: Lock,
    title: 'Pared fuego',
    description: 'Separa el motor de la cabina, se protege uniendo placas de acero balístico.'
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-24 bg-brand-green-dark">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl brand-heading text-center mb-16">
          CARACTERÍSTICAS DE SEGURIDAD
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-green-mid p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <feature.icon
                size={32}
                className="text-white mb-6"
              />
              <h3 className="text-xl brand-heading mb-4">
                {feature.title}
              </h3>
              <p className="brand-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
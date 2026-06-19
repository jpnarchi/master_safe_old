import { Car, Shield, Settings, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const PGAutomotiveSolutions = () => {
  const features = [{
    icon: Car,
    title: "Soluciones Automotrices",
    description: "Vidrios blindados para vehículos de alta gama"
  }, {
    icon: Shield,
    title: "Protección Superior",
    description: "Balística certificada para máxima seguridad"
  }, {
    icon: Settings,
    title: "Ingeniería Avanzada",
    description: "Diseño europeo de alta precisión"
  }];
  
  const products = [{
    id: "glassguard",
    title: "PG GlassGuard®",
    description: "Protección balística con visión perfecta",
    image: "/automotive/44604513-e2f1-4816-b14b-13ac8e66c935.webp"
  }, {
    id: "superslim",
    title: "PG SuperSlim®",
    description: "15% más liviano sin comprometer seguridad",
    image: "/automotive/f54c4665-4e79-445e-b553-2cefc763c386.webp"
  }, {
    id: "steelglass",
    title: "PG SteelGlass®",
    description: "Protección reforzada con acero integrado",
    image: "/automotive/c6b082b9-872f-4a46-a317-6f3b708396c8.webp"
  }, {
    id: "ultra",
    title: "PG Ultra®",
    description: "Máxima protección para amenazas extremas",
    image: "/automotive/8cd08f36-dc67-46f9-99b5-b79a9a5caf2a.webp"
  }, {
    id: "neu",
    title: "PG NEU®",
    description: "Nueva generación de vidrio blindado premium",
    image: "/products/neu/neu.webp"
  }];
  
  return <section id="automotive" className="py-20 bg-white relative">
      {/* Fondo con imagen */}
    </section>;
};
export default PGAutomotiveSolutions;

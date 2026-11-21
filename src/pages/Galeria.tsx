import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const images = [
  {
    url: '/burban.jpeg',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_4561.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_4525.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_2739.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_2414.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_1531.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_2753.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_1551.JPG',
    title: 'Master Safe Armoring'
  },
  {
    url: '/IMG_2263.JPG',
    title: 'Master Safe Armoring'
  }
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        <div className="container mx-auto px-8 py-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-brand-green-dark/0 group-hover:bg-brand-green-dark/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-2xl font-light tracking-wider">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-brand-green-dark/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:opacity-75 transition-opacity"
          >
            <X size={32} />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
          <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl font-light tracking-wider">
            {images[selectedImage].title}
          </h3>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;
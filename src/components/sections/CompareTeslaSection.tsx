import React from "react";

const teslaRed = "/home/vidrios-home.png";
const teslaGray = "/military/vidrio_disparos.avif";

const CompareTeslaSection = () => {
  return (
    <section className="max-w-[85rem] mx-auto bg-white py-0">
      <div className="max-w-[90rem] mx-auto px-4 flex flex-col md:flex-row gap-6 items-stretch">
        {/* First Panel */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg shadow p-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">GlassGuard</h3>
              <p className="text-gray-600 mb-4">Find the Tesla vehicle that's right for you</p>
              <button className="w-full md:w-auto px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition">Compare Models</button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={teslaRed} alt="Red Tesla" className="w-full max-w-xs h-auto object-contain" />
            </div>
          </div>
        </div>
        
        {/* Second Panel */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg shadow p-8 relative overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="w-full z-10 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Calidad Premium</h3>
              <p className="text-gray-600 mb-4">
                Special purchase program for military,<br />
                first responder, teacher and student
              </p>
              <button className="w-full md:w-auto px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition">Learn More</button>
            </div>
            <div className="w-full md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
              <img src={teslaGray} alt="Gray Tesla" className="w-full h-48 md:h-full object-cover object-center md:object-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareTeslaSection;


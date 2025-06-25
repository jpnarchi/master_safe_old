import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
// import CompareTeslaSection from "../components/sections/CompareTeslaSection";
import PGAutomotiveSolutions from "../components/sections/PGAutomotiveSolutions";
import AboutPGGlass from "../components/sections/AboutPGGlass";
import PGBallistics from "../components/sections/PGBallistics";
// import Segments from "../components/sections/Segments";
import AboutUs from "../components/sections/AboutUs";
import Footer from "../components/Footer";
import useScrollObserver from "../utils/ScrollObserver";

const Index = () => {
  useScrollObserver();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection title="" />
      <AboutPGGlass />
      {/* <CompareTeslaSection /> */}
      {/* <PGAutomotiveSolutions /> */}
      {/* <PGBallistics /> */}
      {/* <Segments /> */}
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
};

export default Index;

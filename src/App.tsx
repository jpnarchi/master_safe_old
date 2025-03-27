
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NeuPage from "./pages/NeuPage";
import GlassGuardPage from "./pages/GlassGuardPage";
import SteelGlassPage from "./pages/SteelGlassPage";
import SuperSlimPage from "./pages/SuperSlimPage";
import UltraPage from "./pages/UltraPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  // Initialize QueryClient inside the component
  const queryClient = new QueryClient();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Preload critical assets and all images
    const preloadImages = () => {
      // Add a minimum delay to ensure loading screen is visible
      const minDelay = new Promise(resolve => setTimeout(resolve, 2000));
      
      // Find all images in the document that need to be loaded
      const loadAllImages = new Promise(resolve => {
        // Function to check if all images are loaded
        const checkImagesLoaded = () => {
          // If document is fully loaded, then proceed
          if (document.readyState === 'complete') {
            // Add a small buffer to ensure transitions are smooth
            setTimeout(() => resolve(true), 500);
          } else {
            // Check again after a short delay
            setTimeout(checkImagesLoaded, 100);
          }
        };
        
        // Start checking
        checkImagesLoaded();
      });
      
      // Wait for both minimum delay and all images to load
      Promise.all([minDelay, loadAllImages])
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          // Fallback in case of any errors
          setTimeout(() => setIsLoading(false), 3000);
        });
    };
    
    preloadImages();
    
    return () => {
      // Clean up event listeners if component unmounts
      window.removeEventListener('load', () => {});
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen />
        <div className={isLoading ? 'invisible' : 'visible'}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/neu" element={<NeuPage />} />
              <Route path="/glassguard" element={<GlassGuardPage />} />
              <Route path="/steelglass" element={<SteelGlassPage />} />
              <Route path="/superslim" element={<SuperSlimPage />} />
              <Route path="/ultra" element={<UltraPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

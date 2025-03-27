
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
    // Preload critical assets
    const preloadImages = () => {
      // Add a minimum delay to ensure loading screen is visible
      const minDelay = new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle actual document loading
      const documentLoaded = new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve(true);
        } else {
          window.addEventListener('load', () => resolve(true), { once: true });
        }
      });
      
      // Wait for both minimum delay and document loading
      Promise.all([minDelay, documentLoaded])
        .then(() => {
          setTimeout(() => setIsLoading(false), 100);
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

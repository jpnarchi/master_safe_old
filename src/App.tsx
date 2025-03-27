
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
    // Check if all assets are loaded
    window.addEventListener('load', () => {
      // Add a minimum delay to show the loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
    
    // Fallback in case the load event already fired
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    
    return () => {
      window.removeEventListener('load', () => {
        setIsLoading(false);
      });
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <LoadingScreen />}
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

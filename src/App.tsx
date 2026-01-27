import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NeuPage from "./pages/NeuPage";
import GlassGuardPage from "./pages/GlassGuardPage";
import SteelGlassPage from "./pages/SteelGlassPage";
import SuperSlimPage from "./pages/SuperSlimPage";
import UltraPage from "./pages/UltraPage";
import ContactPage from "./pages/ContactPage";
import HistoriaPage from "./pages/HistoriaPage";
import PGAutomotivePage from "./pages/PGAutomotivePage";
import PGMilitaryPage from "./pages/PGMilitaryPage";
import PGArchitecturalPage from "./pages/PGArchitecturalPage";
import PGBallisticsPage from "./pages/PGBallisticsPage";
import PGDNAPage from "./pages/PGDNAPage";

// Component to handle page transitions and loading
const PageContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <>
      <LoadingScreen isLoading={isLoading} enabled={false} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/neu" element={<NeuPage />} />
        <Route path="/glassguard" element={<GlassGuardPage />} />
        <Route path="/steelglass" element={<SteelGlassPage />} />
        <Route path="/superslim" element={<SuperSlimPage />} />
        <Route path="/ultra" element={<UltraPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/pg-automotive" element={<PGAutomotivePage />} />
        <Route path="/pg-military" element={<PGMilitaryPage />} />
        <Route path="/pg-architectural" element={<PGArchitecturalPage />} />
        <Route path="/pg-ballistics" element={<PGBallisticsPage />} />
        <Route path="/pg-dna" element={<PGDNAPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageContainer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import Benefits from "./pages/Benefits";
import HowTo from "./pages/HowTo";
import Timer from "./pages/Timer";
import Excuses from "./pages/Excuses";
import NoSleep from "./pages/NoSleep";
import NotFound from "./pages/NotFound";
import { trackPageView } from "./lib/analytics";

const queryClient = new QueryClient();

// Компонент для отслеживания навигации
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/excuses" element={<Excuses />} />
          <Route path="/no-sleep" element={<NoSleep />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

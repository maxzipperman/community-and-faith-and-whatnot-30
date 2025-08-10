import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProfessionalServices from "./pages/ProfessionalServices";
import LocalBusinesses from "./pages/LocalBusinesses";
import Nonprofits from "./pages/Nonprofits";
import Creatives from "./pages/Creatives";
import Lawyers from "./pages/lawyers";
import Accountants from "./pages/accountants";
import Consultants from "./pages/consultants";
import Portfolio from "./pages/Portfolio";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Faith from "./pages/Faith";
import Schools from "./pages/Schools";
import YouthSports from "./pages/YouthSports";
import Community from "./pages/Community";
import ArtsCulture from "./pages/ArtsCulture";
import ParksRec from "./pages/ParksRec";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* Industry Pages */}
            <Route path="/professional-services" element={<ProfessionalServices />} />
            <Route path="/local-businesses" element={<LocalBusinesses />} />
            <Route path="/nonprofits" element={<Nonprofits />} />
            <Route path="/creatives" element={<Creatives />} />
            {/* Community-Focused Industry Pages */}
            <Route path="/faith" element={<Faith />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/youth-sports" element={<YouthSports />} />
            <Route path="/community" element={<Community />} />
            <Route path="/arts-culture" element={<ArtsCulture />} />
            <Route path="/parks-rec" element={<ParksRec />} />
            
            {/* Niche Landing Pages */}
            <Route path="/lawyers" element={<Lawyers />} />
            <Route path="/accountants" element={<Accountants />} />
            <Route path="/consultants" element={<Consultants />} />
            
            {/* Vanity URL Redirects */}
            <Route path="/law-firms" element={<Navigate to="/lawyers" replace />} />
            <Route path="/therapists" element={<Navigate to="/professional-services" replace />} />
            <Route path="/restaurants" element={<Navigate to="/local-businesses" replace />} />
            <Route path="/retailers" element={<Navigate to="/local-businesses" replace />} />
            <Route path="/service-providers" element={<Navigate to="/local-businesses" replace />} />
            <Route path="/charities" element={<Navigate to="/nonprofits" replace />} />
            <Route path="/foundations" element={<Navigate to="/nonprofits" replace />} />
            <Route path="/ngo" element={<Navigate to="/nonprofits" replace />} />
            <Route path="/artists" element={<Navigate to="/creatives" replace />} />
            <Route path="/designers" element={<Navigate to="/creatives" replace />} />
            <Route path="/photographers" element={<Navigate to="/creatives" replace />} />
            <Route path="/agencies" element={<Navigate to="/creatives" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

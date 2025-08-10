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
import About from "./pages/About";
import Resources from "./pages/Resources";
import AIFeedback from "./pages/AIFeedback";
import FAQ from "./pages/FAQ";
import FaithReligious from "./pages/serve/FaithReligious";
import K12PTAs from "./pages/serve/K12PTAs";
import YouthSportsServe from "./pages/serve/YouthSports";
import CommunityNonprofits from "./pages/serve/CommunityNonprofits";
import ArtsCultureServe from "./pages/serve/ArtsCulture";
import ParksRecServe from "./pages/serve/ParksRec";
import CampsServe from "./pages/serve/Camps";
import Payments from "./pages/Payments";

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
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ai-feedback" element={<AIFeedback />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Industry Pages */}
            <Route path="/professional-services" element={<ProfessionalServices />} />
            <Route path="/local-businesses" element={<LocalBusinesses />} />
            <Route path="/nonprofits" element={<Nonprofits />} />
            <Route path="/creatives" element={<Creatives />} />
            
            {/* New Serve Routes */}
            <Route path="/serve/faith-religious" element={<FaithReligious />} />
            <Route path="/serve/k12-ptas" element={<K12PTAs />} />
            <Route path="/serve/youth-sports" element={<YouthSportsServe />} />
            <Route path="/serve/community-nonprofits" element={<CommunityNonprofits />} />
            <Route path="/serve/arts-culture" element={<ArtsCultureServe />} />
            <Route path="/serve/parks-rec" element={<ParksRecServe />} />
            <Route path="/serve/camps" element={<CampsServe />} />
            <Route path="/payments" element={<Payments />} />
            
            {/* Niche Landing Pages */}
            <Route path="/lawyers" element={<Lawyers />} />
            <Route path="/accountants" element={<Accountants />} />
            <Route path="/consultants" element={<Consultants />} />
            
            {/* Legacy Redirects to New Serve Routes */}
            <Route path="/faith" element={<Navigate to="/serve/faith-religious" replace />} />
            <Route path="/schools" element={<Navigate to="/serve/k12-ptas" replace />} />
            <Route path="/youth-sports" element={<Navigate to="/serve/youth-sports" replace />} />
            <Route path="/community" element={<Navigate to="/serve/community-nonprofits" replace />} />
            <Route path="/arts-culture" element={<Navigate to="/serve/arts-culture" replace />} />
            <Route path="/parks-rec" element={<Navigate to="/serve/parks-rec" replace />} />
            <Route path="/camps" element={<Navigate to="/serve/camps" replace />} />
            
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PersonalBanking from "./pages/PersonalBanking";
import BusinessBanking from "./pages/BusinessBanking";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Help from "./pages/Help";
import HelpCategory from "./pages/HelpCategory";
import TermsOfUse from "./pages/TermsOfUse";
import TermsPolicy from "./pages/TermsPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhyRenda from "./pages/WhyRenda";
import Investors from "./pages/Investors";
import Leadership from "./pages/Leadership";
import AlfiePlatform from "./pages/AlfiePlatform";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/personal-banking" element={<PersonalBanking />} />
          <Route path="/business-banking" element={<BusinessBanking />} />
          <Route path="/why-renda" element={<WhyRenda />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/alfie-platform" element={<AlfiePlatform />} />
           <Route path="/alfie" element={<AlfiePlatform />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/:slug" element={<HelpCategory />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/terms/:slug" element={<TermsPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

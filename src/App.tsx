import { lazy, Suspense, useEffect } from "react";
import "@fontsource-variable/geist";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages are loaded on demand so each route ships as its own chunk
// instead of one large bundle for the whole site.
const Index = lazy(() => import("./pages/Index"));
const Sample = lazy(() => import("./pages/Sample"));
const Sample2 = lazy(() => import("./pages/Sample2"));
const Sample3 = lazy(() => import("./pages/Sample3"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const PersonalBanking = lazy(() => import("./pages/PersonalBanking"));
const BusinessBanking = lazy(() => import("./pages/BusinessBanking"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const Help = lazy(() => import("./pages/Help"));
const HelpCategory = lazy(() => import("./pages/HelpCategory"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const TermsPolicy = lazy(() => import("./pages/TermsPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const WhyRenda = lazy(() => import("./pages/WhyRenda"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Alfie = lazy(() => import("./pages/Alfie"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Geist header treatment applies site-wide except on the Sample
// concept pages, which keep their own typography.
function HeaderFontScope() {
  const { pathname } = useLocation();
  useEffect(() => {
    const isSample = pathname.startsWith("/sample");
    document.body.classList.toggle("geist-headers", !isSample);
    document.body.classList.toggle("route-home", pathname === "/");
    return () => {
      document.body.classList.remove("geist-headers", "route-home");
    };
  }, [pathname]);
  return null;
}

const PageFallback = () => (
  <div className="min-h-screen bg-background" aria-busy="true" aria-label="Loading page" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <HeaderFontScope />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/sample-2" element={<Sample2 />} />
            <Route path="/sample-3" element={<Sample3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/personal-banking" element={<PersonalBanking />} />
            <Route path="/business-banking" element={<BusinessBanking />} />
            <Route path="/why-renda" element={<WhyRenda />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/alfie" element={<Alfie />} />
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

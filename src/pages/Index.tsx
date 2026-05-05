import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import InvestorNotice from "@/components/landing/InvestorNotice";
import CoreBelief from "@/components/landing/CoreBelief";
import FloatingCards from "@/components/landing/FloatingCards";
import ProblemSection from "@/components/landing/ProblemSection";
import AlfieIntro from "@/components/landing/AlfieIntro";
import AlfieMockups from "@/components/landing/AlfieMockups";
import ProductCapabilities from "@/components/landing/ProductCapabilities";
import VideoBanner from "@/components/landing/VideoBanner";
import TrustSection from "@/components/landing/TrustSection";
import FAQ from "@/components/landing/FAQ";
import PartnersMarquee from "@/components/landing/PartnersMarquee";
import BeliefClose from "@/components/landing/BeliefClose";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InvestorNotice />
      <CoreBelief />
      <FloatingCards />
      <ProblemSection />
      <AlfieIntro />
      <AlfieMockups />
      <ProductCapabilities />
      <VideoBanner />
      <TrustSection />
      <FAQ />
      <BeliefClose />
      <PartnersMarquee />
      <Footer />
    </main>
  );
};

export default Index;

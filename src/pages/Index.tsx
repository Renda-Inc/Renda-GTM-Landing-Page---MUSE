import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CoreBelief from "@/components/landing/CoreBelief";
import ProblemSection from "@/components/landing/ProblemSection";
import AlfieIntro from "@/components/landing/AlfieIntro";
import ProductCapabilities from "@/components/landing/ProductCapabilities";
import TrustSection from "@/components/landing/TrustSection";
import BeliefClose from "@/components/landing/BeliefClose";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoreBelief />
      <ProblemSection />
      <AlfieIntro />
      <ProductCapabilities />
      <TrustSection />
      <BeliefClose />
      <Footer />
    </main>
  );
};

export default Index;

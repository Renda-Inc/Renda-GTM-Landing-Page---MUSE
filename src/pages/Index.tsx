import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CoreBelief from "@/components/landing/CoreBelief";
import AlfieIntro from "@/components/landing/AlfieIntro";
import ProblemSection from "@/components/landing/ProblemSection";
import Philosophy from "@/components/landing/Philosophy";
import AlfieMoat from "@/components/landing/AlfieMoat";
import SignalsOverNoise from "@/components/landing/SignalsOverNoise";
import ProductCapabilities from "@/components/landing/ProductCapabilities";
import TrustSection from "@/components/landing/TrustSection";
import FutureVision from "@/components/landing/FutureVision";
import AlfieInfrastructure from "@/components/landing/AlfieInfrastructure";
import BeliefClose from "@/components/landing/BeliefClose";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoreBelief />
      <AlfieIntro />
      <ProblemSection />
      <Philosophy />
      <AlfieMoat />
      <SignalsOverNoise />
      <ProductCapabilities />
      <TrustSection />
      <FutureVision />
      <AlfieInfrastructure />
      <BeliefClose />
      <Footer />
    </main>
  );
};

export default Index;

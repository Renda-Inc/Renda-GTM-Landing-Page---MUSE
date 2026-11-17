import "@fontsource-variable/geist";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/landing/Footer";
import FAQ from "@/components/landing/FAQ";
import FutureOfBanking from "@/components/home/FutureOfBanking";
import ProductShowcase from "@/components/home/ProductShowcase";
import BlogShowcase from "@/components/home/BlogShowcase";
import {
  Divider,
  SmartAccounts,
  ThinkAhead,
  MeetAlfie,
  DailyMoney,
  ComingSoon,
  HomeCTA,
  Pricing,
} from "@/components/home/HomeSections";

const Index = () => {
  return (
    <main
      className="home-geist-headers min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />
      <HeroSection />
      <FutureOfBanking />
      <SmartAccounts />
      <ProductShowcase />
      <ThinkAhead />
      <Divider />
      <MeetAlfie />
      <Divider />
      <DailyMoney />
      <Divider />
      <BlogShowcase />
      <Divider />
      <ComingSoon />
      <Divider />
      <FAQ />
      <HomeCTA />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
